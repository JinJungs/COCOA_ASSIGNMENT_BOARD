<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cocoa</title>
<style type="text/css">
#summernote{
z-index: 10;
}
.note-toolbar {
z-index: 20;
}
.nav-container {
z-index: 100;
}
</style>
<!-- include stylesheet-->
<link rel="stylesheet" href="/resources/css/common.css" type="text/css" media="screen" />
<link rel="stylesheet" href="/resources/css/dashBoard.css" type="text/css" media="screen" />

<!-- include libraries(jQuery, bootstrap) -->
<link href="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.css" rel="stylesheet">
<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
<script src="http://netdna.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.js"></script>

<!-- include summernote css/js-->
<link href="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/summernote/0.8.11/summernote-bs4.js"></script>
<!-- include summernote-ko-KR -->
<script src="/resources/js/summernote-ko-KR.js"></script>
<!-- summernote -->
<script>
$(document).ready(function() {
    $(function() {
       var seq = $("#getseq").val();
       $.ajax({
          data :{seq},
          type :"POST",
          url : "/hw/getUpdateContents.hw",
          contentType : "application/x-www-form-urlencoded; charset=UTF-8",
          success : function(data){
             $("#getcontents").text("");
             $('#summernote').summernote({
                  height: 400,                 // 에디터 높이
                  width:942,
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
                   callbacks: {   //여기 부분이 이미지를 첨부하는 부분
                      onImageUpload : function(files) {
                         uploadSummernoteImageFile(files[0],this);
                      },
                      onPaste: function (e) {
                         var clipboardData = e.originalEvent.clipboardData;
                         if (clipboardData && clipboardData.items && clipboardData.items.length) {
                            var item = clipboardData.items[0];
                            if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
                               e.preventDefault();
                            }
                         }
                      }
                   }
             }).on("summernote.enter", function(we, e) { $(this).summernote("pasteHTML", "<br><br>"); e.preventDefault(); });
             $('#summernote').summernote('pasteHTML',data);
          }
       })
    });
 });


function uploadSummernoteImageFile(file ,editor){   // editor는 뭘 받는 거지 - 아 this를 보냈으니까 summernote editor 그 자체구나      
  var data = new FormData();
  data.append("file",file);
  $.ajax({
     data :data,
     type :"POST",
     url : "/files/uploadImageFile.files",   
     contentType : false,
     processData : false,
     dataType : "json",
     success : function(data){ // 여기도 원래는 url로 되어있음 - 해당파일의 url을 가져와 다시 summernote템플릿에 이미지 태그를 삽입
         $(editor).summernote('insertImage',data.url); 
     }
  })
}
</script>
</head>

