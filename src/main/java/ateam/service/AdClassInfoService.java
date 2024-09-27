package ateam.service;

import java.util.List;
import java.util.Map;

public interface AdClassInfoService {

	List<Map<String, Object>> selectAdClsList(Map<String, Object> param);
}
