package kh.cocoa.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.CommentsDTO;

@Repository
public class CommentsDAO {
	
	@Autowired
	private SqlSession db;
	//삽입
 	public int addComment(CommentsDTO dto) {
		return db.insert("Comment.addComment",dto);
	}
	//삽입 Depth1
	public int addCommentDepth1(CommentsDTO dto) {
		return db.insert("Comment.addCommentDepth1",dto);
	}
	//삽입 Depth2
	public int addCommentDepth2(CommentsDTO dto) {
		return db.insert("Comment.addCommentDepth2",dto);
	}
	//리스트
	public List<CommentsDTO> getCommentList(int board_seq){
		return db.selectList("Comment.getCommentList", board_seq);
	}
	public List<CommentsDTO> getCommentListDepth2(int comment_seq){
		return db.selectList("Comment.getCommentListDepth2",comment_seq);
	}
	//내용 가져오기
	public String getModContents(int comment_seq) {
		return db.selectOne("Comment.getModContents",comment_seq);
	}
	public String getSubModContents(int comment_seq) {
		return db.selectOne("Comment.getSubModContents",comment_seq);
	}
	//댓글 수
	public int getCommnetCount(int board_seq){
		return db.selectOne("Comment.getCommnetCount",board_seq);
	}
	public int getChildCommentCount(int seq) {
		return db.selectOne("Comment.getChildCommentCount",seq);
	}
	//부모 이름 가져오기
	public String getParentId(int seq) {
		return db.selectOne("Comment.getParentId",seq);
	}
	public String getParentIdTop(int seq) {
		return db.selectOne("Comment.getParentIdTop",seq);
	}
	
	//Depth1 수정 삭제.
	public int modComment(CommentsDTO dto) {
		return db.update("Comment.modCommnet",dto);
	}
	public int delComment(CommentsDTO dto) {
		return db.delete("Comment.delComment",dto);
	}
	
	//Depth2 수정 삭제
	public int subModComment(CommentsDTO dto) {
		return db.update("Comment.subModComment",dto);
	}
	public int subDelComment(CommentsDTO dto) {
		return db.delete("Comment.subDelComment",dto);
	}
	
	public int isAuthComment(CommentsDTO dto) {
		return db.selectOne("Comment.isAuthComment",dto);
	}
	public int isAuthSubComment(CommentsDTO dto) {
		return db.selectOne("Comment.isAuthSubComment",dto);
	}

}
