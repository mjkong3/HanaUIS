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
    
    function fn_classDetail(classCode) {
		document.classForm.selectedNo.value = classCode;
		document.classForm.action = "<c:url value='/std/classInfo.do'/>";	
		document.classForm.submit();
    }
    
    function fn_searchClass(){
        var selectedDepartmentCode = document.getElementById("department").value;
		console.log(selectedDepartmentCode)
		document.searchForm.departmentCode.value = selectedDepartmentCode;
		document.searchForm.action = "<c:url value='/std/classList.do'/>";	
		document.searchForm.submit();
    }
    </script>
</head>
<body>

    <%@ include file="/WEB-INF/jsp/hana/includes/header.jsp" %>

    <div class="content">
	    <div class="container">
  	        <h3>강의 목록</h3>
			<form id="searchForm" name="searchForm" method="GET" class="form-inline justify-content-center"  >
	            <input type="hidden" name="departmentCode"/>
	             <select class="form-control" name="department" id="department">
	                 <option value="" <c:if test="${param.department == 'ALL'}">selected</c:if>>전체 학과</option>
	                 <c:forEach var="department" items="${department}">
	                     <option value="${department.departmentCode}" 
	                         <c:if test="${param.departmentCode == department.departmentCode}">selected</c:if>>
	                         ${department.departmentName}
	                     </option>
	                 </c:forEach>
	             </select>
	             <button type="button" class="btn" onclick="fn_searchClass()">조회</button>
	         </form>
	
	    <!-- 수업 목록 테이블 -->
	    <form name="classForm" method="get">
	    	<input type="hidden" name="selectedNo" />
	        <table class="table table-hover mt-4">
	            <thead class="thead-dark">
	                <tr>
	                    <th>코드</th>
	                    <th>학기</th>
	                    <th>강의명</th>
	                    <th>교수명</th>
	                    <th>학과</th>
	                    <th>강의실</th>
	                    <th>이수구분</th>
	                    <th>강의정보</th>
	                    
	                </tr>
	            </thead>
	            <tbody>
                    <c:if test="${not empty classList}">
	            
					<c:forEach var="selectClass" items="${classList}">
						<tr>
							<td>${selectClass.classCode}</td>
							<td>${selectClass.semester}학기</td>
							<td>${selectClass.className}</td>
							<td>${selectClass.professorName}</td>
							<td>${selectClass.departmentName}</td>
							<td>${selectClass.classroomName}</td>
							<td>${selectClass.classType}</td>
							<td><a href="javascript:fn_classDetail('${selectClass.classCode}')">상세보기</a></td>
						</tr>
					</c:forEach>
					</c:if>
					<c:if test="${empty classList}">
						<tr>
                           <td colspan="8" >개설된 강의가 없습니다.</td>
						</tr>
					</c:if>
	            </tbody>
	        </table>
	        
	                    <div class="pagination">
			   <!-- 첫 페이지로 이동 -->
			   <a href="?page=1&departmentCode=${departmentCode}"
			      class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;&lt;</a>
			
			   <!-- 이전 페이지로 이동 -->
			   <a href="?page=${pageHandler.page > 1 ? pageHandler.page - 1 : 1}&departmentCode=${departmentCode}"
			      class="${pageHandler.page == 1 ? 'disabled' : ''}">&lt;</a>
			
			   <!-- 중간 페이지 목록 (1~5 or 6~10) -->
			   <c:forEach begin="${pageHandler.beginPage}" end="${pageHandler.endPage}" var="i">
			      <a href="?page=${i}&departmentCode=${departmentCode}"
			         class="${i == pageHandler.page ? 'active' : ''}">${i}</a>
			   </c:forEach>
			
			   <!-- 다음 페이지로 이동 -->
			   <a href="?page=${pageHandler.page < pageHandler.totalPage ? pageHandler.page + 1 : pageHandler.totalPage}&departmentCode=${departmentCode}"
			      class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;</a>
			
			   <!-- 마지막 페이지로 이동 -->
			   <a href="?page=${pageHandler.totalPage}&departmentCode=${departmentCode}"
			      class="${pageHandler.page == pageHandler.totalPage ? 'disabled' : ''}">&gt;&gt;</a>
			</div>
        
        </form>
	</div>
    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
