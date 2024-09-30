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
       <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/studentInfo.css'/>"/>    
       
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
       
       
       
       <c:if test="${not empty errorMessage}">
       console.log("${errorMessage}");
       alert("${errorMessage}"); // 경고창 띄우기
       </c:if>

       <c:if test="${not empty noResultsMessage}">
       console.log("${noResultsMessage}");
       alert("${noResultsMessage}"); // 검색 결과가 없을 때 경고창 띄우기
       </c:if>

       

       </script>
   </head>
   <body>
      
           <%@ include file="/WEB-INF/jsp/hana/includes/headerPro.jsp" %>
      
       <div class="content">
           <div class="container">
   
           <div class="student-list">
               <h3>수강 학생 : ${className}</h3>
               
				<form action="studentInfo.do" method="get">
					<div class="search-section">
						<select name="searchType">
							<option value="id" ${searchType == 'id' ? 'selected' : ''}>학번</option>
							<option value="name" ${searchType == 'name' ? 'selected' : ''}>이름</option>
						</select> <input type="text" name="searchKeyword"
							placeholder="학번 또는 이름으로 검색" value="${searchKeyword}"> <input
							type="hidden" name="selectedNo" value="${classCode}" />
						<button type="submit">검색</button>
						<button type="button" onclick="location.href='studentInfo.do?selectedNo=${classCode}'">전체보기</button>
					</div>
				</form>


				<form id="listForm" method="post">
                <table>
                    <thead>
                        <tr>
                            <th>학번</th>
                            <th>이름</th>
                            <th>성별</th>
                            <th>학년</th>
                            <th>학과</th>
                            <th>전화번호</th>
                            <th>이메일</th>
                        </tr>
                    </thead>
                    <tbody>
	                 	<c:if test="${empty selectClassStudent}">
	                		<tr>
	                			<td colspan="7">수강중인 학생이 없습니다</td>
	                		</tr>
	            		</c:if>
                        <c:forEach var="student" items="${selectClassStudent}">   
                             <input type="hidden" name="selectedNo" value="${student.classCode}"/>
                                 
                            <tr>
                                <td>${student.studentId}</td>
                                <td>${student.studentName}</td>
                                
                                <td>
									  <c:choose>
									      <c:when test="${student.gender == 'M'}">
									          남자
									      </c:when>
									      <c:otherwise>
									          여자
									      </c:otherwise>
									  </c:choose>
                                </td>
                                <td>${student.year}</td>
                                <td>${student.departmentName} </td>
                                <td>${student.phone}</td>
                                <td>${student.email}</td>
                                <td>${student.grade}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
                
                <!-- 페이지 네비게이션 -->
				<%-- <c:if  test="${not empty selectClassStudent}"> --%>
		               <div class="pagination">
		                  <!-- 첫 페이지로 이동 -->
		                  <a href="?page=1&selectedNo=${classCode}"
		                     class="${pageHandler.firstPage ? 'disabled' : ''}">처음</a> <a
		                     href="?page=${pageHandler.beginPage - 1}&selectedNo=${classCode}"
		                     class="${pageHandler.firstPage ? 'disabled' : ''}">이전</a>
		
		                  <!-- 중간 페이지 목록 (1~5 or 6~10) -->
		                  <c:forEach begin="${pageHandler.beginPage}"
		                     end="${pageHandler.endPage}" var="i">
		                     <a href="?page=${i}&selectedNo=${classCode}"
		                        class="${i == pageHandler.page ? 'active' : ''}">${i}</a>
		                  </c:forEach>
		
		                  <!-- 다음 페이지로 이동 -->
		                  <a href="?page=${pageHandler.endPage + 1}&selectedNo=${classCode}"
		                     class="${pageHandler.endPage >= pageHandler.totalPage ? 'disabled' : ''}">다음</a>
		
		                  <!-- 마지막 페이지로 이동 -->
		                  <a href="?page=${pageHandler.totalPage}&selectedNo=${classCode}"
		                     class="${pageHandler.endPage >= pageHandler.totalPage ? 'disabled' : ''}">끝</a>
		               </div>
               <%-- </c:if> --%>
                
            </form>
   
   
              
           </div>
       </div>
   
       </div>
   
       <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>
   
   </body>
   </html>
