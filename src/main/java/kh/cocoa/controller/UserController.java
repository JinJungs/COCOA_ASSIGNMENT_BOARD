package kh.cocoa.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import kh.cocoa.dto.BoardDTO;
import kh.cocoa.dto.FilesDTO;
import kh.cocoa.dto.SubjectDTO;
import kh.cocoa.dto.UsersDTO;
import kh.cocoa.service.BoardService;
import kh.cocoa.service.FilesService;
import kh.cocoa.service.HwService;
import kh.cocoa.service.UsersServices;

@Controller
@RequestMapping("/users")
public class UserController {
	@Autowired
	HwService hservice;
	@Autowired
	UsersServices service;

	@Autowired
	BoardService bservice;

	@Autowired
	FilesService fservice;

	@Autowired
	private HttpSession session;

	@Autowired
	BCryptPasswordEncoder pwEncoder;


	/*-----------------------회원가입-----------------------*/
	// 회원가입 페이지
	@RequestMapping("joinAccount.users")
	public String toSignUp(UsersDTO usersDto) {
		return "member/joinAccount";
	}

	// 회원가입시 아이디 중복 확인
	@RequestMapping(value = "idCheck.users", produces = "text/plain; charset=UTF8")
	@ResponseBody
	public String idCheck(String us_id, Model model) {
		boolean result = service.isIdExist(us_id);
		if (result) {
			return "이미 사용중인 아이디 입니다.";
		} else {
			return "사용이 가능한 ID 입니다.";
		}
	}

	// 회원가입시 아이디 중복 확인 - 강사
	@RequestMapping(value = "idCheckLec.users", produces = "text/plain; charset=UTF8")
	@ResponseBody
	public String idCheckLec(String us_id, Model model) {

		boolean result = service.isIdExistLec(us_id);
		if (result) {
			return "이미 사용중인 아이디 입니다.";
		} else {
			return "사용이 가능한 ID 입니다.";
		}
	}

	// 회원가입 페이지 -학생
	@RequestMapping("joinAccountStd.users")
	public String toSignUpStd() {
		return "student/joinAccountStd";
	}

	// 회원가입 페이지 - 강사
	@RequestMapping("joinAccountLec.users")
	public String toSignUpLec() {
		return "lecturer/joinAccountLec";
	}

	// 회원 가입 버튼 - 학생
	@RequestMapping("joinAccountDoneStd.users")
	public String signUpDoneStd(UsersDTO udto, Model model) {

		int result = service.insertStd(udto);
		if (result > 0) {
			model.addAttribute("successStd", result);
			return "member/login";
		} else {
			model.addAttribute("failedStd", result);
			return "member/login";
		}
	}

	// 회원 가입 버튼 - 강사
	@RequestMapping("joinAccountDoneLec.users")
	public String signUpDoneLec(UsersDTO udto, String auth_id, Model model) {
		// 프론트에서 검사했는데 걍 한번 더하자.
		int isUsedAuthId = service.isUsedAuthId(auth_id);
		if (isUsedAuthId > 0) {
			model.addAttribute("failedLec", 0);
			return "member/login";
		} else {
			udto.setRole(02);
			int updateAuthUserId = service.updateAuthUserId(auth_id, udto.getUs_id());
			if (updateAuthUserId > 0) {
				int result = service.insertLec(udto);
				model.addAttribute("successLec", result);
				return "member/login";
			}
		}
		model.addAttribute("failedLec", 0);
		return "member/login";
	}

	/*-----------------------아이디 찾기 -----------------------*/
	@RequestMapping("findId.users")
	public String findId() {
		return "member/findId";
	}
	@RequestMapping("getfindid.users")
	@ResponseBody
	public String getFindId(String email) {
		List<UsersDTO> list = service.getFindId(email);
		
		List<HashMap> hm = new ArrayList<>();
		for(int i=0;i<list.size();i++) {
			HashMap<String,Object> map = new HashMap<>();
			map.put("us_id",list.get(i).getUs_id().replaceAll("[0-9]", "*"));
			map.put("count",list.size());
			hm.add(map);
		}
		
		JSONArray json = new JSONArray(hm);
		return json.toString();
	}

