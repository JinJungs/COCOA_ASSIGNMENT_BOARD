package kh.cocoa.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.UsersDTO;

@Repository
public class UsersDAO {

	@Autowired
	SqlSession db;
	@Autowired
	BCryptPasswordEncoder pwEncoder;

	public UsersDTO getUserInfo(String us_id) {
		return db.selectOne("Users.getUserInfo", us_id);
	}
	public String getProfName(int classCode) {
		return db.selectOne("Users.getProfName", classCode);
	}
	//pHwListView.jsp
	public boolean isPwCorrent(String us_id, String pw) {
		boolean result;
		UsersDTO dto = new UsersDTO();
		dto.setUs_id(us_id);
		dto.setPw(pw);
		int check = db.selectOne("Users.isPwCorrect", dto);
		if(check==1) {
			result = true;
		}else {
			result = false;
		}
		return result;
	}
	public int stdNumInClass(String class_code) {
		return db.selectOne("Users.stdNumInClass", class_code);
	}
	//THIS CAN GO OUT TO COMMON DAO
	public String getClassName(int classCode) {
		return db.selectOne("Class.getClassName", classCode);
	}

	//지영씨


	/*-----------------------회원가입-----------------------*/
	//회원가입시 정보 입력 - 학생
	public int insertStd(UsersDTO udto){
		return db.insert("Users.insertStd",udto);
	}
	//회원가입시 정보 입력 - 강사
	public int insertLec(UsersDTO udto){
		return db.insert("Users.insertLec",udto);
	}
	//아이디 중복 체크 - 학생
	public boolean isIdExist(String us_id){
		return db.selectOne("Users.isIdExist",us_id);
	}
	//아이디 중복 체크 - 강사
	public boolean isIdExistLec(String us_id){

		return db.selectOne("Users.isIdExistLec",us_id);
	}
	/*-----------------------로그인-----------------------*/
	//로그인시 강사, 학생 구분
	public int loginCheck(int role) {
		return db.selectOne("Users.loginCheck",role);
	}
	//로그인 전, 탈퇴한 아이디 확인 여부
	public String withdraw(String us_id){
		return db.selectOne("Users.withdraw",us_id); 
	}
	//로그인 성공 여부
	public boolean login(String us_id,String pw){
		Map<String,String> m = new HashMap<>();
		m.put("us_id", us_id);
		m.put("pw", pw);
		//DB에 저장된 암호화된 비번 불러오기
		String result1 = db.selectOne("Users.login",m);

		if(pwEncoder.matches(pw,result1)) {

			return true;
		}else {

			return false;
		}

	}
	//로그인 성공 여부 (탈퇴 떄 사용)
	public boolean login2(UsersDTO udto, String us_id){
		Map<String,String> m = new HashMap<>();
		m.put("us_id", us_id);
		m.put("pw", udto.getPw());
		//DB에 저장된 암호화된 비번 불러오기
		String result1 = db.selectOne("Users.login2",m);

		if(pwEncoder.matches(udto.getPw(),result1)) {

			return true;
		}else {

			return false;
		}

	}


	public String role(String us_id) {
		return db.selectOne("Users.role",us_id);
	}

	/*-----------------------마이 페이지 /학생----------------------*/

	//마이페이지 정보 불러오기 / 학생2
	public UsersDTO listStd(String us_id) {
		return db.selectOne("Users.mypageStd",us_id);
	}

	//마이페이지 정보 수정 /학생
	public int stdModifyInfor(UsersDTO dto){
		return db.update("Users.stdModifyInfor",dto);
	}
	/*-----------------------마이 페이지 /강사----------------------*/

	//마이페이지 정보 불러오기 / 강사
	public UsersDTO listLec(String us_id) {
		return db.selectOne("Users.mypageLec",us_id);
	}
	//마이페이지 정보 수정 /강사
	public int lecModifyInfor(UsersDTO dto,String us_id){
		dto.setUs_id(us_id);
		return db.update("Users.lecModifyInfor",dto);
	}

	/*-----------------------회원 탈퇴 / 학생 only----------------------*/
	//회원 정보 삭제  - 학생
	public int delete(String us_id){
		return db.delete("Users.delete",us_id);
	}
	/*-----------------------아이디 찾기----------------------*/
	//용국
	public int checkCurPw(UsersDTO dto) {
		String getResult =db.selectOne("Users.checkCurPw",dto);
		if(pwEncoder.matches(dto.getPw(),getResult)) {

			return 1;
		}

		return 0;
	}

	public int checkAuthId(String auth_id) {
		return db.selectOne("Users.checkAuthId",auth_id);
	}

	public int isUsedAuthId(String auth_id) {
		return db.selectOne("Users.isUsedAuthId",auth_id);
	}

	public int updateAuthUserId(String auth_id,String us_id) {
		Map<String,String> m = new HashMap<>();
		m.put("auth_id",auth_id);
		m.put("us_id", us_id);
		return db.insert("Users.updateAuthUserId",m);
	}
	public List<UsersDTO> getLecname(UsersDTO  dto) {
		return db.selectList("Users.getLecname",dto);
	}
	
	public List<UsersDTO> getFindId(String email) {
		return  db.selectList("Users.getFindId",email);
	}

	// ================================================
	// HW PART (added after 2020 12 24)
	// ================================================
	// phw / hw SubmitView : find prof's ID
	public String getProfId(int class_code) {
		return db.selectOne("Users.getProfId", class_code);
	}

	// phw / hw SubmitView : find name by us_id
	public String getName(String writer_id) {
		return db.selectOne("Users.getName", writer_id);
	}

	public int getClassCodeById(String us_id) {
		return db.selectOne("Users.getClassCodeById", us_id);
	}
	
	public int updatePw(UsersDTO dto) {
		return db.update("Users.updateUserPw",dto);
	}
	//비번찾기 이메일 확인
	public boolean isEmailExist(String email) {
	   return db.selectOne("Users.isEmailExist",email);
	}
	
	

	// nex

	public boolean nexisIdExist(String id) {
		return db.selectOne("Users.selectCountById", id);
	}

	public UsersDTO getById(String id) {
		return db.selectOne("Users.selectById", id);
	}

	public int updatePw(UsersDTO dto, String pw) {
		Map<String, Object> param = new HashMap<>();
		param.put("dto", dto);
		param.put("pw", pw);
		return db.update("Users.updatePw", param);
	}

	public List<UsersDTO> getProfList() {
		return db.selectList("Users.getProfList");
	}

	public List<UsersDTO> getStudList() {
		return db.selectList("Users.getStudList");
	}

	public List<UsersDTO> getUsersList() {
		return db.selectList("Users.getUsersList");
	}

	public int usersDelete(List<UsersDTO> list) {
		return db.update("Users.usersDelete", list);
	}

	public int usersUpdate(List<UsersDTO> list) {
		return db.update("Users.usersUpdate", list);
	}

	public List<UsersDTO> getUnregProfList() {
		return db.selectList("Users.getUnregProfList");
	}

	public List<UsersDTO> getUnregStudList() {
		return db.selectList("Users.getUnregStudList");
	}

	public List<UsersDTO> getUnregUsersList() {
		return db.selectList("Users.getUnregUsersList");
	}
	
}
