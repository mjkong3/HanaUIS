<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 학생 상태 value 설정  -->
<c:set value="${student.status == '재학'}" var="leave" />
<c:set value="${student.status == '휴학'}" var="back" />
<title><c:if test="${leave}">휴학 신청</c:if> <c:if test="${back}">복학 신청</c:if>
</title>
<link type="text/css" rel="stylesheet"
	href="<c:url value='/css/egovframework/content.css'/>" />
<link type="text/css" rel="stylesheet"
	href="<c:url value='/css/egovframework/takeTime.css'/>" />
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer>
	/* 메뉴 클릭 이벤트 */
	function toggleSubmenu(event) {
		event.preventDefault(); // 기본 링크 클릭 동작 방지
		var submenu = event.currentTarget.nextElementSibling;
		if (submenu.style.display === "block") {
			submenu.style.display = "none";
		} else {
			submenu.style.display = "block";
		}
	}

	// 복학&휴학 신청일자
	$(document).ready(function() {
		// 신청일자 계산
		var today = new Date();
		var year = today.getFullYear();
		var month = ('0' + (today.getMonth() + 1)).slice(-2);
		var day = ('0' + today.getDate()).slice(-2);
		var currentDate = year + '-' + month + '-' + day;
		document.getElementById("currentDate").innerText = currentDate;
	});

	// 유효성 검사하기
	function validateForm() {
		var leaveDate = document.getElementsByClassName("leaveDate")[0].value; // 휴학날짜
		var returnDate = document.getElementsByClassName("returnDate")[0].value; // 복학날짜
		var reason = document.getElementById('reason').value; // 사유

		// 현재 날짜, 입력한 날짜
		var nowDate = new Date();
		nowDate.setHours(0, 0, 0, 0); // 시, 분, 초 제거

		// 날짜 형식으로 변경
		var toLeaveDate = new Date(leaveDate);
		var toReturnDate = new Date(returnDate);
		
		console.log("휴학 : "+toLeaveDate);
		console.log("복학 : "+toReturnDate);

		// 유효성 검사
		if (!reason) {
			alert("신청사유를 입력하세요.");
			return false;
		}
		
		if (!leaveDate) {
			alert("휴학 희망기간 시작일자를 입력하세요.");
			return false;
		} else if (toLeaveDate < nowDate) {
			alert("휴학 시작일자는 오늘 이후로 설정해야 합니다.");
			return false;
		}

		if (!returnDate) {
			alert("복학 희망기간을 입력하세요.");
			return false;
		} else if (toReturnDate < nowDate) {
			alert("복학일자는 오늘 이후로 설정해야 합니다.");
			return false;
		} else if (toReturnDate <= toLeaveDate) {
			alert("복학일자는 휴학 시작일자 이후로 설정해야 합니다.");
			return false;
		}

		// confirm 창 띄우기
		if (confirm("신청하시겠습니까?")) {
			alert("정상적으로 신청되었습니다.");
		} else {
			alert("취소되었습니다.");
		}
		return true;
	}
