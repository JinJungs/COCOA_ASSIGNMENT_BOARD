package kh.cocoa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.UsersDAO;
import kh.cocoa.dto.UsersDTO;

@Service
public class UsersServices {
	@Autowired
	public UsersDAO dao;

	/*-----------------------회원가입-----------------------*/
	//용국 코드
	public int checkCurPw(UsersDTO dto) {
		return dao.checkCurPw(dto);
	}
	//auth id check 코드
	public int checkAuthId(String auth_id) {
		return dao.checkAuthId(auth_id);
	}
	//사용중인지 ?
	public int isUsedAuthId(String auth_id) {
		return dao.isUsedAuthId(auth_id);
	}
	//가입시 role에 가입한 강사 아이디 INSERT
	public int updateAuthUserId(String auth_id,String us_id) {
		return dao.updateAuthUserId(auth_id,us_id);
	}
	//선생님 이름 얻어오기
	public List<UsersDTO> getLecname(UsersDTO dto) {
		return dao.getLecname(dto);
	}
	//이메일로 아이디 받아오기
	public List<UsersDTO> getFindId(String email) {
		return dao.getFindId(email);
	}

	//회원가입시 정보 입력 - 학생
	/*-----------------------공통 메서드-----------------------*/
	//로그아웃 이후, 링크타고 게시판등 페이지에 들어갔을 때, 접근 불가 메세지 띄우기 위한 것
	public boolean isIdInSession(String us_id) {
		if (us_id != null) {
			return true;
		}else {
			return false;
		}
	}
	public int insertStd(UsersDTO udto){
		// 비밀번호 암호화
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		udto.setPw(passwordEncoder.encode(udto.getPw()));
		return dao.insertStd(udto);
	}
	//회원가입시 정보 입력 - 강사
	public int insertLec(UsersDTO udto){
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		udto.setPw(passwordEncoder.encode(udto.getPw()));
		return dao.insertLec(udto);
	}
	//아이디 중복 체크 - 학생
	public boolean isIdExist(String us_id){
		return dao.isIdExist(us_id);
	}
	//아이디 중복 체크 - 강사
	public boolean isIdExistLec(String us_id){
		System.out.println("강사 아이디 중복 체크 도착");
		return dao.isIdExistLec(us_id);
	}

	/*-----------------------로그인-----------------------*/
	//로그인시 강사, 학생 구분
	public int loginCheck(int role) {
		return dao.loginCheck(role);
	}
	//로그인 전, 탈퇴한 아이디 확인 여부
	public String withdraw(String us_id){
		return dao.withdraw(us_id); 
	}
	//로그인 성공 여부
	public boolean login(String pw,String us_id){
		System.out.println("서비스 도착");

		System.out.println("서비스 아이디 :"+us_id);
		System.out.println("서비스 비번 :"+pw);

		return dao.login(us_id,pw); 
	}
	//로그인 성공 여부 (탈퇴떄 사용)
	public boolean login2(UsersDTO udto,String us_id){
		System.out.println("서비스 도착 탈퇴");

		System.out.println("서비스 아이디 :"+us_id);
		System.out.println("서비스 비번 :"+udto.getPw());

		return dao.login2(udto,us_id); 
	}

	//로그인시 강사/학생 구분을 위해 role값 가져오기
	public String role(String us_id) {
		return dao.role(us_id);
	}

	/*-----------------------마이 페이지 /학생----------------------*/

	//마이페이지 정보 불러오기 / 학생
	public UsersDTO listStd(String us_id) {
		return dao.listStd(us_id);
	}
	//	//마이페이지 정보 불러오기 / 학생2
	//		public ClassDTO listStd2(String us_id) {
	//			return dao.listStd2(us_id);
	//		}
	//마이페이지 정보 수정 /학생
	public int stdModifyInfor(UsersDTO dto){
		//비번 암호화
		if(dto.getPw()!=null) {
			BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
			dto.setPw(passwordEncoder.encode(dto.getPw()));
		}
		return dao.stdModifyInfor(dto);
	}
	/*-----------------------마이 페이지 /강사----------------------*/

	//마이페이지 정보 불러오기 / 강사
	public UsersDTO listLec(String us_id) {
		return dao.listLec(us_id);
	}
	//마이페이지 정보 수정 /강사
	public int lecModifyInfor(UsersDTO dto,String us_id){
		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		dto.setPw(passwordEncoder.encode(dto.getPw()));
		dto.setUs_id(us_id);
		return dao.lecModifyInfor(dto, us_id);
	}
	/*-----------------------회원 탈퇴 / 학생 only----------------------*/
	//회원 정보 삭제  - 학생
	public int delete(String us_id){
		return dao.delete(us_id);
	}
	/*-----------------------아이디 찾기----------------------*/

	public UsersDTO getUserInfo(String us_id) {
		return dao.getUserInfo(us_id);
	}

	public String getProfName(int classCode) {
		return dao.getProfName(classCode);
	}

	// pHwListView.jsp
	public boolean isPwCorrect(String us_id, String pw) {
		return dao.isPwCorrent(us_id, pw);
	}

	public int stdNumInClass(String class_code) {
		return dao.stdNumInClass(class_code);
	}

	// ==THIS CAN GO OUT TO COMMON SERVICE==========
	public String getClassName(int classCode) {
		return dao.getClassName(classCode);
	}
	// ==THIS CAN GO OUT TO COMMON SERVICE==========

	// ================================================
	// HW PART (added after 2020 12 24)
	// ================================================

	// hw/phw SubmitView.jsp

	public String getProfId(int class_code) {
		return dao.getProfId(class_code);
	}

	// hw/phw SubmitView.jsp
	public String getName(String writer_id) {
		return dao.getName(writer_id);
	}

	public int getClassCodeById(String us_id) {
		return dao.getClassCodeById(us_id);
	}
	// 세션의 id체크와 role 체크 같이하기 - 학생인지를 검사
	public boolean isStudent(String us_id, String role) {
		if (us_id != null && role.contentEquals("1")) {
			return true;
		} else {
			return false;
		}
	}

	// 세션의 id체크와 role 체크 같이하기 - 학생인지를 검사
	public boolean isProfessor(String us_id, String role) {
		if (us_id != null && role.contentEquals("2")) {
			return true;
		} else {
			return false;
		}
	}
	/*-----------------------비번 찾기----------------------*/
	   //비번찾기 이메일 확인
	   public boolean isEmailExist(String email) {
	      return dao.isEmailExist(email);
	   }
	 //비밀번호 찾기 비번 업뎃
	   public int updatePw(UsersDTO dto) {
	      System.out.println("암호화 직전 비번"+dto.getPw());
	      if(dto!=null) {
	         BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	         dto.setPw(passwordEncoder.encode(dto.getPw()));
	      }
	      
	      return dao.updatePw(dto);
	   }
}