	/*-----------------------비번 찾기 -----------------------*/
	   @RequestMapping("findPw.users")
	   public String findPw() {
	      System.out.println("비번 찾기");
	      return "member/findPw";
	   }
	   @RequestMapping("updatePw.users")
	   public String updatePw(UsersDTO dto,Model model) {
	      int result = service.updatePw(dto);
	      model.addAttribute("updatePw",result);
	      
	      return "member/findPwUpdate";
	   }
	/*-----------------------내가 쓴글----------------------*/
	@RequestMapping("myboard.users")
	public String myBoard(Model model) {
		String id = (String) session.getAttribute("login");
		if (service.isIdInSession(id)) {
			List<BoardDTO> mylist = bservice.getMyBoard(id); // 글리스트 받아오기
			model.addAttribute("mylist", mylist);
			List<Integer> seqList = bservice.getBoardSeq(id); // 댓글 쓴 글 seq 받아오기
			List<BoardDTO> commentList = new ArrayList<BoardDTO>();
			if (seqList.size() > 0) {
				commentList = bservice.getBoardList(seqList);
			}
			model.addAttribute("commentList", commentList);
			return "member/myBoard";
		}
		return "member/logoutFailed";
	}

	/*-----------------------로그인 성공 후 마이페이지화면-----------------------*/
	// 로그인 시도
	// 로그인 성공 후, 마이페이지 화면 / 학생
	@RequestMapping("login.users")
	public String login(Model model, String us_id, String pw) {
		
		boolean result = service.login(pw, us_id);
		
		if (result) {
			session.setAttribute("login", us_id);
			int isExistFile = fservice.isExistFile(us_id);
			String url = null;
			System.out.println("사진 개수" + isExistFile);
			if (isExistFile > 0) {
				FilesDTO dto = fservice.getUserImage(us_id);
				url = "/summernoteImage/" + dto.getSavedname();
			} else {
				url = "/resources/img/profilePic.png";
			}
			
			
			return "redirect:/users/loginSc.users";

		} else if (!result) { // 아이디나 비번이 틀렸을 경우, 로그인 불가
			model.addAttribute("loginFailed", result);
			return "member/login";
		}

		return "error";
	}

	/*---로그인 되어 있을 때, local호스트로 url 변경시 대시보드로 가는 기능----------------------*/
	@RequestMapping("stillLogin.users")
	public String stillLogin(Model model) {
		String us_id = (String) session.getAttribute("login");

		if (service.isIdInSession(us_id)) {
			String role = service.role(us_id);
			if (role.contentEquals("1") || role.contentEquals("01")) { // role값이 1/01 학생일때, 학생 마이페이지로 이동
				// 과목의 정보를 가져옴
				List<SubjectDTO> list = hservice.subjectListById(us_id);
				model.addAttribute("list", list);
				return "hw/dashBoard";

			} else if (role.contentEquals("2") || role.contentEquals("02")) { // role값이 2/02 강사일때, 강사 마이페이지로 이동
				// 강사의 클래스 정보를 가져옴
				// 과목의 정보를 가져옴
				List<SubjectDTO> list = hservice.subjectListById(us_id);
				model.addAttribute("list", list);
				return "pHw/pDashBoard";
			}
		}
		return "member/logoutFailed";
	}

