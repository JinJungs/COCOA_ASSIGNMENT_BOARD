	//댓글 depth2
		function getCommentList2() {
					$.ajax({
						type : 'GET',
						url : "getListCommentDepth2.comment",
						dataType : "json",
						data : $("#commentFormDepth2").serialize(),
						contentType : "application/x-www-form-urlencoded; charset=UTF-8",
						success : function(data) {
							var html = "";
							if (data.length > 0) {
								for (i = 0; i < data.length; i++) {
									html += "<div class=sub_commentcontainer>";
									html += "<div class=sub_comments>";
									html += "<div class=space></div>";
									html += "<div class=sub_container>";
									html += "<div class=sub_profile>";
									html += "<div class=sub_photo><img src=></div>";
									html += "<div class=sub_writer>"
											+ data[i].writer_id + "</div>";
									html += "<div class=sub_write_date>"
											+ data[i].write_date + "</div>";
									html += "<div class=sub_btnbox>";
									html += "<button type=button class=sub_btnwritecomment2 onclick=openWrite2("
											+ data[i].seq
											+ ")>답글</button>";
									html += "<button class=sub_btnmod2>수정</button>";
									html += "<button class=sub_btndel2>삭제</button></div></div>";
									html += "<div class=sub_contents><div class=sub_content>"
											+ data[i].contents
											+ "</div></div></div></div>";
									html += "<div class=sub_write2 id=sub_write2"+data[i].seq+" style=display:none>";
									html += "<div class=space></div>";
									html += "<div class=sub_write2container>";
									html += "<form id=addSubCommentForm"+data[i].seq+" name=addSubComment />";
									html += "<div class=sub_writeheader></div>";
									html += "<input type=hidden />";
									html += "<div class=sub_writecontent><textarea class=sub_writetextarea2 name=contents></textarea></div></form>";
									html += "<div class=sub_wbtnbox><button type=button class=sub_add2 onclick=fn_addcommentDepth2("+data[i].seq+")>작성</button>";
									html += "<button type=button class=sub_cancel2 onclick=closeWrite2("+data[i].seq+")>취소</button>";
									html += "</div></div></div></div>";
								}
							}
							$("#commentFormDepth2").html(html);

						}
					});
		}
		
				function fn_addcommentDepth1(getseq) {
			let get = $("#addCommentForm" + getseq);
			alert(get);
			$.ajax({
				type : "GET",
				url : "addCommentDepth1.comment",
				data : $("#addCommentForm" + getseq).serialize(),
				success : function(data) {
					if (data == "success") {
						getCommentList2();
						$("#contents").val("");
					}
				}
			});
		}
		function fn_addcommentDepth2(getseq){
			console.log($("#addSubComment"+getseq).serialize());
			$.ajax({
				type : "GET",
				url : "addCommentDepth2.comment",
				data : $("#addSubCommentForm" + getseq).serialize(),
				success : function(data) {
					if (data == "success") {
						getCommentList2();
						$("#contents").val("");
					}
				}
			});
		}