package ateam.mapper;

import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("FindPwdMapper")
public interface FindPwdMapper {

	String selectUser(Map<String, Object> params);

	int updatePwd(Map<String, Object> params);

}
