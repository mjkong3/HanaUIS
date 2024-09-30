package ateam.serviceimpl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ateam.dto.ClassDTO;
import ateam.mapper.ClassMapper;
import ateam.service.ClassService;


@Service("ClassService")
public class ClassServiceImpl implements ClassService{

	@Autowired
	public ClassMapper mapper;
	
	//접속한 교수의 강의 목록을 반환
	@Override
	public List<ClassDTO> selectClassList(int id) {
		return mapper.selectClassList(id);
	}

	//시간표 반환
	@Override
	public List<Map<String, Object>> selectSchedule(Map<String, Object> id) {
		return mapper.selectSchedule(id);
	}

	//강의 정보 반환
	@Override
	public  Map<String, Object> selectClass(int classCode) {
		return mapper.selectClass(classCode);
	}

	//강의 시간 반환
	@Override
	public List<Map<String, Object>> selectClassTime(int classCode) {
		return mapper.selectClassTime(classCode);
	}

	//모든 강의 조회, 검색어가 있을 경우 해당 강의 조회
	@Override
	public List<Map<String, Object>> allClass(Map<String, Object> map) {
		return mapper.allClass(map);
	}

	//성적을 수정
	@Override
	public int updateGrade(Map<String, Object> paramMap) {
		return mapper.updateGrade(paramMap);
	}

	//해당 강의를 수강하는 학생 목록을 조회
	@Override
	public List<Map<String, Object>> selectClassStudent(int no) {
		return mapper.selectClassStudent(no);
	}
    //페이징
    //강의를 수강하는 총 학생 수를 반환
    @Override
    public int getTotalStudents(int no) {
       return mapper.getTotalStudents(no);
    }

	//강의의 강의 개요를 수정
	@Override
	public int updateClassInfo(Map<String, Object> map) {
		return mapper.updateClassInfo(map);
	}
    
    //강의 이름 조회
    @Override
    public String getClassName(int no) {
       return mapper.getClassName(no);
    }
    

	// 강의를 듣는 학생 정보를 조회
	@Override
	public List<Map<String, Object>> selectClassGrade(int classCode, int page, int pageSize) {
		// SQL에서 OFFSET이 음수로 들어가지 않도록 수정
		int offset = Math.max((page - 1) * pageSize, 0);

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("classCode", classCode);
		paramMap.put("pageSize", pageSize);
		paramMap.put("offset", offset);

		return mapper.selectClassGrade(paramMap);
	}

	@Override
	public int getTotalStudentsBySearchKeyword(int classCode, String searchType, String searchKeyword) {
		Map<String, Object> params = new HashMap<>();
		params.put("classCode", classCode);
		params.put("searchType", searchType);
		params.put("searchKeyword", "%" + searchKeyword + "%");
		return mapper.getTotalStudentsBySearchKeyword(params);

	}

	@Override
	public List<Map<String, Object>> searchClassStudentByKeyword(int classCode, String searchType, String searchKeyword,
			int page, int i) {
		int offset = Math.max((page - 1) * i, 0);

		Map<String, Object> param = new HashMap<>();
		param.put("classCode", classCode);
		param.put("searchType", searchType);
		param.put("searchKeyword", searchKeyword);
		param.put("i", i);
		param.put("offset", offset);

		return mapper.searchClassStudentByKeyword(param);
	}

	@Override
	public List<Map<String, Object>> selectClassStudent(int classCode, int page, int pageSize) {
		int offset = Math.max((page - 1) * pageSize, 0);

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("classCode", classCode);
		paramMap.put("pageSize", pageSize);
		paramMap.put("offset", offset);

		return mapper.selectClassStudent(paramMap);
	}

	@Override
	public List<Map<String, Object>> searchStudentByKeyword(int classCode, String searchType, String searchKeyword,
			int page, int i) {
		int offset = Math.max((page - 1) * i, 0);

		Map<String, Object> param = new HashMap<>();
		param.put("classCode", classCode);
		param.put("searchType", searchType);
		param.put("searchKeyword", searchKeyword);
		param.put("i", i);
		param.put("offset", offset);

		return mapper.searchStudentByKeyword(param);
	}

	@Override
	public int countAllClass(Map<String, Object> map) {
		return mapper.countAllClass(map);
	}

	@Override
	public Map<String, Integer> totalScoreChart(int no) {
		return mapper.totalScoreChart(no);
	}

	@Override
	public Map<String, Integer> middleTestScoreChart(int no) {
		return mapper.middleTestScoreChart(no);
	}

	@Override
	public Map<String, Integer> finalTestScoreChart(int no) {
		return mapper.finalTestScoreChart(no);
	}

	@Override
	public Map<String, Integer> reportScoreChart(int no) {
		return mapper.reportScoreChart(no);
	}

	@Override
	public Map<String, Integer> getGradeStats(int no) {
		return mapper.getGradeStats(no);
	}




	

}
