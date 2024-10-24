package ateam.serviceimpl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.AdScoreMapper;
import ateam.service.AdScoreService;


@Service("AdScoreService")
public class AdScoreServiceImpl implements AdScoreService{

	@Resource(name = "AdScoreMapper")
	private AdScoreMapper mapper;
	
	@Override
	public List<Map<String, Object>> selectScDept() {
		
		return mapper.selectScDept();
	}

	@Override
	public List<Map<String, Object>> searchScClass(Map<String, Object> map) {
		
		return mapper.searchScClass(map);
	}

	@Override
	public List<Map<String, Object>> selectScStudent(Map<String, Object> map) {
		
		return mapper.selectScStudent(map);
	}

	@Override
	public void updateScore(List<Map<String, Object>> mapList) {
		for (Map<String, Object> map : mapList) {  
		Map<String,Object> param = new HashMap<>();
		int st_id = (int) map.get("STUDENT_ID");
		int cl_cd = (int) map.get("CLASS_CODE");
		int md_ts = (int) map.get("MIDDLE_TEST");
		int fn_ts = (int) map.get("FINAL_TEST");
		int rt_ts = (int) map.get("REPORT");
		
		double score = (md_ts / 100.0 * 40) + (fn_ts / 100.0 * 40) + (rt_ts / 100.0 * 20);
		
		String grade = "";
		if (score >= 90) {
			grade = "A";
		} else if (score >= 80) {
			grade = "B";
		} else if (score >= 70) {
			grade = "C";
		} else if (score >= 60) {
			grade = "D";
		} else {
			grade = "F";
		}
		param.put("STUDENT_ID",st_id);
		param.put("CLASS_CODE",cl_cd);
		param.put("MIDDLE_TEST",md_ts);
		param.put("FINAL_TEST",fn_ts);
		param.put("REPORT",rt_ts);
		param.put("grade", grade);
		param.put("score", score);
		
		int UPD_USR = Integer.parseInt((String) map.get("UPD_USR"));
		
		param.put("UPD_USR",UPD_USR);
		
		mapper.updateScore(param);
		}
	}

}
