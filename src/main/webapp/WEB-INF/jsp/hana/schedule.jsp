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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/schedule.css'/>"/>
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

	<!-- 학생, 교수 여부에 따라 다른 헤더 출력 -->
    <c:choose>
        <c:when test="${not empty student}"><%@ include file="includes/header.jsp" %></c:when>
        <c:when test="${not empty professor}"><%@ include file="includes/headerPro.jsp" %></c:when>
    </c:choose>
    
    <div class="content">
        <div class="container">
        <h3>시간표</h3>
        
            <c:choose>
		       <c:when test="${student.status == '재학중' or professor.status == '재직중'}">
			       
        
			        <table class="timetable">
			            <thead>
			                <tr>
			                    <th>시간/요일</th>
			                    <th>월요일</th>
			                    <th>화요일</th>
			                    <th>수요일</th>
			                    <th>목요일</th>
			                    <th>금요일</th>
			                </tr>
			            </thead>
			            <tbody>
			            
			                <!-- 시간대와 요일별 시간표를 동적으로 생성 -->
			                <c:forEach var="hour" begin="9" end="15" step="1">
			                    <tr>
			                    	
			                        <td>${hour-8} 교시 <br>
			                        	${hour}:00 - ${hour+1}:00
			                        </td>
			
			                        <!-- 동적으로 스케줄 생성 -->
			           			  	<c:forEach var="day" begin="1" end="5">
			             	 		<td>
						                <c:forEach var="schedule" items="${timetable}">
						                    <c:if test="${schedule.weekDay == day && schedule.classHour == hour-8}">
						                        <div class="class-info">
						                            <strong>${schedule.subject}</strong>
						                            <br/>
						                             ${schedule.professor}
						                            <br/>
						                            ${schedule.location}
						                        </div>
						                    </c:if>
						                </c:forEach>
						            </td>
						           </c:forEach>
						           
			                    </tr>
			                </c:forEach>
			                
			            </tbody>
			        </table>
   	        	</c:when>
   	        	
 	        	<c:otherwise>
            		<h4>이용이 불가능합니다.</h4>
        		</c:otherwise>
        		
           	</c:choose>
           	
           	
        </div>

    </div>

    <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
