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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/classList.css'/>"/>
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

    <%@ include file="/WEB-INF/jsp/hana/includes/header.jsp" %>

    <div class="content">
	    <div class="container">
  	        <h3>수업 목록 조회</h3>
	        <form action="classSearch" method="GET" class="form-inline justify-content-center">
	            <label for="department" class="mr-2">학과 선택:</label>
	            <select class="form-control mr-2" name="department" id="department">
	                <option value="all">전체</option>
	                <option value="cs">컴퓨터공학과</option>
	                <option value="me">기계공학과</option>
	                <option value="ee">전기전자공학과</option>
	            </select>
	            <button type="submit" class="btn btn-primary">조회</button>
	        </form>
	
	    <!-- 수업 목록 테이블 -->
	        <table class="table table-hover mt-4">
	            <thead class="thead-dark">
	                <tr>
	                    <th>강의 코드</th>
	                    <th>강의명</th>
	                    <th>교수명</th>
	                    <th>학과</th>
	                    <th>강의실</th>
	                    
	                    <th>강의정보</th>
	                </tr>
	            </thead>
	            <tbody>
	                <%-- <c:forEach var="class" items="${classList}"> --%>
	                    <tr>
	                        <td>05</td>
	                        <td>빡센 코딩</td>
	                        <td>나경진</td>
	                        <td>컴공과</td>
	                        <td>301</td>
	                        <td>코딩 기초에 대한 이해와 흐름 숙지</td>
	                    </tr>
	                <%-- </c:forEach> --%>
	            </tbody>
	        </table>
	</div>
    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
