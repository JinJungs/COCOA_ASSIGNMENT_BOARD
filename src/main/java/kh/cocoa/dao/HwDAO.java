package kh.cocoa.dao;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import kh.cocoa.dto.Hw_ListDTO;
import kh.cocoa.dto.Hw_SubmitDTO;
import kh.cocoa.dto.Hw_ViewDTO;
import kh.cocoa.dto.SearchDTO;
import kh.cocoa.dto.Std_ViewDTO;
import kh.cocoa.dto.SubjectDTO;

@Repository
public class HwDAO {

	@Autowired
	SqlSession db;

	// ===============================================COMMON

	// **************사이드바에 과목이름을 불러온다 **************
	public List<SubjectDTO> getSubjectInfo(String us_id) {
		return db.selectList("Hw.getSubjectInfo", us_id);
	}

	// 해당 과목의 제출 여부 확인
	public int hwDidIAssigned(String us_id, int list_seq) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("writer_id", us_id);
		param.put("list_seq", list_seq);
		return db.selectOne("Hw.hwDidIAssigned", param);
	}

	// ===============================================dashBoard.jsp
	// 과목의 정보를 불러옴
	public List<SubjectDTO> subjectListById(String us_id) {
		return db.selectList("Hw.subjectListById", us_id);
	}

	// 컬러를 변경후 저장
	public int updateColor(int seq, String color) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("seq", seq);
		param.put("color", color);
		return db.update("Hw.updateColor", param);
	}

	// [강사] - 과목 생성
	public int createSubject(SubjectDTO sdto) {
		return db.insert("Hw.createSubject", sdto);
	}

	// [강사] - 과목 수정
	public int updateSubject(SubjectDTO sdto) {
		return db.update("Hw.updateSubject", sdto);
	}

	// [강사] - 과목 삭제
	public int deleteSubject(int seq) {
		return db.delete("Hw.deleteSubject", seq);
	}

	// ================================================myHwSubmitView.jsp
	// 내가 제출한 과제의 정보를 불러옴
	public List<Hw_ViewDTO> my_hw_submitList() {
		return db.selectList("Hw.my_hw_submitList");
	}

	// 과제의 제출날짜를 불러옴
	public Date getWrite_date(String us_id, int list_seq) {
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("writer_id", us_id);
		param.put("list_seq", list_seq);
		return db.selectOne("Hw.getWrite_date", param);
	}

	// ================================================hwListView.jsp
	public Hw_ViewDTO getHwViewBySubjectSeq(int subject_seq) {
		return db.selectOne("Hw.getHwViewBySubjectSeq", subject_seq);
	}

	public String getSubjectContents(int subject_seq) {
		return db.selectOne("Hw.getSubjectContents", subject_seq);
	}

	public List<Hw_ListDTO> hwListBySubject(int subject_seq) {
		List<Hw_ListDTO> result = db.selectList("Hw.hwListBySubject", subject_seq);
		return result;
	}

	public String getHwListTitleBySeq(int seq) {
		return db.selectOne("Hw.hwListTitleBySeq", seq);
	}

	// ================================================hwSubmitView.jsp
	public List<Hw_SubmitDTO> getSubmitList(int list_seq) {
		List<Hw_SubmitDTO> list = db.selectList("Hw.getSubmitList", list_seq);
		return list;
	}

	public Hw_ViewDTO getHwViewByListSeq(int list_seq) {
		return db.selectOne("Hw.getHwViewByListSeq", list_seq);
	}

	// find all submit seq on this list
	public List<String> allSubmitUS_ID(int list_seq) {
		return db.selectList("Hw.allSubmitUS_ID", list_seq);
	}

	public Hw_SubmitDTO mySubmitDTO(Hw_SubmitDTO dto) {
		return db.selectOne("Hw.mySubmitDTO", dto);
	}

	// =================================================NAV_PART_MySubmit
	// nav all list, cpage***************************************************
	public int getPageCount(String us_id) {
		return db.selectOne("Hw.countAllMySubmit", us_id);
	}

	public List<Hw_ViewDTO> mySubmitSelectByCpage(int cpage, int startRowNum, int endRowNum, String us_id) {
		Map<String, Object> param = new HashMap<>();
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);
		param.put("us_id", us_id);
		return db.selectList("Hw.mySubmitSelectByCpage", param);
	}

	// ==============================================NAV_PART_SEARCH_LIST
	// nav search, cpage************************************
	// overload from nav all list
	public int getAllPageCount(int list_seq) {
		return db.selectOne("Hw.getAllPageCount", list_seq);
	}

	public int getSearchPageCount(int list_seq, SearchDTO dto) {
		Map<String, Object> param = new HashMap<>();
		param.put("dto", dto);
		param.put("list_seq", list_seq);
		return db.selectOne("Hw.countSubmitBySearch", dto);
	}

	public List<Hw_SubmitDTO> submitSelectByCpage(int list_seq, SearchDTO dto, int cpage, int startRowNum,
			int endRowNum) {
		Map<String, Object> param = new HashMap<>();
		param.put("dto", dto);
		param.put("list_seq", list_seq);
		param.put("startRowNum", startRowNum);
		param.put("endRowNum", endRowNum);

		if (dto.getS().contentEquals("t")) {
			return db.selectList("Hw.submitSelectByCpageSearch", param);
		}
		return db.selectList("Hw.submitSelectByCpage", param);
	}

	// ==============================================[PROF]profHwListView.jsp
	public int addHwList(Hw_ListDTO dto) {
		Map<String, Object> param = new HashMap<>();
		param.put("title", dto.getTitle());
		param.put("contents", dto.getContents());
		param.put("end_date", dto.getEnd_date());
		param.put("subject_seq", dto.getSubject_seq());
		return db.insert("Hw.addHwList", param);
	}

	public int modiHwList(Hw_ListDTO dto) {
		Map<String, Object> param = new HashMap<>();
		param.put("title", dto.getTitle());
		param.put("contents", dto.getContents());
		param.put("end_date", dto.getEnd_date());
		param.put("seq", dto.getSeq());
		return db.insert("Hw.modiHwList", param);
	}

	public int delHwList(int seq) {
		return db.delete("Hw.delHwList", seq);
	}

	// ==============================================[PROF]pHwSubmitView.jsp
	public Hw_ListDTO getHwListOne(int list_seq) {
		return db.selectOne("Hw.getHwListOne", list_seq);
	}

	// -------------------------------------------------------------------------
	// SUBMIT CRUD
	// ==============================================hwSubmitCreate.jsp
	public int insertSubmit(Hw_SubmitDTO dto) {
		return db.insert("Hw.insertSubmit", dto);
	}

	public int selectSeq() {
		return db.selectOne("Hw.selectSeq");
	}

	// ==============================================hwSubmitRead.jsp / READ
	// 글읽기 페이지의 정보를 seq로 가져온다.
	public Hw_SubmitDTO getHwSubmitBySeq(int seq) {
		return db.selectOne("Hw.getHwSubmitBySeq", seq);
	}

	// ==============================================hwSubmitUpdate.jsp / UPDATE
	// 과제 수정시 제목이랑 내용을 ajax로 불러오기
	public String getUpdateContents(int seq) {
		return db.selectOne("Hw.getUpdateContents", seq);
	}

	// 과제제출 정보를 수정한다.
	public int updateSubmit(Hw_SubmitDTO dto) {
		return db.update("Hw.updateSubmit", dto);
	}

	// ==============================================hwSubmitDelete.jsp / DELETE
	// 과제제출 글을 삭제한다.
	public int deleteSubmit(int seq) {
		return db.delete("deleteSubmit", seq);
	}

	// ===============================================2020 12 24 이후 추가
	public int increaseView(int seq) {
		return db.update("Hw.increaseView", seq);
	}

	// ============================================== pHwSubmitView.jsp
	/*
	 * public List<Hw_SubmitDTO> getNotice(String prof_id, int list_seq) {
	 * Map<String, Object> param = new HashMap<>(); param.put("prof_id", prof_id);
	 * param.put("list_seq", list_seq); return db.selectList("Hw.getNotice", param);
	 * }
	 */

//	NEW VERSION OF NOTICE
	public List<Hw_SubmitDTO> getNoticeBySeq(int list_seq) {
		return db.selectList("Hw.getNoticeBySeq", list_seq);
	}

	// Students list of this Hw_List : Std_ViewDTO
	public List<Std_ViewDTO> stdInThisHw(int class_code) {
		return db.selectList("Hw.stdInThisHw", class_code);
	}

	// =================================================pHwListView.jsp
	// How many submits in this Hw_list ?
	public int howManySubmits(int list_seq, String writer_id) {
		Map<String, Object> param = new HashMap<>();
		param.put("list_seq", list_seq);
		param.put("writer_id", writer_id);
		return db.selectOne("Hw.howManySubmits", param);
	}

	// count total students in this class
	public int getTotalStd(int class_code) {
		return db.selectOne("Hw.getTotalStd", class_code);
	}

}
