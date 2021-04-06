package kh.cocoa.service;

import java.sql.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.HwDAO;
import kh.cocoa.dto.Hw_ListDTO;
import kh.cocoa.dto.Hw_SubmitDTO;
import kh.cocoa.dto.Hw_ViewDTO;
import kh.cocoa.dto.SearchDTO;
import kh.cocoa.dto.Std_ViewDTO;
import kh.cocoa.dto.SubjectDTO;
import kh.cocoa.statics.HwConfigurator;

@Service
public class HwService {
	@Autowired
	HwDAO hdao;

	// ============================================COMMON
	// **************사이드바에 과목이름을 불러온다 **************
	public List<SubjectDTO> getSubjectInfo(String us_id){
		return hdao.getSubjectInfo(us_id);
	}	
	
	public int hwDidIAssigned(String us_id, int list_seq) {
		return hdao.hwDidIAssigned(us_id, list_seq);
	}
	

	// ===========================================dashBoard.jsp
	// 과목의 정보를 불러옴
	public List<SubjectDTO> subjectListById(String us_id) {
		return hdao.subjectListById(us_id);
	}

	// 컬러를 변경후 저장
	public int updateColor(int seq, String color) {
		return hdao.updateColor(seq, color);
	}

	// 내가 제출한 과제의 정보를 불러옴
	public List<Hw_ViewDTO> my_hw_submitList() {
		return hdao.my_hw_submitList();
	}

	// [강사] - 과목 생성
	public int createSubject(SubjectDTO sdto) {
		return hdao.createSubject(sdto);
	}

	// [강사] - 과목 수정
	public int updateSubject(SubjectDTO sdto) {
		System.out.println("수정 : 서비스 도착!");
		return hdao.updateSubject(sdto);
	}

	// [강사] - 과목 삭제
	public int deleteSubject(int seq) {
		System.out.println("삭제 : 서비스 도착!");
		return hdao.deleteSubject(seq);
	}

	// =============================================myHwSubmitView.jsp
	// 과제의 제출날짜를 불러옴
	public Date getWrite_date(String us_id, int list_seq) {
		return hdao.getWrite_date(us_id, list_seq);
	}

	// =============================================hwListView.jsp
	public Hw_ViewDTO getHwViewBySubjectSeq(int subject_seq) {
		return hdao.getHwViewBySubjectSeq(subject_seq);
	}

	public String getSubjectContents(int subject_seq) {
		return hdao.getSubjectContents(subject_seq);
	}

	public List<Hw_ListDTO> hwListBySubject(int subject_seq) {
		List<Hw_ListDTO> list = hdao.hwListBySubject(subject_seq);
		  //제목/본문 길이 자르기
		  for(int i=0; i<list.size(); i++) {
		     String title = list.get(i).getTitle();

		     if(title.length()>30) {
		        title=title.substring(0, 30) + "...";
		        list.get(i).setTitle(title);
		     }
		  }
		return list;
	}

	// ============================================hwSubmitView.jsp
	public List<Hw_SubmitDTO> getSubmitList(int list_seq) {
		return hdao.getSubmitList(list_seq);
	}

	public Hw_ViewDTO getHwViewByListSeq(int list_seq) {
		return hdao.getHwViewByListSeq(list_seq);
	}

	// find all submitseq in the hw_list on this page
	public List<String> allSubmitUS_ID(int list_seq) {
		return hdao.allSubmitUS_ID(list_seq);
	}

	public Hw_SubmitDTO mySubmitDTO(Hw_SubmitDTO dto) {
		return hdao.mySubmitDTO(dto);
	}

	/*
	 * // pin professor's notice public List<Hw_SubmitDTO> getNotice(String prof_id,
	 * int list_seq) { return hdao.getNotice(prof_id, list_seq); }
	 */
	public List<Hw_SubmitDTO> getNoticeBySeq(int list_seq) {
		return hdao.getNoticeBySeq(list_seq);
	}

	// ==========================================NAV_PART_MySUBMIT
	// nav all list : mySubmit, cpage**********************************************
	public int getPageCount(String us_id) {
		return hdao.getPageCount(us_id);
	}

