package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.AdminBoardMapper;
import ateam.service.AdminBoardService;

@Service("AdminBoardService")
public class AdminBoardServiceImpl implements AdminBoardService{
	@Resource(name = "AdminBoardMapper")
	AdminBoardMapper mapper;
	
	@Override
	public List<Map<String, Object>> selectBoardList(Map<String, Object> param) {
		return mapper.selectBoardList(param);
	}
	
	@Override
	public Map<String, Object> selectBoard(String param) {
		
		return mapper.selectBoard(param);
	}
	
}
