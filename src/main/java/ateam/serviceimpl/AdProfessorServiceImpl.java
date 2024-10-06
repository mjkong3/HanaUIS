package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.mapper.AdProfessorMapper;
import ateam.service.AdProfessorService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class AdProfessorServiceImpl extends EgovAbstractServiceImpl implements AdProfessorService {

	@Autowired
	private AdProfessorMapper mapper;
	
	@Override
	public List<Map<String, Object>> selectAdProList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectAdProList(param);
	}

	@Override
	public void insertAdPro(Map<String, Object> param) {
		// TODO Auto-generated method stub
//		int checkId = 0;
//		int checkEm = 0;
//		checkId = mapper.dupCheckId(param);
//		checkEm = mapper.dupCheckEm(param);
//		if (checkId == 0 && checkEm == 0) {
			mapper.insertAdPro(param);
//	}
	}
	
	@Override
	public void updateAdPro(Map<String, Object> param) {
		// TODO Auto-generated method stub
		mapper.updateAdPro(param);
	}

	@Override
	public Map<String, Object> selectAdProInfo(String ProId) {
		// TODO Auto-generated method stub
		return mapper.selectAdProInfo(ProId);
	}

	@Override
	public void deleteAdPro(Map<String, Object> param) {
		// TODO Auto-generated method stub
		   mapper.deleteAdPro(param);
		
	}

	
	

}