<!----------------------------------------------- 메인 부분 시작 ----------------------------------------------->
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>${hwView.subject_name}- ${hwView.list_title}</div>
      <div class="line"></div>
   </header>
   <main>
      <div id=getcontents style="display: none">${dto.contents}</div>
      <!-- form의 name값으로 title,contents를 넘겨준다. (required 필수)-->
      <!-- file upload-->
      <!-- editor API - summer note -->
      <form action="/pHw/pUpdateSubmit.hw?list_seq=${hwView.list_seq}&sub_hw_seq=${dto.seq}" method="post" id="submitForm" enctype="multipart/form-data">
         <div class="titleContainer">
            <input type="text" placeholder="제목을 입력하세요." name="title" id="inputTitle" class="input_title" maxlength=80 value="${dto.title}">
         </div>
         <div class="empty">
            <!-- My modal -->
            <div class="filesContainer" id="filesContainer">
               <span class="files" id="files" onclick="modal('myModal')">첨부 파일</span>
               <div class="myModal" id="myModal">
                  <div class="fileList">
                     <div class="downloadTitle">
                        <h1>다운로드 목록</h1>
                     </div>
                     <ul>
                        <c:forEach var="i" items="${fileList}">
                           <li class="fileLi"><a href="/downloadHwFiles.files?seq=${i.seq}&savedname=${i.savedname}&oriname=${i.oriname}">${i.oriname}</a> &nbsp;&nbsp;<input type=button class="btn_deleteFile" value="X" data-seq="${i.seq}"></li>
                        </c:forEach>
                     </ul>
                  </div>
                  <br>
                  <div class="div_close_modal">
                     <span id="btn_close_modal">닫기</span>
                  </div>
               </div>
            </div>
         </div>
         <div class="writeBoxContainer">
            <div class="writeBox">
               <textarea id="summernote" name="contents" required>
               </textarea>
            </div>
         </div>
         <div class="empty"></div>

         <div class="writerBoxFooter">
            <div class="fileUploadBox">
               <input type="file" id="myFile" name="uploadfile" multiple><br> <span style="color: gray">파일은 <b>최대 5개</b>까지 첨부가능합니다.
               </span><br> <span style="color: gray"><b>Tip </b>: Ctrl이나 Shift 키를 이용하여 여러 파일을 선택할 수 있습니다.</span><br>
               <p id="showFileList"></p>
            </div>
            <button type="button" class="common" id="btn_cancel">취소</button>
            <button type="button" class="common" id="btn_update">수정</button>
            <div class="empty"></div>
         </div>
         <input type="hidden" id="getseq" value="${dto.seq}">
      </form>
   </main>


   <!----------------------------------------------- 스크립트 부분 시작 ----------------------------------------------->
   <!----------------------------------------------- 파일 삭제 ----------------------------------------------->
   <script>

      document.getElementById("btn_cancel").onclick = function() {
         location.href = "/pHw/pHwSubmit.hw?list_seq=${hwView.list_seq}&cpage=1";
      }
      
      // -------------------------------------------------- 파일삭제(ajax)
      // 화면상에서만 리스트가 사라진 것처럼 보이게 한다.
      // 제거 전 제거될 파일의 seq값을 리스트에 추가해준다.
      var delSeq = ""; // 제거된 파일의 Seq
      var delArr = []; // 제거된 파일의 Seq를 담을 배열
      var submitForm = $('#submitForm');
      $(".btn_deleteFile").on("click",function(e){
         delSeq = $(this).data("seq");   // 제거된 파일의 Seq
         $(this).parent().remove();      // 파일 삭제버튼을 포함하는 parent인 <li>전체를 없앰
         delArr.push(delSeq);         // 제거된 파일의 Seq를 delArr에 추가
      })
      
       // 수정 버튼 클릭시  form에 append 먼저하고 submit 하기
      document.getElementById("btn_update").onclick = function() {
       // 게시물의 내용이 없을 때 입력이 되지 않는다.
         if (!$('#inputTitle').val()){
             alert('제출하시려면 제목을 입력해주세요');
              return;
          }
          if ($('#summernote').summernote('isEmpty'))
          {
            alert('제출하시려면 내용을 입력해주세요');
            return;
          }
         // for문을 돌리면서 delArr에 있는 제거할 파일의 seq를 delArr이라는 name에 담은 hidden input을 만든다.
         for(var i=0; i<delArr.length; i++){
            submitForm.append($('<input/>', {type: 'hidden', name: 'delArr', value: delArr[i]}));
         }
         var x = document.getElementById("myFile");
         var txt = "";
         if ('files' in x) {
             if (x.files.length > 5) {
                 alert("파일은 최대 5개까지 첨부 가능합니다.");
                 document.getElementById("myFile").value = "";
                 return;
             }
         }
         submitForm.submit();
      }

      // -------------------------------------------------- 파일리스트 모달로 보여주기
      // 화면을 불러올 때 ${fileList}를 검사해서 값이 있을 때만 첨부파일 텍스트를 보이게 하기
      $(document).ready(function() {
         if ("${fileList.size()>0}") {
            $('#filesContainer').show();
         }
      });

      // 모달창 만들어주기
      function modal(id) {
         let zIndex = 9999;
         let modal = $('#' + id);

         // 모달 div 뒤에 희끄무레한 레이어
         let bg = $('<div>').css({
            position : 'fixed',
            left : '0px',
            top : '0px',
            width : '100%',
            height : '100%',
            overflow : 'auto',
            // 레이어 색갈은 여기서 바꾸면 됨
            backgroundColor : 'rgba(0,0,0,0.4)'
         }).appendTo('body');

         modal
            .css(
               {
               position : 'fixed',
               boxShadow : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

               // 시꺼먼 레이어 보다 한칸 위에 보이기
               zIndex : zIndex + 1,

               // div center 정렬
               top : '50%',
               left : '50%',
               transform : 'translate(-50%, -50%)',
               msTransform : 'translate(-50%, -50%)',
               webkitTransform : 'translate(-50%, -50%)'
            }).show()
         // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
         .find('#btn_close_modal').on('click', function() {
            bg.remove();
            modal.hide();
         });
      }
   </script>
</body>
</html>