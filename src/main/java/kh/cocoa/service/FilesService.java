package kh.cocoa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.Files_BoardDAO;
import kh.cocoa.dto.FilesDTO;

@Service
public class FilesService {
	@Autowired
	private Files_BoardDAO fdao;

	public int insertFile(int seqN, FilesDTO dto) {
		return fdao.insertFile(seqN, dto);
	}
	public List<FilesDTO> getFile(int boardSeq) {
		return fdao.selectFile(boardSeq);
	}
	public List<FilesDTO> getDownLoadList(FilesDTO dto){
		return fdao.getDownLoadList(dto);
	}
	public int insertFiles(FilesDTO dto) {
		return fdao.insertFiles(dto);
	}
	public FilesDTO getFilesName(int seq) {
		return fdao.getFilesName(seq);
	}
	//삭제 파일
	public int delFile(int seq) {
		return fdao.delFile(seq);
	}

	//게시글 파일 수 카운트.
	public int isExistUploadFile(int sub_hw_seq) {
		return fdao.isExistUploadFile(sub_hw_seq);
	}
	//지영씨
	 public int insertUserFile(FilesDTO dto) {
	   return fdao.insertUserFile(dto);
	}
	public FilesDTO getUserImage(String users_id) {
		return fdao.getUserImage(users_id);
	}
	public int isExistFile(String users_id) {
		return fdao.isExistFile(users_id);
	}
	public int delProfileFile(FilesDTO dto) {
		return fdao.delProfileFile(dto);
	}
	
	//Hw
	public int insertHwFiles(FilesDTO dto) {
		return fdao.insertHwFiles(dto);
	}
	public List<FilesDTO> getHwFilesBySeq(int sub_hw_seq){
		return fdao.getHwFilesBySeq(sub_hw_seq);
	}
	public int deleteHwFiles(int seq) {
		return fdao.deleteHwFiles(seq);
	}
}
