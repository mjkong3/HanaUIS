<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
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
                <td><c:out value="${classInfo.classCode}"/></td>
            </tr>
            <tr>
                <th>교수명</th>
                <td><c:out value="${classInfo.name}"/></td>
            </tr>
            <tr>
                <th>수강 인원</th>
                <td><c:out value="${classInfo.maxPeople}"/></td>
            </tr>
            <tr>
                <th>강의 시간표</th>
                <td>
                    <table class="schedule-table">
                    	<tr>
                    		<td>요일</td>
                    		<td>교시</td>
                    		<td>강의실</td>
                    	</tr>
				        <c:forEach var="schedule" items="${timetable}">
				            <tr>
				                <td>${schedule.weekDay}</td>
				                <td>${schedule.classHour}</td>
				                <td>${schedule.location}</td>
				            </tr>
				        </c:forEach>
                    </table>
                </td>
            </tr>
            <tr>
                <th>강의 개요</th>
                <td><c:out value="${classInfo.classInfo}"/></td>

            </tr>
        </table>
    </div>

    </div>

    <%@ include file="includes/footer.jsp" %>

</body>
</html>
