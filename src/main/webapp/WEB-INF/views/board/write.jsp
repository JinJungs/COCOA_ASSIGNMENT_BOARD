<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
   media="screen" />
<link rel="stylesheet" href="/resources/css/board.css" type="text/css"
   media="screen" />

<!-- include libraries(jQuery, bootstrap) -->
<link
   href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css"
   rel="stylesheet">
<script
   src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script
   src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- include summernote css/js-->
<link
   href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.css"
   rel="stylesheet">
<script
   src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.js"></script>

<!-- include summernote-ko-KR -->
<script src="/resources/js//summernote/lang/summernote-ko-KR.js"></script>
<title>코코아</title>

<style>
.boardW-container {
   z-index: 10;
}

.note-toolbar {
   z-index: 20;
}

.nav-container {
   z-index: 100;
}
#summnernotecontents{
	width:905px;
}
#boardW-back, #boardW-submit{
	padding: 5px;
}
</style>
<script>
   $(document).ready(function() {
      $('#boardW-contents').summernote({
        height: 400,                 // 에디터 높이
        width: 905,
        minHeight: null,             // 최소 높이
        maxHeight: null,            // 최대 높이
        focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
        lang: "ko-KR",               // 한글 설정
        placeholder: '최대 2048자까지 쓸 수 있습니다',   //placeholder 설정
        toolbar: [
             // [groupName, [list of button]]
             ['fontname', ['fontname']],
             ['fontsize', ['fontsize']],
             ['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
             ['color', ['forecolor','color']],
             ['table', ['table']],
             ['para', ['ul', 'ol', 'paragraph']],
             ['insert',['picture','link']],
             ['view', ['codeview','fullscreen', 'help']]
           ],
         fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋음체','바탕체'],
         fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],   
  	 });
   });
</script>
</head>
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>와글와글 게시판 > 글쓰기</div>
      <div class="line"></div>
   </header>
   <main>
      <div class=boardW-container>
         <form action=/board/writing.board?cpage=1&search= method=post
            enctype="multipart/form-data">
            <div class="boardW-grid-container">
               <div class="boardW-title">
                  <input type=text name=title id=boardW-title maxlength=40
                     placeholder="제목을 입력하세요." required>
               </div>
               <div id="summnernotecontents">
                  <textarea class="boardW-contents" id=boardW-contents name=contents
                     required></textarea>
               </div>
               <div class="boardW-file">
                  <input type=button value=" + " id=filePlus>
               </div>
               <script>
                  let fileCount = document
                        .getElementsByClassName("addfile");
                  console.log(fileCount.length);
                  $("#filePlus").click(function() {
                     if(fileCount.length<5){
                        let fileBox = $("<input type=file name=file>");
                        fileBox.addClass("addfile");
                        fileBox.append("<br>");

                        $(".boardW-file").append(fileBox);
                     }else{
                        alert("파일은 최대 다섯개까지만 저장 가능합니다.");
                     }
                  });
               </script>
               <div class="boardW-submit">
            
                  <button class=common type=submit id=boardW-submit>저장 </button> <button
                     type=button class=common  id=boardW-back>목록으로</button>
               </div>
            </div>
            <script>
               let back = document.getElementById("boardW-back");
               back.onclick = function() {
                  location.href = "/board/toBoardHome.board?cpage=${cpage}&search=${search}";
               }
            </script>
         </form>
      </div>
   </main>
</body>
</html>