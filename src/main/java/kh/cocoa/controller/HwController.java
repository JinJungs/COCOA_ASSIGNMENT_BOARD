package kh.cocoa.controller;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;


import kh.cocoa.dto.FilesDTO;
import kh.cocoa.dto.Hw_ListDTO;
import kh.cocoa.dto.Hw_SubmitDTO;
import kh.cocoa.dto.Hw_ViewDTO;
import kh.cocoa.dto.SearchDTO;
import kh.cocoa.dto.SubjectDTO;
import kh.cocoa.dto.UsersDTO;
import kh.cocoa.service.FilesService;
import kh.cocoa.service.HwService;
import kh.cocoa.service.UsersServices;
import kh.cocoa.statics.HwConfigurator;

@Controller
@RequestMapping("/hw")
public class HwController {

	@Autowired
	HwService hservice;

	@Autowired
	UsersServices uservice;

	@Autowired
	FilesService fservice;

	@Autowired
	HttpSession session;

	// =================================================dashBoard.jsp
	// ----------------- 대시보드 페이지로 이동
	@RequestMapping("/")
	public String toDashBoard(Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}
		List<SubjectDTO> list = hservice.subjectListById(us_id);
		model.addAttribute("list", list);
		return "/hw/dashBoard";
	}

	// ==============================================myHwSubmitView.jsp
	// ----------------- 내 과제 페이지로 이동
	@RequestMapping("myHwSubmitView.hw")
	public String myHwSubmitView(int cpage, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}

		// 제출한 과제와 제출해야하는 과제의 목록을 가져옴
		List<Hw_ViewDTO> myList = hservice.mySubmitSelectByCpage(cpage, us_id);

		// 제출날짜 가져오기
		// 제출여부 확인하기
		for (Hw_ViewDTO i : myList) {
			int my_submit = hservice.hwDidIAssigned(us_id, i.getList_seq());
			Date write_date = hservice.getWrite_date(us_id, i.getList_seq());
			i.setMy_submit(my_submit);
			i.setWrite_date(write_date);
		}

		String navi = hservice.getNavi(cpage, us_id);

		model.addAttribute("navi", navi);
		model.addAttribute("myList", myList);
		return "/hw/myHwSubmitView";
	}

	// =================================================hwListView.jsp
	// ******************************************************[STUDENT]
	@RequestMapping("hwListView.hw")
	public String hwListView(Hw_ListDTO dto, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}

		// UsersDTO : ClassName, ProfName hwSubmit과 중복
		UsersDTO udto = uservice.getUserInfo(us_id);
		String className = uservice.getClassName(udto.getClass_code());
		String classProf = uservice.getProfName(udto.getClass_code());

		// viewDTO : subjectName, subjectColor //ERROR!!!! MAYBE WE DONT'T USE HW_VIEW
		Hw_ViewDTO hwView = hservice.getHwViewBySubjectSeq(dto.getSubject_seq());
		// get subject contents
		String sContents = hservice.getSubjectContents(dto.getSubject_seq());

		// get list of hw_list in this subject
		List<Hw_ListDTO> list = hservice.hwListBySubject(dto.getSubject_seq());
		for (Hw_ListDTO i : list) {
			int my_submit = hservice.hwDidIAssigned(us_id, i.getSeq());
			i.setMy_submit(my_submit);
		}

		model.addAttribute("className", className);
		model.addAttribute("classProf", classProf);
		model.addAttribute("hwView", hwView);
		model.addAttribute("sContents", sContents);
		model.addAttribute("list", list);
		return "/hw/hwListView";
	}

	// =================================================hwSubmitView.jsp
	@RequestMapping("hwSubmit.hw")
	public String hwSubmit(Hw_SubmitDTO hdto, SearchDTO searchdto, int cpage, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}

		// UsersDTO : ClassName, ProfName hwList와 중복
		UsersDTO udto = uservice.getUserInfo(us_id);
		String className = uservice.getClassName(udto.getClass_code());
		String classProf = uservice.getProfName(udto.getClass_code());

		// !!!!!!!viewDTO : subjectName, listTitle, subjectColor!!!!!! FIND ANOTHER
		// SOLUTION
		Hw_ViewDTO hwView = hservice.getHwViewByListSeq(hdto.getList_seq());

		// getNotice 공지 올리기
		// (1) 강사 아이디 찾기
		String prof_id = uservice.getProfId(udto.getClass_code());
		// (2) 강사아이디, 과목리스트 시퀀스를 동해 공지 dto 가져오기
		List<Hw_SubmitDTO> notice = hservice.getNoticeBySeq(hdto.getList_seq());

		// Check if i submitted (HW_SUBMIT) : compare writer_id & us_id
		// 1. get All writer_id submitted
		List<String> allSubmitSeq = hservice.allSubmitUS_ID(hdto.getList_seq());
		// 2. Create myDTO to put informations if i submitted
		Hw_SubmitDTO myDTO = new Hw_SubmitDTO();
		myDTO.setWriter_id(us_id);
		myDTO.setList_seq(hdto.getList_seq());
		// 3. Compare us_id and writer_id. If same, get that informations in this dto
		// !!We can submit only one homework!!
		for (String i : allSubmitSeq) {
			if (i.contentEquals(us_id)) {
				myDTO = hservice.mySubmitDTO(myDTO);
				myDTO.setName(udto.getName());
				break;
			}
		}

		// hw_submit list by cpage in nav + name
		List<Hw_SubmitDTO> submitList = hservice.submitSelectByCpage(hdto.getList_seq(), searchdto, cpage);
		for (Hw_SubmitDTO sub : submitList) {
			String name = uservice.getName(sub.getWriter_id());
			sub.setName(name);
		}
		// nav part(1,2,3...)
		String navi = hservice.getNavi(cpage, searchdto, hdto.getList_seq(), role);

		model.addAttribute("className", className);
		model.addAttribute("classProf", classProf);
		model.addAttribute("hwView", hwView);
		model.addAttribute("notice", notice);
		model.addAttribute("myDTO", myDTO);
		model.addAttribute("submitList", submitList);
		model.addAttribute("navi", navi);
		model.addAttribute("cpage", cpage);
		/* model.addAttribute("udto", udto); */

		return "/hw/hwSubmitView";
	}

	// ==============================================hwSubmitCreate.jsp
	// 과제제출 글쓰기 페이지로 이동
	@RequestMapping("hwSubmitCreate.hw")
	public String hwSubmitCreateView(Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}
		model.addAttribute("hwView", hwView);
		return "/hw/hwSubmitCreate";
	}

	// 과제 제출하기 - hw_submit table에 insert
	@RequestMapping("createSubmit.hw")
	public String createSubmit(Hw_SubmitDTO dto, List<MultipartFile> uploadfile, Model model) throws IOException {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}
		dto.setWriter_id(us_id);

		int count = 0;
		for (MultipartFile mf : uploadfile) {
			if (!mf.isEmpty()) {
				count += 1;
			}
		}

		// 1.2. seq값을 세팅 - hw_submit 테이블과 files_hw 테이블에 같은 seq값으로 삽입하기 위해서
		int sub_hw_seq = hservice.selectSeq();
		dto.setSeq(sub_hw_seq);

		// 2. submit table에 insert
		hservice.insertSubmit(dto);

		// 3. upload한 file이 있을 경우에만 files_hw에 파일업로드
		if (count < 6) {
			if (!uploadfile.get(0).isEmpty()) {
				String fileRoot = HwConfigurator.hwBoardFileRoot; // 저장될 외부 파일 경로
				File filesPath = new File(fileRoot);
				if (!filesPath.exists()) {
					filesPath.mkdir();
				}
				// files 폴더가 realPath가 존재하지 않는다면 만들고, 존재한다면 아무 행동도 하지 않음.
				int result = 0;
				for (MultipartFile mf : uploadfile) {
					String oriName = mf.getOriginalFilename();
					String uid = UUID.randomUUID().toString().replaceAll("-", "");
					String savedName = uid + "-" + oriName;
					// dto에 값을 담아서 db에 전송
					FilesDTO fdto = new FilesDTO(0, oriName, savedName, null, sub_hw_seq);
					System.out.println(fdto.getOriname() + fdto.getSavedname() + fdto.getSub_hw_seq());
					result = fservice.insertHwFiles(fdto);
					if (result > 0) {
						File targetLoc = new File(filesPath.getAbsolutePath() + "/" + savedName);
						FileCopyUtils.copy(mf.getBytes(), targetLoc);
						// 만들어진 files폴더에 savedName으로 된 파일을 저장
					}
				}
			}
		}
		model.addAttribute("list_seq", dto.getList_seq());
		model.addAttribute("cpage", 1);
		return "redirect:/hw/hwSubmit.hw";
	}

	// ==============================================hwSubmitRead.jsp
	// 과제 읽기 페이지로 이동
	@RequestMapping("hwSubmitRead.hw")
	public String hwSubmitRead(int seq, Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}

		// db - hw_submit의 seq값으로 hw_submit의 정보를 불러옴
		Hw_SubmitDTO dto = hservice.getHwSubmitBySeq(seq);

		// 첨부파일 리스트를 불러옴
		List<FilesDTO> fileList = fservice.getHwFilesBySeq(seq);

		// 조회수 카운트
		hservice.increaseView(seq);

		// 파일 개수를 세는 메서드
		// int fileCount = fservice.getFileHwCount();

		model.addAttribute("us_id", us_id);
		model.addAttribute("dto", dto);
		model.addAttribute("hwView", hwView); // 과목명 - 과제명 전송
		model.addAttribute("fileList", fileList);
		return "/hw/hwSubmitRead";
	}

	// ==============================================hwSubmitUpdate.jsp
	// 과제 수정 페이지로 이동
	@RequestMapping("hwSubmitUpdate.hw")
	public String hwSubmitUpdate(int seq, Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}
		Hw_SubmitDTO dto = hservice.getHwSubmitBySeq(seq);
		// 첨부파일 리스트를 불러옴
		List<FilesDTO> fileList = fservice.getHwFilesBySeq(seq);
		model.addAttribute("dto", dto);
		model.addAttribute("hwView", hwView);
		model.addAttribute("fileList", fileList);
		return "/hw/hwSubmitUpdate";
	}

	// 과제 수정시 제목이랑 내용을 ajax로 불러오기
	@RequestMapping(value = "getUpdateContents", produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String getUpdateContents(int seq) {
		return hservice.getUpdateContents(seq);
	}

	// 과제 수정하기 - hw_submit table에 update
	@RequestMapping("updateSubmit.hw")
	public String updateSubmit(int sub_hw_seq, int[] delArr, Hw_SubmitDTO dto, List<MultipartFile> uploadfile,
			Model model) throws IOException {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}

		// seq를 dto에 추가
		dto.setSeq(sub_hw_seq);
		// submit table에 update
		hservice.updateSubmit(dto);

		// ------------------------------------------ 파일 수정
		// *** 파일 삭제 *** - 파일의 seq를 가져와서 삭제
		if (delArr != null) {
			int fileDelResult = 0;
			for (int i = 0; i < delArr.length; i++) {
				fileDelResult += fservice.deleteHwFiles(delArr[i]);
			}
			System.out.println(fileDelResult);
		}
		// *** 파일 추가 ***
		System.out.println("isEmpty?" + uploadfile.get(0).isEmpty());
		if (!uploadfile.get(0).isEmpty()) {
			String fileRoot = HwConfigurator.hwBoardFileRoot; // 저장될 외부 파일 경로
			File filesPath = new File(fileRoot);
			if (!filesPath.exists()) {
				filesPath.mkdir();
			}
			// files 폴더가 realPath가 존재하지 않는다면 만들고, 존재한다면 아무 행동도 하지 않음.
			int result = 0;
			for (MultipartFile mf : uploadfile) {
				String oriName = mf.getOriginalFilename();
				String uid = UUID.randomUUID().toString().replaceAll("-", "");
				String savedName = uid + "-" + oriName;
				// dto에 값을 담아서 db에 전송
				FilesDTO fdto = new FilesDTO(0, oriName, savedName, null, sub_hw_seq);
				System.out.println(fdto.getOriname() + fdto.getSavedname() + fdto.getSub_hw_seq());
				result = fservice.insertHwFiles(fdto);
				if (result > 0) {
					File targetLoc = new File(filesPath.getAbsolutePath() + "/" + savedName);
					FileCopyUtils.copy(mf.getBytes(), targetLoc);
					// 만들어진 files폴더에 savedName으로 된 파일을 저장
				}
			}
		}
		model.addAttribute("list_seq", dto.getList_seq());
		model.addAttribute("cpage", 1);
		return "redirect:/hw/hwSubmit.hw";
	}

	// ==============================================hwSubmitDelete.jsp
	// 과제 삭제하기
	@RequestMapping("hwSubmitDelete.hw")
	public String deleteSubmit(int seq, int list_seq, Model model) {
		// id 로그인여부와 학생인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isStudent(us_id, role)) {
			return "member/logoutFailed";
		}
		hservice.deleteSubmit(seq);
		model.addAttribute("list_seq", list_seq);
		model.addAttribute("cpage", 1);
		return "redirect:/hw/hwSubmit.hw";
	}

//	ERROR===============================================ERROR
	@ExceptionHandler
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
}
