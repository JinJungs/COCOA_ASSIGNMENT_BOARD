package kh.cocoa.controller;

import java.io.File;
import java.io.FileInputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.UUID;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import kh.cocoa.dto.BoardDTO;
import kh.cocoa.dto.FilesDTO;
import kh.cocoa.service.BoardService;
import kh.cocoa.service.FilesService;
import kh.cocoa.service.UsersServices;
import kh.cocoa.statics.BoardConfigurator;


@Controller
@RequestMapping("/board")
public class BoardController {

	//private final LoggerFactory logger = 
	@Autowired
	UsersServices uservice;
	@Autowired 
	private BoardService bservice;

	@Autowired
	private FilesService fservice;

	@Autowired
	private HttpSession session;
	//효경(58번 라인쪽)
	   @RequestMapping("toBoardHome.board")
	   public String boardHome(String cpage, String search, Model model) {      
	      String us_id = (String)session.getAttribute("login");
	      if(uservice.isIdInSession(us_id)) {
	         if(cpage==null) {cpage="1";}      
	         List<BoardDTO> list = bservice.getListBySearch(Integer.parseInt(cpage), search);
	         String navi = bservice.getSearchNavi(Integer.parseInt(cpage), search);   
	         String role = (String)session.getAttribute("role");
	         model.addAttribute("role", role);
	         model.addAttribute("list", list);
	         model.addAttribute("navi", navi);
	         model.addAttribute("cpage", cpage);
	         model.addAttribute("search", search);      
	         return "/board/boardHome";
	      }return "member/logoutFailed";
	   }

