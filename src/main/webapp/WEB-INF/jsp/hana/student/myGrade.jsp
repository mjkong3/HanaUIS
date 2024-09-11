<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>메인 콘텐츠</title>

<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>" />
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/myGrade.css'/>" />

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
        <div class="course-info">
            <h3>수강 정보</h3>
            <table>
                <thead>
                    <tr>
                        <th>과목 코드</th>
                        <th>과목명</th>
                        <th>학점</th>
                        <th>성적</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>CSE101</td>
                        <td>프로그래밍 입문</td>
                        <td>3</td>
                        <td>A+</td>
                    </tr>
                    <tr>
                        <td>CSE102</td>
                        <td>자료구조</td>
                        <td>3</td>
                        <td>A</td>
                    </tr>
                    <tr>
                        <td>MAT101</td>
                        <td>미적분학</td>
                        <td>3</td>
                        <td>B+</td>
                    </tr>
                    <tr>
                        <td>ENG101</td>
                        <td>기초 영어</td>
                        <td>2</td>
                        <td>A</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
	</div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
