package kh.cocoa.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.FilesDTO;

@Repository
public class Files_BoardDAO {

	@Autowired
	private SqlSession db;

	public int insertFile(int seqN, FilesDTO dto) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seqN", seqN);
		param.put("dto", dto);
		return db.insert("Files.insertFiles_Board", param);
	}
	public List<FilesDTO> selectFile(int boardSeq) {
		return db.selectList("Files.selelctFiles_Board", boardSeq);
	}
	public List<FilesDTO> getDownLoadList(FilesDTO dto){
		return db.selectList("Files.getDownLoadList", dto);
	}
	//파일 삭제 
	public int delFile(int seq) {
		return db.delete("Files.delFile",seq);
	}
	public int insertFiles(FilesDTO dto) {
		return db.insert("Files.insertFiles",dto);
	}
	public FilesDTO getFilesName(int seq) {
		return db.selectOne("Files.getFilesName",seq);
	}
	public int insertUserFile(FilesDTO dto) {
		return db.insert("Files.insertUserFile",dto);
	}
	public FilesDTO getUserImage(String users_id) {
		return db.selectOne("Files.getUserImage",users_id);
	}
	public int isExistFile(String users_id) {
		return db.selectOne("Files.isExistFile",users_id);
	}
	public int isExistUploadFile(int sub_hw_seq) {
		return db.selectOne("Files.isExistUploadFile",sub_hw_seq);
	}
	public int delProfileFile(FilesDTO dto) {
		return db.delete("Files.delProfileFile",dto);
	}
	
	// -------------------------------------------------  Hw 관련
	public int insertHwFiles(FilesDTO dto) {
		System.out.println("dao 도착");
		return db.insert("Files.insertHwFiles",dto);
	}
	public List<FilesDTO> getHwFilesBySeq(int sub_hw_seq){
		return db.selectList("getHwFilesBySeq",sub_hw_seq);
	}
	public int deleteHwFiles(int seq) {
		return db.delete("deleteHwFiles",seq);
	}
	


}
