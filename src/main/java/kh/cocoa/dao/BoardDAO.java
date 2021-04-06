package kh.cocoa.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.BoardDTO;
import kh.cocoa.statics.BoardConfigurator;

@Repository
public class BoardDAO {

	@Autowired
	private SqlSession db;

	public BoardDTO selectOne(int seq) {
		return db.selectOne("Board.selectOne",seq);
	}	
	public String getModBoardContents(int seq) {
		return db.selectOne("Board.getModBoardContents",seq);
	}
	public int modBoardContents(BoardDTO dto) {
		return db.update("Board.modBoardContents",dto);
	}
	public int delBoard(int seq) {
		return db.delete("Board.delBoard",seq);
	}
	public int isAuthBoard(BoardDTO dto) {
		return db.selectOne("Board.isAuthBoard",dto);
	}
	public int isExistReadpage(int seq) {
		return db.selectOne("Board.isExistReadpage",seq);
	}
	public String getWriterId(int seq) {
		return db.selectOne("Board.getWriterId",seq);
	}


	//효경
	public List<BoardDTO> getListBySearch(){
		return db.selectList("Board.selectBoard");
	}
	public int searchViewCount(int seq) {
	      return db.selectOne("Board.selectViewCount", seq);
	}
	public void viewCountUp(int seq) {
		int viewCount = searchViewCount(seq)+1;
		Map<String, Integer> param = new HashMap<String, Integer>();
		param.put("viewCount", viewCount);
		param.put("seq", seq);
		db.update("Board.updateViewCount", param);
	}

	public BoardDTO getPage(int seq) {
		return db.selectOne("Board.selectBoardDTO", seq);
	}

	public int writing(int seqN, BoardDTO dto) {
		Map<String, Object> param = new HashMap<String, Object>();
		param.put("seqN", seqN);
		param.put("dto", dto);
		return db.insert("Board.insertBoard", param);
	}

	public int getSeq() {
		return db.selectOne("Board.selectSeq");
	}
	//지영
	public List<BoardDTO> getMyBoard(String us_id){
		return db.selectList("Board.selectMyBoard", us_id);
	}

	//내 대댓글이 있는 게시글 seq받아오기
	public List<Integer> getBoardSeq(String writer){
		return db.selectList("Board.selectBoardSeq", writer);
	}

	//댓글, 대댓글 모아보기
	public List<BoardDTO> getBoardList(List<Integer> seqList){
		return db.selectList("Board.selectBoardList", seqList);
	}

}
