package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.mapper.AdScoreChartMapper;
import ateam.service.AdScoreChartService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service
public class AdScoreChartServiceImpl extends EgovAbstractServiceImpl implements AdScoreChartService {

	@Autowired
	private AdScoreChartMapper mapper;

	@Override
	public List<Map<String, Object>> selectAdClass(Map<String, Object> param) {
		return mapper.selectAdClass(param);
	}

	@Override
	public List<Map<String, Object>> selectAdScoreChart(Map<String, Object> param) {
		return mapper.selectAdScoreChart(param);
	}
	
	
	
}
