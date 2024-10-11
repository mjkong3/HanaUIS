<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*" %>
<%
    // 파일 이름과 경로 설정
    String fileName = request.getParameter("filename"); // 'filename'으로 요청된 파일 이름
    //String filePath = "C:\\showfile\\" + fileName; // 파일 경로 설정
    String type = request.getParameter("type"); // 타입 받기
    System.out.println("Type: " + type);
    
    String filePath;
    if (type == null) {
        filePath = "C:\\upload\\" + fileName; // 뷰 경로
    } else {
        filePath = "C:\\showfile\\" + fileName; // 업로드 경로
    }
    	
    File file = new File(filePath);

    // 파일이 존재하는지 확인
    if (file.exists() && !file.isDirectory()) {
        response.setContentType("image/jpg"); // 이미지 유형 설정 (필요에 따라 변경)
        FileInputStream inStream = new FileInputStream(file);
        OutputStream outStream = response.getOutputStream(); // OutputStream 가져오기

        byte[] buffer = new byte[1024]; // 버퍼 크기
        int bytesRead;

        // 파일을 읽어 OutputStream에 씀
        while ((bytesRead = inStream.read(buffer)) != -1) {
            outStream.write(buffer, 0, bytesRead); // OutputStream에 파일 내용을 출력
        }

        // 스트림 닫기
        inStream.close();
        outStream.flush(); // OutputStream을 플러시
        outStream.close(); // OutputStream 닫기
    } else {
        response.sendError(HttpServletResponse.SC_NOT_FOUND); // 파일이 없을 경우 404 에러
    }
%>
