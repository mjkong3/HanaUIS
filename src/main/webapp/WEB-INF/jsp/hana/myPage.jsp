<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    
    <title>메인 콘텐츠</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/myPage.css'/>"/>
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
	<!-- 학생, 교수 여부에 따라 다른 헤더 출력 -->
    <c:choose>
        <c:when test="${not empty student}"><%@ include file="includes/header.jsp" %></c:when>
        <c:when test="${not empty professor}"><%@ include file="includes/headerPro.jsp" %></c:when>
    </c:choose>
    

    <!-- 메인 콘텐츠 -->
    <div class="content">
        <div class="container">
        
        <h3>
            <c:choose>
                <c:when test="${not empty student}">학생정보</c:when>
                <c:when test="${not empty professor}">교수정보</c:when>
            </c:choose>
        </h3>
        
        <table>
            <tr>
                <th rowspan="7"><img src="<c:url value='/images/egovframework/logo.png'/>" alt="" width="100px"/></th>
            </tr>

            <tr>
                <th>이름</th>
                <td>
                    <c:choose>
                        <c:when test="${not empty student}"><c:out value="${student.name}"/></c:when>
                        <c:when test="${not empty professor}"><c:out value="${professor.name}"/></c:when>
                    </c:choose>
                </td>
                <td></td>
            </tr>
            
            <!-- 학번 또는 교번 출력 -->
            <c:choose>
                <c:when test="${not empty student}">
                    <tr>
                        <th>학번</th>
                        <td><c:out value="${student.studentId}"/></td>
                    </tr>
                </c:when>
                <c:when test="${not empty professor}">
                    <tr>
                        <th>교번</th>
                        <td><c:out value="${professor.professorId}"/></td>
                    </tr>
                </c:when>
            </c:choose>
            
            <tr>
                <th>생년월일</th>
                <td>1997년 7월 3일</td>
                <td></td>
            </tr>
            <tr>
                <th>전화번호</th>
                <td>010-0000-0000 </td>
                <td><a href="#">수정</a></td>
            </tr>
            <tr>
                <th>이메일</th>
                <td>minji@naver.com</td>
                <td><a href="#">수정</a></td>
            </tr>
            <tr>
                <th>주소</th>
                <td>울산 광역시 남구 삼산동 111-11</td>
                <td></td>
            </tr>
        </table>
    </div>
    </div>

    <%@ include file="includes/footer.jsp" %>

</body>
</html>
