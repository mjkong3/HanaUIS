package ateam.dto;

import java.util.Date;

public class EnrollmentDTO {

	// enrollment
	private int enrollmentCode;
	private int classCode;
	private int score;
	private String grade;
	private int middleTest;
	private int FinalTest;
	private int report;
	private Date regDate;
	private int adminCode;
	private int studentId;
	private int semester;
	
	/*
	 * private String className; private String classType; private String
	 * classGrade; private String name; private String classWeek; private String
	 * classroomName; private int people; private int maxPeople; private String
	 * departmertName;
	 */
	
	public int getEnrollmentCode() {
		return enrollmentCode;
	}
	public void setEnrollmentCode(int enrollmentCode) {
		this.enrollmentCode = enrollmentCode;
	}
	public int getClassCode() {
		return classCode;
	}
	public void setClassCode(int classCode) {
		this.classCode = classCode;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public int getMiddleTest() {
		return middleTest;
	}
	public void setMiddleTest(int middleTest) {
		this.middleTest = middleTest;
	}
	public int getFinalTest() {
		return FinalTest;
	}
	public void setFinalTest(int finalTest) {
		FinalTest = finalTest;
	}
	public int getReport() {
		return report;
	}
	public void setReport(int report) {
		this.report = report;
	}
	public Date getRegDate() {
		return regDate;
	}
	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}
	public int getAdminCode() {
		return adminCode;
	}
	public void setAdminCode(int adminCode) {
		this.adminCode = adminCode;
	}
	public int getStudentId() {
		return studentId;
	}
	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
	/*
	 * public String getClassName() { return className; } public void
	 * setClassName(String className) { this.className = className; } public String
	 * getClassType() { return classType; } public void setClassType(String
	 * classType) { this.classType = classType; } public String getClassGrade() {
	 * return classGrade; } public void setClassGrade(String classGrade) {
	 * this.classGrade = classGrade; } public String getName() { return name; }
	 * public void setName(String name) { this.name = name; } public String
	 * getClassWeek() { return classWeek; } public void setClassWeek(String
	 * classWeek) { this.classWeek = classWeek; } public String getClassroomName() {
	 * return classroomName; } public void setClassroomName(String classroomName) {
	 * this.classroomName = classroomName; } public int getPeople() { return people;
	 * } public void setPeople(int people) { this.people = people; } public int
	 * getMaxPeople() { return maxPeople; } public void setMaxPeople(int maxPeople)
	 * { this.maxPeople = maxPeople; } public String getDepartmertName() { return
	 * departmertName; } public void setDepartmertName(String departmertName) {
	 * this.departmertName = departmertName; }
	 */
	
}
