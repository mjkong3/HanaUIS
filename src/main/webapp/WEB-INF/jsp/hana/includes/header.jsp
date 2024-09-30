<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/header.css'/>"/>
    
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javaScript" language="javascript" defer="defer">

	function fn_myPage() {
	    location.href = "/HanaUIS/std/myPage.do";
	}
	function fn_notice() {
	    location.href = "/HanaUIS/std/notice.do";
	}
	function fn_leave() {
	    location.href = "/HanaUIS/std/leave.do";
	}
	function fn_signForClass() {
	    location.href = "/HanaUIS/std/signForClass.do";
	}
	function fn_schedule() {
	    location.href = "/HanaUIS/std/schedule.do";
	}
	function fn_classList() {
	    location.href = "/HanaUIS/std/classList.do";
	}
	function fn_myGrade() {
	    location.href = "/HanaUIS/std/myGrade.do";
	}
	function fn_back() {
	    location.href = "/HanaUIS/std/back.do";
	}
	
	
</script>
<div class="menu">

    <div class="logo">
       <a href="javascript:fn_notice()"><img src="<c:url value='/images/egovframework/logo.png'/>" alt=""/></a>
        
    </div>
    <ul>
    
        <li><a onclick="toggleSubmenu(event)">학적관리</a>
            <ul class="submenu">
                <li><a href="javascript:fn_myPage()">마이페이지</a></li>
                <li><a href="javascript:fn_leave()">휴/복학신청</a></li>
            </ul>
        </li>
        
        <li><a onclick="toggleSubmenu(event)">강의</a>
            <ul class="submenu">
			     <li> <a href="javascript:fn_classList()" >강의조회</a></li>
			     <li> <a href="javascript:fn_myGrade()" >성적조회</a></li>
            </ul>
        </li>
        
        <li> <a href="javascript:fn_signForClass()">수강신청</a></li>
        <li> <a href="javascript:fn_schedule()">시간표</a></li>
    </ul>
</div>
