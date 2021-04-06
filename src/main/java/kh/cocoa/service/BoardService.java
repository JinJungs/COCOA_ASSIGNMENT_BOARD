package kh.cocoa.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kh.cocoa.dao.BoardDAO;
import kh.cocoa.dto.BoardDTO;
import kh.cocoa.statics.BoardConfigurator;

@Service
public class BoardService {
	
	
	@Autowired
	private BoardDAO bdao;
	
	public BoardDTO selectOne(int seq) {
		return bdao.selectOne(seq);
	}
	
	public String getModBoardContents(int seq) {
		return bdao.getModBoardContents(seq);
	}
	
	public int modBoardContents(BoardDTO dto) {
		return bdao.modBoardContents(dto);
	}
	
	public int delBoard(int seq) {
		System.out.println("DelBoard : {}  " +  seq);
		return bdao.delBoard(seq);
	}
	
	public int isAuthBoard(BoardDTO dto) {
		return bdao.isAuthBoard(dto);
	}
	
	public int isExistReadpage(int seq) {
		return bdao.isExistReadpage(seq);
	}
	
	public String getWriterId(int seq) {
		return bdao.getWriterId(seq);
	}


	//효경
	public List<BoardDTO> getListBySearch(int cpage, String search){
	      List<BoardDTO> list = bdao.getListBySearch();
	      List<BoardDTO> searchList2 = new ArrayList<BoardDTO>();
	      
	      //태그 자르기
	      list = getOnlyContents(list);
	      //검색결과
	      list = getSearchList(list, search);
	      //길이 자르기
	      list = getShortVer(list);
	      
	      int startRowNum = (cpage-1) * BoardConfigurator.recordCountPerPage;
	      int endRowNum = startRowNum + BoardConfigurator.recordCountPerPage - 1; 
	      
	      //마지막 페이지 출력시 endRowNum 제한
	      int totalCount = getSearchCount(search);
	      if(endRowNum >= totalCount) {
	         endRowNum = totalCount-1; 
	      }
	      for(int i=startRowNum; i<=endRowNum; i++) {
	         searchList2.add(list.get(i));   
	      }

	      return searchList2;
	   }
	   
	   //태그자르기
	   public List<BoardDTO> getOnlyContents(List<BoardDTO> list){
	      for(int i=0; i<list.size(); i++) {
	         String contents = list.get(i).getContents();

	         //&lt, &gt를 < >로 문자 바꾸기
	         contents = contents.replace("&lt", "<");
	         contents = contents.replace("&gt", ">");
	         //엔터 나오게하고 태그 자르기
	         contents = contents.replace("/<br/>/ig", "\n");
	         contents = contents.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
	         list.get(i).setContents(contents);
	      }
	      return list;
	   }

	   //검색한 리스트 받기
	   public List<BoardDTO> getSearchList(List<BoardDTO> list, String search) {
	      List<BoardDTO> searchList = new ArrayList<BoardDTO>();
	      for(int i=0; i<list.size(); i++) {
	         String title = list.get(i).getTitle();
	         String contents = list.get(i).getContents();

	         if(contents.contains(search) || title.contains(search)) {
	            searchList.add(list.get(i));
	         }
	      }
	      return searchList;
	   }
	   
	 //길이 자르기
	      public List<BoardDTO> getShortVer(List<BoardDTO> list){
	         for(int i=0; i<list.size(); i++) {
	            String title = list.get(i).getTitle();
	            String contents = list.get(i).getContents();
	            if(title.length() > 30) {
	               title = title.substring(0, 30) + "...";
	               list.get(i).setTitle(title);
	            }
	            if(contents.length() > 80) {
	               contents = contents.substring(0, 80) + "...";
	               list.get(i).setContents(contents);
	            }
	         }
	         return list;
	      }
	   
	   public int getSearchCount(String search) {
	      List<BoardDTO> list = bdao.getListBySearch();
	      list = getOnlyContents(list);
	      list = getSearchList(list, search);
	      return list.size();
	   }

	   public String getSearchNavi(int cpage, String search) {
	      int recordTotalCount = getSearchCount(search);
	      int pageTotalCount = recordTotalCount/BoardConfigurator.recordCountPerPage;
	      if(recordTotalCount%BoardConfigurator.recordCountPerPage != 0) {
	         pageTotalCount++;
	      }
	      //보안코드
	      if(cpage < 0) {
	         cpage = 1;
	      }else if(cpage>pageTotalCount) {
	         cpage = pageTotalCount;
	      }

	      int startNavi = (cpage-1)/BoardConfigurator.recordCountPerPage*BoardConfigurator.recordCountPerPage + 1;
	      int endNavi = startNavi + BoardConfigurator.recordCountPerPage -1;
	      if(endNavi > pageTotalCount) {
	         endNavi = pageTotalCount;
	      }

	      boolean needPrev = true;
	      boolean needNext = true;

	      if(startNavi == 1) {needPrev = false;}
	      if(endNavi == pageTotalCount) {needNext = false;}

	      StringBuilder sb = new StringBuilder();
	      if(needPrev) {
	         sb.append("<a href=/board/toBoardHome.board?cpage="+(startNavi-1)+"&search="+search+"><    </a>");
	      }
	      for(int i=startNavi; i<=endNavi; i++) {
	         sb.append("<a href=/board/toBoardHome.board?cpage="+i+"&search="+search+"> " +i + " </a>");
	      }if(needNext) {
	         sb.append("<a href=/board/toBoardHome.board?cpage="+(endNavi+1)+"&search="+search+">   > </a>");
	      }

	      return sb.toString();
	   }

	   //view_count올리기
	   public void viewCountUp(int seq) {
	      bdao.viewCountUp(seq);
	   }
	   public BoardDTO getPage(int seq) {
	      return bdao.getPage(seq);
	   }

	   //글쓰기, 파일
	   public int writing(int seqN, BoardDTO dto) {
	      return bdao.writing(seqN, dto);
	   }
	   public int getSeq() {
	      return bdao.getSeq();
	   }

	 //지영씨
		public List<BoardDTO> getMyBoard(String id){
			List<BoardDTO> list = bdao.getMyBoard(id);
			list = getOnlyContents(list);
			list = getOnlyContents(list);
			list = getShortVer(list);
			
			return list;
		}

	//내 대댓글이 있는 게시글 seq받아오기
	public List<Integer> getBoardSeq(String writer){
		return bdao.getBoardSeq(writer);
	}

	//댓글, 대댓글 리스트 받아오기
		public List<BoardDTO> getBoardList(List<Integer> seqList){
			List<BoardDTO> list = bdao.getBoardList(seqList);
			list = getOnlyContents(list);
			list = getShortVer(list);
			return list;
		}


}
