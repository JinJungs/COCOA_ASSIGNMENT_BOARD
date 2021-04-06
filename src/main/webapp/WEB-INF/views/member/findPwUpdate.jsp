<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
</head>
<body>
   <c:if test="${updatePw>0 }">
      <script>
         alert("비밀번호 변경 완료! 다시 로그인 해주세요");
            location.href="/";
      </script>
   </c:if>
</body>
</html>