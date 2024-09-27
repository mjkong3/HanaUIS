package ateam.serviceimpl;

import java.util.List;
import java.util.Map;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.AdminUploadMapper;
import ateam.service.AdminUploadService;

@Service("AdminUploadService")
public class AdminUploadServiceImpl implements AdminUploadService {
	
	@Resource(name = "AdminUploadMapper")
	   private AdminUploadMapper mapper;
	
	@Override
	public int insertBoard(Map<String, Object> param) {
				
		// FILE_CODE 지정하기 위해 제목 지정
		String Title = (String) param.get("TITLE");
		
		// FILE_CODE 지정하기 위해 yyMMdd 지정
		LocalDate now = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyMMdd");

		// FILE_CODE param에 넣기
		String dateCode = now.format(formatter); //
		String fileCode = (dateCode + Title);
		param.put("FILE_CODE", fileCode);
		param.put("REGDATE", dateCode);
		
		System.out.println(param);
		
		return mapper.insertBoard(param);
	}
	
	@Override
	public int insertFile(Map<String, Object> param) {
		String Title = (String) param.get("TITLE");
		
		// FILE_CODE 지정하기 위해 yyMMdd 지정
		LocalDate now = LocalDate.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyMMdd");

		// FILE_CODE param에 넣기
		String dateCode = now.format(formatter); //
		String fileCode = (dateCode + Title);
		param.put("FILE_CODE", fileCode);
		param.put("REGDATE", dateCode);
		
		return mapper.insertFile(param);
	}
}
