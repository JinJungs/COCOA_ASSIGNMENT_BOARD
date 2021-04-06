<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
<script
   src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<style>

.notice-container {
   width: 100%;
}

.notice-list {
   padding: 10x;
}

.notice-block {
   border-top: 0.5px solid lightgray;
   border-right: 0.5px solid lightgray;
   border-radius: 15px 15px 0 0;
   padding: 20px;
}

.notice-block p {
   margin: 0;
}

.notice-block a {
   text-decoration: none;
   color: black;
}

.notice-title {
   font-size: 1.3rem;
   margin-left: 5px;
}

.notice-contents {
   padding: 5px;
}

ul.tabs{
   list-style: none;
}
ul.tabs li{
   background: none;
   color: #222;
   display: inline-block;
   padding: 10px 20px;
   cursor: pointer;
}

ul.tabs li.current{
   background: #ededed;
   border-bottom: 2px solid lightgray;
   color: #222;
}

.tab-content{
   display: none;
}

.tab-content.current{
   display: inherit;
}

.notice-contents{
   margin-left: 10px;
   margin-right: 10px;
}

.notice-contents > a{
   color: gray;
}
</style>
</head>
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>내가 쓴 글</div>
      <div class="line"></div>
   </header>
   <main>
      <div class="notice-container">
         <ul class="tabs">
            <li class="tab-link current" data-tab="tab-1">게시글</li>
            <li class="tab-link" data-tab="tab-2">댓글</li>
         </ul>

         <div id="tab-1" class="tab-content current">
            <div class=notice-list id=myboard>
               <c:forEach var="i" items="${mylist }">
                  <div class=notice-block>
                     <div class=notice-title>
                        <a href="/board/readPage.board?seq=${i.seq}&cpage=1&search=">${i.title }</a>
                     </div>
                     <div class="notice-contents notice-contents${i.seq }">
                        <a href="/board/readPage.board?seq=${i.seq}&cpage=1&search=">${i.contents }</a>
                     </div>
                  </div>
               </c:forEach>
            </div>
         </div>
         <div id="tab-2" class="tab-content">
            <div class=notice-list id=mycomment>
               <c:forEach var="i" items="${commentList }">
                  <div class=notice-block>
                     <div class=notice-title>
                        <a href="/board/readPage.board?seq=${i.seq}&cpage=1&search=">${i.title }</a>
                     </div>
                     <div class="notice-contents notice-contents${i.seq }">
                        <a href="/board/readPage.board?seq=${i.seq}&cpage=1&search=">${i.contents }</a>
                     </div>
                  </div>
               </c:forEach>
            </div>
         </div>
         <script>
            $(document).ready(function() {

               $('ul.tabs li').click(function() {
                  var tab_id = $(this).attr('data-tab');

                  $('ul.tabs li').removeClass('current');
                  $('.tab-content').removeClass('current');

                  $(this).addClass('current');
                  $("#" + tab_id).addClass('current');
               })

            })
         </script>
      </div>
   </main>
</body>
</html>