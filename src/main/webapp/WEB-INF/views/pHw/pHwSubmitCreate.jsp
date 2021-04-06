<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
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
   $(document)
         .ready(
               function() {
                  $('#summernote')
                        .summernote(
                              {
                                 height : 300, // 에디터 높이
                                 width : 940,
                                 minHeight : null, // 최소 높이
                                 maxHeight : null, // 최대 높이
                                 focus : true, // 에디터 로딩후 포커스를 맞출지 여부
                                 lang : "ko-KR", // 한글 설정
                                 placeholder : '최대 2048자까지 쓸 수 있습니다', //placeholder 설정
                                 toolbar : [
                                       // [groupName, [list of button]]
                                       [ 'fontname',
                                             [ 'fontname' ] ],
                                       [ 'fontsize',
                                             [ 'fontsize' ] ],
                                       [
                                             'style',
                                             [
                                                   'bold',
                                                   'italic',
                                                   'underline',
                                                   'strikethrough',
                                                   'clear' ] ],
                                       [
                                             'color',
                                             [ 'forecolor',
                                                   'color' ] ],
                                       [ 'table', [ 'table' ] ],
                                       [
                                             'para',
                                             [ 'ul', 'ol',
                                                   'paragraph' ] ],
                                       [
                                             'insert',
                                             [ 'picture', 'link' ] ],
                                       [
                                             'view',
                                             [
                                                   'codeview',
                                                   'fullscreen',
                                                   'help' ] ] ],
                                 fontNames : [ 'Arial',
                                       'Arial Black',
                                       'Comic Sans MS',
                                       'Courier New', '맑은 고딕',
                                       '궁서', '굴림체', '굴림', '돋음체',
                                       '바탕체' ],
                                 fontSizes : [ '8', '9', '10', '11',
                                       '12', '14', '16', '18',
                                       '20', '22', '24', '28',
                                       '30', '36', '50', '72' ],
                                 callbacks : { //여기 부분이 이미지를 첨부하는 부분
                                    onImageUpload : function(files) {
                                       uploadSummernoteImageFile(
                                             files[0], this);
                                    },
                                    onPaste : function(e) { //onPaste는 또 어떻게 하는 녀석이지..
                                       var clipboardData = e.originalEvent.clipboardData;
                                       if (clipboardData
                                             && clipboardData.items
                                             && clipboardData.items.length) {
                                          var item = clipboardData.items[0];
                                          if (item.kind === 'file'
                                                && item.type
                                                      .indexOf('image/') !== -1) {
                                             e.preventDefault();
                                          }
                                       }
                                    }
                                 }
                              }).on(
                              "summernote.enter",
                              function(we, e) {
                                 $(this).summernote("pasteHTML",
                                       "<br><br>");
                                 e.preventDefault();
                              });
               });
   $("div.note-editable")
         .on(
               'drop',
               function(e) {
                  for (i = 0; i < e.originalEvent.dataTransfer.files.length; i++) {
                     uploadSummernoteImageFile(
                           e.originalEvent.dataTransfer.files[i],
                           $("#summernote")[0]);
                  }
                  e.preventDefault();
               })

   function uploadSummernoteImageFile(file, editor) { // editor는 뭘 받는 거지 - 아 this를 보냈으니까 summernote editor 그 자체구나      
      var data = new FormData();
      data.append("file", file);
      $.ajax({
         data : data,
         type : "POST",
         url : "/files/uploadImageFile.files",
         contentType : false,
         processData : false,
         dataType : "json",
         success : function(data) { // 여기도 원래는 url로 되어있음 - 해당파일의 url을 가져와 다시 summernote템플릿에 이미지 태그를 삽입
            $(editor).summernote('insertImage', data.url);
         }
      })
   }
</script>
</head>
<body>
   <%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
   <header>
      <div>${hwView.subject_name}-${hwView.list_title}</div>
      <div class="line"></div>
   </header>
   <main>
      <!-- form의 name값으로 title,contents를 넘겨준다. (required 필수)-->
      <!-- file upload-->
      <!-- editor API - summer note -->
      <form action="/pHw/pCreateSubmit.hw?list_seq=${hwView.list_seq}" method="post" id="submitForm" enctype="multipart/form-data">
         <div class="titleContainer">
            <input type="text" placeholder="제목을 입력하세요." id="inputTitle" name="title" class="input_title" maxlength=80>
         </div>
         <div class="empty"></div>
         <div class="writeBoxContainer">
            <div class="writeBox">
               <textarea id="summernote" name="contents"></textarea>
            </div>
         </div>
         <br>
         <div class="writerBoxFooter">
            <div class="fileUploadBox">
               <input type="file" id="myFile" name="uploadfile" multiple><br> <span style="color: gray">파일은 <b>최대 5개</b>까지 첨부가능합니다.
               </span><br> <span style="color: gray"><b>Tip </b>: Ctrl이나 Shift 키를 이용하여 여러 파일을 선택할 수 있습니다.</span><br>
               <p id="showFileList"></p>
            </div>
            <button type="button" class="common" id="btn_cancel">취소</button>
            <button type="button" class="common" id="btn_write">글쓰기</button>
            <div class="empty"></div>
         </div>
      </form>
   </main>
   <script>
      $('#btn_write').on("click", function() {
         var x = document.getElementById("myFile");
         var txt = "";
         if ('files' in x) {
            if (x.files.length > 5) {
               alert("파일은 최대 5개까지 첨부 가능합니다.");
               document.getElementById("myFile").value = "";
               return;
            }
         }
         if (!$('#inputTitle').val()){
            alert('제출하시려면 제목을 입력해주세요');
             return;
         }
         if ($('#summernote').summernote('isEmpty'))
         {
           alert('제출하시려면 내용을 입력해주세요');
           return;
         }
         $('#submitForm').submit();
      })
      document.getElementById("btn_cancel").onclick = function() {
         location.href = "/pHw/pHwSubmit.hw?list_seq=${hwView.list_seq}&cpage=1";
      }
      /*        $('#btn_write').on('click', function(){
       $('#summernote').append('<input type="hidden" name="contents", id="contents" />');
       $('#contents').val($('#summernote').code());
       $('#submitForm').submit();
       }) */
   </script>
</body>
</html>