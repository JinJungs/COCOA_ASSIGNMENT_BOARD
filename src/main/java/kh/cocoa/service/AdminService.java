package kh.cocoa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.AuthDAO;
import kh.cocoa.dao.ClassDAO;
import kh.cocoa.dao.UsersDAO;
import kh.cocoa.dto.AuthDTO;
import kh.cocoa.dto.ClassDTO;
import kh.cocoa.dto.ClassFakeDTO;
import kh.cocoa.dto.UsersDTO;

@Service
public class AdminService {
	@Autowired
	private UsersDAO UsersDAO;
	@Autowired
	private ClassDAO ClassDAO;
	@Autowired
	private AuthDAO AuthDAO;
	
	public boolean nexisIdExist(String id) {
		return UsersDAO.nexisIdExist(id);
	}
	
	public UsersDTO getById(String id) {
		return UsersDAO.getById(id);
	}
	
	public int updatePw(UsersDTO dto, String pw) {
		return UsersDAO.updatePw(dto, pw);
	}
	
	public List<UsersDTO> getProfList() {
		return UsersDAO.getProfList();
	}
	
	public List<UsersDTO> getStudList() {
		return UsersDAO.getStudList();
	}
	
	public List<UsersDTO> getUsersList() {
		return UsersDAO.getUsersList();
	}
	
	public int usersDelete(List<UsersDTO> list) {
		return UsersDAO.usersDelete(list);
	}
	
	public int usersUpdate(List<UsersDTO>list) {
		return UsersDAO.usersUpdate(list);
	}
	
	public List<UsersDTO> getUnregProfList( ){
		return UsersDAO.getUnregProfList();
	}
	
	public List<UsersDTO> getUnregStudList( ){
		return UsersDAO.getUnregStudList();
	}
	
	public List<UsersDTO> getUnregUsersList( ){
		return UsersDAO.getUnregUsersList();
	}
	
	public List<ClassDTO> getClassList() {
		return ClassDAO.getClassList();
	}
	
	public int insertClass(ClassDTO dto) {
		return ClassDAO.insert(dto);
	}
	
	public int classDelete(List<ClassFakeDTO> list) {
		return ClassDAO.delete(list);
	}
	
	public int classUpdate(List<ClassDTO> list) {
		return ClassDAO.update(list);
	}
	
	public List<AuthDTO> getAuthList() {
		System.out.println("getAuth : Service");
		return AuthDAO.getAuthList();
	}
	
	public int insertAuth(AuthDTO dto) {
		return AuthDAO.insertAuth(dto);
	}
	
	public static String getRandomStr(int size) {
		if(size > 0) {
			char[] temp = new char[size];
			for(int i = 0; i < temp.length; i++) {
				int div = (int)Math.floor(Math.random() * 2);
				
				if(div == 0) {	// 0일때 숫자
					temp[i] = (char)(Math.random() * 10 + '0');
				}else {	// 1일때 알파벳
					temp[i] = (char)(Math.random() * 26 + 'A');
				}
			}
			return new String(temp);
		}
		return new String("Error");
	}
}
