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
	<script type="text/javaScript" language="javascript" defer="defer">
	

	/* 학생  로그인*/
	
	// 인증코드 보내기 버튼 클릭 이벤트
	$(document).on("click", "#mail-Check-Btn", function() {
    const id = $("#id").val();
    const password = $("#password").val();

    // 학번과 비밀번호 입력 확인
    if (id === "" || password === "") {
        alert("학번과 비밀번호를 입력해주세요.");
        return;
    };

    
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
		<h3>비밀번호 찾기</h3>

		<div class="login-form">

			<form action="" method="post" id="form_login">
				<table>
					<tr>
						<td><label for="name">이름</label></td>
						<td><input type="text" id="name" name="name"
							placeholder="이름을 입력하세요" ></td>
					</tr>
					<tr>
						<td><label for="user-id">아이디</label></td>
						<td><input type="text" id="id" name="id"
							placeholder="아이디를 입력하세요" ></td>
						<td colspan="2"><button>인증번호 발송</button></td>
							
					</tr>
					<tr>
						<td><label for="">인증번호</label></td>
						<td><input type="text" id="" name=""
							placeholder="인증번호를 입력하세요" ></td>
						<td><button>인증번호 확인</button></td>
					</tr>
	
					<tr>
						<td><label>새비밀번호</label></td>
						<td><input type="password" id="password" name="password" ></td>
					</tr>
					<tr>
						<td><label>비밀번호 확인</label></td>
						<td><input type="password" id="password" name="password" ></td>
						<td><button >비밀번호 변경</button></td>
					</tr>
				</table>
			</form>



		</div>
	</div>
</body>


    
</html>
