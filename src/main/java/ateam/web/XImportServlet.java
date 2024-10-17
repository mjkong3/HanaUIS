package ateam.web;

import java.io.FileInputStream;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class XImportServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("XImportServlet 요청 수신됨");  // 요청 확인
        handleImport(req, resp);  // 엑셀 가져오기 처리
    }

    // 엑셀 가져오기 처리
    private void handleImport(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String filePath = "C:/exceltest/import/test.xlsx";  // 엑셀 파일 경로
        System.out.println("파일 경로: " + filePath);  // 파일 경로 확인

        try (FileInputStream fis = new FileInputStream(filePath)) {
            Workbook workbook = new XSSFWorkbook(fis);
            Sheet sheet = workbook.getSheetAt(0);

            System.out.println("엑셀 파일에서 데이터를 읽습니다...");

            // Dataset 형식으로 클라이언트에 반환할 XML 데이터 생성
            StringBuilder sb = new StringBuilder();
            sb.append("<Dataset id=\"output1\">");

            for (int i = 1; i <= sheet.getLastRowNum(); i++) {
                Row row = sheet.getRow(i);
                if (row != null) {
                    sb.append("<Row>");
                    for (int j = 0; j < row.getPhysicalNumberOfCells(); j++) {
                        Cell cell = row.getCell(j);
                        String cellValue = cell != null ? cell.toString() : "";
                        
                        // sysout으로 각 셀 데이터 출력
                        System.out.println("행 " + i + " 열 " + j + ": " + cellValue);

                        sb.append("<Col id=\"COL" + j + "\">").append(cellValue).append("</Col>");
                    }
                    sb.append("</Row>");
                }
            }
            sb.append("</Dataset>");

            // 클라이언트에 XML 형식으로 응답
            resp.setContentType("application/xml");
            resp.getWriter().write(sb.toString());

            System.out.println("XML 데이터 전송 완료");

        } catch (IOException e) {
            System.out.println("파일 읽기 중 오류 발생: " + e.getMessage());
            resp.sendError(HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "파일을 읽는 중 오류가 발생했습니다.");
        }
    }
}
