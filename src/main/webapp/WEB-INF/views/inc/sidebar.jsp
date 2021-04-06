<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/resources/js/summernote/summernote-lite.js"></script>
<script src="/resources/js/summernote/lang/summernote-ko-KR.js"></script>
<link rel="stylesheet"
	href="/resources/css/summernote/summernote-lite.css">
</head>
<body>
   <nav class="nav-container">
      <ul class="nav-listContents">
         <li class="logo"><a tabindex="-1" href="/hw/" class="nav-a" id="commonHw"> <img src="/resources/img/icon_cocoa.png" alt="">
         </a></li>
         <li><a href="/users/mypage.users" class="nav-a"> <img src="/resources/img/icon_mypage.png" alt="">
         </a>
            <ul class="nav-listContentsSec">
               <li class="subTitle">My page</li>
               <li class=""><a href="/users/mypage.users" class="nav-a">내 정보 보기</a></li>
               <li class=""><a href="/users/myboard.users" class="nav-a">내가 쓴 글</a></li>
               <li class=""><a href="/users/withdraw.users" class="nav-a">회원탈퇴</a></li>
            </ul></li>
         <li><a href="/hw/" class="nav-a" id="commonHw2"> <img src="/resources/img/icon_homework.png" alt="">
         </a>
            <ul class="nav-listContentsSec" id="subTitle_subjectName">
               <li class="subTitle" >과제제출</li>
            </ul></li>
         <li><a href="/board/toBoardHome.board?cpage=1&search=" class="nav-a"> <img src="/resources/img/icon_board.png" alt="">
         </a></li>
         <li class="nav-logout"><a href="/users/logout.users" class="nav-a"> <img src="/resources/img/icon_logout.png" alt="">
         </a></li>
      </ul>
   </nav>

<script>
   $(document).ready(function() {
      $.ajax({
          data :{no : "no"},
           type :"POST",
           url : "/sidebar/getSubjectName.sidebar",   
           dataType : "json",
           success : function(data){
          var role = data[data.length-1].role;
         	
          if(role=="2"){
        	  $("#commonHw").attr("href","/pHw/"); $("#commonHw2").attr("href","/pHw/");
        	  $("#commonHw").attr("href","/pHw/");
          }

           for(var i=0; i<data.length-1; i++){            
	              if(role=="1"){
	            	  $('#subTitle_subjectName').append('<li class=""><a href="/hw/hwListView.hw?subject_seq='+data[i].seq+'" class="nav-a">'+data[i].name+'</a></li>')
	              }else{
	            	  $('#subTitle_subjectName').append('<li class=""><a href="/pHw/pHwListView.hw?subject_seq='+data[i].seq+'" class="nav-a">'+data[i].name+'</a></li>')
	              }
              }    
           }
      })
   });
   
   
</script>

</body>
</html>