	@RequestMapping("search.board")
	public String searchView(String cpage, String search, Model model) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {
			if(cpage==null) {cpage = "1";}
			List<BoardDTO> list = new ArrayList<BoardDTO>();
			String navi;
			list = bservice.getListBySearch(Integer.parseInt(cpage), search);
			navi= bservice.getSearchNavi(Integer.parseInt(cpage), search);
			model.addAttribute("list", list);
			model.addAttribute("navi", navi);
			model.addAttribute("cpage", cpage);
			model.addAttribute("search", search);

			return "/board/boardHome";
		}  return "member/logoutFailed";
	}
	//글 쓰기
	@RequestMapping("toWrite.board")
	public String toWrite(String cpage, String search, Model model) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {

			model.addAttribute("cpage",cpage);
			model.addAttribute("search", search);

			return "/board/write";
		}  return "member/logoutFailed";
	}
	@RequestMapping("writing.board")
	public String writing(String cpage, String search, List<MultipartFile> file, BoardDTO bdto) throws Exception {

		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {
			//아이디 정보로 글쓴이 id 입력
			bdto.setWriter_id((String)session.getAttribute("login"));
			//보드테이블과 파일_보드 테이블에 넣을 seq값 받아오기
			int seqN = bservice.getSeq();
			//글쓰기
			bservice.writing(seqN, bdto);
			if(file.isEmpty() == false) {
				String realPath = BoardConfigurator.boardFileRoot;
				File filesPath = new File(realPath);
				//폴더 없으면 만들기
				if(!filesPath.exists()) {filesPath.mkdir();}

				List<MultipartFile> filelist = new ArrayList<MultipartFile>();
				//빈 파일 넘어오면 거르기
				for(int i=0; i<file.size(); i++) {
					if(!file.get(i).getOriginalFilename().isEmpty()) {
						filelist.add(file.get(i));
					}
				}

				for(MultipartFile mf : filelist) {
					String oriName = mf.getOriginalFilename();
					String uid = UUID.randomUUID().toString().replaceAll("-", "");

					String savedName = uid + "_" + oriName;

					FilesDTO fdto = new FilesDTO(0, oriName, savedName, null, seqN);
					int insert = fservice.insertFile(seqN, fdto);
					if(insert>0) {
						File targetLoc = new File(filesPath.getAbsoluteFile()+ "/" +savedName);
						FileCopyUtils.copy(mf.getBytes(), targetLoc);
					}
				}
			}
			return "redirect:/board/toBoardHome.board?cpage=1&search=";

		}  return "member/logoutFailed";
	}


	//용국
	@RequestMapping(value = "readPage.board", method = RequestMethod.GET)
	public String getPage(int seq, String cpage, String search, Model model) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {		
			if(cpage==null) {cpage="1";}
			int isExistReadpage =bservice.isExistReadpage(seq);		
			String url=null;		
			if(isExistReadpage> 0) {
				int isExistUploadFile =fservice.isExistUploadFile(seq);
				String getWriterid = bservice.getWriterId(seq);
				FilesDTO fdto = fservice.getUserImage(getWriterid);
				bservice.viewCountUp(seq);
				if(fservice.isExistFile(getWriterid)>0) {
					if(fdto.getSavedname()!=null) {
						url = "/summernoteImage/" + fdto.getSavedname();
						model.addAttribute("imgURL",url);
					}

				}
				if(url==null) {
					url = "/resources/img/icon_defaultProfile.png";
					model.addAttribute("imgURL",url);
				}
				BoardDTO dto = bservice.selectOne(seq);
				String writer_id = (String)session.getAttribute("login");
				BoardDTO authdto = new BoardDTO();
				authdto.setSeq(dto.getSeq());
				authdto.setWriter_id(writer_id);	
				int isAuthBoard = bservice.isAuthBoard(authdto);
				model.addAttribute("fileCount",isExistUploadFile);
				model.addAttribute("cpage",cpage);
				model.addAttribute("search",search);
				model.addAttribute("dto", dto);
				model.addAttribute("isAuthBoard",isAuthBoard);
				return "/board/boardReadView";
			}else {
				return "redirect:/board/toBoardHome.board?cpage="+cpage+"&search=";
			}
		}  return "member/logoutFailed";
	}

	@RequestMapping(value="getModBoardContents.board",  produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String ajax_getModBoardContents(@ModelAttribute("BoardDTO") BoardDTO dto, HttpServletRequest req,HttpServletResponse resp) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {
			String getContents = bservice.getModBoardContents(dto.getSeq());
			return getContents;
		}  return "member/logoutFailed";
	}
	@RequestMapping(value="modBoardContents.board")
	public String modBoardContents(BoardDTO dto,String cpage, HttpServletResponse resp) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {
			System.out.println("수정"+dto.getSeq()+dto.getContents());
			int result = bservice.modBoardContents(dto);
			System.out.println(result);
			return "redirect:/board/readPage.board?seq="+dto.getSeq()+"&cpage="+cpage+"&search=";
		}  return "member/logoutFailed";
	}
	@RequestMapping("delBoard.board")
	public String delBoard(int seq,String cpage,HttpServletResponse response) {
		String us_id = (String)session.getAttribute("login");
		if(uservice.isIdInSession(us_id)) {
			System.out.println(seq+cpage);
			int result = bservice.delBoard(seq);
			return "redirect:/board/toBoardHome.board?cpage="+cpage+"&search=";
		}  return "member/logoutFailed";
	}

	@RequestMapping(value="downloadlist.board",  produces = "application/text; charset=UTF-8")
	@ResponseBody
	public ResponseEntity ajax_downloadlist(FilesDTO dto ,HttpServletResponse resp) throws Exception {
		HttpHeaders responseHeaders = new HttpHeaders();
		String fileRoot = BoardConfigurator.boardFileRoot;
		ArrayList<HashMap> hmlist = new ArrayList<HashMap>();	
		List<FilesDTO> list = fservice.getDownLoadList(dto);
		for(int i=0;i<list.size();i++) {
			HashMap<String, Object> hm = new HashMap();
			hm.put("oriname", list.get(i).getOriname());
			hm.put("seq",list.get(i).getSeq());
			hmlist.add(hm);
		}
		JSONArray json = new JSONArray(hmlist);
		return new ResponseEntity(json.toString(),responseHeaders, HttpStatus.CREATED);
	}

	@RequestMapping(value="upload.board", produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String upload(@RequestParam("uploadfile") List<MultipartFile> uploadfile,int sub_hw_seq) throws Exception {
		String fileRoot = BoardConfigurator.boardFileRoot;
		File filesPath = new File(fileRoot);
		if(!filesPath.exists()) {
			filesPath.mkdir();
		}
		int result=0;
		int count=fservice.isExistUploadFile(sub_hw_seq);
		System.out.println(count);
		for(MultipartFile mf : uploadfile) {
			if(!mf.isEmpty()) {
				count +=1;
			}
		}
		if(count < 6) {
			for(MultipartFile mf : uploadfile) {
				String oriName = mf.getOriginalFilename();
				String uid = UUID.randomUUID().toString().replaceAll("-", "");
				String savedName = uid+"_"+oriName;
				FilesDTO dto = new FilesDTO(0,oriName,savedName,null,sub_hw_seq);
				System.out.println(dto.getOriname()+dto.getSavedname()+dto.getSub_hw_seq());
				result = fservice.insertFiles(dto);
				if(result > 0) {
					File targetLoc = new File(filesPath.getAbsolutePath()+"/"+savedName);
					FileCopyUtils.copy(mf.getBytes(), targetLoc);
				}
			}
		}
		System.out.println(count);
		if(result>0) {
			return "Success";
		}
		return "false";
	}

	@RequestMapping(value="download.board")
	public void download(int seq,HttpServletResponse resp)throws Exception{
		String filePath = BoardConfigurator.boardFileRoot;
		//시퀀스로 바꾸기
		FilesDTO dto = fservice.getFilesName(seq);
		File targetFile = new File(filePath+"/"+dto.getSavedname());
		String oriName = dto.getOriname();
		oriName = new String(oriName.getBytes("UTF-8"), "ISO-8859-1");
		if(targetFile.exists() && targetFile.isFile()) {
			resp.setContentType("application/octet-stream; charset=utf8");
			resp.setContentLength((int)targetFile.length());
			resp.setHeader("content-Disposition", "attachment; filename=\""+oriName+"\"");
			FileInputStream fis = new FileInputStream(targetFile);
			ServletOutputStream sos = resp.getOutputStream();
			FileCopyUtils.copy(fis,sos);
			fis.close();
			sos.flush();
			sos.close();
		}
	}
	@RequestMapping("delfile.board")
	@ResponseBody
	public String delfile(int seq, HttpServletResponse response) {
		System.out.println(seq);
		int result = fservice.delFile(seq);
		//삭제한 파일들은 check 값 하나 주고 보관하고 있는지 ?
		return "success";
	}

	@ExceptionHandler
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
}

