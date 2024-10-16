package ateam.web;

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

public class XExportImportServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("XExportImportServlet 요청 수신됨");  // 서블릿이 호출되었는지 확인
        handleExport(resp);  
    }

    // 엑셀 내보내기 처리
    private void handleExport(HttpServletResponse resp) throws IOException {
        // 엑셀 파일 생성
        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Sheet1");

        // 예시 데이터 작성
        Row row = sheet.createRow(0);
        Cell cell = row.createCell(0);
        cell.setCellValue("Hello, World!");

        System.out.println("엑셀 파일 생성 완료");  // 엑셀 파일이 정상적으로 생성되었는지 확인

        // 파일을 클라이언트에 전송
        resp.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        resp.setHeader("Content-Disposition", "attachment; filename=\"export.xlsx\"");
        workbook.write(resp.getOutputStream());
        workbook.close();

        System.out.println("엑셀 파일 전송 완료");  // 엑셀 파일이 클라이언트로 전송되었는지 확인
    }
}
