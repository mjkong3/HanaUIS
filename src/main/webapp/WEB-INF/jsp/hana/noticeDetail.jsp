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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/noticeDetail.css'/>"/>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer="defer">

	function fn_notice() {
	    location.href = "/HanaUIS/board/notice.do";
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
	        <h3>공지사항 상세보기</h3>
	        
	        <table>
		        <tr>
		        	<th>제목</th>
		        	<td>${board.title}</td>
		        </tr>
		        <tr>
		        	<th>작성일</th>
		        	<td name="date"><fmt:formatDate value="${board.regdate}" pattern="yyyy년  MM월  dd일"/></td>
		        </tr>
		        <tr>
		        	 <th>첨부 파일</th>
               		  <td>
	                  <c:forEach var="file" items="${boardFile}">
	                     <a href="http://localhost:8082/HanaUIS/filedownload.jsp?fileName=${file.fileName}"><c:out value="${file.fileName}"/></a><br>
	                  </c:forEach>
	                  </td>
		        </tr>
		        <tr >
		        	<td class="boardContent" colspan="2">${board.content}</td>
		        </tr>
	        </table>

	        <div class="back-button">
	            <a href="javascript:fn_notice()">목록으로 돌아가기</a>
	        </div>
	    </div>
    </div>

    <%@ include file="includes/footer.jsp" %>

</body>
</html>
