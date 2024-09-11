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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/leave.css'/>"/>
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
         <h3>휴학 신청</h3>
        <form name="leaveForm" action="<c:url value='/leaveOfAbsence/submit'/>" method="post" onsubmit="return validateForm();">
            <table>
                <tr>
                    <th>학번</th>
                    <td>${student.studentId}</td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>${student.name}</td>
                </tr>
                <tr>
                    <th>휴학 기간</th>
                    <td>
                        <select name="leavePeriod">
                            <option value="1학기">1학기</option>
                            <option value="2학기">2학기</option>
                            <option value="1년">1년</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>휴학 사유</th>
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
                        <input type="submit" value="휴학 신청"/>
                    </td>
                </tr>
            </table>
        </form>

    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
