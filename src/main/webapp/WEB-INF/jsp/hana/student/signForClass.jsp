<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<title>메인 콘텐츠</title>
<link type="text/css" rel="stylesheet"
   href="<c:url value='/css/egovframework/content.css'/>" />
<link type="text/css" rel="stylesheet"
   href="<c:url value='/css/egovframework/signForClass.css'/>" />
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script type="text/javascript" language="javascript" defer>
   /* 메뉴 클릭 이벤트 */
   function toggleSubmenu(event) {
      event.preventDefault(); // 기본 링크 클릭 동작 방지
      var submenu = event.currentTarget.nextElementSibling;
      submenu.style.display = (submenu.style.display === "block") ? "none"
            : "block";
   }

   // 첫화면 출력시 바로 학기 표시
   $(document).ready(function() {
      var today = new Date();
      var month = today.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줌
      var semesterTitle = (month >= 2 && month <= 6) ? ' : 1학기' : ' : 2학기';
      $('#semester-title').text(semesterTitle);
   });

   // 체크박스 선택 시 학점과 총 과목수를 표시하는 함수
   function checkClass() {

      let totalGrade = 0;
      let totalClass = 0;
      let maxGrade = 15; // 최대 학점 제한 (정확하게 몇으로 할지는 수정 필요)
      let num = 1; // 행 번호를 위한 변수 추가

      // 누적 신청점수
      let cumulative = parseFloat($('#totalGrades').text().replace("점", ""));

      // 선택된 과목을 표시할 테이블을 초기화 (기존에 삽입된 데이터 삭제)
      $('#innerClass').empty();

      // 체크된 체크박스의 값을 가져옴
      $("input[name='chk']:checked").each(
            function() {

               let $row = $(this).closest('tr'); // 체크된 행
               let classGrade = parseFloat($row.find('td:eq(5)').text()); // 학점

               // 학점 총합 계산
               totalGrade += classGrade;
               totalClass++; // 선택된 과목 수 증가

               // 선택된 과목을 새로운 테이블에 추가
               let str = "<tr><td>" + num + "</td>" + "<td>"
                     + $row.find('td:eq(2)').text() + "</td>" + // 강의코드
                     "<td>" + $row.find('td:eq(3)').text() + "</td>" + // 교과목명
                     "<td>" + $row.find('td:eq(4)').text() + "</td>" + // 전공/교양
                     "<td>" + classGrade + "</td>" + // 학점
                     "<td>" + $row.find('td:eq(6)').text() + "</td>" + // 담당교수
                     "<td>" + $row.find('td:eq(7)').text() + "</td>" + // 강의실
                     "<td>" + $row.find('td:eq(8)').text() + "</td>" + // 수강정원
                     "<td>" + $row.find('td:eq(9)').text()
                     + "</td></tr>";

               $('#innerClass').append(str);
               num++;
            });

      // 선택된 학점과 과목 수를 테이블에 표시
      $('#totalGrade').text(totalGrade + "점");
      $('#remainGrade').text(15 - totalGrade - cumulative + "점");
      $('#totalCnt').text(totalClass + "개");

      // tbody에 문구 띄우기
      if (totalClass === 0) {
         $('#checkedClass tbody')
               .html(
                     '<tr><td colspan="9" class="emptyClass">선택한 과목이 없습니다.</td></tr>');
      }

      // 학점 제한 초과 시 체크박스 비활성화 // 오류나는지 확인하기
      if (totalGrade + cumulative > maxGrade) {
         $('#gradeCheck').show();
         $("input[name='chk']").each(function() {
            if (!$(this).is(':checked')) {
               $(this).prop('disabled', true); // 학점이 최대치를 넘으면 비활성화
            }
         });
      } else {
         $('#gradeCheck').hide(); // 학점 초과 메시지 숨기기
         $("input[name='chk']").prop('disabled', false); // 모든 체크박스 활성화
      }
   }

   // Form 제출 전에 검증하는 함수
   function validateForm() {
      // 선택된 과목 수와 학점 가져오기 // 오류가 생길 수 있으니 텍스트 제거
      let totalGrades = parseFloat($('#totalGrade').text().replace("점", ""));
      let cumulative = parseFloat($('#totalGrades').text().replace("점", ""));
      let totalClass = parseInt($('#totalCnt').text().replace("개", ""));

      // 검증 로직: 과목을 선택하지 않았을 경우
      if (totalClass === 0) {
         alert("수강신청할 과목을 선택해주세요.");
         console.log("요청 거부");
         return false; // Form 제출을 막음
      }

      // 검증 로직: 최대 학점을 초과한 경우
      let maxGrade = 15;
      if (totalGrades + cumulative > maxGrade) {
         alert("수강신청 학점이 최대 학점(15점)을 초과했습니다.");
         console.log("요청 거부");
         return false; // Form 제출을 막음
      }

      // 검증 통과 시 Form submit
      alert("수강신청 완료");
      return true;
   }
