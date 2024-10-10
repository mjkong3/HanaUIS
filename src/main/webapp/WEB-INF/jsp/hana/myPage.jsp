<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>

 
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">

<title>메인 콘텐츠</title>
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>" />
<link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/myPage.css'/>" />
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
   
   /* 수정 성공 시 알림창 */
   $(document).ready(function(){
	      <c:if test="${updateStatus == 'success'}">
	         alert('수정이 완료되었습니다.');
	      </c:if>
   });
   
   // 유효성 검사
   $(document).ready(function() {
      // 전화번호 유효성 검사 함수 (000-0000-0000 형식)
      function validatePhone(phone) {
         const phonePattern = /^\d{3}-\d{4}-\d{4}$/;
         return phonePattern.test(phone);
      }

      // 이메일 유효성 검사 함수 (xxx@xxx.com 형식)
      function validateEmail(email) {
         const emailPattern = /.+@.+\..+/;
         return emailPattern.test(email);
      }

      // 전화번호 입력시 실시간 검사
      $('.inputPhone').on('input', function() {
         const phone = $(this).val();
         if (!validatePhone(phone)) {
            $(this).css('border', '2px solid red'); // 유효하지 않으면 빨간 테두리
            $('.phoneError').show();
         } else {
            $(this).css('border', ''); // 유효하면 테두리 제거
            $('.phoneError').hide();
         }
      });

      // 이메일 입력시 실시간 검사
      $('.inputEmail').on('input', function() {
         const email = $(this).val();
         if (!validateEmail(email)) {
            $(this).css('border', '2px solid red'); // 유효하지 않으면 빨간 테두리
            $('.emailError').show();
         } else {
            $(this).css('border', ''); // 유효하면 테두리 제거
            $('.emailError').hide();
         }
      });

      // 전화번호 수정 폼 제출 시 유효성 검사
      $('#phoneForm').on('submit', function() {
         const phone = $('.inputPhone').val();

         if (phone && !validatePhone(phone)) {
            alert("전화번호 형식이 올바르지 않습니다.");
            return false; // 유효성 검사 실패 시 제출 중단
         }

         return true; // 유효성 검사 통과 시 제출
      });

      // 이메일 수정 폼 제출 시 유효성 검사
      $('#emailForm').on('submit', function() {
         const email = $('.inputEmail').val();

         if (email && !validateEmail(email)) {
            alert("이메일 형식이 올바르지 않습니다.");
            return false; // 유효성 검사 실패 시 제출 중단
         }

         return true; // 유효성 검사 통과 시 제출
      });
   });
</script>
		   
