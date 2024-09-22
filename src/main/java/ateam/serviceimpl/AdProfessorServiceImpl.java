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
	public List<Map<String, Object>> selectAdProDept() {
		// TODO Auto-generated method stub
		return mapper.selectAdProDept();
	}

	@Override
	public List<Map<String, Object>> selectAdProList(Map<String, Object> param) {
		// TODO Auto-generated method stub
		return mapper.selectAdProList(param);
	}

	@Override
	public void saveAdPro(Map<String, Object> param) {
		// TODO Auto-generated method stub
		int check = 0;
		check = mapper.checkAdPro(param);
		if (check == 0) {
			mapper.insertAdPro(param);
		} else if (check > 0){
			mapper.updateAdPro(param);
		}
	}

	@Override
	public Map<String, Object> selectAdProInfo(String ProId) {
		// TODO Auto-generated method stub
		return mapper.selectAdProInfo(ProId);
	}

	
	

}