	/*-----------------------로그인 성공시 대시보드로 이동 (학생/강사)-----------------------*/
	// 로그아웃 안했을 시에도 대시보드로 돌아오게 하는 경로
	@RequestMapping("loginSc.users")
	public String loginSc(Model model, String withdraw) {

		String us_id = (String) session.getAttribute("login");

		if (service.isIdInSession(us_id)) {
			// 탈퇴한 아이디인지 여부 확인x
			String withdraw_result = service.withdraw(us_id);
			System.out.println("탈퇴값" + withdraw_result);

			// 탈퇴 안했으면 N
			if (withdraw_result.contentEquals("N")) {
				// 로그인 성공 후, 롤값 가져오기
				String role = service.role(us_id);
				System.out.println("role : " + role);
				session.setAttribute("role", role);

				int isExistFile = fservice.isExistFile(us_id);
				String url = null;
				if (isExistFile > 0) {
					FilesDTO fdto = fservice.getUserImage(us_id);
					url = "/summernoteImage/" + fdto.getSavedname();
				} else {
					url = "/resources/img/icon_defaultProfile.png";
				}
				if (role.contentEquals("1") || role.contentEquals("01")) { // role값이 1/01 학생일때, 학생 마이페이지로 이동
					// 과목의 정보를 가져옴
					List<SubjectDTO> list = hservice.subjectListById(us_id);
					model.addAttribute("list", list);
					return "hw/dashBoard";

				} else if (role.contentEquals("2") || role.contentEquals("02")) { // role값이 2/02 강사일때, 강사 마이페이지로 이동
					// 강사의 클래스 정보를 가져옴
					// 과목의 정보를 가져옴
					List<SubjectDTO> list = hservice.subjectListById(us_id);
					model.addAttribute("list", list);
					return "pHw/pDashBoard";
				}
				// 탈퇴 했으면 Y
			} else if (withdraw_result.contentEquals("Y")) {
				return "member/withdraw";
			}
		}
		return "member/logoutFailed";
	}

	/*-----------------------사이드바 내정보 보기-----------------------*/
	@RequestMapping("mypage.users")
	public String mypage(Model model) {
		System.out.println("내정보 보기 페이지 도착 ");
		String us_id = (String)session.getAttribute("login");

		if(service.isIdInSession(us_id)) {
			String role = service.role(us_id); // 로그인 성공 후, 롤값 가져오기 
			System.out.println("role : "+role);

			int isExistFile = fservice.isExistFile(us_id);
			String url=null;
			if(isExistFile > 0) {
				FilesDTO fdto = fservice.getUserImage(us_id);
				url ="/summernoteImage/"+fdto.getSavedname();
			}else {
				url="/resources/img/icon_defaultProfile.png";
			}   
			if(role.contentEquals("1")||role.contentEquals("01")) { // role값이 1/01 학생일때, 학생 마이페이지로 이동
				UsersDTO dto = service.listStd(us_id);
				List<UsersDTO> list = service.getLecname(dto);
				if(list.size()>=2) {
					model.addAttribute("lecName","배정되지 않았습니다.");		
				}else if(list.size()==0) {
					model.addAttribute("lecName","배정되지 않았습니다.");
				}else if(list.size()==1){
					model.addAttribute("lecName",list.get(0).getName());
				}
				String getClassName = service.getClassName(dto.getClass_code());
				if(getClassName!=null) {
					model.addAttribute("className",getClassName);
				}else {
					model.addAttribute("className","배정되지 않았습니다.");
				}
				model.addAttribute("list",dto);
				model.addAttribute("imgurl",url);
				return "student/mypageStd";

			}else if (role.contentEquals("2")||role.contentEquals("02")) { // role값이 2/02 강사일때, 강사 마이페이지로 이동
				UsersDTO dto = service.listLec(us_id);
				String getClassName = service.getClassName(dto.getClass_code());
				System.out.println(getClassName);
				if(getClassName!=null) {
					model.addAttribute("className",getClassName);
				}else {
					model.addAttribute("className","배정되지 않았습니다.");
				}
				model.addAttribute("list",dto);
				model.addAttribute("imgurl",url);
				return "lecturer/mypageLec";
			}
		}
		return "member/logoutFailed";
	}

	/*-----------------------마이페이지 수정 / 학생-----------------------*/
	// 마이페이지 학생
	@RequestMapping("mypageStd.users")
	public String mypageStd(String role, Model model) {

		String us_id = (String)session.getAttribute("login");   
		UsersDTO dto = service.listStd(us_id);
		//ClassDTO dto1 = service.listStd2(us_id);

		//System.out.println("수강 클래스 : " + dto1.getName());
		
		int isExistFile = fservice.isExistFile(us_id);
		String url=null;
		if(isExistFile > 0) {
			FilesDTO fdto = fservice.getUserImage(us_id);
			url ="/summernoteImage/"+fdto.getSavedname();
		}else {
			url="/resources/img/icon_defaultProfile.png";
		}   
		List<UsersDTO> list = service.getLecname(dto);
		if(list.size()>=2) {
			model.addAttribute("lecName","배정되지 않았습니다.");		
		}else if(list.size()==0) {
			model.addAttribute("lecName","배정되지 않았습니다.");
		}else if(list.size()==1){
			model.addAttribute("lecName",list.get(0).getName());
		}
		String getClassName = service.getClassName(dto.getClass_code());
		System.out.println(getClassName);
		if(getClassName!=null) {
			model.addAttribute("className",getClassName);
		}else {
			model.addAttribute("className","배정되지 않았습니다.");
		}
		model.addAttribute("imgurl",url);
		//학생 기본 정보 뿌려주기
		model.addAttribute("list", dto);
		// session.setAttribute("list1", dto1);
		return "/student/mypageStd";
	}

