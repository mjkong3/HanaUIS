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
    
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/login.css'/>"/>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript" defer="defer">
	
	// 비밀번호 찾기 링크 설정
	function fn_findPassword() {
	    location.href = "/HanaUIS/findPassword.do";
	}
	
	
	/* 학생  로그인*/
	
	// 인증코드 보내기 버튼 클릭 이벤트
	$(document).on("click", "#mail-Check-Btn", function() {
	    const id = $("#id").val();
	    const password = $("#password").val();
	
	    // 학번과 비밀번호 입력 확인
	    if (id === "" || password === "") {
	        alert("아이디와 비밀번호를 입력해주세요.");
	        return;
	    }
	
	    // 서버로 인증코드 요청
	    $.ajax({
	        type: 'POST',
	        url: '/HanaUIS/std/sign.do',
	        data: {
	        	id: id,
	        	password: password
	        },
	        success: function(data) {
	        	 console.log(id); // 받은거 확인
	        	 console.log(password);
	            if (data.result === 'success') {
	                alert("인증코드가 이메일로 발송되었습니다.");
	                $("#emailCheck").attr("disabled", false);  // 인증번호 입력란 활성화
	                $("#loginSubmit").attr("disabled", false);   // 로그인 버튼 활성화 
	            } else {
	                alert("아이디 또는 비밀번호가 잘못되었습니다.");
	            }
	        },
	        error: function(request, status, error) {
	            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
	        	}
	    	});
		});

	// 로그인 버튼 클릭 이벤트
	$(document).on("click", "#loginSubmit", function() {
    const inputCode = $("#emailCheck").val();  // 사용자가 입력한 인증번호


    // 인증번호가 맞으면 로그인 처리
    $.ajax({
        type: 'POST',
        url: '/HanaUIS/std/signIn.do',
        data: {
            studentId: $("#id").val(),
            password: $("#password").val(),
            inputCode: inputCode
        },
        success: function(data) {
            if (data.result === 'success') {
                alert("인증이 완료되었습니다.");
                location.href = "/HanaUIS/std/notice.do";  // 메인 페이지로 이동
            } else {
                alert(data.message);
            }
        },
        error: function(request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        }
   	});
});

	// ---------------------------------------------------------------------------------------------- //
	
	/* 교수  로그인*/
	
	// 인증코드 보내기 버튼 클릭 이벤트
	$(document).on("click", "#proMail-Check-Btn", function() {
    const id = $("#id").val();
    const password = $("#password").val();

    // 학번과 비밀번호 입력 확인
    if (id === "" || password === "") {
        alert("아이디와 비밀번호를 입력해주세요.");
        return;
    }

    // 서버로 인증코드 요청
    $.ajax({
        type: 'POST',
        url: '/HanaUIS/pfs/sign.do',
        data: {
        	id: id,
        	password: password
        },
        success: function(data) {
        	 console.log(id); // 받은거 확인
        	 console.log(password);
            if (data.result === 'success') {
                alert("인증코드가 이메일로 발송되었습니다.");
                $("#emailCheck").attr("disabled", false);  // 인증번호 입력란 활성화
                $("#loginSubmit").attr("disabled", false);  // 로그인 버튼 활성화
            } else {
                alert("아이디 또는 비밀번호가 잘못되었습니다.");
            }
        },
        error: function(request, status, error) {
            alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        	}
    	});
	});

	// 로그인 버튼 클릭 이벤트
	$(document).on("click", "#proLoginSubmit", function() {
	    const inputCode = $("#emailCheck").val();  // 사용자가 입력한 인증번호
	
        $.ajax({
            type: 'POST',
            url: '/HanaUIS/pfs/signIn.do',
            data: {
                studentId: $("#id").val(),
                password: $("#password").val(),
                inputCode: inputCode
            },
            success: function(data) {
                if (data.result === 'success') {
                    alert("인증이 완료되었습니다.");
                    location.href = "/HanaUIS/pfs/notice.do";  // 메인 페이지로 이동
                } else {
                    alert(data.message);
                }
            },
            error: function(request, status, error) {
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
            }
        });
	});
	</script>