	public String getNavi(int currentPage, String us_id) {
		int recordTotalCount = this.getPageCount(us_id);
		int pageTotalCount;
		if (recordTotalCount % HwConfigurator.recordCountPerPage > 0) {
			pageTotalCount = recordTotalCount / HwConfigurator.recordCountPerPage + 1;
		} else {
			pageTotalCount = recordTotalCount / HwConfigurator.recordCountPerPage;
		}
		if (currentPage < 1) {
			currentPage = 1;
		} else if (currentPage > pageTotalCount) {
			currentPage = pageTotalCount;
		}
		int startNavi = (currentPage - 1) / HwConfigurator.naviCountPerPage * HwConfigurator.naviCountPerPage + 1;
		int endNavi = startNavi + HwConfigurator.naviCountPerPage - 1;
		if (endNavi > pageTotalCount) {
			endNavi = pageTotalCount;
		}
		boolean needPrev = true;
		boolean needNext = true;
		if (startNavi == 1) {
			needPrev = false;
		}
		if (endNavi == pageTotalCount) {
			needNext = false;
		}
		StringBuilder sb = new StringBuilder();
		if (needPrev) {
			sb.append("<a href='/hw/myHwSubmitView.hw?cpage=" + (startNavi - 1) + "'>< </a>");
		}
		for (int i = startNavi; i <= endNavi; i++) {
			sb.append("<a href='/hw/myHwSubmitView.hw?cpage=" + i + "'>" + i + " </a>");
		}
		if (needNext) {
			sb.append("<a href='/hw/myHwSubmitView.hw?cpage=" + (endNavi + 1) + "'> ></a>");
		}
		return sb.toString();
	}

	public List<Hw_ViewDTO> mySubmitSelectByCpage(int cpage, String us_id) {
		int startRowNum = (cpage - 1) * HwConfigurator.recordCountPerPage + 1;
		int endRowNum = startRowNum + HwConfigurator.recordCountPerPage - 1;
		return hdao.mySubmitSelectByCpage(cpage, startRowNum, endRowNum, us_id);
	}
	// ==========================================NAV_PART_ALL_LIST_MySUBMIT

	// =========================================NAV_PART_SEARCH_LIST_START
	// nav search, submit, cpage***********************************************
	// overloaded from nav all list
	public int getSearchPageCount(int list_seq, SearchDTO dto) {
		if (dto.getS().contentEquals("t")) {
			return hdao.getSearchPageCount(list_seq, dto);
		} else {
			return hdao.getAllPageCount(list_seq);
		}
	}

