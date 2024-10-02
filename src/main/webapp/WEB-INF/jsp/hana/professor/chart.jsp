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
        
		<!-- 각각의 그래프를 표시할 캔버스 -->
		<div class="chart-container">
			<canvas id="middleTestPieChart" width="200" height="200"></canvas>
			<canvas id="finalTestPieChart" width="200" height="200"></canvas>
			<canvas id="reportPieChart" width="200" height="200"></canvas>
			<canvas id="totalPieChart" width="200" height="200"></canvas>
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
                            top: 50,
                            left: 20,
                            right: 20,
                            bottom: 20
                        }
                    },
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: '명',
                                font: {
                                    size: 14
                                }
                            },
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
            
         // 중간고사 원그래프
            var ctxMiddle = document.getElementById('middleTestPieChart').getContext('2d');
            var middleTestPieChart = new Chart(ctxMiddle, {
                type: 'pie',
                data: {
                    labels: gradeLabels,
                    datasets: [{
                        label: '중간',
                        data: middleTestGrade,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',  // 첫 번째 데이터 색상
                            'rgba(255, 99, 132, 0.6)',  // 두 번째 데이터 색상
                            'rgba(54, 162, 235, 0.6)',  // 세 번째 데이터 색상
                            'rgba(255, 206, 86, 0.6)',   // 네 번째 데이터 색상
                            'rgba(153, 102, 255, 0.6)'   // 다섯 번째 데이터 색상
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: '중간고사 성적 분포', // 제목 텍스트
                            font: {
                                size: 18 // 제목 글꼴 크기
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        },
                        legend: {
                            display: false // 레전드 비활성화
                        },
                        datalabels: {
                            color: 'white', // 데이터 레이블 색상
                            formatter: (value, context) => {
                                const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%';
                                return percentage; // 퍼센트로 반환
                            },
                            font: {
                                weight: 'bold',
                                size: 14 // 레이블 글꼴 크기
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels] // 플러그인 추가
            });

            // 기말고사 원그래프
            var ctxFinal = document.getElementById('finalTestPieChart').getContext('2d');
            var finalTestPieChart = new Chart(ctxFinal, {
                type: 'pie',
                data: {
                    labels: gradeLabels,
                    datasets: [{
                        label: '기말',
                        data: finalTestGrade,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',  // 첫 번째 데이터 색상
                            'rgba(255, 99, 132, 0.6)',  // 두 번째 데이터 색상
                            'rgba(54, 162, 235, 0.6)',  // 세 번째 데이터 색상
                            'rgba(255, 206, 86, 0.6)',   // 네 번째 데이터 색상
                            'rgba(153, 102, 255, 0.6)'   // 다섯 번째 데이터 색상
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: '기말고사 성적 분포', // 제목 텍스트
                            font: {
                                size: 18 // 제목 글꼴 크기
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        },
                        legend: {
                            display: false // 레전드 비활성화
                        },
                        datalabels: {
                            color: 'white', // 데이터 레이블 색상
                            formatter: (value, context) => {
                                const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%';
                                return percentage; // 퍼센트로 반환
                            },
                            font: {
                                weight: 'bold',
                                size: 14 // 레이블 글꼴 크기
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels] // 플러그인 추가
            });

            // 레포트 원그래프
            var ctxReport = document.getElementById('reportPieChart').getContext('2d');
            var reportPieChart = new Chart(ctxReport, {
                type: 'pie',
                data: {
                    labels: gradeLabels,
                    datasets: [{
                        label: '레포트',
                        data: reportGrade,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',  // 첫 번째 데이터 색상
                            'rgba(255, 99, 132, 0.6)',  // 두 번째 데이터 색상
                            'rgba(54, 162, 235, 0.6)',  // 세 번째 데이터 색상
                            'rgba(255, 206, 86, 0.6)',   // 네 번째 데이터 색상
                            'rgba(153, 102, 255, 0.6)'   // 다섯 번째 데이터 색상
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: '레포트 성적 분포', // 제목 텍스트
                            font: {
                                size: 18 // 제목 글꼴 크기
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        },
                        legend: {
                            display: false // 레전드 비활성화
                        },
                        datalabels: {
                            color: 'white', // 데이터 레이블 색상
                            formatter: (value, context) => {
                                const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%';
                                return percentage; // 퍼센트로 반환
                            },
                            font: {
                                weight: 'bold',
                                size: 14 // 레이블 글꼴 크기
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels] // 플러그인 추가
            });

         // 총점 원그래프
            var ctxTotal = document.getElementById('totalPieChart').getContext('2d');
            var totalPieChart = new Chart(ctxTotal, {
                type: 'pie',
                data: {
                    labels: gradeLabels,
                    datasets: [{
                        label: '총점',
                        data: totalGrade,
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.6)',  // A
                            'rgba(255, 99, 132, 0.6)',  // B
                            'rgba(54, 162, 235, 0.6)',  // C
                            'rgba(255, 206, 86, 0.6)',   // D
                            'rgba(153, 102, 255, 0.6)'   // F
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: '총점 성적 분포', // 제목 텍스트
                            font: {
                                size: 18 // 제목 글꼴 크기
                            },
                            padding: {
                                top: 10,
                                bottom: 30
                            }
                        },
                        legend: {
                            display: false // 레전드 비활성화
                        },
                        datalabels: {
                            color: 'white', // 데이터 레이블 색상
                            formatter: (value, context) => {
                                const total = context.chart.data.datasets[0].data.reduce((acc, val) => acc + val, 0);
                                const percentage = ((value / total) * 100).toFixed(2) + '%';
                                return percentage; // 퍼센트로 반환
                            },
                            font: {
                                weight: 'bold',
                                size: 14 // 레이블 글꼴 크기
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels] // 플러그인 추가
            });

        </script>

    </div>
</div>

<%@ include file="/WEB-INF/jsp/hana/includes/footer.jsp" %>

</body>
</html>