</script>
</head>
<body>
	<%@ include file="/WEB-INF/jsp/hana/includes/header.jsp"%>

	<!-- @@@ 휴학/복학 승인 여부는 아직 구현되지 않았습니다  @@@ -->

	<div class="content">
		<div class="container">
			<h3>
				<c:if test="${leave}">휴학 신청</c:if>
				<c:if test="${back}"> 복학 신청</c:if>
			</h3>
			<table>
				<colgroup>
					<col width="20%">
					<col width="30%">
					<col width="20%">
					<col width="30%">
				</colgroup>
				<tr>
					<th>&nbsp;학번</th>
					<td>${student.studentId}</td>
					<th>&nbsp;이름</th>
					<td>${student.name}</td>
				</tr>
				<tr>
					<th>&nbsp;전공</th>
					<td>${student.departmentName}</td>
					<th>&nbsp;학적 상태</th>
					<td><font style="font-weight: bold;">${student.status}</font>
					</td>
				</tr>
			</table>
			<form name="returnForm" action="/HanaUIS/std/leaveReturn.do"
				method="post" onsubmit="return validateForm();">
				<input type="hidden" name="studentId" value="${student.studentId}">
				<c:if test="${leave || back}">
					<table>
						<colgroup>
							<col width="20%">
							<col width="80%">
						</colgroup>
						<tbody>
							<tr>
								<th><c:if test="${leave}">&nbsp;휴학 신청일자</c:if> <c:if
										test="${back}">&nbsp;복학 신청일자</c:if></th>
								<td id="currentDate"></td>
							</tr>
							<tr>
								<th><c:if test="${leave}">
										<span class="red">*</span>휴학 구분</c:if> <c:if test="${back}">
										<span class="red">*</span>복학 구분</c:if></th>
								<td><c:if test="${leave}">
										<input type="radio" name="statusType" value="휴학" checked /> 일반 휴학
										&emsp;
										<input type="radio" name="statusType" value="군 휴학" /> 군 휴학
										<input type="hidden" name="status" value="휴학" />
									</c:if> <c:if test="${back}">
										<input type="radio" name="statusType" value="복학" checked /> 일반 복학
										<input type="hidden" name="status" value="재학" />
									</c:if></td>
							</tr>
							<tr>
								<th><c:if test="${leave}">
										<span class="red">*</span>휴학 사유</c:if> <c:if test="${back}">
										<span class="red">*</span>복학 사유</c:if></th>
								<td><textarea name="reason" id="reason" rows="4" cols="50"
										placeholder="신청사유를 적어주세요 (최대 500자)"></textarea></td>
							</tr>
							<tr>
								<th><c:if test="${leave}">
										<span class="red">*</span>휴학 희망기간</c:if> <c:if test="${back}">
										<span class="red">*</span>복학 희망기간</c:if></th>
								<td class="leaveReturn"><c:choose>
										<c:when test="${leave}">
											<span class="startDate">시작일자&emsp;<input type="date"
												name="leaveDate" class="leaveDate" /></span>
											<span class="startEnd">복학일자&emsp;<input type="date"
												name="returnDate" class="returnDate" /></span>
										</c:when>
										<c:when test="${back}">
											<input type="hidden" name="leaveDate" class="leaveDate" value="0000-00-00"/>
											<span class="startDate">복학일자&emsp;<input type="date"
												name="returnDate" class="returnDate"/></span>
										</c:when>
									</c:choose></td>
							</tr>
						</tbody>
					</table>
					<c:if test="${not empty statusList}">
						<div class="scroll-table">
							<table id="status-table">
								<colgroup>
									<col width="14%">
									<col width="18%">
									<col width="*">
									<col width="12%">
								</colgroup>
								<thead>
									<tr>
										<th>신청목적</th>
										<th>신청일자</th>
										<th>신청사유</th>
										<th>승인여부</th>
									</tr>
								</thead>
								<tbody>
									<c:forEach var="statusList" items="${statusList}">
										<tr>
											<td>${statusList.STATUS_TYPE}</td>
											<td><fmt:formatDate value="${statusList.REG_DTM}" pattern="yyyy-MM-dd"/></td>
											<td>${statusList.REASON}</td>
											<td>${statusList.APPROVED}</td>
										</tr>
									</c:forEach>


								</tbody>
							</table>
						</div>
					</c:if>
				</c:if>
				<c:choose>
					<c:when test="${leave}">
						<input type="submit" value="휴학 신청" />
					</c:when>
					<c:when test="${back}">
						<input type="submit" value="복학 신청" />
					</c:when>
				</c:choose>
				<c:if test="${!leave && !back}">
					<input type="submit" name="error" value="신청 불가" disabled="disabled" />
				</c:if>
			</form>
		</div>
	</div>
	<%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp"%>
</body>
</html>