	public String getNavi(int currentPage, SearchDTO dto, int list_seq, String role) {
		int recordTotalCount = this.getSearchPageCount(list_seq, dto);

		int pageTotalCount;
		if (recordTotalCount % HwConfigurator.recordCountPerPage > 0) {
			pageTotalCount = recordTotalCount / HwConfigurator.recordCountPerPage + 1;
		} else {
			pageTotalCount = recordTotalCount / HwConfigurator.recordCountPerPage;
		}
		if (currentPage < 1) {
			currentPage = 1;
		} else if (currentPage > pageTotalCount) {
			currentPage = pageTotalCount;
		}
		int startNavi = (currentPage - 1) / HwConfigurator.naviCountPerPage * HwConfigurator.naviCountPerPage + 1;
		int endNavi = startNavi + HwConfigurator.naviCountPerPage - 1;
		if (endNavi > pageTotalCount) {
			endNavi = pageTotalCount;
		}
		boolean needPrev = true;
		boolean needNext = true;
		if (startNavi == 1) {
			needPrev = false;
		}
		if (endNavi == pageTotalCount) {
			needNext = false;
		}

		StringBuilder sb = new StringBuilder();
		if (role.contentEquals("1")) {
			if (dto.getS().contentEquals("t")) {
				if (needPrev) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (startNavi - 1)
							+ "&searchBy=" + dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'>< </a>");
				}
				for (int i = startNavi; i <= endNavi; i++) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + i + "&searchBy="
							+ dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'>" + i + " </a>");
				}
				if (needNext) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (endNavi + 1) + "&searchBy="
							+ dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'> ></a>");
				}
				return sb.toString();
			} else {
				if (needPrev) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (startNavi - 1)
							+ "&s=x'>< </a>");
				}
				for (int i = startNavi; i <= endNavi; i++) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + i + "&s=x'>" + i + " </a>");
				}
				if (needNext) {
					sb.append("<a href='/hw/hwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (endNavi + 1)
							+ "&s=x'> ></a>");
				}
				return sb.toString();
			}
		} else if (role.contentEquals("2")) {
			if (dto.getS().contentEquals("t")) {
				if (needPrev) {
					sb.append("<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (startNavi - 1)
							+ "&searchBy=" + dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'>< </a>");
				}
				for (int i = startNavi; i <= endNavi; i++) {
					sb.append("<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + i + "&searchBy="
							+ dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'>" + i + " </a>");
				}
				if (needNext) {
					sb.append("<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (endNavi + 1)
							+ "&searchBy=" + dto.getSearchBy() + "&search=" + dto.getSearch() + "&s=t'> ></a>");
				}
				return sb.toString();
			} else {
				if (needPrev) {
					sb.append("<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (startNavi - 1)
							+ "&s=x'>< </a>");
				}
				for (int i = startNavi; i <= endNavi; i++) {
					sb.append(
							"<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + i + "&s=x'>" + i + " </a>");
				}
				if (needNext) {
					sb.append("<a href='/pHw/pHwSubmit.hw?list_seq=" + list_seq + "&cpage=" + (endNavi + 1)
							+ "&s=x'> ></a>");
				}
				return sb.toString();
			}
		} else {
			return "role code error";
		}
	}

	public List<Hw_SubmitDTO> submitSelectByCpage(int list_seq, SearchDTO dto, int cpage) {
		int startRowNum = (cpage - 1) * HwConfigurator.recordCountPerPage + 1;
		int endRowNum = startRowNum + HwConfigurator.recordCountPerPage - 1;
		return hdao.submitSelectByCpage(list_seq, dto, cpage, startRowNum, endRowNum);
	}
	// ======================================NAV_PART_SEARCH_LIST_END

	// =======================================[PROF]profHwListView.jsp
	public int addHwList(Hw_ListDTO dto) {
		return hdao.addHwList(dto);
	}

	public int modifHwList(Hw_ListDTO dto) {
		return hdao.modiHwList(dto);
	}

	public int delHwList(int seq) {
		return hdao.delHwList(seq);
	}

	public Hw_ListDTO getHwListOne(int list_seq) {
		return hdao.getHwListOne(list_seq);
	}
	// ======================================NAV_PART_SEARCH_LIST_END

	// -------------------------------------------------------------------------
	// SUBMIT CRUD
	// ==============================================hwSubmitCreate.jsp / CREATE
	public int insertSubmit(Hw_SubmitDTO dto) {
		return hdao.insertSubmit(dto);
	}

	public int selectSeq() {
		return hdao.selectSeq();
	}

	// ==============================================hwSubmitRead.jsp / READ
	// 글읽기 페이지의 정보를 seq로 가져온다.
	public Hw_SubmitDTO getHwSubmitBySeq(int seq) {
		return hdao.getHwSubmitBySeq(seq);
	}

	// ==============================================hwSubmitUpdate.jsp / UPDATE
	// 과제 수정시 제목이랑 내용을 ajax로 불러오기
	public String getUpdateContents(int seq) {
		return hdao.getUpdateContents(seq);
	}

	// 과제제출 글을 수정한다.
	public int updateSubmit(Hw_SubmitDTO dto) {
		return hdao.updateSubmit(dto);
	}

	// ==============================================hwSubmitDelete.jsp / DELETE
	// 과제제출 글을 삭제한다.
	public int deleteSubmit(int seq) {
		return hdao.deleteSubmit(seq);
	}

	// ==========2020-12-24 이후 추가할
	// 것들=====================================================
	// ==============================================hwSubmitRead.jsp / READ
	// 조회수 카운트
	public int increaseView(int seq) {
		return hdao.increaseView(seq);
	}

	// ==============================================/ pHwSubmitView.jsp
	// student's information + check if they submited : std_submit
	public List<Std_ViewDTO> stdInThisHw(int class_code) {
		return hdao.stdInThisHw(class_code);
	}

	// ==============================================pHwListView.jsp
	// get submitted counts in this Hw_List
	public int howManySubmits(int list_seq, String writer_id) {
		return hdao.howManySubmits(list_seq, writer_id);
	}

	// count total students in this class
	public int getTotalStd(int class_code) {
		return hdao.getTotalStd(class_code);
	}

}
