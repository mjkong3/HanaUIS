package ateam.serviceimpl;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.FindPwdMapper;
import ateam.service.FindPwdService;

@Service
public class FindPwdServiceImpl implements FindPwdService {

	@Resource(name = "FindPwdMapper")
	   private FindPwdMapper mapper;
	
	@Override
	public String selectUser(String id, String name) {		
		Map<String, Object> params = new HashMap<>();
	    params.put("id", id);
	    params.put("name", name);
		System.out.println("유저 일치하는지" + params);
		return mapper.selectUser(params);
	}
	
	@Override
	public int updatePwd(String id, String password) {
		Map<String, Object> params = new HashMap<>();
		params.put("id", id);
		params.put("password", password);
		
		return mapper.updatePwd(params);
	}

	@Override
	public String selectAdmin(Map<String, Object> param) {
		return mapper.selectUser(param);
	}

	@Override
	public int updateAdmin(Map<String, Object> param) {
		return mapper.updatePwd(param);
	}
	
	
	
}
