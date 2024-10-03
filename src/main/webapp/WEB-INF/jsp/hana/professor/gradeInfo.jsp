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
       <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/gradeInfo.css'/>"/>    
       
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
       
       function fn_chart(classCode) {
    	    let url = "chart.do?classCode=" + classCode;
      	    document.listForm.action = url;
    		document.listForm.submit();
    	}

       
       function fn_updateGrade(studentId) {
           let formData = $("#listForm").serializeArray();
           let jsonData = {};
           
           middleTest= document.getElementById("middleTest"+studentId).value;
           finalTest = document.getElementById("finalTest"+studentId).value;
           report = document.getElementById("report"+studentId).value;
           classCode = document.getElementById("selectedNo").value;

           jsonData['studentId'] = studentId;
           jsonData["middleTest"] = middleTest;
           jsonData["finalTest"] = finalTest;
           jsonData["report"] = report;
           jsonData["classCode"] = classCode;
           
           // # = id
           // . = class
           $("#report"+studentId).val();
           console.log(formData);
           console.log(jsonData);

           $.ajax({
               type: "POST",
               url: "updateGrade.do",
               data: jsonData,  // JSON 데이터임을 명시
               dataType: "text",
               success: function(data) {
                   if (data === "ok") {
                       alert("성적 수정 성공");
                       console.log("${selectedNo}");
                       location.href = "<c:url value='/pfs/gradeInfo.do?selectedNo=" + classCode + "' />";
                   } else {
                       alert("성적 수정 실패");
                   }
               },
               error: function(request, status, error) {
                   alert("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
               }
           });
       }
    // input 숫자 값 유효성 검사 1.
       $(document).on("keyup", "input[name^=middleTest], input[name^=finalTest]", "input[name^=report]", function() {
           var val = $(this).val();
 
           if (!/^\d+$/.test(val)) {
               alert("숫자만 입력해 주십시오.");
               $(this).val('');
               return;
           }
           if (val < 0 || val > 100) {
               alert("0~100 범위로 입력해 주십시오.");
               $(this).val('');
           }
       });

       </script>
   </head>
   <body>

	<%@ include file="/WEB-INF/jsp/hana/includes/headerPro.jsp"%>

	<div class="content">
		<div class="container">

			<h3>성적 관리 : ${className}</h3>

			<div class="search-container">
				<form action="gradeInfo.do" method="get">
					<div class="search-section">
		 	            <select class="form-control" name="departmentCode" id="departmentCode">
			            		<option value="ALL">전체 학과</option>
		        				<c:forEach var="department" items="${department}">	        				
					                <option value="${department.departmentCode}">${department.departmentName}</option>
					            </c:forEach>
			            </select> 
						<select name="searchType">
							<option value="id" ${searchType == 'id' ? 'selected' : ''}>학번</option>
							<option value="name" ${searchType == 'name' ? 'selected' : ''}>이름</option>
						</select> 
						<input type="text" name="searchKeyword" placeholder="학번 또는 이름으로 검색" value="${searchKeyword}"> 
						<input type="hidden" name="selectedNo" value="${classCode}" />
						<button type="submit">검색</button>
					</div>
				</form>

				<div class="chartDiv">
					<a class="chartBtn"
						href="javascript:fn_chart('<c:out value="${classCode}"/>')">통계</a>
				</div>
				
			</div>
			
            <p style="color: grey;">학점은 중간 (40%), 기말(40%), 과제(20%)를 합산하여 부여</p>
			
			<div class="student-list">
				<form id="listForm" method="post">

					<table>
						<thead>
							<tr>
								<th>학번</th>
								<th>이름</th>
								<th>중간</th>
								<th>기말</th>
								<th>과제</th>
								<th>총점</th>
								<th>학점</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<c:if test="${empty selectClassStudent}">
								<tr>
									<td colspan="7">수강중인 학생이 없습니다</td>
								</tr>
							</c:if>
							<c:forEach var="student" items="${selectClassStudent}">
								<input type="hidden" id="selectedNo" name="selectedNo"
									value="${student.classCode}" />

								<tr>
									<td>${student.studentId}</td>
									<td>${student.studentName}</td>
									<td><input type="number"
										id="middleTest${student.studentId}" name="middleTest" value="${student.middleTest}" required></td>
									<td><input type="number"
										id="finalTest${student.studentId}" name="finalTest"  value="${student.finalTest}" required></td>
									<td><input type="number" id="report${student.studentId}"
										name="report"  value="${student.report}"
										required></td>
									<td>
								    <fmt:formatNumber value="${(student.middleTest/100*40) + (student.finalTest/100*40) + (student.report/100*20)}" 
								                      maxFractionDigits="2" 
								                      minFractionDigits="2" />
								</td>
									<td>${student.grade}</td>
									<td class="submit-section"><a
										href="javascript:fn_updateGrade(${student.studentId})">성적제출</a></td>
								</tr>

							</c:forEach>
						</tbody>

					</table>
					<!-- 페이지 네비게이션 -->
				<c:if  test="${not empty selectClassStudent}">

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
				</c:if>

				</form>
				<!-- 자바스크립트를 이용한 경고창 출력 -->
				<script type="text/javascript">
		               <c:if test="${not empty errorMessage}">
		               console.log("${errorMessage}");
		               alert("${errorMessage}"); // 경고창 띄우기
		               </c:if>
		
		               <c:if test="${not empty noResultsMessage}">
		               console.log("${noResultsMessage}");
		               alert("${noResultsMessage}"); // 검색 결과가 없을 때 경고창 띄우기
		               </c:if>
		            </script>


			</div>
		</div>

	</div>

	<%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>
   
   </body>
   </html>
