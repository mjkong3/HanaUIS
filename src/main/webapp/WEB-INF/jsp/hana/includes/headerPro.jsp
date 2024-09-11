<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/header.css'/>"/>
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer="defer">

	function fn_myPage() {
	    location.href = "/pfs/myPage.do";
	}
	function fn_notice() {
	    location.href = "/pfs/notice.do";
	}
	function fn_studentInfo() {
	    location.href = "/pfs/studentInfo.do";
	}
	function fn_schedule() {
	    location.href = "/pfs/schedule.do";
	}
	
	 function fn_classInfo(no) {
		document.listForm.selectedNo.value = no;
		document.listForm.action = "<c:url value='/pfs/classInfo.do'/>";	
		document.listForm.submit();
	}
	 
	function fn_studentInfo(no) {
		document.listForm.selectedNo.value = no;
		document.listForm.action = "<c:url value='/pfs/studentInfo.do'/>";	
		document.listForm.submit();
	}

	/* 만약 강의가 없으면 비동기 통신을 이용하여 알림창을 띄우기 */
</script>
<div class="menu">

    <div class="logo">
       <a href="javascript:fn_notice()"><img src="<c:url value='/images/egovframework/logo.png'/>" alt=""/></a>
    </div>
    <form name="listForm" method="post">
   		<input type="hidden" name="selectedNo" />
    
	    <ul>
	        <li> <a href="javascript:fn_myPage()" ">마이페이지</a></li>
	    
	        <li><a onclick="toggleSubmenu(event)">강의 조회</a>
	            	<ul class="submenu">
	            		<c:forEach var="professorClass" items="${professorClass}" varStatus="status">
				          	<li>
				                <!-- 강의 클릭 시 fn_classInfo 호출 -->
				                <a href="javascript:fn_classInfo('<c:out value="${professorClass.classCode}"/>')">
				                    <c:out value="${professorClass.className}"/>
				                </a>
				            </li>
			            </c:forEach>
	            	</ul>
	             
	        </li>
	        
	        <li> <a onclick="toggleSubmenu(event)">학생 성적관리</a>
	            <ul class="submenu">
	            
           			<c:forEach var="professorClass" items="${professorClass}" varStatus="status">
			          	<li>
			                <!-- 강의 클릭 시 fn_classInfo 호출 -->
			                <a href="javascript:fn_studentInfo('<c:out value="${professorClass.classCode}"/>')">
			                    <c:out value="${professorClass.className}"/>
			                </a>
			            </li>
		            </c:forEach>
	            </ul>
	        </li>
	        
	        <li> <a href="javascript:fn_schedule()">강의시간표</a></ul>
	       	</li>
	    </ul>
   	 </form>
	    
</div>
