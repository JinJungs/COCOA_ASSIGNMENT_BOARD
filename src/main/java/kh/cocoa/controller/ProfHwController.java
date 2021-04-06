package kh.cocoa.controller;

import java.io.File;
import java.io.IOException;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import kh.cocoa.dto.FilesDTO;
import kh.cocoa.dto.Hw_ListDTO;
import kh.cocoa.dto.Hw_SubmitDTO;
import kh.cocoa.dto.Hw_ViewDTO;
import kh.cocoa.dto.SearchDTO;
import kh.cocoa.dto.Std_ViewDTO;
import kh.cocoa.dto.SubjectDTO;
import kh.cocoa.dto.UsersDTO;
import kh.cocoa.service.FilesService;
import kh.cocoa.service.HwService;
import kh.cocoa.service.UsersServices;
import kh.cocoa.statics.HwConfigurator;

@RequestMapping("/pHw")
@Controller
public class ProfHwController {

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
	// 담당 클래스가 여러개면 바꿔서 보여줄 수 있어야 한다.
	@RequestMapping("/")
	public String toDashBoard(Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		List<SubjectDTO> list = hservice.subjectListById(us_id);
		model.addAttribute("list", list);
		return "/pHw/pDashBoard";
	}

	// ----------------- 컬러를 변경
	@RequestMapping("pUpdateColor.hw")
	@ResponseBody
	public String updateColor(int seq, String color) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}

		int result = hservice.updateColor(seq, color);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// ----------------- 과목 생성
	@RequestMapping("pCreateSubject.hw")
	@ResponseBody
	public String createSubject(SubjectDTO sdto) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}

		int class_code = uservice.getClassCodeById(us_id);
		sdto.setClass_code(class_code);
		// subjectDTO에 해당하는 정보로 과목을 생성
		int result = hservice.createSubject(sdto);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// ----------------- 과목 수정
	@RequestMapping("pUpdateSubject.hw")
	@ResponseBody
	public String updateSubject(SubjectDTO sdto) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		int class_code = uservice.getClassCodeById(us_id);
		sdto.setClass_code(class_code);
		// subjectDTO에 해당하는 정보로 과목을 수정
		int result = hservice.updateSubject(sdto);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// ----------------- 과목 삭제
	@RequestMapping("pDeleteSubject.hw")
	@ResponseBody
	public String deleteSubject(int seq) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		int result = hservice.deleteSubject(seq);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// ----------------- 패스워드 체크
	@RequestMapping("pChkPassword.hw")
	@ResponseBody
	public String chkPassword(UsersDTO udto) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		boolean result = uservice.login2(udto, us_id);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// =================================================pHwListView.jsp

	/// hwList on professor's side [we can add,modify,delete, and see the hwList]
	@RequestMapping("pHwListView.hw")
	public String profHwListView(Hw_ListDTO dto, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		System.out.println("us_id" +us_id +"role "+role);
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}

		// UsersDTO : ClassName, ProfName hwSubmit과 중복
		UsersDTO udto = uservice.getUserInfo(us_id);
		String className = uservice.getClassName(udto.getClass_code());
//		String classProf = uservice.getProfName(udto.getClass_code());

		// viewDTO : subjectName, subjectColor
		Hw_ViewDTO hwView = hservice.getHwViewBySubjectSeq(dto.getSubject_seq());

		// get subject contents
		String sContents = hservice.getSubjectContents(dto.getSubject_seq());

		// get list of hw_list in this subject
		List<Hw_ListDTO> list = hservice.hwListBySubject(dto.getSubject_seq());
		for (Hw_ListDTO li : list) {
			// 교사 아이디(세션)제외 올라온 글의 수
			int std_submit = hservice.howManySubmits(li.getSeq(), us_id);
			li.setStd_submit(std_submit);
		}
		// count total students in this class
		int totalStd = hservice.getTotalStd(udto.getClass_code());
		System.out.println(udto.getClass_code() + "클래스의 학생 인원 : " + totalStd);

		model.addAttribute("className", className);
