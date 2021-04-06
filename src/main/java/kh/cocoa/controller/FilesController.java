package kh.cocoa.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.UUID;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import kh.cocoa.dto.FilesDTO;
import kh.cocoa.service.FilesService;
import kh.cocoa.statics.BoardConfigurator;
import kh.cocoa.statics.HwConfigurator;

@Controller
@RequestMapping("/files")
public class FilesController {
	@Autowired
	HttpSession session;
	
	@Autowired
	FilesService fservice;

	@RequestMapping(value="/uploadImageFile.files", produces = "application/json")
	@ResponseBody
		public String uploadImageFile(@RequestParam("file") MultipartFile multipartFile) {
			JsonObject jsonObject = new JsonObject();
			String fileRoot = HwConfigurator.hwBoardFileRoot;	//저장될 외부 파일 경로
			String originalFileName = multipartFile.getOriginalFilename();	//오리지날 파일명
			String extension = originalFileName.substring(originalFileName.lastIndexOf("."));	//파일 확장자
			String savedFileName = UUID.randomUUID() + extension;	//저장될 파일 명
			File targetFile = new File(fileRoot + savedFileName);
	
			try {
				InputStream fileStream = multipartFile.getInputStream();
				FileUtils.copyInputStreamToFile(fileStream, targetFile);	//파일 저장
				jsonObject.addProperty("url", "/summernoteImage/"+savedFileName);
				jsonObject.addProperty("responseCode", "success");	
			} catch (IOException e) {
				FileUtils.deleteQuietly(targetFile);	//저장된 파일 삭제
				jsonObject.addProperty("responseCode", "error");
				e.printStackTrace();
			}
			return new Gson().toJson(jsonObject);
		}
		
	// Hw
	
	@RequestMapping("/downloadHwFiles.files")
	public void downloadHwFiles(FilesDTO dto, HttpServletResponse resp) throws IOException {
		System.out.println("요청된 파일Seq: " + dto.getSeq());
		System.out.println("요청된 파일 SavedName: " + dto.getSavedname());

		String filePath = HwConfigurator.hwBoardFileRoot;
		File targetFile = new File(filePath + "/" + dto.getSavedname());
		// 다음 위치에 있는 파일을 파일 객체로 만든다 -> 정보를 뽑아낼 수 있게 하기 위해서
		String oriName = dto.getOriname();
		oriName = new String(oriName.getBytes("UTF-8"), "ISO-8859-1");
		if (targetFile.exists() && targetFile.isFile()) {
			resp.setContentType("application/octet-stream; charset=utf8");
			// 마치 우리가 html문서라고 명시하고 text문서를 웹브라우저에 전송하게 되면 알아서 해주는 것처럼
			// 지금 text 보내는게 아니라 파일의 내용이니까 utf-8으로 렌더링하라고 전달
			resp.setContentLength((int) targetFile.length());
			resp.setHeader("Content-Disposition", "attachment; filename=\"" +oriName+ "\"");
			// 다운로드 받을 때 컴퓨터에 저장될 이름을 설정
			FileInputStream fis = new FileInputStream(targetFile);
			ServletOutputStream sos = resp.getOutputStream();
			FileCopyUtils.copy(fis, sos);
			fis.close();
			sos.flush();
			sos.close();
		}
	}
	
	//지영씨
	   @RequestMapping("upload.files")
	   @ResponseBody
	   public String upload(@RequestParam("upload") MultipartFile upload) throws Exception{
	      String users_id = (String)session.getAttribute("login");
	      String fileRoot = BoardConfigurator.boardFileRoot;
	      String oriName = upload.getOriginalFilename(); //오리지날 파일명
	      String extension = oriName.substring(oriName.lastIndexOf(".")); //확장명
	      oriName = new String(oriName.getBytes("8859_1"),"UTF8");
	      String savedName = UUID.randomUUID() +extension;
	      InputStream fileStream = upload.getInputStream();
	      FilesDTO dto = new FilesDTO(0,oriName,savedName,null,users_id);
	      if(fservice.isExistFile(users_id)>0) {
	    	fservice.delProfileFile(dto);
	    	 //파일이 하나라도 있으면 지금 파일 제외하고 모두 삭제!
	      }
	      int result = fservice.insertUserFile(dto);
	      if(result>0) {
	         System.out.println(result);
	      }
	      File filesPath = new File(fileRoot); 
	      if(!filesPath.exists()) {filesPath.mkdir();} 
	      File targetLoc = new File(fileRoot + savedName);
	      FileUtils.copyInputStreamToFile(fileStream, targetLoc);
	      fileStream.close();
	      return "Success";
	   }


	
//	ERROR===============================================ERROR
	@ExceptionHandler
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
}
