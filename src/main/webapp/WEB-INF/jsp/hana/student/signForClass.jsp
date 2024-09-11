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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/signForClass.css'/>"/>
    
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
	        <h3>수강신청</h3>
	        <form action="" method="post">
	            <table>
	                <tr>
	                    <th>과목코드</th>
	                    <th>과목명</th>
	                    <th>학점</th>
	                    <th>선택</th>
	                </tr>
	                <tr>
	                    <td>CS101</td>
	                    <td>프로그래밍 기초</td>
	                    <td>3</td>
	                    <td><input type="checkbox" name="course" value="CS101"></td>
	                </tr>
	                <tr>
	                    <td>CS102</td>
	                    <td>데이터베이스 개론</td>
	                    <td>3</td>
	                    <td><input type="checkbox" name="course" value="CS102"></td>
	                </tr>
	                <tr>
	                    <td>CS103</td>
	                    <td>웹 프로그래밍</td>
	                    <td>3</td>
	                    <td><input type="checkbox" name="course" value="CS103"></td>
	                </tr>
	                <!-- 필요한 만큼의 과목 추가 -->
	                <tr>
	                	<td colspan="4">총 학점 수 : 00점</td>
	                	
	                </tr>
	            </table>
	            <br>
	            <button type="submit" class="submit-btn">수강신청</button>
	        </form>

   		 </div>


    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
