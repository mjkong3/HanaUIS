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
            <h3>성적 조회</h3>
            
            <p style="color: grey; float: right;">학점은 중간 (40%), 기말(40%), 과제(20%)를 합산하여 부여</p>
            
           		<table class="totalTable">
					<thead>
		                <tr>
		                  <th>학기</th>
		                  <th>총 학점 </th>
		                </tr>
		            </thead>
		            <tbody>
			            <c:forEach var="totalGrade" items="${totalGrade}">	
							<tr>
								<th>${totalGrade.studentYear} 학년 ${totalGrade.semester}학기</th>
								<td>${totalGrade.totalCredit} / ${totalGrade.totalGrade}</td>
							</tr>
						</c:forEach>
					</tbody>
				</table>

            <!-- 학년, 학기 선택 폼 -->
	            <form action="myGrade.do" method="post">
	               <div class="filters">
	                  <label for="yearSemesterSelect"></label>
	                  <select id="yearSemesterSelect" name="yearSemester">
	                     <option value="0" <c:if test="${selectedYear == 1 && selectedSemester == 1}">selected</c:if>>전체학기</option>
	                     <option value="1-1" <c:if test="${selectedYear == 1 && selectedSemester == 1}">selected</c:if>>1학년 1학기</option>
	                     <option value="1-2" <c:if test="${selectedYear == 1 && selectedSemester == 2}">selected</c:if>>1학년 2학기</option>
	                     <option value="2-1" <c:if test="${selectedYear == 2 && selectedSemester == 1}">selected</c:if>>2학년 1학기</option>
	                     <option value="2-2" <c:if test="${selectedYear == 2 && selectedSemester == 2}">selected</c:if>>2학년 2학기</option>
	                  </select>
	
	                  <!-- 조회 버튼 추가 -->
	                  <button type="submit">조회</button>
	               </div>
	            </form>
	            <form>
            <table>
                <thead>
                    <tr>
                        <th>과목명</th>
                        <th>전공</th>
                        <th>학기</th>
		                <th>중간</th>
		                <th>기말</th>
		                <th>과제</th>
		                <th>총점</th>
		                <th>학점</th>
                    </tr>
                </thead>
                <tbody>
                
                   <c:if test="${empty grade}">
                   		<tr>
                   			<td colspan="7">해당 기간에 수강한 강의가 없습니다</td>
                   		</tr>
               		</c:if>
                   
                
                   <c:forEach var="grade" items="${grade}">	
          				<input type="hidden" name="studentId" value="${grade.studentId}"/>			            
	                <tr>
		                <td>${grade.className}</td>
		                <td>${grade.classType}</td>
		                <td>${grade.studentYear} 학년 ${grade.semester}학기</td>
	                    <td>${grade.middleTest}</td>
	                    <td>${grade.finalTest}</td>
	                    <td>${grade.report}</td>
	                    <td>${grade.score}</td>
	                    <td>${grade.grade}</td>
	                </tr>
	            	</c:forEach>
                </tbody>
            </table>
            <div class="pagination">
			   <!-- 첫 페이지로 이동 -->
			   <a href="?page=1&yearSemester=${yearSemester}"
			      class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;&lt;</a>
			
			   <!-- 이전 페이지로 이동 -->
			   <a href="?page=${pageHandler.page > 1 ? pageHandler.page - 1 : 1}&yearSemester=${yearSemester}"
			      class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;</a>
			
			   <!-- 중간 페이지 목록 (1~5 or 6~10) -->
			   <c:forEach begin="${pageHandler.beginPage}" end="${pageHandler.endPage}" var="i">
			      <a href="?page=${i}&yearSemester=${yearSemester}"
			         class="${i == pageHandler.page ? 'active' : ''}">${i}</a>
			   </c:forEach>
			
			   <!-- 다음 페이지로 이동 -->
			   <a href="?page=${pageHandler.page < pageHandler.totalPage ? pageHandler.page + 1 : pageHandler.totalPage}&yearSemester=${yearSemester}"
			      class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;</a>
			
			   <!-- 마지막 페이지로 이동 -->
			   <a href="?page=${pageHandler.totalPage}&yearSemester=${yearSemester}"
			      class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;&gt;</a>
			</div>
            
            
            </form>
        </div>
    </div>
	</div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
