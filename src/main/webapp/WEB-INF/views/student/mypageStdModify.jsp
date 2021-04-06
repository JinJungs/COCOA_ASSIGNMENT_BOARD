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
<link rel="stylesheet" href="/resources/css/member.css" type="text/css"
   media="screen" />
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<style>
	.pwChk, .getPwChkResult, .newPwChk, .emailChk, .phoneChk{
		font-size: 0.7rem;
	}
	#cancelModPw{
		padding-bottom:2px;
		padding-top:2px;
		margin-right:3px
		
	}
</style>
</head>
<body>

   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>학생 마이페이지 수정</div>
      <div class="line"></div>
   </header>
   <main>
      <div class="myModif_bigcontainer">
         <form action="/files/upload.files" method="post" id="fileform"
            class="myModif_left">
            <div class="profile">
               <div id="image_container">
                  <!-- Defualt 이미지 -->
                  <img id="img" src="${imgurl}" border="0"
                     style="WIDTH: 150px; HEIGHT: 150px">
               </div>
               <br>
               <div class="my_upload" id="uploadcontainer">
                  <!-- 이미지 업로드 후, 화면에 사진 보이게 하는 이벤트-->
                  <input type="file" name="upload" accept="image/*"
                     onchange="setThumbnail(event);" class="uploadInput white" />

                  <!-- 이미지 upload 버튼 -->
                  <div class="uploadBtn">
                     <div class="whiteColor smallfont">150x150 사진을 사용해주세요.</div>
                     <input type="button" id="upload" value="업로드"
                        onclick="fn_fileupload()">
                  </div>
               </div>
            </div>
         </form>

         <form action="stdModifyDone.users" method="post" id="modForm"
           style="WIDTH: 60%; padding-right: 20px;">
            <input type="hidden" name="us_id" value="${list.us_id}"
               style="WIDTH: 60%;">
            <div class="mypageModif_container">
               <div class="txt1"><div class="mark"></div>아이디 :</div>
               <div class="txt2"><div class="mark"></div>현재 비밀번호 :</div>
               <div class="txt3"></div>
               <div class="txt4"></div>
               <div class="txt5"><div class="mark"></div>이름 :</div>
               <div class="txt6"><div class="mark"></div>번호 :</div>
               <div class="txt7"><div class="mark"></div>이메일 :</div>
               <div class="txt8"><div class="mark"></div>담당 클래스 :</div>
               <div class="input1">${list.us_id }</div>
               <div class="input2">
                  <input id="pw" type="password"><br><span
                     class="getPwChkResult"></span>
               </div>
               <div class="input3">
                  <button type="button" class="common" id="btnmodpw"
                     onclick="fn_modpw()">비밀번호 변경</button>
               </div>
               <div class="input4"></div>
               <div class="input5">${list.name}</div>
               <div class="input6">
                  <input type="text" id="phone" name="phone" value="${list.phone}"
                     style="width: 100%" /> <span class="phoneChk"></span>
               </div>
               <input type="hidden" id="curPwChk" value="">
               <div class="input7">
                  <input type="text" id="email" name="email" value="${list.email}"
                     style="width: 100%" /> <span class="emailChk"></span>
               </div>
               <div class="input8">${className}</div>
            </div>
            <div class="foot">
               <button type="button" id="modify" class="common" onclick="fn_checkAll()">정보수정</button>
               <button type="button" id="back" class="common"
                  onclick="backtomod()">뒤로가기</button>
            </div>
         </form>
      </div>
   </main>