</script>
</head>
<body>

   <%@ include file="/WEB-INF/jsp/hana/includes/header.jsp"%>

   <div class="content">
      <div class="container">
         <h3>
            수강 신청<span id="semester-title"></span>
         </h3>
         <form action="/HanaUIS/std/signForClass.do" method="post" style="float: right;">
            <c:set var="selectedDepartment" 
               value="${sessionScope.selectedDepartment}" />
            <select name="departmentCode" onchange="this.form.submit()">
               <option value="0" ${selectedDepartment == 0 ? 'selected' : ''}>전체
                  학과</option>
               <c:forEach var="dpt" items="${department}">
                  <option value="${dpt.departmentCode}"
                     ${selectedDepartment == dpt.departmentCode ? 'selected' : ''}>
                     ${dpt.departmentName}</option>
               </c:forEach>
            </select>
         </form>
         <form id="form_enroll" action="/HanaUIS/std/enrollClass.do"
            method="post" onsubmit="return validateForm()">
            
            <input type="hidden" name="studentId"
               value="${sessionScope.studentId}" />
               
            <div class="scroll-table">
                                      
            
               <table id="allClass">
                  <colgroup>
                     <col width="3%">
                     <col width="6%">
                     <col width="*">
                     <col width="*">
                     <col width="*">
                     <col width="6%">
                     <col width="*">
                     <col width="*">
                     <col width="*">
                     <col width="*">
                  </colgroup>
                  <thead>
                     <tr>
                        <th>No</th>
                        <th>신청</th>
                        <th>강의코드</th>
                        <th>교과목명</th>
                        <th>이수구분</th>
                        <th>학점</th>
                        <th>담당교수</th>
                        <th>강의실</th>
                        <th>수강정원</th>
                        <th>개설학과</th>
                     </tr>
                  </thead>
                  <tbody>
                     <c:if test="${not empty classItem}">
                        <c:forEach var="classItem" items="${classItem}"
                           varStatus="status">
                           <tr>
                              <td>${status.count}</td>
                              <td><input type="checkbox" name="chk"
                                 onclick="checkClass()" value="${classItem.CLASS_CODE}"></td>
                              <td>${classItem.CLASS_CODE}</td>
                              <td>${classItem.CLASS_NAME}</td>
                              <td>${classItem.CLASS_TYPE}</td>
                              <td>${classItem.CLASS_GRADE}</td>
                              <td>${classItem.NAME}</td>
                              <td>${classItem.CLASS_WEEK}(${classItem.CLASSROOM_NAME})</td>
                              <td><span id="people">${classItem.PEOPLE}</span>/<span
                                 id="maxPeople">${classItem.MAX_PEOPLE}</span></td>
                              <td>${classItem.DEPARTMENT_NAME}</td>
                           </tr>
                        </c:forEach>
                     </c:if>
                     <c:if test="${empty classItem}">
                        <tr>
                           <td colspan="10" class="emptyClass">개설된 강의가 없습니다.</td>
                        </tr>
                     </c:if>
                  </tbody>
               </table>
            </div>
            <table>
               <tr>
                  <th class="totalClass"><span>검색된 과목 수 : </span> <span
                     id="totalClassCnt"> <c:if test="${not empty classItem}">${fn:length(classItem)}개</c:if>
                        <c:if test="${empty classItem}">0개</c:if>
                  </span></th>
               </tr>
            </table>
             <p style="color: grey;">신청 가능한 최대 학점은 15점 입니다.</p>
            <button type="submit" id="enroll-button"
               style="float: right; ">수강신청</button>
            <table id="checkedClass">
               <caption>선택 강의</caption>
               <colgroup>
                  <col width="3%">
                  <col width="*">
                  <col width="*">
                  <col width="*">
                  <col width="6%">
                  <col width="*">
                  <col width="*">
                  <col width="*">
                  <col width="*">
               </colgroup>
               <thead>
                  <tr>
                     <th>No</th>
                     <th>강의코드</th>
                     <th>교과목명</th>
                     <th>이수구분</th>
                     <th>학점</th>
                     <th>담당교수</th>
                     <th>강의실</th>
                     <th>수강정원</th>
                     <th>개설학과</th>
                  </tr>
               </thead>
               <tbody id="innerClass">
                  <tr>
                     <td colspan="9" class="emptyClass">선택한 과목이 없습니다.</td>
                  </tr>
               </tbody>
               <tfoot>
                  <tr>
                     <td colspan="6" class="total"><span>선택강의 수 : </span> <span
                        id="totalCnt">0개</span> <span style="padding-left: 2vw;">선택학점
                           : </span> <span id="totalGrade">0점</span> <span
                        style="padding-left: 2vw;">남은 신청학점 : </span> <span
                        id="remainGrade">${15-totalGrades}점</span></td>
                     <td colspan="3" class="message"><span id="gradeCheck">최대
                           학점(15점)을 초과했습니다.</span></td>
                  </tr>
               </tfoot>
            </table>

         </form>
         <table>
            <caption>신청 완료</caption>
            <colgroup>
               <col width="3%">
               <col width="*">
               <col width="*">
               <col width="*">
               <col width="6%">
               <col width="*">
               <col width="*">
               <col width="*">
               <col width="*">
            </colgroup>
            <thead>
               <tr>
                  <th>No</th>
                  <th>강의코드</th>
                  <th>교과목명</th>
                  <th>이수구분</th>
                  <th>학점</th>
                  <th>담당교수</th>
                  <th>강의실</th>
                  <th>수강정원</th>
                  <th>개설학과</th>
               </tr>
            </thead>
            <tbody>
               <c:if test="${not empty selectedClass}">
                  <c:forEach var="selectedClass" items="${selectedClass}"
                     varStatus="status">
                     <tr>
                        <td>${status.count}</td>
                        <td>${selectedClass.CLASS_CODE}</td>
                        <td>${selectedClass.CLASS_NAME}</td>
                        <td>${selectedClass.CLASS_TYPE}</td>
                        <td>${selectedClass.CLASS_GRADE}</td>
                        <td>${selectedClass.NAME}</td>
                        <td>${selectedClass.CLASS_WEEK}(${selectedClass.CLASSROOM_NAME})</td>
                        <td><span id="people">${selectedClass.PEOPLE}</span>/<span
                           id="maxPeople">${selectedClass.MAX_PEOPLE}</span></td>
                        <td>${selectedClass.DEPARTMENT_NAME}</td>
                     </tr>
                  </c:forEach>
               </c:if>
               <c:if test="${empty selectedClass}">
                  <tr>
                     <td colspan="9" class="emptyClass">선택한 과목이 없습니다.</td>
                  </tr>
               </c:if>
            </tbody>
            <tfoot>
               <tr>
                  <td colspan="9" class="total"><span>신청학점 : </span> <span
                     id="totalGrades">${totalGrades}점</span></td>
               </tr>
            </tfoot>
         </table>
         <div class="temporary-margin" style="margin-bottom: 136px;"></div>
      </div>
   </div>

   <%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp"%>

</body>
</html>