package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.AdStudentMapper;
import ateam.service.AdStudentService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("AdStudentService")
public class AdStudentServiceImpl extends EgovAbstractServiceImpl implements AdStudentService{
	
	 @Resource(name = "AdStudentMapper")
	   private AdStudentMapper mapper;

	@Override
	public List<Map<String, Object>> selectDepartment() {
		return mapper.selectDepartment();
	}

	@Override
	public List<Map<String, Object>> selectAdStudent(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectAdStudent(param);
	}

	@Override
	public void insertAdStudent(Map<String, Object> param) {
		mapper.insertAdStudent(param);
		
	}

	@Override
	public Map<String, Object> selectAdStudentdtl(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectAdStudentdtl(param);
	}

}
