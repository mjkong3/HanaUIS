<%@ page contentType="application/vnd.ms-excel; charset=UTF-8" language="java" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*, org.apache.poi.ss.usermodel.*, org.apache.poi.xssf.usermodel.XSSFWorkbook" %>
<%@ page import="org.xml.sax.InputSource" %>
<%@ page import="javax.xml.parsers.DocumentBuilder" %>
<%@ page import="javax.xml.parsers.DocumentBuilderFactory" %>
<%@ page import="org.w3c.dom.Document" %>
<%@ page import="org.w3c.dom.NodeList" %>
<%@ page import="org.w3c.dom.Node" %>
<%@ page import="java.io.StringReader" %>

<%
    request.setCharacterEncoding("UTF-8");
    String xmlData = request.getParameter("data");
    //System.out.println(xmlData);
    String type = request.getParameter("type");
    System.out.println(type);
    
    String[] headers = {};
    String[] koreanHeaders = {};
    if("stu".equals(type)){
        // 영어 헤더 정의
	    headers = new String[] {
	    	"STUDENT_ID",
	    	"NAME",
	    	"PHONE",
	    	"EMAIL", 
	    	"BIRTHDAY",
	    	"GENDER",
	    	"ADDRESS",
	    	"STATUS",
	        "DEPARTMENT_NAME"
	    };
	
	    // 한국어 헤더 정의
	    koreanHeaders = new String[]{
	    	"학번",
	    	"이름",      
	    	"연락처",     
	    	"이메일",
	    	"생년월일",	
	    	"성별",
	        "주소",          
	        "학적상태", 
	        "학과"     
	    };	
    	
    }    
        if("exStu".equals(type)) {
        	koreanHeaders = new String[]{
       	        "학번",          // STUDENT_ID
       	        "비밀번호",      // PASSWORD (추가된 헤더)
       	        "이름",          // NAME
       	        "학년",          // UNIV_YEAR
       	        "연락처",      // PHONE
       	        "이메일",        // EMAIL
       	        "생년월일",    // BIRTHDAY (표현 변경)
       	        "성별",          // GENDER
       	        "학적상태",    // STATUS (표현 변경)
       	        "학과코드",          // DEPARTMENT_CODE
       	        "주소",          // ADDRESS
       	        "우편번호"      // POSTAL_CODE (추가된 헤더)
       	    };
        }
        if("pro".equals(type)){
            // 영어 헤더 정의
    	    headers = new String[] {
    	    	"PROFESSOR_ID",
    	    	"NAME",
    	    	"PHONE",
    	    	"EMAIL", 
    	    	"BIRTHDAY",
    	    	"GENDER",
    	    	"ADDRESS",
    	    	"STATUS",
    	        "DEPARTMENT_NAME"
    	    };
    	
    	    // 한국어 헤더 정의
    	    koreanHeaders = new String[]{
    	    	"교번",
    	    	"이름",      
    	    	"연락처",     
    	    	"이메일",
    	    	"생년월일",	
    	    	"성별",
    	        "주소",          
    	        "재직여부", 
    	        "학과"     
    	    };	
        	
        }        
        if("exPro".equals(type)) {
            koreanHeaders = new String[]{
                "교번",            // STUDENT_ID (기존 '학번'에서 '교번'으로 수정)
                "비밀번호",        // PASSWORD
                "이름",            // NAME
                "연락처",          // PHONE (기존 '학년'에서 '연락처'로 수정)
                "이메일",          // EMAIL
                "생년월일",        // BIRTHDAY
                "성별",            // GENDER
                "재직여부",        // STATUS (기존 '학적상태'에서 '재직여부'로 수정)
                "학과코드",        // DEPARTMENT_CODE
                "주소",            // ADDRESS
                "우편번호"         // POSTAL_CODE
            };
        }
    try {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        InputSource is = new InputSource(new StringReader(xmlData));
        Document doc = builder.parse(is);

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("학생 데이터");


        // 헤더 행 생성
        Row headerRow = sheet.createRow(0);
        for (int i = 0; i < koreanHeaders.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(koreanHeaders[i]); // 한국어 헤더를 설정
        }

        NodeList rows = doc.getElementsByTagName("Row");
        for (int r = 0; r < rows.getLength(); r++) {
            Row dataRow = sheet.createRow(r + 1);
            NodeList cols = rows.item(r).getChildNodes();

            // 각 열에 대한 인덱스를 매핑
            int[] columnIndexMap = new int[headers.length];

            // 각 열의 인덱스를 초기화
            for (int i = 0; i < headers.length; i++) {
                columnIndexMap[i] = -1; // 기본적으로 -1로 초기화
            }

            // 실제 데이터에서 열 인덱스 찾기
            for (int c = 0; c < cols.getLength(); c++) {
                Node colNode = cols.item(c);
                if (colNode.getNodeType() == Node.ELEMENT_NODE) {
                    String columnName = colNode.getAttributes().getNamedItem("id").getNodeValue();
                    for (int i = 0; i < headers.length; i++) {
                        if (headers[i].equals(columnName)) {
                            columnIndexMap[i] = c; // 해당 열의 인덱스를 저장
                            break;
                        }
                    }
                }
            }

            // 데이터를 올바른 순서로 추가
            for (int i = 0; i < headers.length; i++) {
                int actualIndex = columnIndexMap[i];
                if (actualIndex != -1) {
                    Node colNode = cols.item(actualIndex);
                    String cellValue = colNode.getFirstChild() != null ? colNode.getFirstChild().getNodeValue().trim() : "";

                    Cell cell = dataRow.createCell(i); // 순서에 맞는 열에 셀 생성
                    cell.setCellValue(cellValue); // 값 설정
                } else {
                    dataRow.createCell(i); // 빈 셀 생성
                }
            }
        }

        // 파일 다운로드 설정
        response.setHeader("Content-Disposition", "attachment; filename=\"student_data.xlsx\"");
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

        // OutputStream을 사용하여 데이터 전송
        try (OutputStream outputStream = response.getOutputStream()) {
            workbook.write(outputStream);
        }
        workbook.close(); // 워크북을 닫습니다.
    } catch (Exception e) {
        e.printStackTrace();
    }
%>
