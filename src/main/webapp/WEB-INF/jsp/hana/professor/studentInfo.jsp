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
    </script>
</head>
<body>
	
  		<%@ include file="/WEB-INF/jsp/hana/includes/headerPro.jsp" %>
   
    <div class="content">
        <div class="container">

        <div class="student-list">
            <h3>수강 학생 목록</h3>
            <form action="submitGrades.jsp" method="post">
                <table>
                    <thead>
                        <tr>
                            <th>학생 학번</th>
                            <th>학생 이름</th>
                            <th>중간</th>
                            <th>기말</th>
							<th>과제</th>
							<th>학점</th>
							<th></th>
							
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>202012345</td>
                            <td>홍길동</td>
                            <td>
                                <input type="number" name="score_202012345" min="0" max="100" required>
                            </td>
                            <td>
                                <input type="number" name="score_202012345" min="0" max="100" required>
                            </td>
                            <td>
                                <input type="number" name="score_202012345" min="0" max="100" required>
                            </td>
                            
                            <td>
                                <select name="grade_202012345" required>
                                	<option value="N">N</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="F">F</option>
                                </select>
                            </td>
                            <td class="submit-section">
                            	<button type="submit">성적 제출</button>
                            </td>
                        </tr>
                        
                        
                    </tbody>
                </table>

            </form>
        </div>
    </div>

    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
