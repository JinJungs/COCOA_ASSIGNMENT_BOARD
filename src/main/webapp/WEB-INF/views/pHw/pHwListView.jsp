<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>코코아</title>
<link rel="stylesheet" href="/resources/css/common.css" type="text/css"
	media="screen" />
<link rel="stylesheet" href="/resources/css/hwList.css" type="text/css"
	media="screen" />
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
</head>
<body>
	<%@ include file="/WEB-INF/views/inc/sidebar.jsp"%>
	<div class="navbar"></div>
	<header><xmp class="headerXmp">과제 목록(${className} / ${classProf} 강사님)</xmp></header>
	<main>
		<div class="list-container">
			<div class="hwLabel" id="hwLabelProf">
				<div class="hwLabelItem hwLabelSubject"
					style="background-color:${hwView.color};">
					<div><xmp class="hwLabelSubjectXmp">${hwView.subject_name}</xmp></div>
					<!-- (Subject : name = hw_list : subject_seq) -->
				</div>
				<div class="hwLabelItem hwLabelHw">
					<div><xmp>${sContents}</xmp></div>
				</div>
				<div class="hwLabelItem hwLabelBtns">
					<button class="btnAdd common" id="show-modal">과제 등록</button>

				</div>
				<!-- <div class="hwLabelItem hwLabelEdit">
				<button class="btnSubjectEdit" id="btnSubjectEdit">⚙</button>
			</div> -->
			</div>
			<!-- title, contents, start_date, end_date, subject_seq -->
			<!-- 		<div class="modifySubject">
			<button class="btnAdd common" id="show-modal">과제 등록</button>
		</div> -->

			<div class="container">
				<div class="listHead hwListProf-li-pro"
					style="background-color:${hwView.color};">
					<div class="hCrud">수정/삭제</div>
					<div class="hTitle">과제</div>
					<div class="hDate start">등록일</div>
					<div class="hDate end">마감일</div>
					<div class="hOx">제출여부</div>
				</div>
				<div class="listContents">
					<c:choose>
						<c:when test="${not empty list}">
							<c:forEach var="dto" items="${list}">
								<div class="listItem hwListProf-li-pro">
									<div class="crud">
									<input type="hidden" id="getContents" value="${dto.contents}">
										<button type="button" class="btnCrud" id="btnModif"
											onclick="toggleModal2(${dto.seq},'${dto.title}',${dto.end_date})"
											style="font-size: 1rem">⚙</button>
										<button type="button" onclick="delHwList(${dto.seq})"
											class="btnCrud" id="btnDel" style="font-size: 1rem">x</button>
									</div>
									<div class="title">
										<a href="/pHw/pHwSubmit.hw?list_seq=${dto.seq}&cpage=1">
											<xmp class="titleXmp">${dto.title}</xmp></a>
									</div>
									<div class="date start">${dto.start_date}</div>
									<div class="date end">${dto.end_date}</div>
									<div class="assgined">${dto.std_submit}/${totalStd}</div>
								</div>
							</c:forEach>
						</c:when>
						<c:otherwise>
							<div class="listItem submitMsg">
								<div>등록된 과제가 없습니다. 과제를 등록하십시오.</div>
							</div>
						</c:otherwise>
					</c:choose>

					<div class="footer"></div>
				</div>
			</div>
			<!-- Modal Popup for addHwList  -->
			<div class="modal modal--hidden">
				<div class="modal__contents">
					<div class="modal__close-bar">
						<span>X</span>
					</div>
					<div id="addHwSubmit" class="modal__form">
						<div class="mo_row1">
							<div class="mo_col1">
								<p>과제 이름 :</p>
								<input type="text" maxlength="30" class="widthFull height50px"
									id="hwListTitle" placeholder="과제 이름을 입력하세요">
							</div>
							<div class="mo_col2">
								<p>과제 마감일 :</p>
								<input type="date" class="widthFull height50px"
									id="hwListEndDate">
							</div>
						</div>
						<div class="mo_row2">
							<p>과제 내용 :</p>
							<textarea maxlength="200" class="widthFull height80"
								id="hwListContents" placeholder="과제에 대한 제출 내용을 입력하세요"></textarea>
						</div>
						<div class="mo_row3">
							<button type="button" class="common widthFull heightFull"
								onclick="addHwList(${hwView.subject_seq})" id="hwSubmitBtn">과제
								등록</button>
						</div>
					</div>
				</div>
			</div>
			<!-- ********* Modal Popup for modifHwList******** -->
			<div class="modal2 modal2--hidden">
				<div class="modal__contents">
					<div class="modal2__close-bar">
						<span>X</span>
					</div>
					<div id="modifHwSubmit" class="modal__form">
						<div class="mo_row1">
							<div class="mo_col1">
								<p>과제 이름 :</p>
								<input type="text" maxlength="30" class="widthFull height50px"
									id="modifTitle" placeholder="수정할 과제 이름을 입력하세요">
							</div>
							<div class="mo_col2">
								<p>과제 마감일 :</p>
								<input type="date" class="widthFull height50px"
									id="modifEndDate">
							</div>
						</div>
						<div class="mo_row2">
							<p>과제 내용 :</p>
							<textarea maxlength="200" class="widthFull height80"
								id="modifContents" placeholder="과제에 대해 수정할 내용을 입력하세요"></textarea>
						</div>
						<div class="mo_row3">
							<button type="button" onclick="modifHwList()"
								class="common widthFull heightFull" id="hwModifSubmitBtn">수정하기</button>
						</div>
					</div>
				</div>
			</div>


		</div>
	</main>
	<script src="/resources/js/hwModal.js"></script>
	<script>
	
	//DELETEHWLIST AJAX FUNCTION=========================================
	delHwList = (seq) => {
        var really = confirm("삭제 시 해당 과제리스트에 제출된 모든 과제도 삭제되며 다시 복구할 수 없습니다. 정말 삭제하시겠습니까?");
        if(really){
            let pw = prompt('교수자의 비밀번호를 입력하세요 : ');
        $.ajax({
            url: "/pHw/delHwList.hw",
            type: "post",
            data: {
                seq : seq,
                pw : pw
            },
            dataType: "json",
            success: function(resp){
                if(resp.result==-1){
                    alert("비밀 번호가 일치하지 않습니다.");
                }else if(resp.result>0){
                    alert("해당 과제리스트와 제출된 과제들이 모두 삭제되었습니다.");
                }else{
                    alert("삭제에 실패했습니다. 문제가 반복될 시 관리자에게 문의하십시오.");
                }
            }
        }).done(function(){
			location.reload(true);
	      });
        }
    }
	
	//MODIFHWLIST AJAX FUNCTION==========================================
		function modifHwList(){
		var seq = $('#hwModifSubmitBtn').val();
		var modi_title = $('#modifTitle').val();
		var modi_contents = $('#modifContents').val();
		var modi_end_date = $('#modifEndDate').val();
		var current_date=new Date(); 
		current_date.setHours(0,0,0,0);
		var modi_set_end_date = new Date($('#modifEndDate').val());	
		//var set_cDate = current_date.getFullYear()+'-'+(current_date.getMonth()+1)+'-'+current_date.getDate();
		if(modi_title!=null&&modi_contents!=null&&modi_set_end_date >= current_date){
			
			$.ajax({
				url: "/pHw/modifHwList.hw",
				type: "post",
				data: {
					title : modi_title,
					contents : modi_contents,
					s_end_date : modi_end_date,
					seq : seq
				},
				dataType: "json",
				success: function(resp){
					if(resp.result>0){
						alert("과제가 성공적으로 수정되었습니다.");
					}else{
						alert("과제 수정에 실패했습니다. 문제가 지속시 관리자에게 문의하십시오.");
					}
				}
			}).done(function(){
				toggleModal2(0,0,0,0); 
				location.reload(true);
		      });
		}
		else if(!modi_title||!modi_contents||modi_set_end_date){
			alert("모든 항목을 기입해주십시오.");
		}
		else if(modi_set_end_date < current_date){
			alert("과제 제출일은 오늘 날짜 이전으로 설정할 수 없습니다.");
		}
		return false;
	}
	
	//ADDHWLIST AJAX FUNCTION=============================================
	function addHwList(subject_seq){
		var title = $('#hwListTitle').val();
		var contents = $('#hwListContents').val();
		var end_date = $('#hwListEndDate').val();
		console.log("contents : " +contents);
		var current_date=new Date(); 
		current_date.setHours(0,0,0,0);
		var set_end_date = new Date($('#hwListEndDate').val());
		
		//var set_cDate = current_date.getFullYear()+'-'+(current_date.getMonth()+1)+'-'+current_date.getDate();
		if(title!=null&&contents!=null&&set_end_date >= current_date){
			$.ajax({
				url: "/pHw/addHwList.hw",
				type: "post",
				data: {
					title : title,
					contents : contents,
					s_end_date : end_date,
					subject_seq : subject_seq
				},
				dataType: "json",
				success: function(resp){
					if(resp.result>0){
						alert("과제가 성공적으로 등록되었습니다.");
					}else{
						alert("과제 등록에 실패했습니다. 문제가 지속시 관리자에게 문의하십시오.");
					}
				}
			}).done(function(){
				toggleModal(); 
				location.reload(true);
		      });
		}
		else if(!title||!contents||!end_date){
			alert("모든 항목을 기입해주십시오.");
		}
		else if(set_end_date < current_date){
			alert("과제 제출일은 오늘 날짜 이전으로 설정할 수 없습니다.");
		}
		return false;
	}

	</script>
</body>
</html>