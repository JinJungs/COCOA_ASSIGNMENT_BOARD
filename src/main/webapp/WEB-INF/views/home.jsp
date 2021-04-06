<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
	<title>Home</title>
</head>
<body>
<div>
   <input type=button value="보드 홈으로" id="toBoardHome">
   </div>
   <script>
         let toBoardHome = document.getElementById("toBoardHome");
         toBoardHome.onclick = function() {
         location.href = "/board/toBoardHome.board?cpage=1&search=";
      }
   </script>
</body>
</html>