//		model.addAttribute("classProf", classProf);
		model.addAttribute("hwView", hwView);
		model.addAttribute("sContents", sContents);
		model.addAttribute("list", list);
		model.addAttribute("totalStd", totalStd);
		return "/pHw/pHwListView";
	}

	// Add Homework on hwList [pHwListView.jsp]
	@RequestMapping("addHwList.hw")
	@ResponseBody
	public String addHwList(Hw_ListDTO dto, String s_end_date, Model model) throws Exception {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		Date end_date = Date.valueOf(s_end_date);
		dto.setEnd_date(end_date);
		int result = hservice.addHwList(dto);
		// int result = hservice.addHwList(dto);
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// Modify Homework on hwList [pHwListView.jsp]
	@RequestMapping("modifHwList.hw")
	@ResponseBody
	public String modifHwList(Hw_ListDTO dto, String s_end_date, Model model) throws Exception {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		// 1. 스트링으로 받은 date값을 Date 형으로 변환
		Date end_date = Date.valueOf(s_end_date);
		dto.setEnd_date(end_date);
		// 2. 디비에서 수정
		int result = hservice.modifHwList(dto);
		// 3. json으로 반환
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// Delete Homework on hwList [pHwListView.jsp]
	@RequestMapping("delHwList.hw")
	@ResponseBody
	public String delHwList(int seq, String pw) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		int result;
		// 1.Check pw of the user(prof)
		boolean isPwCorrect = uservice.login(pw,us_id);
		// 2.delete if pw is correct / return -1 if it's not correct
		if (isPwCorrect) {
			result = hservice.delHwList(seq);
		} else {
			result = -1;
		}
		JsonObject obj = new JsonObject();
		obj.addProperty("result", result);
		return new Gson().toJson(obj);
	}

	// ============================================pHwSubmitView.jsp
	@RequestMapping("pHwSubmit.hw")
	public String profHwSubmit(Hw_SubmitDTO hdto, SearchDTO searchdto, int cpage, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}

		// UsersDTO : ClassName, ProfName hwList와 중복
		UsersDTO udto = uservice.getUserInfo(us_id);
		String profName = udto.getName();
		String className = uservice.getClassName(udto.getClass_code());
//					String classProf = uservice.getProfName(udto.getClass_code());

		// !!!!viewDTO!!!! HAVE TO FIND ANOTHER SOLUTION : subjectName, listTitle,
		// subjectColor
		Hw_ViewDTO hwView = hservice.getHwViewByListSeq(hdto.getList_seq());

		// HW_LIST : 해당 과제 dto
		Hw_ListDTO hwListOne = hservice.getHwListOne(hdto.getList_seq());

		// getNotice 공지 올리기
		// (1) 강사 아이디 찾기
		// 본인 아이디
		// (2) 강사아이디!!세션값!!, 과목리스트 시퀀스를 동해 공지 dto 가져오기
		List<Hw_SubmitDTO> notice = hservice.getNoticeBySeq(hdto.getList_seq());
//		List<Hw_SubmitDTO> notice = hservice.getNotice(us_id, hdto.getList_seq());

		// hw_submit list by cpage in nav
		List<Hw_SubmitDTO> submitList = hservice.submitSelectByCpage(hdto.getList_seq(), searchdto, cpage);
		for (Hw_SubmitDTO sub : submitList) {
			String name = uservice.getName(sub.getWriter_id());
			sub.setName(name);
		}

		// Std_ViewDTO 제출/미제출 학생 정보
		// 1.get list of students in this class
		List<Std_ViewDTO> stdList = hservice.stdInThisHw(udto.getClass_code());

		// 2.check their submit, put in different DTO
		List<Std_ViewDTO> stdSubmit = new ArrayList<>();
		List<Std_ViewDTO> stdNonSubmit = new ArrayList<>();
		for (Std_ViewDTO std : stdList) {
			int std_submit = hservice.hwDidIAssigned(std.getUs_id(), hdto.getList_seq());
			std.setStd_submit(std_submit);
			if (std_submit > 0) {
				stdSubmit.add(std);
			} else {
				stdNonSubmit.add(std);
			}
		}

		// nav part(1,2,3...) !!!NEED TO KNOW : P||S, list_seq, cpage, searchDTO!!!
		String navi = hservice.getNavi(cpage, searchdto, hdto.getList_seq(), role);
		model.addAttribute("className", className);
//					model.addAttribute("classProf", classProf);
		model.addAttribute("hwView", hwView);
		model.addAttribute("hwListOne", hwListOne);
		model.addAttribute("notice", notice);
		model.addAttribute("submitList", submitList);
		model.addAttribute("stdSubmit", stdSubmit);
		model.addAttribute("stdNonSubmit", stdNonSubmit);
		model.addAttribute("navi", navi);
		model.addAttribute("cpage", cpage);
		model.addAttribute("profName", profName);

		return "/pHw/pHwSubmitView";
	}

	// ==============================================hwSubmitCreate.jsp
	// 공지 글쓰기 페이지로 이동
	@RequestMapping("pHwSubmitCreate.hw")
	public String hwSubmitCreateView(Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		model.addAttribute("hwView", hwView);
		return "/pHw/pHwSubmitCreate";
	}

	// 공지 생성하기 - hw_submit table에 insert
	@RequestMapping("pCreateSubmit.hw")
	public String createSubmit(Hw_SubmitDTO dto, List<MultipartFile> uploadfile, Model model) throws Exception {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
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
		System.out.println("isEmpty?" + uploadfile.get(0).isEmpty());
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
		return "redirect:/pHw/pHwSubmit.hw";
	}

	// ==============================================hwSubmitRead.jsp
	// 과제 읽기 페이지로 이동
	@RequestMapping("pHwSubmitRead.hw")
	public String hwSubmitRead(int seq, Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
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
		return "/pHw/pHwSubmitRead";
	}

	// ==============================================hwSubmitUpdate.jsp
	// 과제 수정 페이지로 이동
	@RequestMapping("pHwSubmitUpdate.hw")
	public String hwSubmitUpdate(int seq, Hw_ViewDTO hwView, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		Hw_SubmitDTO dto = hservice.getHwSubmitBySeq(seq);
		// 첨부파일 리스트를 불러옴
		List<FilesDTO> fileList = fservice.getHwFilesBySeq(seq);
		model.addAttribute("dto", dto);
		model.addAttribute("hwView", hwView);
		model.addAttribute("fileList", fileList);
		return "/pHw/pHwSubmitUpdate";
	}

	// 과제 수정시 제목이랑 내용을 ajax로 불러오기
	@RequestMapping(value = "getUpdateContents", produces = "application/text; charset=UTF-8")
	@ResponseBody
	public String getUpdateContents(int seq) {
		return hservice.getUpdateContents(seq);
	}

	// 과제 수정하기 - hw_submit table에 update
	@RequestMapping("pUpdateSubmit.hw")
	public String updateSubmit(int sub_hw_seq, int[] delArr, Hw_SubmitDTO dto, List<MultipartFile> uploadfile,
			Model model) throws IOException {

		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
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
		return "redirect:/pHw/pHwSubmit.hw";
	}

	// ==============================================hwSubmitDelete.jsp
	// 과제 삭제하기
	@RequestMapping("pHwSubmitDelete.hw")
	public String deleteSubmit(int seq, int list_seq, Model model) {
		// id 로그인여부와 강사인지의 여부를 검사
		String us_id = (String) session.getAttribute("login");
		String role = (String) session.getAttribute("role");
		if (!uservice.isProfessor(us_id, role)) {
			return "member/logoutFailed";
		}
		hservice.deleteSubmit(seq);
		model.addAttribute("list_seq", list_seq);
		model.addAttribute("cpage", 1);
		return "redirect:/pHw/pHwSubmit.hw";
	}

}
