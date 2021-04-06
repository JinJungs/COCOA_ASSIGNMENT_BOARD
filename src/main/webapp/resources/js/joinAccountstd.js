//인증번호 확인

	function emailCtf() {
         var ctfNum = $('#ctfNum').val();
         let ctfNumChk = isNumber(ctfNum); // 인증번호 숫자 유효성 검사
         var dice = $("#accountseq").val(); //이메일에 전송된 dice받아오기
         if(ctfNumChk == true){
            if(ctfNum==dice){
			   $("#comfNmtxt").css("color", "black");
               $("#comfNmtxt").text('인증이 완료 되었습니다.');
               $("#emailchk").val("true");
               $("#ctfBtn").css("background-color","#3C63AB");
            }else{
               $("#comfNmtxt").text('인증번호가 일치하지않습니다.');
			   $("#comfNmtxt").css("color", "red");
               $("#emailchk").val("");
			   $("#ctfNum").val("");
			   $("#ctfNum").focus();
            }
         }else{
			$("#comfNmtxt").css('color',"red");
            $("#comfNmtxt").text('최대 7자리 수만 가능합니다.');
			$("#ctfNum").focus();
         }
      }

      //인증 번호 유효성 검사 
      function isNumber(asValue){
         var regExp  =/(^[0-9]{6,7}$)/;//인증번호는 6-7자리만입력가능
         return regExp.test(asValue);//알맞은 형식의 번호만 true로 리턴
         
      } 
      //이메일 전송
        function emailSend() {
       let email = $("#email").val();
       let emailYN = isEmail(email); // 이메일 유효성 검사
       if (emailYN == true) {
          $.ajax({
             type : "post",
             url : "/email/emailCheck.email",
             data : {
                email : email
             },
             dataType : "json",
             success : function(data) {
                $("#accountseq").val(data.dice);
                $("#emailtxt").css("color", "black");
				$("#emailchk").val("true");
                $("#emailtxt").text('이메일 전송 성공! 이메일을 확인해 주세요');
             },
             error : function(e) {
                $("#emailtxt").css("color", "red");
                $("#emailtxt").text('존재하지 않은 이메일 입니다.');
                $('#ctfNum').val('');
                $('#ctfNum').focus();
             }
          });
       } else {
         $("#emailtxt").css("color", "red");
             $("#emailtxt").text('형식에 맞지 않는 이메일 입니다. 다시 입력하세요.')
      }
    }


      //이메일 인증 - 이메일 유효성 검사
       function isEmail(asValue){
         var regExp  =/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
         return regExp.test(asValue);//알맞은 형식의 이메일만 true로 리턴
         
      } 

     /* ------------------------------------------------------------ */
      //뒤로가기 버튼
      document.getElementById("return").onclick = function() {
         location.href = "/";
      }
    //회원가입 버튼 작동조건 체크1 (아이디 중복확인 )
  function signup() {
         if ($("#duplechk").val() == "false"){
            alert("중복 체크를 확인 하세요.");
            return;
         }else if($("#emailchk").val() ==""){
            alert("이메일 인증을 확인 하세요.");
            return;
         }else if($("#us_id").val().length==0){
         $("#us_id").focus();    
         return;
         }else if($("#pw").val().length==0){
         $("#pw").focus();
         return;
       }else if($("#pw2").val().length==0){
         $("#pw2").focus();
         return;
       }else if($("#name").val().length==0){
         $("#name").focus();
         return;
       }else if($("#phone").val().length==0){
         $("#phone").focus();
         return;
       }else if($("#email").val().length==0){
         $("#email").focus();
         return;
       }
         if($("#emailchk").val() =="true" && $("#duplechk").val() =="true"){
            $("#done").attr("type","submit");
         }
   }

      //아이디 변경 확인 
      $("#us_id").change(function(){
         $("#duplechk").val("false");
         $("#pop").css("background-color", "#F8585B");
      })
      
      $("#ctfNum").change(function(){
    	$("#ctfBtn").css("background-color","#F8585B");
    	$("#emailchk").val("");
    	})
      //아이디 중복 확인
      $("#pop").click(function() {
         if ($("#us_id").val() == "") {
            return;
         }
         if ($("#us_id").val().length < 6) {
            return;
         }
         $.ajax({
            url : "/users/idCheck.users",
            type : "get",
            data : {
               us_id : $("#us_id").val()
            },
         }).done(function(resp) {
            document.getElementById("idmsg").innerHTML = resp;
            if (resp == "사용이 가능한 ID 입니다.") {
               $("#duplechk").val("true");
               $("#pop").css("background-color", "rgb(58, 108, 202)");
               document.getElementById("idmsg").style.color = "blue";
            } else {
               document.getElementById("idmsg").style.color = "red";

            }
         })
      })
      //아이디 확인
      $("#us_id")
            .blur(
                  function() {
                     var userIdCheck = RegExp(/^[A-Za-z0-9_\-]{5,20}$/);
                     if (($("#us_id").val() != "")) {
                        if (!userIdCheck.test($("#us_id").val())) {
                           $("#idmsg")
                                 .text(
                                       "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.");
                           $("#us_id").val("");
                        } else {
                           $("#idmsg").text("");
                        }
                     } else {
                        $("#idmsg").text("");
                     }
                  })
      //비번확인
      $('#pw2').blur(function() {
         if ($("#pw2").val() != "") {
            if ($('#pw').val() != $('#pw2').val()) {
               if ($('#pw2').val() != '') {
                  $("#pwmsg").css("color", "white");
                  $("#pwmsg").text("비밀번호가 일치하지 않습니다.");
                  $('#pw2').val('');
                  $('#pw2').focus();
               }
            } else {
               $("#pwmsg").css("color", "blue");
               $("#pwmsg").text("비밀번호가 일치합니다.");
            }
         } else {
            $("#pwmsg").text("");
         }
      });
      $("#pw")
            .blur(
                  function() {
                     var pwCheck = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
                     if (($("#pw").val() != "")) {
                        if (!pwCheck.test($("#pw").val())) {
                           $("#pwchk").text(
                                 "8~16자 영문 대 소문자, 숫자 특수문자를 사용하세요");
                           $("#pw").val("");
                        } else {
                           $("#pwchk").text("");
                        }
                     } else {
                        $("#pwchk").text("");
                     }
                  })
      //이름 확인
      $("#name").blur(
            function() {
               var nameCheck = RegExp(/^[가-힣a-zA-Z]+$/);
               if (($("#name").val() != "")) {
                  if (!nameCheck.test($("#name").val())) {
                     $("#namemsg").text(
                           "한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)");
                     $("#name").val("");
                  } else {
                     $("#namemsg").text("");
                  }
               } else {
                  $("#namemsg").text("");
               }
            })
      //연락처 확인
      $("#phone").blur(function() {
         var phonNumberCheck = RegExp(/^01[0179][0-9]{7,8}$/);
         if (($("#phone").val() != "")) {
            if (!phonNumberCheck.test($("#phone").val())) {
               $("#phonemsg").text("01(+0179) 10~11자 숫자만 입력 가능합니다.");
               $("#phone").val("");
            } else {
               $("#phonemsg").text("");
            }
         } else {
            $("#phonemsg").text("");
         }
      })
      //이메일 확인
      $("#email")
            .blur(
                  function() {
                     var emailCheck = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
                     if (($("#email").val() != "")) {
                        if (!emailCheck.test($("#email").val())) {
                           $("#emailmsg").text(""); // 이에 중복되는 문장이 있어 지움
                           $("#email").val("");
                        } else {
                           $("#emailmsg").text("");
                        }
                     } else {
                        $("#emailmsg").text("");
                     }
                  })
                  
    //인증번호 input에 띄어쓰지 방지
   function noSpaceForm(obj){
      var str_space = /\s/;
      if(str_space.exec(obj.value)){
          alert("해당 항목에는 공백을 사용할 수 없습니다.\n공백 제거됩니다.");
             obj.focus();
             obj.value = obj.value.replaceAll(' ',''); // 공백제거
             return false;
      }
   }