	// 마이페이지 정보 수정 학생
	@RequestMapping("mypageStdModify.users")
	public String mypageStdModify(Model model){
		String us_id = (String)session.getAttribute("login");   
		if(service.isIdInSession(us_id)) {

			UsersDTO dto = service.listStd(us_id);
			int isExistFile = fservice.isExistFile(us_id);
			String url = null;
			if (isExistFile > 0) {
				FilesDTO fdto = fservice.getUserImage(us_id);
				url ="/summernoteImage/"+fdto.getSavedname();
			} else {
				url = "/resources/img/icon_defaultProfile.png";
			}
			String getClassName = service.getClassName(dto.getClass_code());
			List<UsersDTO> list = service.getLecname(dto);
			if(list.size()>=2) {
				model.addAttribute("lecName","배정되지 않았습니다.");		
			}else if(list.size()==0) {
				model.addAttribute("lecName","배정되지 않았습니다.");
			}else if(list.size()==1){
				model.addAttribute("lecName",list.get(0).getName());
			}
			if(getClassName!=null) {
				model.addAttribute("className",getClassName);
			}else {
				model.addAttribute("className","배정되지 않았습니다.");
			}
			model.addAttribute("imgurl", url);
			model.addAttribute("list", dto);
			return "student/mypageStdModify";
		}
		return "member/logoutFailed";
	}

	// 마이페이지 수정 버튼 학생
	@RequestMapping("stdModifyDone.users")
	public String modifyDone(UsersDTO dto, Model model) {
		System.out.println(dto.getPw());
		int result = service.stdModifyInfor(dto);
		return "redirect:/users/mypageStd.users";
	}

	/*-----------------------마이페이지 수정 / 강사-----------------------*/
	// 마이페이지 강사
	@RequestMapping("mypageLec.users")
	public String mypageLec(String role, Model model) {
		String us_id = (String)session.getAttribute("login");   
		UsersDTO dto = service.listStd(us_id);
		//ClassDTO dto1 = service.listStd2(us_id);

		//System.out.println("수강 클래스 : " + dto1.getName());

		int isExistFile = fservice.isExistFile(us_id);
		String url=null;
		if(isExistFile > 0) {
			FilesDTO fdto = fservice.getUserImage(us_id);
			url ="/summernoteImage/"+fdto.getSavedname();
		}else {
			url="/resources/img/icon_defaultProfile.png";
		}   
		List<UsersDTO> list = service.getLecname(dto);
		if(list.size()>=2) {
			model.addAttribute("lecName","배정되지 않았습니다.");		
		}else if(list.size()==0) {
			model.addAttribute("lecName","배정되지 않았습니다.");
		}else if(list.size()==1){
			model.addAttribute("lecName",list.get(0).getName());
		}
		String getClassName = service.getClassName(dto.getClass_code());

		if(getClassName!=null) {
			model.addAttribute("className",getClassName);
		}else {
			model.addAttribute("className","배정되지 않았습니다.");
		}
		model.addAttribute("imgurl",url);
		//학생 기본 정보 뿌려주기
		model.addAttribute("list", dto);
		return "lecturer/mypageLec";
	}

