<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
   media="screen" />
<style>
	#modify{
		background-color: var(--bg-primary);
	}
</style>

</head>
<body>

   <c:if test="${login != null}">
      <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
      <header>
         <div>강사 마이페이지</div>
         <div class="line"></div>
      </header>
      <main>
         <div class="my_bigcontainer">
            <div class="my_left">
               <div class="profile">
                  <div id="image_container">
                        <img id="img" src="${imgurl}" style="WIDTH: 150px; HEIGHT: 150px">
                  </div>
               </div>
               <div class="my_btn">
                  <button class="common" id="modify">정보수정</button>
               </div>
            </div>
            <div class="mypage_container">
               <div class="txt1"><div class="mark"></div>아이디 :</div>
               <div class="txt2"><div class="mark"></div>이름 :</div>
               <div class="txt3"><div class="mark"></div>번호 :</div>
               <div class="txt4"><div class="mark"></div>이메일 :</div>
               <div class="txt5"><div class="mark"></div>담당 클래스:</div>
               <div class="input1">${list.us_id }</div>
               <div class="input2">${list.name }</div>
               <div class="input3">${list.phone }</div>
               <div class="input4">${list.email }</div>
               <div class="input5">${className}</div>
            </div>
         </div>
      </main>
   </c:if>
</body>

<!-- 프로파일 이미지 업로드 이벤트 -->
<script type="text/javascript">
   function setThumbnail(event) { 
      var reader = new FileReader();
      reader.onload = function(event) { 
         var img = document.createElement("img"); 
         img.setAttribute("src", event.target.result); 
         document.querySelector("div#image_container").appendChild(img); 
         
      }; 
      reader.readAsDataURL(event.target.files[0]);
   }
</script>

<!-- 정보수정 / 로그아웃 -->
<script>
   document.getElementById("modify").onclick = function() {
      location.href = "/users/mypageLecModify.users";
   }
</script>
<!-- 로그인 성공 여부 -->
<c:if test="${result!=null }">
   <c:choose>
      <c:when test="${result}">
         <script>
               alert("Login Success!")
            </script>
      </c:when>
      <c:otherwise>
         <script>
               alert("Login Failed!")
            </script>
      </c:otherwise>
   </c:choose>
</c:if>
</html>