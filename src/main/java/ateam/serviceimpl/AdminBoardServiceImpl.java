package ateam.serviceimpl;

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
	public Map<String, Object> selectBoard(String param) {
		// TODO Auto-generated method stub
		return mapper.selectBoard(param);
	}
	
}