</body>
<!-- 프로파일 이미지 업로드 이벤트 -->
<script type="text/javascript">
   function backtomod(){
      location.href="/users/mypageStd.users";
   }

   function setThumbnail(event) {
      var reader = new FileReader();
      reader.onload = function(event) {
         $("#img").attr("src",event.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
   }
   function fn_fileupload(seq){
   $.ajax({
   data :new FormData($("#fileform")[0]),
   enctype: "multipart/form-data",
   type :"POST",
   url : "/files/upload.files",
   contentType : false,
   processData : false,
   success : function(data){
      if(data=="Success"){
         alert("업로드 완료");
      }
   }
   });
}
   
   function fn_modpw(){
	      $("#modify").attr("onclick","fn_checkAllwithPw()");
	      $(".txt3").text("새 비밀번호 :");
	      $(".txt4").text("비밀번호 확인 : ");
	      $(".btnmodpw").text("");
	      $(".input3").html("<input id=pw2 type=password name=pw><br><span class=newPwChk></span>"); 
	      $(".input4").append("<input id=pw3 type=password>&nbsp<button type=button onclick=fn_cancelModPw() id=cancelModPw>취소</button><br><span class=pwChk></span>"); 
	   }
	   function fn_cancelModPw(){
	      $(".txt3").text("");
	      $(".txt4").text("");
	      $(".input3").html("");
	      $(".input3").html("<button type=button class=btnmodpw onclick=fn_modpw()>비밀번호 변경</button>");
	      $(".input4").html("");
	      $("#modify").attr("onclick","fn_checkAll()");
	   }
	   $(document).on("blur","#pw",function(){
	      var pw =$("#pw").val();
	      var us_id=$(".input1").text();
	      if(($("#pw").val()!="")){
	      $.ajax({
	         data :{pw,us_id},
	         type :"POST",
	         url : "/users/checkCurPw.users",
	         success : function(data){
	            if(data=="success"){
	               $(".getPwChkResult").text("비밀번호가 일치합니다.");
	               $(".getPwChkResult").css("color","blue");
	               $("#curPwChk").val("true");
	             
	            }else{
	               $(".getPwChkResult").text("비밀번호가 일치하지않습니다.");
	               $(".getPwChkResult").css("color","red");
	               $("#curPwChk").val("");
	               $("#pw").val("");
	            }
	            }
	         });
	      }else{
	      $(".getPwChkResult").text("비밀번호를 입력해주세요.");
	      }
	   })
	   
	      $(document).on("blur","#pw2",function(){
	      var pwCheck = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);   
	      if(($("#pw2").val()!="")){
	         if($("#pw").val()==$("#pw2").val()){
	         $(".newPwChk").css("color","red");
	   
	         $(".newPwChk").text("현재 비밀번호와 같습니다.");
	         $("#pw2").val("");
	         return;
	         }   
	         if(!pwCheck.test($("#pw2").val())){
	            $(".newPwChk").css("color","red");
	         
	            $(".newPwChk").text("8~16자 영문 대 소문자, 숫자 특수문자를 사용하세요.");
	            $("#pw2").val("");
	         }else{
	            $(".newPwChk").text("");
	         }
	      }else{
	         $(".newPwChk").text("");
	      }
	   });
	   
	      $(document).on("blur","#pw3",function(){
	   if($("#pw3").val()!=""){
	        if($('#pw2').val() != $('#pw3').val()){
	          if($('#pw3').val()!=''){
	                $(".pwChk").css("color","red");
	          
	                  $(".pwChk").text("비밀번호가 일치하지 않습니다.");
	                $('#pw3').val('');
	                 $('#pw3').focus();
	                }
	            }else{
	                $(".pwChk").css("color","blue");
	             
	                  $(".pwChk").text("비밀번호가 일치합니다.");
	              }
	      }else{
	         $(".pwChk").text("");
	      }
	   });
	      
	      
	     $("#phone").blur(function(){
	       var phonNumberCheck = RegExp(/^01[0179][0-9]{7,8}$/);
	       if(($("#phone").val()!="")){
	          if(!phonNumberCheck.test($("#phone").val())){
	             $(".phoneChk").text("01+(0179) 10~11자 숫자만 입력 가능합니다.");
	             $(".phoneChk").css("color","red");
	             $("#phone").val("");
	          }else{
	             $(".phoneChk").text("");
	          }
	       }else{
	          $(".phoneChk").text("");
	       }
	    });
	    
	    //이메일 확인
	      $("#email").blur(function(){
	      var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
	      if(($("#email").val()!="")){
	         if(!emailCheck.test($("#email").val())){
	            $(".emailChk").text("이메일 형식에 맞춰 입력해주세요.");
	            $(".emailChk").css("color","red");
	            $("#email").val("");
	         }else{
	            $(".emailChk").text("");
	         }
	      }else{
	         $(".emailChk").text("");
	      }
	   });
	    // 모든게 입력됐는지 검사.
	    function fn_checkAll(){
	       if($("#phone").val().length == 0){
	          $(".phoneChk").text("01+(0179) 10~11자 숫자만 입력 가능합니다.");
	         $(".phoneChk").css("color","red");
	          $("#phone").focus();
	          return;
	       }else if($("#email").val().length==0){
	          $(".emailChk").text("이메일 형식에 맞춰 입력해주세요.");
	         $(".emailChk").css("color","red");
	          $("#email").focus();
	          return 
	       }else if($("#pw").val().length==0){
	          $(".getPwChkResult").text("비밀번호를 입력해주세요.");
	          $(".getPwChkResult").css("color","red");
	          $("#pw").focus();
	          return ;
	       }else if($("#curPwChk").val()=="false"){
	          $(".getPwChkResult").text("비밀번호를 확인 해 주세요.");
	          $(".getPwChkResult").css("color","red");
	          $("#pw").focus();
	          return ;
	       }
	       if($("#curPwChk").val()=="true"){
	        	  $("#modForm").submit();
	       }
	    }
	    function fn_checkAllwithPw(){
	       if($("#phone").val().length == 0){
	          $(".phoneChk").text("01+(0179) 10~11자 숫자만 입력 가능합니다.");
	         $(".phoneChk").css("color","red");
	          $("#phone").focus();
	          return ;
	       }else if($("#email").val().length==0){
	          $(".emailChk").text("이메일 형식에 맞춰 입력해주세요.");
	         $(".emailChk").css("color","red");
	          $("#email").focus();
	          return ;
	       }else if($("#pw").val().length==0){
	          $(".getPwChkResult").text("비밀번호를 입력해주세요.");
	          $(".getPwChkResult").css("color","red");
	          $("#pw").focus();
	          return ;
	       }else if($("#pw2").val().length==0){
	          $(".newPwChk").text("비밀번호를 입력해주세요.");
	          $(".newPwChk").css("color","red");
	          $("#pw2").focus();
	          return ;
	       }else if($("#pw3").val().length==0){
	          $(".pwChk").text("비밀번호를 입력해주세요.");
	          $(".pwChk").css("color","red");
	          $("#pw3").focus();
	          return ;
	       }else if($("#curPwChk").val()=="false"){
	          $(".getPwChkResult").css("color","red");
	          $("#pw").focus();
	          return ;
	       }
	       if($("#curPwChk").val()=="true"){
	        	  $("#modForm").submit();
	       }
	    }

</script>
</html>