</head>
<body>
   <!-- 학생, 교수 여부에 따라 다른 헤더 출력 -->
   <c:choose>
      <c:when test="${not empty student}"><%@ include
            file="includes/header.jsp"%></c:when>
      <c:when test="${not empty professor}"><%@ include
            file="includes/headerPro.jsp"%></c:when>
   </c:choose>
   <!-- 메인 콘텐츠 -->
   <div class="content">
      <div class="container">
         <h3>
            <c:choose>
               <c:when test="${not empty student}">학생정보</c:when>
               <c:when test="${not empty professor}">교수정보</c:when>
            </c:choose>
         </h3>
         <table>
            <colgroup>
               <col width="24%">
               <col width="15%">
                <col width="23">
               <col width="15%">
               <col width="23%">
            </colgroup>
            <tr>
               <th rowspan="8" class="faceImg">
					<c:choose>
					    <c:when test="${not empty student.photo}">
					        <img src="${pageContext.request.contextPath}/images/egovframework/faceShot/${student.photo}" />
					    </c:when>
					    
					    <c:when test="${not empty professor.photo}">
					        <img src="${pageContext.request.contextPath}/images/egovframework/faceShot/${professor.photo}" />
					    </c:when>
					    
					    <c:otherwise>
					        <img src="${pageContext.request.contextPath}/images/egovframework/logo.png" />
					    </c:otherwise>
					</c:choose>
               </th>
            </tr>
            <!-- 학번 또는 교번 출력 -->
            <tr>
               <c:choose>
                  <c:when test="${not empty student}">
                     <th>학번</th>
                     <td><c:out value="${student.studentId}" /></td>
                     <th>학과</th>
                     <td><c:out value="${departmentName}" /></td>
                  </c:when>
                  <c:when test="${not empty professor}">
                     <th>교번</th>
                     <td><c:out value="${professorDetail.professorId}" /></td>
                     <th>학과</th>
                     <td><c:out value="${professorDetail.departmentName}" /></td>
                  </c:when>
               </c:choose>
            </tr>
            <tr>
               <c:choose>
                  <c:when test="${not empty student}">
                  	 <th>이름</th>
                     <td><c:out value="${student.name}" /></td>
                     <th>학적</th>
                     <td><c:out value="${student.status}" /></td>
                  </c:when>
                  <c:when test="${not empty professor}">
                     <th>이름</th>
                     <td><c:out value="${professorDetail.name}" /></td>
                     <th>학적</th>
                     <td><c:out value="${professorDetail.status}" /></td>
                  </c:when>
               </c:choose>
            </tr>
            <tr>
               <th>생년월일</th>
               <td colspan="3">
               		 <c:choose>
	                     <c:when test="${not empty student}">
	                        <fmt:formatDate value="${student.birthday}" pattern="yyyy년  MM월  dd일" />
	                     </c:when>
	                     <c:when test="${not empty professor}">
	                        <fmt:formatDate value="${professorDetail.birthday}" pattern="yyyy년  MM월  dd일" />
	                     </c:when>
                 	 </c:choose>
            	 </td>
            </tr>
            <tr>
               <th>이메일</th>
               <td colspan="3">
               		<c:choose>
	                     <c:when test="${not empty student}">
	                        <form id="emailForm" action="<c:url value='/std/updateEmail.do'/>" method="post" onsubmit="return validateForm(this);">
	                           <input type="hidden" name="studentId" value="${studentDetail.studentId}" /> 
	                           <input type="text" name="email" class="inputEmail" value="${studentDetail.email}" />
	                           <button type="submit">수정</button>
	                           <div class="emailError">올바르게 입력해주세요.</div>
	                        </form>
	                     </c:when>
	
	                     <c:when test="${not empty professor}">
	                        <form id="emailForm" action="<c:url value='/pfs/updateEmail.do'/>" method="post" onsubmit="return validateForm(this);">
	                           <input type="hidden" name="professorId" value="${professorDetail.professorId}" /> 
	                           <input type="text" name="email" class="inputEmail" value="${professorDetail.email}" />
	                           <button type="submit">수정</button>
	                           <div class="emailError">올바르게 입력해주세요.</div>
	                        </form>
	                     </c:when>
                  </c:choose>
               </td>
            </tr>
            <tr>
               <th>전화번호</th>
               <td colspan="3"><c:choose>
                     <c:when test="${not empty student}">
                        <form id="phoneForm" action="<c:url value='/std/updatePhone.do'/>" method="post">
                           <input type="hidden" name="studentId" value="${studentDetail.studentId}" /> 
                           <input type="text" name="phone" class="inputPhone" value="${studentDetail.phone}" />
                           <button type="submit">수정</button>
                           <div class="phoneError">올바르게 입력해주세요.</div>
                        </form>
                     </c:when>

                     <c:when test="${not empty professor}">
                        <form id="phoneForm" action="<c:url value='/pfs/updatePhone.do'/>" method="post">
                           <input type="hidden" name="professorId" value="${professorDetail.professorId}" /> 
                           <input type="text" name="phone" class="inputPhone" value="${professorDetail.phone}" />
                           <button type="submit">수정</button>
                           <div class="phoneError">올바르게 입력해주세요.</div>
                        </form>
                     </c:when>
                  </c:choose>
                </td>
            </tr>
            <tr>
               <th>주소</th>
               <td colspan="3">
	               	<c:choose>
	                     <c:when test="${not empty student}">
 	                        (<c:out value="${studentDetail.zipCode}" />)<br>
	                        <c:out value="${studentDetail.address}" /><br>
	                        <c:out value="${studentDetail.addressDetail}" /> 
	                     </c:when>
	                     <c:when test="${not empty professor}">
 	                        (<c:out value="${professorDetail.zipCode}" />)<br>
	                        <c:out value="${professorDetail.address}" /><br>
	                        <c:out value="${professorDetail.addressDetail}" /> 
	                     </c:when>
	                  </c:choose>
                </td>
            </tr>
            <tr>
            	<th>사진 업로드</th>
               	<td colspan="3"><c:choose>
                     <c:when test="${not empty student}">
                     	<input type="file"/>
                     </c:when>
                     <c:when test="${not empty professor}">
                     	<input type="file"/>
                     </c:when>
                  </c:choose></td>
            </tr>
         </table>
      </div>
   </div>
   <%@ include file="includes/footer.jsp"%>
</body>
</html>
