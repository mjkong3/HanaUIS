package ateam.service;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import ateam.dto.StudentDTO;

public interface AdStudentService {
   
   List<Map<String, Object>> selectDepartment();

   List<Map<String, Object>> selectAdStudent(Map<String, Object> param);

   void saveAdStudent(Map<String, Object> param);

   Map<String, Object> selectAdStudentdtl(Map<String, Object> param);

   void deletAdStudent(Map<String, Object> param);

   StudentDTO stdchecklogin(StudentDTO dto, HttpSession session);

   void insertAdStudent(Map<String, Object> param);

   void updateAdStudent(Map<String, Object> param);

   Map<String, Object> studCheckId(String STUDENT_ID);

}
