	//게시글로 돌아가기
	function fn_backtoboard(cpage){
		location.href = "/board/toBoardHome.board?cpage="+cpage+"&search=";
	}
        
	//메인 게시글 수정 삭제
	function fn_delBoard(cpage,seq){
		con = confirm("글을 삭제 하시겠습니까?");
		if(con==true){
			location.href="/board/delBoard.board?seq="+seq+"&cpage="+cpage+"&search=";
		}else{
			return;
		}
		
	}
	function fn_modBoard(getseq){
		var seq = getseq;
		if($("#boardfileCount").val() == 0){
			$("#filesContainer").css("display","block");
		}
		$("#main_btnmod").attr("onclick","fn_mainsave()");	
		$.ajax({
			data :{seq},
			type :"POST",
			url : "/board/getModBoardContents.board",
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			success : function(data){
				$("#main_btnmod").text("저장");
				$("#main_btnmod").css("background-color","#46799E");
				$("#main_content").html("<textarea class=main_contentmod name=contents id=main_contentmod></textarea>");
				$("#main_contentmod").summernote({
					  height: 400,                 // 에디터 높이
					  width:942,
					  minHeight: null,             // 최소 높이
					  maxHeight: null,				// 최대 높이
					  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
					  lang: "ko-KR",					// 한글 설정
					  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
						callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
				$('#main_contentmod').summernote('reset');
				if(data.length>=1){
					$('#main_contentmod').summernote('pasteHTML',data);
					
					
				}
				
				var text = $("#main_title").text();
				
				$("#main_title").html("<input type=text name=title id=main_Modtitle required maxlength=80 value>");
				$("#main_Modtitle").val(text);
				
			}
		});
		$(".files").text("업로드");
		$(".files").attr("onclick","fn_uploadModal("+seq+")");
		
	}
	function fn_mainsave(){
		var text = $("#main_contentmod").summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
		if(text.length==0){
			return;}
		if($("#main_Modtitle").val()==""){
			alert("제목을 입력하세요.");
			$("#main_Modtitle").focus();
			return;
		}
		$("#main_btnmod").attr("type","submit");
	}

	//summernote
	function fn_loadsummer(board_seq){
		$('#contents').summernote({
			  height: 400,                 // 에디터 높이
			  width:942,
			  minHeight: null,             // 최소 높이
			  maxHeight: null,				// 최대 높이
			  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
			  lang: "ko-KR",					// 한글 설정
			  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
				callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
		
		$('#contents').summernote('reset');
		$("#btnclose").attr("type","button");
		
	}
		function uploadSummernoteImageFile(file ,editor){
			var data = new FormData();
			data.append("file",file);
			$.ajax({
				data :data,
				type :"POST",
				url : "/comment/uploadSummernoteImageFile.comment",
				contentType : false,
				processData : false,
				dataType : "json",
				success : function(data){
				
			 		$(editor).summernote('insertImage',data[0].url); 
					
				}
			})
		}
	
	
		$(function() {
			getCommentList();
			if($("#boardfileCount").val()>0){
				$("#filesContainer").css("display","block");
			}
			
		});

		function getCommentList() {
					$.ajax({
						type : 'POST',
						url : "/comment/getListComment.comment",
						dataType : "json",
						data :  $("#addcommentForm").serialize(),
						contentType : "application/x-www-form-urlencoded; charset=UTF-8",
						success : function(data) {
						
							var html = "";
							var cCnt =0
							if(data.length!=0){
								cCnt=data[0].Cnt;
							};
							if (data.length > 0) {
								for (i = 0; i < data.length; i++) {	
									html += "<input type=hidden class=getboard_seq name=board_seq value="+data[i].board_seq+">"; 
									html += "<div id=commentsContainer"+data[i].seq+">";
									html += "<div id=commmnts"+data[i].seq+" class=comments>";
									html += "<div class=main_cheader>";
									html += "<div class=main_cprofile>";
									html += "<div class=main_cphoto><img src="+data[i].imgURL+"/></div>";
									html += "<div class=main_cwriter>"
											+ data[i].writer_id + "</div>";
									html += "<div class=main_cwrite_date>"
											+ data[i].write_date + "</div>";
									html += "<div class=main_cbtnbox>";
									html += "<button type=button class=main_cbtnwritecomment onclick=openWrite("
											+ data[i].seq + ")>답글</button>";
								if(data[i].auth>0){
									html += "<button type=button id=main_cbtnmod"+data[i].seq+" class=main_cbtnmod onclick=fn_modMainComment("+data[i].seq+")>수정</button>";
									html += "<button type=button id=main_cbtndel"+data[i].seq+" class=main_cbtndel onclick=fn_delMainComment("+data[i].seq+")>삭제</button>";
								};
									html += "</div></div></div><div class=main_ccontents>";
									html += "<div id=main_ccontents"+data[i].seq+" class=main_ccontent>"
											+ data[i].contents + "</div>";
									html += "<div class=main_closecomment>";
									if(data[i].childCnt > 0 ){
										html += "<span id=sub_close"+data[i].seq+" class=sub_close onclick=openCloseComment2("+data[i].seq+","+data[i].childCnt+")>댓글 숨기기 </span>"
									}
									html += "</div></div></div><div class=sub_write id=sub_write"+data[i].seq+" style=display:none>";
									html += "<div class=sub_writecontent><textarea id=contents"+data[i].seq+" class=sub_writetextarea name=contents></textarea></div>";
									html += "<input type=hidden id=comment_seq"+data[i].seq+" name=comment_seq value="+data[i].seq+">";
									html += "<input type=hidden id=writer_id"+data[i].seq+" name=writer_id value="+data[i].writer_id+">";
									html += "<div class=sub_wbtnbox><button type=button class=sub_add onclick=fn_addCommentDepth1("
											+ data[i].seq
											+ ")>작성<button type=button class=sub_cancel id=sub_cancel"
											+ data[i].seq
											+ " onclick=closeWrite("
											+ data[i].seq
											+ ")>취소</button></div></div></div>";
									html += "<div id=sub_hide"+data[i].seq+"></div>";
									getCommentList2(data[i].seq);
									$("#commentForm").html(html);
								
											
								}
							}else if(data.length==0){
								$("#commentForm").html("");
							}
							$(".main_comment").html("댓글: " + cCnt);
							
							
							// 댓글 수 메인에 뿌리기
							$(".closeComment").attr("onclick","openCloseComment("+cCnt+")");
							if(cCnt>0){$(".closeComment").css("display","inline-block");
							}
							
						}
					});
		}
		
		function getCommentList2(comment_seq) {
			$.ajax({
				type : 'POST',
				url : "/comment/getListCommentDepth2.comment",
				dataType : "json",
				data : {comment_seq },
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				success : function(data) {
					var html = "";
					if (data.length > 0) {
						for (i = 0; i < data.length; i++) {
							html += "<div class=sub_commentcontainer>";	
							html += "<div class=sub_comments>";
							html += "<div class=space><img src=/resources/img/icon_reply.png></img></div>";
							html += "<div class=sub_container>";
							html += "<div class=sub_profile>";
							html += "<div class=sub_photo><img src="+data[i].imgURL+" /></div>";
							html += "<div class=sub_writer>"
									+ data[i].writer_id + "</div>";
							html += "<div class=sub_write_date>"
									+ data[i].write_date + "</div>";
							html += "<div class=sub_btnbox>";
							html += "<button type=button class=sub_btnwritecomment2 onclick=openWrite2("
									+ data[i].seq
									+ ")>답글</button>";
						if(data[i].auth>0){
							html += "<button type=button id=sub_btnmod"+data[i].seq+" class=sub_btnmod2 onclick=fn_subModComment("+data[i].seq+")>수정</button>";
							html += "<button type=button id=sub_btndel"+data[i].seq+" class=sub_btndel2 onclick=fn_subDelCommnet("+data[i].seq+")>삭제</button>";
						}
							html += "</div></div><div class=sub_contents><div id=sub_replytoparent class=sub_replytoparent>@"+data[i].parent_id+"</div><div id=sub_content"+data[i].seq+" class=sub_content>"
									+ data[i].contents
									+ "</div></div></div></div>";
							html += "<div class=sub_write2 id=sub_write2"+data[i].seq+" style=display:none>";
							html += "<div class=space></div>";
							html += "<div class=sub_write2container>";
							html += "<input type=hidden id=comment_seq"+data[i].seq+" value="+data[i].comment_seq+">";
							html += "<input type=hidden id=writer_id"+data[i].seq+" value="+data[i].writer_id+">";
							html += "<input type=hidden id=parent_id"+data[i].seq+" value="+data[i].seq+">";
							html += "<div class=sub_writecontent><textarea id=contents"+data[i].seq+" class=sub_writetextarea2 name=contents></textarea></div>";
							html += "<div class=sub_wbtnbox><button type=button class=sub_add2 onclick=fn_addCommentDepth2("+data[i].seq+")>작성</button>";
							html += "<button type=button class=sub_cancel2 onclick=closeWrite2("+data[i].seq+")>취소</button>";
							html += "</div></div></div></div>";
						}
					}
					$("#sub_hide"+comment_seq).append(html);
					
				}
			});
}
		//ajax 댓글 추가
		function fn_addcomment() {
			var text = $("#contents").summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
			if(text.length==0){
				return;}
			$("#btnclose").attr("type","hidden");
			$.ajax({
				type : "POST",
				url : "/comment/addComment.comment",
				data : $("#addcommentForm").serialize(),
				success : function(data) {
				
					if (data == "success") {
						$(".main_writebox").html("<textarea class=main_write id=contents name=contents onclick=fn_loadsummer()></textarea>");
						getCommentList();
					}
				}
			});
		}
		function fn_addCommentDepth1(seq){
			var text = $("#contents"+seq).summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
			if(text.length==0){
				return;}
			let contents = $("#contents"+seq).val();
			let writer_id =$("#writer_id"+seq).val();
			let comment_seq =seq;
			$.ajax({
				type : "POST",
				url : "/comment/addCommentDepth1.comment",
				data : {contents, writer_id, comment_seq},
				success : function(data) {
					if (data == "success") {
						getCommentList();
						
						
					}
				}
			});
		}
		function fn_addCommentDepth2(seq){
			var text = $("#contents"+seq).summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
			if(text.length==0){
				return;}
			let contents = $("#contents"+seq).val();
			let writer_id =$("#writer_id"+seq).val();
			let comment_seq =$("#comment_seq"+seq).val();
			let parent_seq =$("#parent_id"+seq).val();
			$.ajax({
				type : "POST",
				url : "/comment/addCommentDepth2.comment",
				data : {contents, writer_id, comment_seq,parent_seq},
				success : function(data) {
					if (data == "success") {
						getCommentList();
					}
				}
			});
		}
		
		function fn_closeSummernote(){
			$(".main_writebox").html("<textarea class=main_write id=contents name=contents onclick=fn_loadsummer() required></textarea>");
			$("#btnclose").attr("type","hidden");
		}
		
		
		function openCloseComment(cCnt) {
			let getid = document.getElementById("commentForm");
			let childCnt = getid.childElementCount;
			var count ="";
			if(cCnt!=0){
				var count = cCnt;
			}
			if(childCnt==0){
				return null;
			}
			if ($("#commentsContainer").is(':visible')) {
				$("#commentsContainer").css("display", "none");
				if(cCnt>0){
				$(".closeComment").html("댓글 보이기 +"+count);
				}else{
					$(".closeComment").html("댓글 보이기");
				}
			} else {
				$(".closeComment").html("댓글 숨기기");
				$("#commentsContainer").css("display", "block");
			}
		}
		function openCloseComment2(seq,cCnt) {
			let getid = document.getElementById("sub_hide"+seq);
			let childCnt = getid.childElementCount;
			if(childCnt==0){
				return null;
			}
			if ($("#sub_hide"+seq).is(':visible')) {
				$("#sub_hide"+seq).css("display", "none");
				$("#sub_close"+seq).html("댓글 보이기 +"+cCnt);
				
			} else {
				$("#sub_hide"+seq).css("display", "block");
				$("#sub_close"+seq).html("댓글 숨기기");
			}
		}
		$(".main_write").on('keydown keyup', function() {
			$(this).height(1).height($(this).prop('scrollHeight') + 12);
		});

		$(".sub_writetextarea").on('keydown keyup', function() {
			$(this).height(1).height($(this).prop('scrollHeight') + 12);
		});

		$(".sub_writetextarea2").on('keydown keyup', function() {
			$(this).height(1).height($(this).prop('scrollHeight') + 12);
		});
	
		

		// 답글 클릭 취소 
		function openWrite(getseq) {
			$("#sub_write" + getseq).css("display", "block");
			$("#contents"+getseq).summernote({
				  height: 100,                 // 에디터 높이
				  width:942,
				  minHeight: null,             // 최소 높이
				  maxHeight: null,				// 최대 높이
				  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
				  lang: "ko-KR",					// 한글 설정
				  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
					callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
		}

				
		function closeWrite(getseq) {
			$("#sub_write" + getseq).css("display", "none");
		}
		function openWrite2(getseq) {
			$("#sub_write2"+getseq).css("display", "grid");
			$("#contents"+getseq).summernote({
				  height: 100,                 // 에디터 높이
				  width:873.8,
				  minHeight: null,             // 최소 높이
				  maxHeight: null,				// 최대 높이
				  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
				  lang: "ko-KR",					// 한글 설정
				  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
					callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
		}

		function closeWrite2(getseq) {
			$("#sub_write2"+getseq).css("display", "none");
		}

		// 댓글 수정 depth1
		function fn_modMainComment(getseq){
			$("#main_cbtnmod"+getseq).attr("onclick",null);	
			var seq = getseq;
			$.ajax({
				type : "POST",
				url : "/comment/getModContents.comment",
				data : {seq},
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				success : function(data) {
		
					$("#main_cbtnmod"+getseq).text("저장");
					$("#main_cbtnmod"+getseq).css("background-color","#46799E");
					$("#main_ccontents"+getseq).html("<textarea class=main_ccontentmod id=main_ccontentmod"+getseq+" ></textarea>");
					$("#main_ccontentmod"+getseq).summernote({
						  height: 300,                 // 에디터 높이
						  width:942,
						  minHeight: null,             // 최소 높이
						  maxHeight: null,				// 최대 높이
						  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
						  lang: "ko-KR",					// 한글 설정
						  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
							callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
					$('#main_ccontentmod'+getseq).summernote('reset');
					$('#main_ccontentmod'+getseq).summernote('pasteHTML',data);
					$("#main_cbtnmod"+getseq).attr("onclick","fn_modComment("+getseq+")");
				}
			});
		}

		function fn_modComment(seq){
			let contents=$("#main_ccontentmod"+seq).val();
			var text = $("#main_ccontentmod"+seq).summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
			if(text.length==0){
				return;}
			$.ajax({
				type : "POST",
				url : "/comment/modComment.comment",
				data : {contents, seq},
				success : function(data) {
					if (data == "success") {	
						getCommentList();
					}
				}
			});
		}
		// 댓글 수정 depth2
		function fn_subModComment(getseq){
			$("#sub_btnmod"+seq).attr("onclick",null);
			var seq = getseq;
			$.ajax({
				type : "POST",
				url : "/comment/getSubModContents.comment",
				data : {seq},
				contentType : "application/x-www-form-urlencoded; charset=UTF-8",
				success : function(data) {
					$("#sub_btnmod"+getseq).text("저장");
					$("#sub_btnmod"+getseq).css("background-color","#46799E");
					$("#sub_content"+getseq).html("<textarea class=sub_contentmod id=sub_contentmod"+getseq+"></textarea>");
					$("#sub_contentmod"+getseq).summernote({
						  height: 300,                 // 에디터 높이
						  width:863.833,
						  minHeight: null,             // 최소 높이
						  maxHeight: null,				// 최대 높이
						  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
						  lang: "ko-KR",					// 한글 설정
						  placeholder: '최대 2048자까지 쓸 수 있습니다',	//placeholder 설정
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
							callbacks: {	//여기 부분이 이미지를 첨부하는 부분
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
					$('#sub_contentmod'+getseq).summernote('reset');
					$('#sub_contentmod'+getseq).summernote('pasteHTML',data);
					$("#sub_btnmod"+getseq).attr("onclick","fn_subSaveComment("+getseq+")");
				}
			});
			
		}
		
		
		function fn_subSaveComment(seq){
			let contents=$("#sub_contentmod"+seq).val();
			var text = $("#sub_contentmod"+seq).summernote("code").replace(/&nbsp;|<\/?[^>]+(>|$)/g, "").trim();
			if(text.length==0){
				return;}
			$.ajax({
				type : "POST",
				url : "/comment/subModComment.comment",
				data : {contents, seq},
				success : function(data) {
					if (data == "success") {	
						getCommentList();
					}
				}
			});
		}
		
		//댓글 삭제
		function fn_delMainComment(seq){
			var con=confirm("정말로 삭제 하시겠습니까?");
			if(con==true){
				$.ajax({
					type : "POST",
					url : "/comment/delComment.comment",
					data : {seq},
					success : function(data) {
						if (data == "success") {
							getCommentList();
						}
					}
				});
			}else{
				return;
			}
		}
		function fn_subDelCommnet(seq){
			var con=confirm("정말로 삭제 하시겠습니까?");
			if(con==true){
			$.ajax({
				type : "POST",
				url : "/comment/subDelComment.comment",
				data : {seq},
				success : function(data) {
					if (data == "success") {
						getCommentList();
					}
				}
			});
			}else{
				return;
			}
		}
		

       //팝업 Close 기능
       function close_pop(flag) {
    	   	$("#downloadbox").html("");
            $('#myModal').hide();
       };
   	//board upload
   	function fn_uploadModal(seq){
   			var sub_hw_seq = seq;
   			$("#downloadtitle").text("업로드");
			$("#files").attr("onclick","fn_openUploadModal("+seq+")");
   			fn_openUploadModal(seq);
   			$("#fileuploadbox").append("<form id=fileform  accept-charset=utf-8 method=post enctype=multipart/form-data><input type=hidden name=sub_hw_seq value="+sub_hw_seq+"><input type=file id=inputupload name=uploadfile multiple=multiple><button id=btnupload type=button onclick=fn_fileupload("+seq+")>업로드</button></form>");
   			$('#myModal').show();
   	}
   	function fn_openUploadModal(seq){
   		var sub_hw_seq = seq;		
  
		$.ajax({
			type : "POST",
			url : "/board/downloadlist.board", //업로드지만 같은 동작이기 때문에 .. 
			data : {sub_hw_seq },
			dataType :"json",
			success : function(data) {
				$('#myModal').show();
				for(var i=0;i<data.length;i++){
						$("#downloadbox").append("<form class=downform id=downform"+i+" action=/board/download.board method=post><input type=hidden name=seq value="+data[i].seq+"><span name=oriname>"+(i+1)+". "+data[i].oriname+"</span>&nbsp<span onclick=deluploadfile("+data[i].seq+","+seq+")>X</span></form></br>");
					}
			}
		});
		
	}
   	function deluploadfile(seq,board_seq){
   		var con = confirm("정말 삭제하시겠습니까?");
   		if(con==true){
   			$.ajax({
   				type : "POST",
   				url : "/board/delfile.board",
   				data : {seq},
   				success : function(data) {
   					$("#downloadbox").empty();
   					fn_openUploadModal(board_seq);
   				}
   			});
   		}

   		
   	}
   	function fn_fileupload(seq){
			$.ajax({
			data :new FormData($("#fileform")[0]),
			enctype: "multipart/form-data",
			type :"POST",
			url : "/board/upload.board",
			contentType : false,
			processData : false,
			success : function(data){
				if(data=="Success"){
					$("#inputupload").val("");	
					$("#downloadbox").empty();
					fn_openUploadModal(seq);
				}else{
					alert("업로드는 최고 5개 까지 가능합니다.");
					$("#inputupload").val("");
				}
			}
		});
	}
   	
   	function fn_openModal(seq){
		var sub_hw_seq = seq;		
		$.ajax({
			type : "POST",
			url : "/board/downloadlist.board",
			data : {sub_hw_seq },
			dataType :"json",
			success : function(data) {
				if(data.length > 0){
				for(var i=0;i<data.length;i++){
						$("#downloadbox").append("<form class=downform id=downform"+i+" action=/board/download.board method=post><input type=hidden name=seq value="+data[i].seq+"><span name=oriname onclick=fn_downloadsubmit("+i+")>"+(i+1)+". "+data[i].oriname+"</span></form></br>");
					}
				}
				$('#myModal').show();	
			}
		});
		
	}
   	function fn_downloadsubmit(e){
   		document.getElementById("downform"+e).submit();
   	}
   	