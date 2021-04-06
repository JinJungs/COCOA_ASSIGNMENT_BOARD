package kh.cocoa.controller;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kh.cocoa.dto.AuthDTO;
import kh.cocoa.dto.ClassDTO;
import kh.cocoa.dto.ClassFakeDTO;
import kh.cocoa.dto.UsersDTO;
import kh.cocoa.service.AdminService;
import kh.cocoa.utils.EncryptUtils;

@Controller
@RequestMapping("/admin")
public class AdminController {
	@Autowired AdminService admin;
	
	@Autowired HttpSession session;
	
	@RequestMapping("/login.nex")
	public NexacroResult login(@ParamVariable(name="id")String id, @ParamVariable(name="pw")String pw) {
		boolean result = admin.nexisIdExist(id);
		NexacroResult nr = new NexacroResult();
		if(result) {	// 가입되어 있는 ID일 때
			UsersDTO dto = admin.getById(id);
			pw = EncryptUtils.getSHA512(pw);
			if(pw.contentEquals(dto.getPw()))
			{
				if(dto.getRole() == 3) {
					nr.addVariable("state", 1);
					session.setAttribute("login", id);
				}
				else {
					//System.out.println("권한 없음");
					nr.addVariable("state", -1);
				}
			}
			else {
				//System.out.println("비밀번호 틀림");
				nr.addVariable("state", -1);
			}
			return nr;
		}else {
			//System.out.println("로그인 실패");
			nr.addVariable("state", -1);
			return nr;
		}
	}
	
	@RequestMapping("/updatePw.nex")
	public NexacroResult updatePw(@ParamVariable(name="pw")String pw) {
		NexacroResult nr = new NexacroResult();
		String id = (String)session.getAttribute("login");
		UsersDTO dto = admin.getById(id);
		pw = EncryptUtils.getSHA512(pw);
		int result = admin.updatePw(dto, pw);
		if(result == 1) {
			//System.out.println("수정 성공");
			nr.addVariable("result", 1);
		}else {
			//System.out.println("수정 실패");
			nr.addVariable("result", -1);
		}
		return nr;
	}
	
	@RequestMapping("/getProf.nex")
	public NexacroResult getProf() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getProfList();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/getStud.nex")
	public NexacroResult getStud() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getStudList();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/getUsers.nex")
	public NexacroResult getUsers() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getUsersList();
		nr.addDataSet("out_ds", list);
		return nr;
	} 
	
	@RequestMapping("/usersDelete.nex")
	public NexacroResult usersDelete(@ParamDataSet(name="in_ds")List<UsersDTO> list) {
		int result = admin.usersDelete(list);
		return new NexacroResult();
	}
	
	@RequestMapping("/usersUpdate.nex")
	public NexacroResult usersUpdate(@ParamDataSet(name="in_ds")List<UsersDTO> list) {
		int result = admin.usersUpdate(list);
		return new NexacroResult();
	}
	
	@RequestMapping("/getUnregProf.nex")
	public NexacroResult getUnregProf() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getUnregProfList();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/getUnregStud.nex")
	public NexacroResult getUnregStud() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getUnregStudList();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/getUnregUsers.nex")
	public NexacroResult getUnregUsers() {
		NexacroResult nr = new NexacroResult();
		List<UsersDTO> list = admin.getUnregUsersList();
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/getClass.nex")
	public NexacroResult getClassList() {
		NexacroResult nr = new NexacroResult();
		List<ClassDTO> list = admin.getClassList();
		//System.out.println(list.get(0).getName());
		//System.out.println(list.get(1).getName());
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/insertClass")
	public NexacroResult insertClass(@ParamVariable(name="pcode")int code, @ParamVariable(name="pname")String name, @ParamVariable(name="pstart_date")String pstart_date, @ParamVariable(name="pend_date")String pend_date) throws Exception{
		//System.out.println(pstart_date);
		SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyyMMdd");
		SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-MM-dd");
		java.util.Date temp = beforeFormat.parse(pstart_date);
		String transDate = afterFormat.format(temp);
		Date start_date = Date.valueOf(transDate);
		temp = beforeFormat.parse(pend_date);
		transDate = afterFormat.format(temp);
		Date end_date = Date.valueOf(transDate);
		ClassDTO dto = new ClassDTO(code, name, start_date, end_date);
		int result = admin.insertClass(dto);
		return new NexacroResult();
	}
	
	@RequestMapping("/classDelete.nex")
	public NexacroResult deleteClass(@ParamDataSet(name="in_ds")List<ClassFakeDTO> list) {
		int result = admin.classDelete(list);
		return new NexacroResult();
	}
	
	@RequestMapping("/classUpdate.nex")
	public NexacroResult updateClass(@ParamDataSet(name="in_ds")List<ClassFakeDTO> pList) throws Exception{
		List<ClassDTO> list = new ArrayList<ClassDTO>();
		for(int i = 0; i < pList.size(); i++) {
			SimpleDateFormat beforeFormat = new SimpleDateFormat("yyyyMMdd");
			SimpleDateFormat afterFormat = new SimpleDateFormat("yyyy-MM-dd");
			java.util.Date temp = beforeFormat.parse(pList.get(i).getStart_date());
			String transDate = afterFormat.format(temp);
			Date start_date = Date.valueOf(transDate);
			temp = beforeFormat.parse(pList.get(i).getEnd_date());
			transDate = afterFormat.format(temp);
			Date end_date = Date.valueOf(transDate);
			ClassDTO dto = new ClassDTO(pList.get(i).getCode(), pList.get(i).getName(), start_date, end_date);
			list.add(dto);
		}
		int result = admin.classUpdate(list);
		return new NexacroResult();
	}
	
	@RequestMapping("/getAuth.nex")
	public NexacroResult getAuthList() {
		NexacroResult nr = new NexacroResult();
		List<AuthDTO> list = admin.getAuthList();
		System.out.println("auth는 이거야 : " + list.get(0).getAuth_id());
		nr.addDataSet("out_ds", list);
		return nr;
	}
	
	@RequestMapping("/insertAuth.nex")
	public NexacroResult insertAuth() {
		String rndStr = admin.getRandomStr(10);
		AuthDTO dto = new AuthDTO(rndStr, null);
		//System.out.println(dto.getAuth_id());
		//System.out.println(dto.getUsers_id());
		int result = admin.insertAuth(dto);
		//System.out.println(result);
		return new NexacroResult();
	}
	
	@RequestMapping("/logout.nex")
	public NexacroResult logout() {
		session.invalidate();
		return new NexacroResult();
	}
	
	@ExceptionHandler
	public String exceptionHandler(Exception e) {
		e.printStackTrace();
		return "error";
	}
}
