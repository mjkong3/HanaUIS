package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

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
		int boardcode= mapper.newBoardCode();
		param.put("BOARD_CODE", boardcode);
		
		while (true) {
			
			Object Fn = param.get("FILENAME");
			
			String Fn1 = Fn.toString();
			
			
			
			break;
		}
		
		return mapper.insertFile(param);
	}
}
