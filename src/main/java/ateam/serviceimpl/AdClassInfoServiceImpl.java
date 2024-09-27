package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.mapper.AdClassInfoMapper;
import ateam.service.AdClassInfoService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class AdClassInfoServiceImpl extends EgovAbstractServiceImpl implements AdClassInfoService {

	@Autowired
	private AdClassInfoMapper mapper;

	@Override
	public List<Map<String, Object>> selectAdClsList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectAdClsList(param);
	}
	
	
	
	
	
}
