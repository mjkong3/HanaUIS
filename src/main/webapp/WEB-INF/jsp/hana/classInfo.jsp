<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>메인 콘텐츠</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/classInfo.css'/>"/>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer="defer">


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
    
	function fn_classList() {
	    location.href = "/HanaUIS/std/classList.do";
	}
    
    /* 수정 정보를 수정 */
    function fn_updateClassInfo(){
    	
	   	 let formData = $("#infoForm").serializeArray();
		 let jsonData = {};
		 
		 classCode = document.getElementById("classCode").value;
		 classInfo = document.getElementById("classInfo").value;
		 
		 jsonData['classCode'] = classCode;
		 jsonData['classInfo'] = classInfo;
		 
		 console.log(jsonData);
    	
    	$.ajax({
    		type:"POST",
    		url: "updateClassInfo.do",
    	    data: jsonData,
            dataType: "text",
    		success: function(data){
    			if(data == "ok"){
    				alert("강의 개요가 수정되었습니다.");
    			}else{
    				alert("강의 개요 수정에 실패했습니다.");
    			}
    		},
    		error: function(request,status, error){
                alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
    		}
    	})
    }
    
    
    </script>
</head>
<body>
<!-- HEADER -->
    <c:choose>
        <c:when test="${not empty student}"><%@ include file="includes/header.jsp" %></c:when>
        <c:when test="${not empty professor}"><%@ include file="includes/headerPro.jsp" %></c:when>
    </c:choose>

    <div class="content">
        <div class="container">
        <h3>강의 정보</h3>

			<table class="course-table">
				<tr>
					<th>강의명</th>
					<td>${classInfo.className}</td>
				</tr>
				<tr>
					<th>강의 코드</th>
					<td>${classInfo.classCode}</td>
				</tr>
				<tr>
					<th>교수명</th>
					<td>${classInfo.name}</td>
				</tr>
				<tr>
					<th>수강 정원</th>
					<td>${classInfo.maxPeople}명</td>
				</tr>
				<tr>
					<th>강의 시간표</th>
					<td>
						<table class="schedule-table">
							<fmt:formatDate value="${classInfo.classStart}"
								pattern="yyyy년  MM월  dd일" />
							~
							<fmt:formatDate value="${classInfo.classEnd}"
								pattern="yyyy년  MM월  dd일" />

							<c:forEach var="schedule" items="${timetable}">
								<tr>
									<td><c:choose>
											<c:when test="${schedule.weekDay == 1}">월요일</c:when>
											<c:when test="${schedule.weekDay == 2}">화요일</c:when>
											<c:when test="${schedule.weekDay == 3}">수요일</c:when>
											<c:when test="${schedule.weekDay == 4}">목요일</c:when>
											<c:when test="${schedule.weekDay == 5}">금요일</c:when>
										</c:choose></td>
									<td>${schedule.classHour}교시</td>
									<td>${schedule.location}</td>
								</tr>
							</c:forEach>
						</table>
					</td>
				</tr>
				<tr class="classInfoTD">
					<th>강의 개요</th>
					<td class="classInfo"><c:choose>
							<c:when test="${not empty student}">
								<c:out value="${classInfo.classInfo}" />
							</c:when>

							<c:when test="${not empty professor}">
								<form id="infoForm">
									<input type="hidden" id="classCode"
										value="${classInfo.classCode}">
									<textarea id="classInfo" class="classInfo">${classInfo.classInfo}</textarea>
									<a href="javascript:fn_updateClassInfo()" class="button-like">수정</a>
								</form>
							</c:when>
						</c:choose></td>
				</tr>
			</table>
			<c:choose>

				<c:when test="${not empty student}">

					<div class="back-button">
						<a href="javascript:fn_classList()">목록</a>
					</div>
				</c:when>
			</c:choose>


		</div>

    </div>

    <%@ include file="includes/footer.jsp" %>

</body>
</html>
