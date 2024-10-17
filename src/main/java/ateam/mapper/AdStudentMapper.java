package ateam.mapper;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import ateam.dto.StudentDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("AdStudentMapper")
public interface AdStudentMapper {
   
   List<Map<String, Object>> selectDepartment();
   
   List<Map<String, Object>> selectAdStudent(Map<String, Object> param);
   
   void insertAdStudent(Map<String, Object> param);
   int checkAdStudent(Map<String, Object> param);
   void updateAdStudent(Map<String, Object> param);
   
   Map<String, Object> selectAdStudentdtl(Map<String, Object> param);

   void deletAdStudent(Map<String, Object> param);

   StudentDTO stdchecklogin(StudentDTO dto);

   Map<String, Object> studCheckId(String STUDENT_ID);

   Map<String, Object> stuCheckEm(Map<String, Object> param);

   List<Map<String, Object>> checkStudentExcel(List<Map<String, Object>> param);

   void insertexcelStu(Map<String, Object> map);
}
