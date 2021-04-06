<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<style>
.container {
   /* display: grid;*/
   padding: 10px;
   height: 600px;
}

.right {
   width: 73%;
   height: 98%;
   margin-left: 100px;
   
}
/*------------------  header----------------------------*/
.header {
   margin-top: 10px;
   margin-bottom: 10px;
   height: 10%;
   font-size: 30px;
   padding: 20px;
}

/*------------------  body----------------------------*/
.body {
   padding: 20px;
   width: 700px;
   height: 350px;
   border: 1px solid black;
}

.body1 {
   height: 15%;
}

.body2 {
   height: 15%;
}

.body3 {
   height: 15%;
}

.body4 {
   height: 15%;
}

.body5 {
   height: 15%;
}

.tab {
   height: 5%;
}

#input1 {
   width: 55%;
   font-size: 20px;
   text-align: left;
   border-top: none;
   border-left: none;
   border-right: none;
   border-bottom-color: black;
}

/*------------------  footer----------------------------*/
.footer {
   height: 10%;
   margin-top: 20px;
   text-align: center;
}
</style>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />

<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>

   <div class="container" id="container">
      <div class="right">
         <div class="header">탈퇴 안내</div>
         <div class="body" id="body" name="body">

            <div class="body1">
               <span id="input1">회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.</span> 
            </div>
            <div class="tab"></div>

            <div class="body2">
               <input type="checkbox" id="chk1"> <label>사용하고 계신
                  아이디(ID)는 탈퇴할 경우 재사용 및 복구가 불가능 합니다.</label>
            </div>
            <div class="tab"></div>

            <div class="body3">
               <input type="checkbox" id="chk2"> <label>탈퇴 후에는 동일한
                  아이디(ID)로 다시 가입할 수 없습니다.</label>
            </div>
            <div class="tab"></div>

            <div class="body4">
               <input type="checkbox" id="chk3"> <label>게시판형 서비스에
                  남아 있는 게시글은 탈퇴 후 삭제할 수 없습니다.</label>
            </div>
            <div class="tab"></div>

            <div class="body5" id="body5" name="body5">
            
               <input type="checkbox" id="chk4" name="chk4" >
               <label>안내 사항을 모두 확인하였으며, 이에 동의합니다.</label>
               
            </div>

            <div class="tab"></div>
         </div>

         <div class="footer">
            <button class=common id="ok" onclick="clickcr()">확인</button>
         </div>
      </div>
   </div>
</body>
<script> 
/*  체크박스에 모두 체크가 되어야지만 탈퇴 학인 버튼이 작동하게 하는 이벤트*/
function clickcr(){
   var chk1 = document.getElementById("chk1").checked;
   var chk2 = document.getElementById("chk2").checked;
   var chk3 = document.getElementById("chk3").checked;
   var chk4 = document.getElementById("chk4").checked;
   console.log(chk1);
   console.log(chk2);
   console.log(chk3);
   console.log(chk4);
   if(chk1==true&&chk2==true&&chk3==true&&chk4==true){
      location.href = "/users/withdrawPage.users";
   }else{
      alert("탈퇴 안내를 확인하고 동의해 주세요.");
   }
}
    

</script>


</html>