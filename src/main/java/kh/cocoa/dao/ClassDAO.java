package kh.cocoa.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.ClassDTO;
import kh.cocoa.dto.ClassFakeDTO;

@Repository
public class ClassDAO {
	@Autowired
	private SqlSession db;
	
	
	public List<ClassDTO> getClassList() {
		return db.selectList("Class.getClassList");
	}
	
	public int insert(ClassDTO dto) {
		return db.insert("Class.insertClass", dto);
	}
	
	public int delete(List<ClassFakeDTO> list) {
		return db.delete("Class.deleteClass", list);
	}
	
	public int update(List<ClassDTO>list) {	
		return db.update("Class.classUpdate", list);
	}
}
