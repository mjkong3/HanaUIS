<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c"      uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form"   uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="ui"     uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    	<c:set var="leave" value="${student.status == '재학'}"/>
   		<c:set var="back" value="${student.status == '휴학'}"/>
    	
    <title> 
    			
    <title>
			  <c:if test="${leave}">휴학신청</c:if>
			  <c:if test="${back}">재학신청</c:if>
	</title>
    
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>"/>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/takeTime.css'/>"/>
    
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
        <h3>
        	  <c:if test="${leave}">휴학신청</c:if>
			  <c:if test="${back}"> 재학신청</c:if>
        </h3>
        <form name="returnForm" action="<c:if test="${leave}"><c:url value='/'/></c:if>
			  							<c:if test="${back}"><c:url value='/'/></c:if>" 
		method="post" onsubmit="return validateForm();">

            <table>
                <tr>
                    <th>학번</th>
                    <td>240106</td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>김민지</td>
                </tr>
                <tr>
                    <th>
                        <c:if test="${leave}">휴학 희망 기간</c:if>
			  			<c:if test="${back}"> 복학 희망 기간</c:if>
                    </th>
                    <td>
                        <select name="returnSemester">
                            <option value="1학기">1학기</option>
                            <option value="2학기">2학기</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>
                        <c:if test="${leave}">휴학사유</c:if>
			  			<c:if test="${back}"> 복학사유</c:if>
                    </th>
                    <td>
                        <textarea name="reason" rows="4" cols="50"></textarea>
                    </td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td><input type="text" name="contactNumber" value="${student.contactNumber}" /></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center;">
                        <c:if test="${leave}"><input type="submit" value="휴학 신청"/></c:if>
			  			<c:if test="${back}"><input type="submit" value="복학 신청"/></c:if>
                        
                    </td>
                </tr>
            </table>
        </form>
        </div>
    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
