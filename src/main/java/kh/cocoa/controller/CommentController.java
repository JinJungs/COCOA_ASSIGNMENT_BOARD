package kh.cocoa.controller;

import java.io.File;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.io.FileUtils;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import kh.cocoa.dto.CommentsDTO;
import kh.cocoa.dto.FilesDTO;
import kh.cocoa.service.CommentsService;
import kh.cocoa.service.FilesService;
import kh.cocoa.statics.BoardConfigurator;

@Controller
@RequestMapping("/comment")
public class CommentController {
	
	@Autowired
	private	CommentsService cservice;
	
	@Autowired
	private FilesService fservice;
	@Autowired
	private HttpSession session;
	
	@RequestMapping(value="getListComment.comment",  produces="application/json; charset=utf8")
	@ResponseBody
	public ResponseEntity ajax_getList(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		
		String us_id = ((String)session.getAttribute("login"));
		HttpHeaders responseHeaders = new HttpHeaders();
		ArrayList<HashMap> hmlist = new ArrayList<HashMap>();
		int getCnt = cservice.getCommnetCount(dto.getBoard_seq());
		List<CommentsDTO> list = cservice.getCommentList(dto.getBoard_seq());
		CommentsDTO authdto = new CommentsDTO();
		authdto.setWriter_id(us_id);
		int isAuthComment =0;
		getCnt+=list.size();
		String url =null;
		if(list.size()>0) {
			for(int i=0;i<list.size();i++) {
				HashMap<String,Object> hm = new HashMap();	
				authdto.setSeq(list.get(i).getSeq());
				isAuthComment=cservice.isAuthComment(authdto);
				if(fservice.isExistFile(list.get(i).getWriter_id())> 0 ) {
					FilesDTO fdto = fservice.getUserImage(list.get(i).getWriter_id());
					if(fdto.getSavedname()!=null) {
						url = "/summernoteImage/" + fdto.getSavedname();
						hm.put("imgURL",url);
					}				
				}	
				if(url==null) {
					url = "/resources/img/icon_defaultProfile.png";
					hm.put("imgURL",url);
				}
				int getChildCnt = cservice.getChildCommentCount(list.get(i).getSeq());
				if(getChildCnt>0) {
					hm.put("childCnt",getChildCnt);
				}else {
					hm.put("childCnt",0);
				}
				url =null;
				hm.put("auth",isAuthComment);
				hm.put("Cnt",getCnt);
				hm.put("seq",list.get(i).getSeq());
				hm.put("writer_id",list.get(i).getWriter_id());
				hm.put("contents",list.get(i).getContents());
				hm.put("write_date",list.get(i).getWrite_date());
				hm.put("board_seq",list.get(i).getBoard_seq());
				hmlist.add(hm);
			}
		}
		JSONArray json = new JSONArray(hmlist);
		return new ResponseEntity(json.toString(),responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value="getListCommentDepth2.comment",  produces="application/json; charset=utf8")
	@ResponseBody
	public ResponseEntity ajax_getListDepth2(String comment_seq, HttpServletRequest req) {
		HttpHeaders responseHeaders = new HttpHeaders();
		String us_id = ((String)session.getAttribute("login"));
		CommentsDTO authdto = new CommentsDTO();
		authdto.setWriter_id(us_id);
		int isAuthSubComment =0;
		int parse =Integer.parseInt(comment_seq);
		ArrayList<HashMap> hmlist = new ArrayList<HashMap>();
		List<CommentsDTO> list = cservice.getCommentListDepth2(parse);
		String url =null;
		if(list.size()>0) {
			for(int i=0;i<list.size();i++) {
				authdto.setSeq(list.get(i).getSeq());
				isAuthSubComment = cservice.isAuthSubComment(authdto);
				HashMap<String, Object> hm = new HashMap();
				if(list.get(i).getParent_seq()!=0) {
					hm.put("parent_id",cservice.getParentId(list.get(i).getParent_seq()));
				}else {
					hm.put("parent_id",cservice.getParentIdTop(list.get(i).getComment_seq()));
				}
				if(fservice.isExistFile(list.get(i).getWriter_id())> 0 ) {
					FilesDTO fdto = fservice.getUserImage(list.get(i).getWriter_id());
					if(fdto.getSavedname()!=null) {
						url = "/summernoteImage/" + fdto.getSavedname();
						hm.put("imgURL",url);
					}				
				}	
				if(url==null) {
					url = "/resources/img/icon_defaultProfile.png";
					hm.put("imgURL",url);
				}
				url=null;
				hm.put("auth",isAuthSubComment);
				hm.put("seq",list.get(i).getSeq());
				hm.put("comment_seq",list.get(i).getComment_seq());
				hm.put("writer_id",list.get(i).getWriter_id());
				hm.put("contents",list.get(i).getContents());
				hm.put("write_date",list.get(i).getWrite_date());
				hmlist.add(hm);
			}
		}
		JSONArray json = new JSONArray(hmlist);
		return new ResponseEntity(json.toString(),responseHeaders, HttpStatus.CREATED);
		
	}
	@RequestMapping(value="getModContents.comment",  produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String ajax_getModContents(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req,HttpServletResponse resp) {
		String getContents = cservice.getModContents(dto.getSeq());
		return getContents;
		
		//return cservice.getModContents(dto.getSeq());
	}
	@RequestMapping(value="getSubModContents.comment",  produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String ajax_getSubModContents(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req,HttpServletResponse resp) {
		String getContents = cservice.getSubModContents(dto.getSeq());	
		return getContents;
	}
	
	//댓글 추가
	@RequestMapping(value="addComment.comment")
	@ResponseBody
	public String ajax_addComment(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		dto.setWriter_id((String)session.getAttribute("login"));
		int result = cservice.addComment(dto);
		if(result>0) {
			return "success";	
		}	
		return "false";

	}
	
	@RequestMapping(value= "addCommentDepth1.comment")
	@ResponseBody
	public String ajax_addCommentDepth1(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		dto.setWriter_id((String)session.getAttribute("login"));
		int result = cservice.addCommentDepth1(dto);
		return "success";
	}
	@RequestMapping("addCommentDepth2.comment")
	@ResponseBody
	public String ajax_addCommentDepth2(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		dto.setWriter_id((String)session.getAttribute("login"));
		int result = cservice.addCommentDepth2(dto);
		System.out.println(dto.getParent_seq());
		return "success";
	}	
	//댓글 수정
	@RequestMapping("modComment.comment")
	@ResponseBody
	public String ajax_modComment(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		int result =cservice.modComment(dto);
		return "success";
	}
	
	@RequestMapping("subModComment.comment")
	@ResponseBody
	public String ajax_subModComment(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		int result =cservice.subModComment(dto);
		return "success";
	}
	
	//댓글 삭제
	@RequestMapping("delComment.comment")
	@ResponseBody
	public String ajax_delComment(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		int result =cservice.delComment(dto);
		return "success";
	}
	@RequestMapping("subDelComment.comment")
	@ResponseBody
	public String ajax_subDelComment(@ModelAttribute("CommentsDTO") CommentsDTO dto, HttpServletRequest req) {
		int result =cservice.subDelComment(dto);
		return "success";
	}
	
	//이미지 파일 업로드 
	@RequestMapping(value="uploadSummernoteImageFile.comment",  produces = "application/text; charset=UTF-8")
	@ResponseBody
	public ResponseEntity ajax_uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile,HttpServletResponse resp) throws Exception {
		HttpHeaders responseHeaders = new HttpHeaders();
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("application/octet-stream; charset=utf8");
		String fileRoot = BoardConfigurator.boardFileRoot;
		String oriName = multipartFile.getOriginalFilename(); //오리지날 파일명
		String extension = oriName.substring(oriName.lastIndexOf(".")); //확장명
		oriName = new String(oriName.getBytes("8859_1"),"UTF8");
		String savedFileName = UUID.randomUUID() +extension;
		File filesPath = new File(fileRoot);
		if(!filesPath.exists()) {filesPath.mkdir();}
		ArrayList<HashMap> hmlist = new ArrayList<HashMap>();
		InputStream fileStream = multipartFile.getInputStream();
		File targetLoc = new File(fileRoot + savedFileName);
		FileUtils.copyInputStreamToFile(fileStream, targetLoc);
		HashMap<String, Object> hm = new HashMap();
		hm.put("url", "/summernoteImage/"+savedFileName);
		hm.put("resp","success");
		hmlist.add(hm);
		JSONArray json = new JSONArray(hmlist);
		fileStream.close();
		return new ResponseEntity(json.toString(),responseHeaders, HttpStatus.CREATED);	
	}
	
	@ExceptionHandler
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
	
	
}
