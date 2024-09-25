<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.io.*" %>

<%
    // 다운로드할 파일명과 폴더 경로를 파라미터로 받기
    String fileName = request.getParameter("filename");
    String uploadDir = "D:\\upload\\";
    String downloadDir = "D:\\download\\";
    
    File file = new File(uploadDir + fileName);
    
    if (!file.exists()) {
        out.println("파일이 존재하지 않습니다.");
    } else {
        // 파일을 다운로드 폴더로 복사
        File downloadFile = new File(downloadDir + fileName);
        FileInputStream inStream = null;
        FileOutputStream outStream = null;
        
        try {
            inStream = new FileInputStream(file);
            outStream = new FileOutputStream(downloadFile);
            
            byte[] buffer = new byte[1024];
            int length;
            while ((length = inStream.read(buffer)) > 0) {
                outStream.write(buffer, 0, length);
            }
            
            // 파일 다운로드 완료 후 HTTP 응답으로 파일 전송
            response.setContentType("application/octet-stream");
            response.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
            response.setContentLength((int) file.length());
            
            FileInputStream fileInputStream = new FileInputStream(downloadFile);
            byte[] fileBuffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = fileInputStream.read(fileBuffer)) != -1) {
                response.getOutputStream().write(fileBuffer, 0, bytesRead);
            }
            fileInputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (inStream != null) inStream.close();
            if (outStream != null) outStream.close();
        }
    }
%>