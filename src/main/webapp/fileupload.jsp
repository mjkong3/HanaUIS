<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
﻿<%@ page import = "java.io.*,java.util.*, javax.servlet.*" %>
<%@ page import = "javax.servlet.http.*" %>
<%@ page import = "org.apache.commons.fileupload.*" %>
<%@ page import = "org.apache.commons.fileupload.disk.*" %>
<%@ page import = "org.apache.commons.fileupload.servlet.*" %>
<%@ page import = "org.apache.commons.io.output.*" %>
<%@ page import="com.nexacro17.xapi.data.*"%>
<%@ page import="com.nexacro17.xapi.tx.*"%>

<%
//http://www.tutorialspoint.com/jsp/jsp_file_uploading.htm
//https://www.chromestatus.com/feature/5629709824032768
// CORS 설정 , 서버 요청 헤더, 메소드, 유효 시간, 접근 도메인, 쿠키 설정 허용
response.setHeader("Access-Control-Allow-Headers", "accept, cache-control, content-type, expires, if-modified-since, pragma, x-requested-with");
response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS, HEAD") ;
response.setHeader("Access-Control-Max-Age", "3600");
response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");	

	// 파일 객체 선언, 최대 파일 크기 설정, 최대 메모리 설정
   File file ;
   int maxFileSize = 5000 * 1024;
   int maxMemSize = 5000 * 1024;
   ServletContext context = pageContext.getServletContext();
   String filePath = "C:\\upload\\"; //context.getInitParameter("file-upload");		업로드 경로 설정

   // 요청의 contentType 을 확인하여 multipart 형식인지 확인, 넥사크로의 platFormData와 VariableList 초기화
   String contentType = request.getContentType();
   PlatformData resData = new PlatformData();
   VariableList resVarList = resData.getVariableList();
   
   // 요청의 Content-Type이 multipart/form-data일 경우, DiskFileItemFactory를 통해 파일 업로드 처리를 준비합니다. 메모리 크기와 최대 파일 크기를 설정하고, 메모리를 초과한 데이터는 C:\\upload\\에 임시로 저장되도록 설정합니다.
   if (contentType!=null && (contentType.indexOf("multipart/form-data") >= 0)) {
      DiskFileItemFactory factory = new DiskFileItemFactory();
      // 메모리에 저장 될 가장 큰 사이즈
      factory.setSizeThreshold(maxMemSize);
      
      // 최대 메모리 사이즈보다 클 경우 저장 할 경로
      factory.setRepository(new File("C:\\upload\\"));

      // 파일 업로드 핸들러 생성
      ServletFileUpload upload = new ServletFileUpload(factory);
      
      // 업로드 될 가장 큰 파일 사이즈
      upload.setSizeMax( maxFileSize );
      
      
      //upload.parseRequest(request)를 통해 업로드된 파일 목록을 가져오고, 각 파일을 확인하여 C:\\upload\\ 경로에 저장합니다. 파일 저장에 성공하면 성공 메시지를, 예외가 발생하면 에러 메시지를 반환합니다.
      try { 
         // 요청을 분석해 파일 아이템을 가져옵니다
         List fileItems = upload.parseRequest(request);

         // 업로드된 파일 아이템들 프로세스
         Iterator i = fileItems.iterator();

         while ( i.hasNext () ) {

			FileItem fi = (FileItem)i.next();
            if ( !fi.isFormField () ) {
               // 파일 파라미터 가져오기
               String fieldName = fi.getFieldName();
               String fileName = fi.getName();
               boolean isInMemory = fi.isInMemory();
               long sizeInBytes = fi.getSize();
            
               // 파일 작성
               if( fileName.lastIndexOf("\\") >= 0 ) {
                  file = new File( filePath + 
                  fileName.substring( fileName.lastIndexOf("\\"))) ;
               } else {
                  file = new File( filePath + 
                  fileName.substring(fileName.lastIndexOf("\\")+1)) ;
               }
               fi.write( file ) ;
            }

         }
		 resVarList.add("ErrorCode", 0);
		 resVarList.add("ErrorMsg", "Success" );
      } catch(Exception ex) {
		 resVarList.add("ErrorCode", -1);
		 resVarList.add("ErrorMsg", ex.getMessage() );		
      }
   } else {
      
   }
    //HttpPlatformResponse 객체를 통해 서버 응답을 XML 형식으로 전송합니다. 설정된 ErrorCode와 ErrorMsg를 포함하여 클라이언트에 데이터를 반환합니다.
   
	HttpPlatformResponse res = new HttpPlatformResponse(response, request);
	res.setContentType(PlatformType.CONTENT_TYPE_XML);
	res.setCharset("UTF-8");
	res.setData(resData);
	res.sendData();   
%>