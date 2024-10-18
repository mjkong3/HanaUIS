<%@ page import="java.io.*, java.util.*, javax.servlet.*, javax.servlet.http.*, org.apache.commons.fileupload.*, org.apache.commons.fileupload.disk.*, org.apache.commons.fileupload.servlet.*, org.apache.poi.ss.usermodel.*, org.apache.poi.xssf.usermodel.*, java.text.SimpleDateFormat" %>
<%@ page contentType="text/xml;charset=UTF-8" language="java" %>
<%
    String savePath = "C:\\showfile\\";
    File fileSaveDir = new File(savePath);

    if (!fileSaveDir.exists()) {
        fileSaveDir.mkdirs();
    }

    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    if (isMultipart) {
        DiskFileItemFactory factory = new DiskFileItemFactory();
        ServletFileUpload upload = new ServletFileUpload(factory);

        try {
            List<FileItem> items = upload.parseRequest(request);
            for (FileItem item : items) {
                if (!item.isFormField()) {
                    String fileName = new File(item.getName()).getName();
                    String filePath = savePath + fileName;
                    File uploadedFile = new File(filePath);
                    item.write(uploadedFile);

                    // Excel 파일 파싱
                    try (FileInputStream fis = new FileInputStream(uploadedFile);
                         XSSFWorkbook workbook = new XSSFWorkbook(fis)) {

                        XSSFSheet sheet = workbook.getSheetAt(0); // 첫 번째 시트

                        out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
                        out.println("<Dataset id=\"ds_test\">");

                        // 첫 번째 행에서 컬럼명 추출
                        Row headerRow = sheet.getRow(0); // 첫 번째 행 (헤더)
                        if (headerRow == null) {
                            throw new Exception("엑셀 파일에 헤더가 없습니다.");
                        }

                        // ColumnInfo 생성
                        out.println("<ColumnInfo>");
                        int columnCount = headerRow.getPhysicalNumberOfCells(); // 실제로 사용 중인 셀의 수
                        String[] columnNames = new String[columnCount];

                        // 첫 번째 행의 각 셀 값을 컬럼명으로 사용
                        for (int i = 0; i < columnCount; i++) {
                            Cell cell = headerRow.getCell(i);
                            String columnName = "col" + (i + 1); // 기본 컬럼명
                            if (cell != null) {
                                if (cell.getCellType() == CellType.STRING) {
                                    columnName = cell.getStringCellValue(); // 셀이 문자열이면 컬럼명으로 사용
                                }
                            }
                            columnNames[i] = columnName; // 컬럼명 저장
                            out.println("<Column id=\"" + columnName + "\" type=\"STRING\" size=\"256\"/>");
                        }
                        out.println("</ColumnInfo>");

                        // 데이터를 출력
                        out.println("<Rows>");

                        // 첫 번째 행(헤더 행)은 제외하고 데이터 행 처리
                        for (int rowIndex = 1; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
                            Row row = sheet.getRow(rowIndex);
                            if (row != null) {
                                out.println("<Row>");
                                for (int colIndex = 0; colIndex < columnCount; colIndex++) {
                                    Cell cell = row.getCell(colIndex);
                                    String cellValue = "";

                                    if (cell != null) {
                                        if (cell.getCellType() == CellType.STRING) {
                                            cellValue = escapeXml(cell.getStringCellValue()); // 이스케이프 처리
                                        } else if (cell.getCellType() == CellType.NUMERIC) {
                                            // 날짜 처리
                                            if (DateUtil.isCellDateFormatted(cell)) {
                                                java.util.Date date = cell.getDateCellValue();
                                                // 날짜를 YYYY-MM-DD 형식으로 변환
                                                SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
                                                cellValue = escapeXml(dateFormat.format(date));
                                            } else {
                                                double numericValue = cell.getNumericCellValue();
                                                
                                                // 소수점 여부에 따라 정수로 변환
                                                if (numericValue == (long) numericValue) {
                                                    cellValue = escapeXml(String.valueOf((long) numericValue)); // 정수로 변환
                                                } else {
                                                    cellValue = escapeXml(String.valueOf(numericValue)); // 실수 그대로 사용
                                                }
                                            }
                                        }
                                    }

                                    // 컬럼명에 맞춰 값을 출력
                                    out.println("<Col id=\"" + columnNames[colIndex] + "\">" + cellValue + "</Col>");
                                }
                                out.println("</Row>");
                            }
                        }

                        out.println("</Rows>");
                        out.println("</Dataset>");
                    } catch (Exception ex) {
                        out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
                        out.println("<Dataset id=\"error\"><ColumnInfo/><Rows><Row><Col id=\"msg\">" + escapeXml(ex.getMessage()) + "</Col></Row></Rows></Dataset>");
                    } finally {
                        // 파일 처리 후, 파일 삭제
                        if (uploadedFile.exists()) {
                            uploadedFile.delete(); // 업로드된 파일 삭제
                        }
                    }
                }
            }
        } catch (Exception ex) {
            out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
            out.println("<Dataset id=\"error\"><ColumnInfo/><Rows><Row><Col id=\"msg\">" + escapeXml(ex.getMessage()) + "</Col></Row></Rows></Dataset>");
        }
    } else {
        out.println("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
        out.println("<Dataset id=\"error\"><ColumnInfo/><Rows><Row><Col id=\"msg\">No file uploaded</Col></Row></Rows></Dataset>");
    }

%>

<%! 
// XML 이스케이프 처리 메서드
private String escapeXml(String value) {
    if (value == null) return null;
    return value.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;")
                .replace("\"", "&quot;")
                .replace("'", "&apos;");
}
%>
