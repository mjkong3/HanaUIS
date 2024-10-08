<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="ui" uri="http://egovframework.gov/ctl/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>성적 통계</title>
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/content.css'/>" />
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/chart.css'/>" />

    <!-- Chart.js 라이브러리 추가 -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
    
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
<style>
  /* 캔버스 크기를 CSS로 조정할 수 있습니다. */
  #middleTestPieChart, #finalTestPieChart, #reportPieChart, #totalPieChart {
      max-width: 300px;
      max-height: 300px;
      margin: 20px auto; /* 중앙 정렬 및 여백 추가 */
  }
  .chart-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around; /* 각 그래프 사이에 일정한 간격 */
      margin: 20px; /* 상하좌우 여백 */
  }



</style>
<body>

<%@ include file="/WEB-INF/jsp/hana/includes/headerPro.jsp" %>

<div class="content">
    <div class="container">
        <h3>성적 통계 : ${className} (총 ${totalStudents} 명)</h3>
        
        <canvas id="gradeChart" width="400" height="250"></canvas>
        <h3></h3>
		<div style="display: flex; justify-content: center; align-items: center;">
			<div id="legendPieChart">
			    <ul style="list-style-type: none; padding: 0; display: flex; justify-content: flex-start; gap: 10px;">
			        <li style="display: flex; align-items: center; margin-right: 10px;">
			            <span style="display: inline-block; width: 40px; height: 10px; background-color: rgba(75, 192, 192, 0.6); border: 1px solid rgba(75, 192, 192, 1); margin-right: 5px;"></span> A
			        </li>
			        <li style="display: flex; align-items: center; margin-right: 10px;">
			            <span style="display: inline-block; width: 40px; height: 10px; background-color: rgba(255, 99, 132, 0.6); border: 1px solid rgba(255, 99, 132, 1); margin-right: 5px;"></span> B
			        </li>
			        <li style="display: flex; align-items: center; margin-right: 10px;">
			            <span style="display: inline-block; width: 40px; height: 10px; background-color: rgba(54, 162, 235, 0.6); border: 1px solid rgba(54, 162, 235, 1); margin-right: 5px;"></span> C
			        </li>
			        <li style="display: flex; align-items: center; margin-right: 10px;">
			            <span style="display: inline-block; width: 40px; height: 10px; background-color: rgba(255, 206, 86, 0.6); border: 1px solid rgba(255, 206, 86, 1); margin-right: 5px;"></span> D
			        </li>
			        <li style="display: flex; align-items: center;">
			            <span style="display: inline-block; width: 40px; height: 10px; background-color: rgba(153, 102, 255, 0.6); border: 1px solid rgba(153, 102, 255, 1); margin-right: 5px;"></span> F
			        </li>
			    </ul>
			</div>
		</div>
		
		<!-- 각각의 그래프를 표시할 캔버스 -->
		<div class="chart-container">
			<canvas id="middleTestPieChart" width="200" height="160"></canvas>
			<canvas id="finalTestPieChart" width="200" height="160"></canvas>
			<canvas id="reportPieChart" width="200" height="160"></canvas>
			<canvas id="totalPieChart" width="200" height="160"></canvas>
		</div>
        
        <script>
            var gradeLabels = ['A', 'B', 'C', 'D', 'F']; // X축 레이블 (등급)
            
            var totalGrade = [
                ${totalGrade.TOTAL_A}, 
                ${totalGrade.TOTAL_B}, 
                ${totalGrade.TOTAL_C}, 
                ${totalGrade.TOTAL_D}, 
                ${totalGrade.TOTAL_F}
            ];
            var middleTestGrade = [
                ${middleTestGrade.MIDDLE_TEST_A}, 
                ${middleTestGrade.MIDDLE_TEST_B}, 
                ${middleTestGrade.MIDDLE_TEST_C}, 
                ${middleTestGrade.MIDDLE_TEST_D}, 
                ${middleTestGrade.MIDDLE_TEST_F}
            ];
            var finalTestGrade = [
                ${finalTestGrade.FINAL_TEST_A}, 
                ${finalTestGrade.FINAL_TEST_B}, 
                ${finalTestGrade.FINAL_TEST_C}, 
                ${finalTestGrade.FINAL_TEST_D}, 
                ${finalTestGrade.FINAL_TEST_F}
            ];
            var reportGrade = [
                ${reportGrade.REPORT_A}, 
                ${reportGrade.REPORT_B}, 
                ${reportGrade.REPORT_C}, 
                ${reportGrade.REPORT_D}, 
                ${reportGrade.REPORT_F}
            ];

            var ctx = document.getElementById('gradeChart').getContext('2d');
            var gradeChart = new Chart(ctx, {
                type: 'bar', // 기본 그래프 타입: 막대 그래프
                data: {
                    labels: gradeLabels,
                    datasets: [
                        {
                            label: '중간',
                            data: middleTestGrade,
                            backgroundColor: 'rgba(75, 192, 192, 0.6)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                            hoverBorderColor: 'rgba(75, 192, 192, 1)',
                        },
                        {
                            label: '기말',
                            data: finalTestGrade,
                            backgroundColor: 'rgba(54, 162, 235, 0.6)',
                            borderColor: 'rgba(54, 162, 235, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
                            hoverBorderColor: 'rgba(54, 162, 235, 1)',
                        },
                        {
                            label: '레포트',
                            data: reportGrade,
                            backgroundColor: 'rgba(255, 206, 86, 0.6)',
                            borderColor: 'rgba(255, 206, 86, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255, 206, 86, 0.8)',
                            hoverBorderColor: 'rgba(255, 206, 86, 1)',
                        },
                        {
                            label: '총점',
                            data: totalGrade,
                            backgroundColor: 'rgba(255, 99, 132, 0.6)', // 총점은 다른 색상으로 강조
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                            hoverBorderColor: 'rgba(255, 99, 132, 1)',
                        }
                    ]
                },
                options: {
                    layout: {
                        padding: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10
                        }
                    },
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true // y축이 0부터 시작
                        }
                    }
                }
            });
		
            
            // 각 그래프를 그리는 함수
            function createPieChart(canvasId, data, backgroundColors, label) {
                var ctx = document.getElementById(canvasId).getContext('2d');
                return new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: gradeLabels,
                        datasets: [{
                            data: data,
                            backgroundColor: backgroundColors,
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                            	display: false,
                            },
                            title: {
                                display: true,
                                text: label
                            },
                            datalabels: {
                                formatter: (value, context) => {
                                    const total = context.dataset.data.reduce((acc, val) => acc + val, 0);
                                    const percentage = Math.round((value / total) * 100) + '%';
                                    return percentage;
                                },
                                color: '#fff',
                            }
                        }
                    }
                });
            }

           /*  // 각 성적별 그래프 데이터와 색상 설정
            var middleTestColors = [
                'rgba(75, 192, 192, 0.6)', 
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(153, 102, 255, 0.6)'
            ];
            var finalTestColors = [
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(153, 102, 255, 0.6)'
            ];
            var reportColors = [
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
                'rgba(255, 206, 86, 0.6)', 
                'rgba(153, 102, 255, 0.6)'
            ];
            var totalColors = [
                'rgba(255, 206, 86, 0.6)', 
                'rgba(75, 192, 192, 0.6)', 
                'rgba(255, 99, 132, 0.6)', 
                'rgba(54, 162, 235, 0.6)', 
                'rgba(153, 102, 255, 0.6)'
            ]; */

         // 통일된 색상 배열
            var uniformColors = [
                'rgba(75, 192, 192, 0.6)', // A
                'rgba(255, 99, 132, 0.6)', // B
                'rgba(54, 162, 235, 0.6)', // C
                'rgba(255, 206, 86, 0.6)', // D
                'rgba(153, 102, 255, 0.6)' // F
            ];

            // 각 그래프 생성
            createPieChart('middleTestPieChart', middleTestGrade, uniformColors, '중간 시험 성적 비율');
            createPieChart('finalTestPieChart', finalTestGrade, uniformColors, '기말 시험 성적 비율');
            createPieChart('reportPieChart', reportGrade, uniformColors, '레포트 성적 비율');
            createPieChart('totalPieChart', totalGrade, uniformColors, '총점 성적 비율');

            // 각 그래프 생성
           /*  createPieChart('middleTestPieChart', middleTestGrade, middleTestColors, '중간 시험 성적 비율');
            createPieChart('finalTestPieChart', finalTestGrade, finalTestColors, '기말 시험 성적 비율');
            createPieChart('reportPieChart', reportGrade, reportColors, '레포트 성적 비율');
            createPieChart('totalPieChart', totalGrade, totalColors, '총점 성적 비율'); */
        </script>

    </div>
</div>

<%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>
</body>
</html>
