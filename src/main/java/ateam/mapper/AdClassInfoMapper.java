package ateam.mapper;

import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper
public interface AdClassInfoMapper {

	List<Map<String, Object>> selectAdClsList(Map<String, Object> param);
}
