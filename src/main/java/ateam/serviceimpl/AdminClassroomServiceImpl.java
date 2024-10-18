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
		return mapper.SelectAdminClassroom();
	}


	@Override
	public List<Map<String, Object>> SelectAdminClasscourse(Map<String, Object> param) {
		return mapper.SelectAdminClasscourse(param);
	}


	@Override
	public void saveAdminClasscourse(List<Map<String, Object>> param) {		
		int checkinsert = 0;
		for(int i =0; i < param.size(); i++) {
			checkinsert = mapper.SelectAdminclasstime(param.get(i));
			mapper.updateAdminClasscourse(param.get(i));
    		if (checkinsert > 0) {
    			mapper.updateAdminClasscourse2(param.get(i));
    		}else {
    			mapper.insertAdminClasscourse(param.get(i));
    		}
			
    	}
	
	}

	@Override
	public void deleteAdminClasscourse(List<Map<String, Object>> param) {
		for(int i =0; i < param.size(); i++) {
			if(param.get(i) != null) {
				System.out.println(param.get(i));
				mapper.deleteAdminClasscourse(param.get(i));
			}
		}
	}

	@Override
	public List<Map<String, Object>> SelectAdminclassyear() {
		// TODO Auto-generated method stub
		return mapper.SelectAdminclassyear();
	}

	@Override
	public List<Map<String, Object>> SelectAdminclasssem() {
		// TODO Auto-generated method stub
		return mapper.SelectAdminclasssem();
	}

	@Override
	public void saveAdminClassroom(Map<String, Object> param) {
		int checksave = 0;
		checksave = mapper.checkAdminclassroom(param);
		if(checksave > 0) {
			mapper.updateAdminclassroom(param);
		}
		else {
			mapper.insertAdminclassroom(param);
		}
		
	}

	@Override
	public void deleteAdminClassroom(Map<String, Object> param) {
		mapper.deleteAdminClassroom(param);
		
	}
}
