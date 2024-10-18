<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>학사 정보 시스템 로그인</title>
    
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/findPassword.css'/>"/>
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript" defer="defer	">

	// 비밀번호 유효성
  	let reg = /^(?=.*[a-z])(?=.*[0-9])(?=.*[~?!@#$%^&*_-]).{8,24}$/; // a-z, 0-9, 특수문자가 포함되어 있는지 // 8자 이상 넣으려면 .{8,} 뒤에 넣기

	// 인증번호 빈칸 선언 및 초기화
	let verificationCode = "";
	
	// 인증코드 보내기 버튼 클릭 이벤트
 	$(document).on("click", "#btn_veriUser", function() {
 	/* event.preventDefault(); */
    const id = $("#id").val();
    const name = $("#name").val();

    // 학번과 비밀번호 입력 확인
    if (id === "" || name === "") {
        alert("학번 혹은 교번과 이름를 입력해주세요.");
        return;
    };
    
    
    // 서버로 인증코드 요청
    $.ajax({
        type: 'POST',
        url: '/HanaUIS/selectUser.do',
        data: {
        	id: id,
        	name: name
        },
        success: function(data) {
        	 console.log(id); // 받은거 확인
        	 console.log(name);
            if (data.result === 'success') {
                alert("인증코드가 이메일로 발송되었습니다.");
                $("#btn_veriUser").attr("disabled", true);  // 인증번호 발송 버튼 비활성화
                $("#veritext").attr("disabled", false);  // 인증번호 입력란 활성화
                $("#veriCode").attr("disabled", false);  // 인증번호 입력란 활성화
            } else {
                alert("일치하는 회원정보가 없습니다.");
            }
        },
        error: function(request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        	}
    	});
	});
    
 	// 인증 번호 확인 버튼 클릭 이벤트
	$(document).on("click", "#veriCode", function() {
    const inputCode = $("#veritext").val();  // 사용자가 입력한 인증번호

    // 인증코드 확인
        // 인증번호가 맞으면 로그인 처리
        $.ajax({
            type: 'POST',
            url: '/HanaUIS/veriCode.do',
            data: {
                id: $("#id").val(),
                name: $("#name").val(),
                inputCode: inputCode
            },
            success: function(data) {
                if (data.result === 'success') {
                    alert("인증이 완료되었습니다.");
                	$("#veriCode").attr("disabled", true);  // 인증번호 확인 버튼 비활성화

                    // 비밀번호, 비밀번호 확인 칸 disavbled 풀기
                    $("#password").attr("disabled", false);  // 인증번호 입력란 활성화
                	$("#secpassword").attr("disabled", false);  // 인증번호 입력란 활성화
                } else {
                    alert("인증에 실패하였습니다 : " + data.message);
                }
            },
            error: function(request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
	});
 	
	// 인증 번호 확인 버튼 클릭 이벤트
	$(document).on("click", "#changepwd", function() {
    const firpwd = $("#password").val();  // 사용자가 입력한 인증번호
    const secpwd = $("#secpassword").val();  // 사용자가 입력한 인증번호
    console.log(firpwd);
    console.log(reg.test(firpwd))
    
    //비밀번호와 비밀번호 확인이 일치한지 확인
    if (firpwd === secpwd && reg.test(firpwd)) {
    	
    	$.ajax({
            type: 'POST',
            url: '/HanaUIS/changepwd.do',
            data: {
                id: $("#id").val(),
                pwd: firpwd
            },
            success: function(data) {
                if (data.result === 'success') {
                    alert("비밀변호 변경이 완료되었습니다.");
                     // 로그인칸으로 넘어가기
                     location.href = "/HanaUIS/login.do";
                } else {
                	if(data.errmsg) {
                    	alert(data.errmsg);
                    } else {
                    	alert(data.message);
                    }
                }
            },
            error: function(request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
    } else if (!reg.test(firpwd)){
		alert("비밀번호가 형식에 맞지 않습니다");
	} else {
    	alert("비밀번호가 일치하지 않습니다.");
    }
 	});
	
	function fn_cancelPwd() {
	    location.href = "/HanaUIS/login.do";
	}
	
 
	</script>
</head>
<body>
	<div class="login-container">
		<div class="logo-container">
			<!-- 대학 로고 이미지 -->
			<img src="<c:url value='/images/egovframework/logo.png'/>"
				alt="대학 로고" class="logo">
		</div>
		
		<br>
		<h3>비밀번호 찾기</h3>
	
		<div class="login-form">

			<form action="" method="post" id="form_login">
				<table>
					<colgroup>
						<col width="23%">
						<col width="*">
						<col width="24%">
					</colgroup>
					<tbody>
						<tr><td class="subTitle"></td><td></td></tr>
						<tr>
							<td class="subTitle">&ensp;이름</td>
							<td><input type="text" id="name" name="name" placeholder="이름을 입력하세요"></td>
							<td rowspan="2">
								<div class="btn-margin">
									<button id="btn_veriUser" type="button"
								style="height: 78px;">인증번호 발송</button>
								</div>
							</td>
						</tr>
						<tr>
							<td class="subTitle">&ensp;아이디</td>
							<td><input type="text" id="id" name="id" placeholder="학번/교번을 입력하세요" required></td>
						</tr>
						<tr>
							<td class="subTitle">&ensp;인증번호</td>
							<td><input type="text" id="veritext" name="veritext"
								placeholder="인증번호를 입력하세요" disabled="disabled"></td>
							<td rowspan="2">
								<div class="btn-margin">
									<button id="veriCode" type="button" disabled="disabled" style="height: 78px;">인증번호 확인</button>
								</div>
							</td>
						</tr>
						<tr>
							<td class="subTitle">&ensp;새 비밀번호</td>
							<td><input type="password" id="password" name="password" placeholder="영문, 숫자, 특수문자, 8-24자" 
								disabled="disabled">
							</td>
						</tr>
						<tr>
							<td class="subTitle">&ensp;비밀번호 확인</td>
							<td><input type="password" id="secpassword" name="secpassword" placeholder="새 비밀번호를 입력하세요"
								disabled="disabled"></td>
							<td>
								<div class="btn-margin">
									<button type="button" id="changepwd" style="height: 39px;">변경 확인</button>
								</div>
							</td>
						</tr>
						<tr><td class="subTitle"></td><td></td></tr>
					</tbody>
				</table>
			</form>
			<div class="cancelPwd">
				<a href="javascript:fn_cancelPwd()">로그인 하기</a>
			</div>	
		</div>
	</div>
</body>


    
</html>
