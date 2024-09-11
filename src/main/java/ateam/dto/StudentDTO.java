package ateam.dto;

public class StudentDTO {

	   private int studentId;
	   private String name;
	   private int univYear;
	   private String phone;
	   private String email;
	   private String gender;
	   private String address;
	   private String status;
	   private String regDate;
	   private int departmentCode;
	   private String password;
	   
	   
	   
	   public int getStudentId() {
	      return studentId;
	   }
	   public void setStudentId(int studentId) {
	      this.studentId = studentId;
	   }
	   public String getEmail() {
	      return email;
	   }
	   public void setEmail(String email) {
	      this.email = email;
	   }
	   public String getPassword() {
	      return password;
	   }
	   public void setPassword(String password) {
	      this.password = password;
	   }
	   public String getName() {
	      return name;
	   }
	   public void setName(String name) {
	      this.name = name;
	   }
	   public int getUnivYear() {
	      return univYear;
	   }
	   public void setUnivYear(int univYear) {
	      this.univYear = univYear;
	   }
	   public String getPhone() {
	      return phone;
	   }
	   public void setPhone(String phone) {
	      this.phone = phone;
	   }
	   public String getGender() {
	      return gender;
	   }
	   public void setGender(String gender) {
	      this.gender = gender;
	   }
	   public String getStatus() {
	      return status;
	   }
	   public void setStatus(String status) {
	      this.status = status;
	   }
	   public String getRegDate() {
	      return regDate;
	   }
	   public void setRegDate(String regDate) {
	      this.regDate = regDate;
	   }
	   public String getAddress() {
	      return address;
	   }
	   public void setAddress(String address) {
	      this.address = address;
	   }
	   public int getDepartmentCode() {
	      return departmentCode;
	   }
	   public void setDepartmentCode(int departmentCode) {
	      this.departmentCode = departmentCode;
	   }

	}
