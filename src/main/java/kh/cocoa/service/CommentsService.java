package kh.cocoa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.CommentsDAO;
import kh.cocoa.dto.CommentsDTO;
@Service
public class CommentsService {

	@Autowired
	private CommentsDAO cdao;
	
	//삽입 
 	public int addComment(CommentsDTO dto) {
		return cdao.addComment(dto);
	}
	//삽입 Depth1
	public int addCommentDepth1(CommentsDTO dto) {
		return cdao.addCommentDepth1(dto);
	}
	//삽입 Depth2
	public int addCommentDepth2(CommentsDTO dto) {
		return cdao.addCommentDepth2(dto);
	}
	//리스트
	public List<CommentsDTO> getCommentList(int board_seq){
		return cdao.getCommentList(board_seq);
	}
	public List<CommentsDTO> getCommentListDepth2(int comment_seq){
		return cdao.getCommentListDepth2(comment_seq);
	}
	//내용 가져오기
	public String getModContents(int comment_seq) {
		return cdao.getModContents(comment_seq);
	}
	public String getSubModContents(int comment_seq) {
		return cdao.getSubModContents(comment_seq);
	}
	//부모 댓글 이름 가져오기
	public String getParentId(int seq) {
		return cdao.getParentId(seq);
	}
	public String getParentIdTop(int seq) {
		return cdao.getParentIdTop(seq);
	}
	//댓글 수
	public int getCommnetCount(int board_seq){
		return cdao.getCommnetCount(board_seq);
	}
	public int getChildCommentCount(int seq) {
		return cdao.getChildCommentCount(seq);
	}
	//Depth1 수정 삭제.
	public int modComment(CommentsDTO dto) {
		return cdao.modComment(dto);
	}
	public int delComment(CommentsDTO dto) {
		return cdao.delComment(dto);
	}
	
	//Depth2 수정 삭제
	public int subModComment(CommentsDTO dto) {
		return cdao.subModComment(dto);
	}
	public int subDelComment(CommentsDTO dto) {
		return cdao.subDelComment(dto);
	}
	
	public int isAuthComment(CommentsDTO dto) {
		return cdao.isAuthComment(dto);
	}
	public int isAuthSubComment(CommentsDTO dto) {
		return cdao.isAuthSubComment(dto);
	}
}
