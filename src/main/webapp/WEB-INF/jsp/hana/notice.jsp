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
   function fn_noticeDetailPfs(no) {
      console.log("fn_noticeDetail 작동")
      document.noticeForm.boardNo.value = no;
      document.noticeForm.action = "<c:url value='/pfs/noticeDetail.do'/>";   
      document.noticeForm.submit();
   }
   function fn_noticeDetailStd(no) {
      console.log("fn_noticeDetail 작동")
      document.noticeForm.boardNo.value = no;
      document.noticeForm.action = "<c:url value='/std/noticeDetail.do'/>";   
      document.noticeForm.submit();
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
               <form name="noticeForm">
                  <input type="hidden" name="boardNo" />
                  <!-- 공지사항 데이터를 반복하여 출력 -->
                  <c:forEach var="notice" items="${notice}">
                      <tr>
                          <td>${notice.boardCode}</td>
							<td>
								<c:choose>
									<c:when test="${not empty student}">
										<a href="javascript:fn_noticeDetailStd('<c:out value= "${notice.boardCode}"/>')">
								<c:out value="${notice.title}" /></a>
									</c:when>
									<c:when test="${not empty professor}">
										<a href="javascript:fn_noticeDetailPfs('<c:out value= "${notice.boardCode}"/>')">
								<c:out value="${notice.title}" /></a>
									</c:when>
								</c:choose> 
							</td>
							<td name="date"><fmt:formatDate value="${notice.regDtm}" pattern="yyyy년  MM월  dd일"/></td>
                      </tr>
                  </c:forEach>
               </form>
           </table>
           
           
           <!-- 페이징 -->
           <div class="pagination">
            <!-- 첫 페이지로 이동 -->
            <a href="?page=1" class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;&lt;</a>

            <!-- 이전 페이지로 이동 -->
            <a href="?page=${pageHandler.page > 1 ? pageHandler.page - 1 : 1}"
               class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;</a>

            <!-- 중간 페이지 목록 (1~5 or 6~10) -->
            <c:forEach begin="${pageHandler.beginPage}"
               end="${pageHandler.endPage}" var="i">
               <a href="?page=${i}"
                  class="${i == pageHandler.page ? 'active' : ''}">${i}</a>
            </c:forEach>

            <!-- 다음 페이지로 이동 -->
            <a
               href="?page=${pageHandler.page < pageHandler.totalPage ? pageHandler.page + 1 : pageHandler.totalPage}"
               class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;</a>

            <!-- 마지막 페이지로 이동 -->
            <a href="?page=${pageHandler.totalPage}"
               class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;&gt;</a>
         </div>
       </div>
   </div>
   
    <%@ include file="includes/footer.jsp" %>

</body>
</html>
