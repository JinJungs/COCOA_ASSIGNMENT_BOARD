<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
</head>
<body>
   <form id="hidden" method="post">
      <input type="hidden" name="pw" id="val" />
   </form>
   <script>
      var prmt= prompt("정말 회원 탈퇴하시겠습니까? 탈퇴하시려면 비밀번호를 입력해주세요.");
      let val = document.getElementById("val");
      let hidden = document.getElementById("hidden");
      if(prmt!=null){
         val.value=prmt;
         hidden.action="/users/withdrawDupCheck.users";
         hidden.submit();
      }else{
         location.href="/";
      }
   </script>
</body>
</html>