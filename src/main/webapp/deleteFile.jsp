<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.io.*" %>
<%@ page import="javax.servlet.*" %>
<%@ page import="javax.servlet.http.*" %>

<%
    String filename = request.getParameter("filename"); // 파일 이름 받기
    if (filename != null) {
        File file = new File("C:\\showfile\\" + filename);
        if (file.delete()) {
            out.print("파일 삭제 성공");
        } else {
            out.print("파일 삭제 실패");
        }
    } else {
        out.print("파일 이름이 지정되지 않았습니다.");
    }
%>
