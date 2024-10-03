package ateam.serviceimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.time.LocalDateTime;
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
		return mapper.insertBoard(param);
	}
	
	@Override
	public int insertFile(Map<String, Object> param) {		
		return mapper.insertFile(param);
	}

	@Override
	public void updateBoard(Map<String, Object> param) {

		System.out.println(param);
		
		mapper.deleteFile(param);
		
		System.out.println("파일딜리트완료");
		
		mapper.updateBoard(param);
		
		System.out.println("공지사항 업데이트 완료");
	} 	

	@Override
	public void updateFile(Map<String, Object> param) {
		
		mapper.updateFile(param);
		
	}

	@Override
	public void deleteBoard(Map<String, Object> param) {
		System.out.println("보드 딜리트 시작");
		
		mapper.deleteBoard(param);
		
		mapper.deleteFile(param);
		
	}


	
	

}