	// 마이페이지 정보 수정 강사
	@RequestMapping("mypageLecModify.users")
	public String mypageLecModify(Model model) {
		String us_id = (String)session.getAttribute("login");   
		if(service.isIdInSession(us_id)) {

			UsersDTO dto = service.listStd(us_id);
			int isExistFile = fservice.isExistFile(us_id);
			String url = null;
			if (isExistFile > 0) {
				FilesDTO fdto = fservice.getUserImage(us_id);
				url ="/summernoteImage/"+fdto.getSavedname();
			} else {
				url = "/resources/img/icon_defaultProfile.png";
			}
			List<UsersDTO> list = service.getLecname(dto);
			if(list.size()>=2) {
				model.addAttribute("lecName","배정되지 않았습니다.");		
			}else if(list.size()==0) {
				model.addAttribute("lecName","배정되지 않았습니다.");
			}else if(list.size()==1){
				model.addAttribute("lecName",list.get(0).getName());
			}
			String getClassName = service.getClassName(dto.getClass_code());

			if(getClassName!=null) {
				model.addAttribute("className",getClassName);
			}else {
				model.addAttribute("className","배정되지 않았습니다.");
			}
			model.addAttribute("imgurl", url);
			model.addAttribute("list", dto);
			return "lecturer/mypageLecModify";
		}
		return "member/logoutFailed";

	}

	// 마이페이지 수정 강사
	@RequestMapping("lecModifyDone.users")
	public String modifyDoneLec(UsersDTO dto, Model model) {
		int result = service.stdModifyInfor(dto);
		return "redirect:/users/mypageLec.users";
	}

	/*-----------------------로그아웃-----------------------*/

	@RequestMapping("logout.users")
	public String logout(Model model) {
		System.out.println("로그아웃 페이지 도착");
		session.removeAttribute("login");
		session.invalidate(); // 세션의 모든 속성 삭제
		return "redirect:/";
	}

	/*-----------------------회원탈퇴-----------------------*/
	// 회원탈퇴 페이지로 이동
	@RequestMapping("withdraw.users")
	public String withdraw(Model model) {
		System.out.println("회원탈퇴 페이지 도착");
		String us_id = (String) session.getAttribute("login");
		if (service.isIdInSession(us_id)) {
			String role = service.role(us_id); // 로그인 성공 후, 롤값 가져오기

			if (role.contentEquals("1") || role.contentEquals("01")) { // role값이 1/01 학생일때,
				return "student/withdrawStd"; // 회원 탈퇴 페이지로 이동
			} else if (role.contentEquals("2") || role.contentEquals("02")) { // role값이 2/02 강사일때,
				return "lecturer/withdrawAlertViewLec"; // 회원 탈퇴 불가 안내 페이지로 이동
			}
			return "error";
		}
		return "member/logoutFailed";
	}

	@RequestMapping("withdrawPage.users")
	public String withdrawPage(Model model) {
		return "student/withdrawPageViewStd";
	}

	@RequestMapping("withdrawDupCheck.users")
	public String withdrawDupCheck(Model model, UsersDTO udto, String us_id) {
		System.out.println("회원 정보 삭제 컨트롤러");
		us_id = (String) session.getAttribute("login");

		System.out.println("컨트롤러 아이디 :" + us_id);
		System.out.println("컨트롤러 비번 :" + udto.getPw());

		boolean result = service.login2(udto, us_id);
		System.out.println(result);

		if (result) {
			int resultDel = service.delete(us_id);
			session.invalidate();
			model.addAttribute("resultDel", resultDel);
			return "/member/withdrawAlertView";
		} else {
			int resultDel = 0;
			model.addAttribute("resultDel", resultDel);
		}
		return "error";
	}
	// 용국 추가

	@RequestMapping("checkCurPw.users")
	@ResponseBody
	public String ajax_checkCurPw(UsersDTO dto) {
		int result = service.checkCurPw(dto);
		if (result > 0) {
			return "success";
		}
		return "false";
	}

	@RequestMapping("checkAuthId.users")
	@ResponseBody
	public String ajax_checkAuthId(String auth_id) {
		int result = service.checkAuthId(auth_id);
		if (result > 0) {
			if (service.isUsedAuthId(auth_id) > 0) {
				System.out.println(auth_id);
				return "alreadyUsed";
			}
			return "success";
		}
		return "false";
	}

	/*-----------------------예외처리-----------------------*/
	@ExceptionHandler
	public String exceptionhandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
}
