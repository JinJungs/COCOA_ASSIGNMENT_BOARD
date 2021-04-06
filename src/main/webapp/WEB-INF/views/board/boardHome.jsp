<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<script
   src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>

<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
<link rel="stylesheet" href="/resources/css/board.css" type="text/css"
   media="screen" />
<style>
#boardH-writing{
   font-size: 0.8rem;   
}
#boardH-home{
   font-size: 0.8rem;   
}
</style>
</head>
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>와글와글 게시판</div>
      <div class="line"></div>
   </header>
   <main>

      <div class=boardH-container>
         <div class=boardH-block>
            <div class="boardH-grid-container">
               <div class="boardH-title"><b>제목 [글]</b></div>
               <div class="boardH-viewCount"><b>조회수</b></div>
               <div class="boardH-writer"><b>글쓴이</b></div>
            </div>
         </div>
         <c:forEach var="i" items="${list }">
            <div class=boardH-block>
               <div class="boardH-grid-container">
                  <div class="boardH-title">
                     <a
                        href="/board/readPage.board?seq=${i.seq}&cpage=${cpage}&search=${search}"><xmp>${i.title }</xmp>
                     </a>
                  </div>
                  <div class="boardH-viewCount">
                     <a
                        href="/board/readPage.board?seq=${i.seq}&cpage=${cpage}&search=${search}">${i.view_count}</a>
                  </div>
                  <div class="boardH-writer">
                     <a
                        href="/board/readPage.board?seq=${i.seq}&cpage=${cpage}&search=${search}">${i.writer_id }</a>
                  </div>
                  <div class="boardH-contents boardH-contents${i.seq }"></div>
                  <script>
                     var contentsText = '${i.contents}';
                     var abox = $("<a href=/board/readPage.board?seq=${i.seq}&cpage=${cpage}&search=${search}>");
                     abox.append(contentsText);
                     $(".boardH-contents${i.seq}").append(abox);
                  </script>

                  <div class="boardH-date">
                     <a
                        href="/board/readPage.board?seq=${i.seq}&cpage=${cpage}&search=${search}">${i.write_date }</a>
                  </div>
               </div>
            </div>
         </c:forEach>

         <button class=common id=boardH-writing>글쓰기</button>
         <button class=common id=boardH-home>홈으로</button>
         
         <div class=boardH-navi>${navi}</div>

         <div class=boardH-search>
            <form action=/board/toBoardHome.board?cpage=1 method=get>
               <input type=text name=search id=searchtext
                  placeholder="제목/내용을 입력하세요."> <input type=submit value=검색>
            </form>
         </div>
      </div>
      <script>
         //글쓰러가기
         let writing = document.getElementById("boardH-writing");
         writing.onclick = function() {
            location.href = "/board/toWrite.board?cpage=${cpage}&search=${search}";
         }
         //홈으로
         let home = document.getElementById("boardH-home");
         if(${role}==1){
            home.onclick = function() {
               location.href = "/hw/";
            }
         }else if(${role}==2){
           home.onclick = function() {
               location.href = "/pHw/";
            }
         }
      </script>
   </main>
</body>
</html>