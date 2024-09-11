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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/notice.css'/>"/>
    
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
	<script type="text/javaScript" language="javascript" defer="defer">
	/* 게시물 상세보기 화면으로 가기 */
	function fn_noticeDetail(no) {
		console.log("fn_noticeDetail 작동")
		document.listForm.selectedNo.value = no;
		document.listForm.action = "<c:url value='/board/noticeDetail.do'/>";	
		document.listForm.submit();
	}
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
    	
	<div class="content">
	    <div class="container">
	        <h3>공지사항</h3>
	        
	        <table>
	            <tr>
	                <th>번호</th>
	                <th>제목</th>
	                <th>작성일</th>
	            </tr>
	            <form name="listForm">
	            	<input type="hidden" name="selectedNo" />
		            <!-- 공지사항 데이터를 반복하여 출력 -->
		            <c:forEach var="notice" items="${notice}">
		                <tr>
		                    <td>${notice.boardCode}</td>
	            	        <td><a href="javascript:fn_noticeDetail('<c:out value= "${notice.boardCode}"/>')"><c:out value= "${notice.title}"/></a></td>
	            	        <td name="date"><fmt:formatDate value="${notice.boardDate}" pattern="yyyy년  MM월  dd일"/></td>
		                </tr>
		            </c:forEach>
	            </form>
	        </table>
	    </div>
	</div>
	
    <%@ include file="includes/footer.jsp" %>

</body>
</html>
