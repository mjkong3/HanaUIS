package ateam.serviceimpl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import ateam.mapper.AdminClassroomMapper;
import ateam.service.AdminClassroomService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("AdminClassroomService")
public class AdminClassroomServiceImpl extends EgovAbstractServiceImpl implements AdminClassroomService{
	
	@Resource(name = "AdminClassroomMapper")
	   private AdminClassroomMapper mapper;

	@Override
	public List<Map<String, Object>> SelectAdminClassroom() {
		// TODO Auto-generated method stub
		return mapper.SelectAdminClassroom();
	}

	@Override
	public List<Map<String, Object>> SelectAdminClasstime(String param) {
		// TODO Auto-generated method stub
		return mapper.SelectAdminClasstime(param);
	}

	@Override
	public List<Map<String, Object>> SelectAdminClasscourse() {
		// TODO Auto-generated method stub
		return mapper.SelectAdminClasscourse();
	}

	@Override
	public List<Map<String, Object>> SelectAdminClasstimeid(String param) {
		// TODO Auto-generated method stub
		return mapper.SelectAdminClasstimeid(param);
	}

	@Override
	public void saveAdminClasscourse(Map<String, Object> param) {
		int checkinsert = mapper.SelectAdminclasstime(param);
		if (checkinsert > 0) {
			mapper.updateAdminClasscourse(param);
			mapper.updateAdminClasscourse2(param);
		}else {
			mapper.updateAdminClasscourse(param);
			mapper.insertAdminClasscourse(param);
		}
		
	}

}
