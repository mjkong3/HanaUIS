package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.mapper.AdStudentStatusMapper;
import ateam.service.AdStudentStatusService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("AdStudentStatusService")
public class AdStudentStatusServiceImpl extends EgovAbstractServiceImpl implements AdStudentStatusService{

	@Autowired
	private AdStudentStatusMapper mapper;
	
	@Override
	public List<Map<String, Object>> statusApprovedList(Map<String, Object> param) {
		return mapper.statusApprovedList(param);
	}

	@Override
	public void statusApprovedUpdate(Map<String, Object> param) {
		mapper.statusApprovedUpdate(param);
		
	}

	@Override
	public void statusApprovedInsert(Map<String, Object> param) {
		mapper.statusApprovedInsert(param);
	}

	@Override
	public Map<String, Object> statusDetail(String statusCode) {
		return mapper.statusDetail(statusCode);
	}



}
