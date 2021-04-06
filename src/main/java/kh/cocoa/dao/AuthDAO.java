package kh.cocoa.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.AuthDTO;

@Repository
public class AuthDAO {
	@Autowired
	private SqlSession db;
	
	public List<AuthDTO> getAuthList() {
		return db.selectList("Auth.getAuthList");
	}
	
	public int insertAuth(AuthDTO dto) {
		return db.insert("Auth.insertAuth", dto);
	}
}
