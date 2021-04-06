<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%><!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
</head>
<body>
<c:choose>
   <c:when test="${resultDel>0}">
      <script>
         alert("탈퇴 완료!");
         location.href="/";
      </script>
   </c:when>
   <c:otherwise>
      <script>
         alert("탈퇴 실패!");
         location.href="/";
      </script>
   </c:otherwise>
</c:choose>
</body>
</html>