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
    <link type="text/css" rel="stylesheet" href="<c:url value='/css/egovframework/studentInfo.css'/>" />

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
<body>

<%@ include file="/WEB-INF/jsp/hana/includes/headerPro.jsp" %>

<div class="content">
    <div class="container">
        <h3>성적 통계 : ${className} (총 ${totalStudents} 명)</h3>
        
        <canvas id="gradeChart" width="400" height="250"></canvas>

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
                            type: 'line', // 총점은 선 그래프로 표현
                            borderColor: 'rgba(255, 99, 132, 1)',
                            fill: false,
                            borderWidth: 2,
                            pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                            pointRadius: 5,
                            pointHoverRadius: 7, // 마우스 오버 시 포인트 크기 증가
                            font: {
                                size: 30, // 총점 레이블의 폰트 크기
                                family: 'Arial', // 총점 레이블의 폰트 패밀리
                                weight: 'bold', // 총점 레이블의 폰트 두께
                                color: '#333' // 총점 레이블의 색상
                            }
                        }
                    ]
                },
                options: {
                    layout: {
                        padding: {
                            top: 50,
                            left: 20,
                            right: 20,
                            bottom: 20
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                font: {
                                    size: 12 // Y축 글꼴 크기 조정
                                }
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: '', // X축 제목
                                font: {
                                    size: 14 // X축 제목 글꼴 크기
                                }
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels: {
                                font: {
                                    size: 12 // 범례 글꼴 크기 조정
                                }
                            }
                        },
                        tooltip: {
                            enabled: true, // 툴팁 활성화
                            mode: 'index', // 데이터 포인트에 대한 툴팁을 인덱스 모드로 설정
                            intersect: false, // 데이터 포인트에 마우스를 올리면 모든 데이터셋의 툴팁 표시
                        },
                        datalabels: {
                            align: 'top',
                            anchor: 'end',
                            font: {
                                size: 10 // 데이터 레이블 크기 조정
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });
        </script>

    </div>
</div>

<%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