</head>
<body>
	<div class="login-container">
		<div class="logo-container">
			<!-- 대학 로고 이미지 -->
			<img src="<c:url value='/images/egovframework/logo.png'/>"
				alt="대학 로고" class="logo">
		</div>
		<h1>하나대학교</h1>
		<h3>학사정보 시스템</h3>

		<div class="login-form">

			<!-- 학생 -->
			<div class="login_div">
				<!-- 전환용 토글 -->
				<div class="input-group">
					<button type="button" onclick="fn_stuLogin();"
						style="background-color: #EBEAE8;">학생 로그인</button>
					<button type="button" onclick="fn_proLogin();"
						style="color: #ffffff;">교수 로그인</button>
				</div>

				<form id="form_login" method="post">
					<table>
						<colgroup>
							<col width="70%">
							<col width="30%">
						</colgroup>
						<tbody>
							<tr>
								<td>
									<div class="form-group" style="padding-top: 1rem;">
										<input type="text" id="id" name="id" placeholder="학생 아이디">
									</div>
								</td>
								<td rowspan="2">
									<div class="form-group" style="padding-top: 15px; margin-right: 4px;">
										<button type="button" id="mail-Check-Btn"
											style="height: 78px;">인증코드받기</button>
									</div>

								</td>
							</tr>
							<tr>

								<td>
									<div class="form-group">
										<input type="password" id="password" name="password"
											autoComplete="off" placeholder="비밀번호">
									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="mail-check-box">
										<input type="text" id="emailCheck" name="emailCheck"
											placeholder="인증번호 6자리를 입력해주세요" disabled="disabled">
									</div>
								</td>
								<td>
									<div class="form-group" style="margin-right: 4px;">
										<button type="button" id="loginSubmit" style="height: 39px;">로그인</button>
										<button type="button" id="proLoginSubmit"
											style="height: 39px; display: none;">로그인</button>
									</div>
								</td>
							</tr>
						</tbody>
					</table>		
				</form>
				<div class="searchPwd">
					<a href="javascript:fn_findPassword()">비밀번호 찾기</a>
				</div>	
			</div>
		</div>
	</div>
</body>


    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript" defer="defer">
	//학생 토글
	 function fn_stuLogin(){
		const change = document.querySelector('.login_div');
		change.innerHTML = '';
		let str_1 = '';

		str_1 += `<div class="login_div">
			<div class="input-group">
				<button type="button" onclick="fn_stuLogin();" style="background-color: #EBEAE8;">학생 로그인</button>
				<button type="button" onclick="fn_proLogin();" style="color: #ffffff;">교수 로그인</button>
			</div>

			<form id="form_login" method="post">
				<table>
					<colgroup>
						<col width="70%">
						<col width="30%">
					</colgroup>
					<tbody>
						<tr>
							<td>
								<div class="form-group" style="padding-top: 1rem;">
									<input type="text" id="id" name="id" placeholder="학생 아이디">
								</div>
							</td>
							<td rowspan="2">
								<div class="form-group" style="padding-top: 15px; margin-right: 4px;">
									<button type="button" id="mail-Check-Btn" style="height: 78px;">인증코드받기</button>
								</div>

							</td>
						</tr>
						<tr>

							<td>
								<div class="form-group">
									<input type="password" id="password" name="password" autoComplete="off" placeholder="비밀번호">
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="mail-check-box">
									<input type="text" id="emailCheck" name="emailCheck" placeholder="인증번호 6자리를 입력해주세요" disabled="disabled">
								</div>
							</td>
							<td>
								<div class="form-group" style="margin-right: 4px;">
									<button type="button" id="loginSubmit" style="height: 39px;">로그인</button>
									<button type="button" id="proLoginSubmit" style="height: 39px; display:none;">로그인</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<div class="searchPwd">
				<a href="javascript:fn_findPassword()">비밀번호 찾기</a>
			</div>	
		</div>`
		change.insertAdjacentHTML('afterbegin', str_1);
	}

	// ---------------------------------------------------------------------------------------------- //
	
	//교수 토글
	 function fn_proLogin() {
		const change = document.querySelector('.login_div');
		change.innerHTML = '';
		let str_2 = '';

		str_2 += `<div class="login_div">
			<div class="input-group">
				<button type="button" onclick="fn_stuLogin();" style="color: #ffffff;">학생 로그인</button>
				<button type="button" onclick="fn_proLogin();" style="background-color: #EBEAE8;">교수 로그인</button>
			</div>

			<form id="form_login" method="post">
				<table>
					<colgroup>
						<col width="70%">
						<col width="30%">
					</colgroup>
					<tbody>
						<tr>
							<td>
								<div class="form-group" style="padding-top: 1rem;">
									<input type="text" id="id" name="id"
										placeholder="교수 아이디">
								</div>
							</td>
							<td rowspan="2">
								<div class="form-group" style="padding-top: 15px; margin-right: 4px;">
									<button type="button" id="proMail-Check-Btn"
										style="height: 78px;">인증코드받기</button>
								</div>

							</td>
						</tr>
						<tr>

							<td>
								<div class="form-group">
									<input type="password" id="password" name="password" autoComplete="off" 
										placeholder="비밀번호">
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<div class="mail-check-box">
									<input type="text" id="emailCheck" name="emailCheck"
										placeholder="인증번호 6자리를 입력해주세요" disabled="disabled">
								</div>
							</td>
							<td>
								<div class="form-group" style="margin-right: 4px;">
									<button type="button" id="loginSubmit"
										style="height: 39px; display:none;">로그인</button>
									<button type="button" id="proLoginSubmit"
										style="height: 39px;">로그인</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</form>
			<div class="searchPwd">
				<a href="javascript:fn_findPassword()">비밀번호 찾기</a>
			</div>	
		</div>`
		change.insertAdjacentHTML('afterbegin', str_2);
	}	
		
	// ---------------------------------------------------------------------------------------------- //

    </script>
</html>
