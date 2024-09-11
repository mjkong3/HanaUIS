package ateam.dto;

public class ClassTimeDTO {

    private String classCode;
    private String className;
    private String classTimeCode;	
    private int timeNumber;			//교시
    private String classWeek;		//요일
    private String classroomId;
    private String classroomName;


	
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public String getClassroomId() {
		return classroomId;
	}
	public void setClassroomId(String classroomId) {
		this.classroomId = classroomId;
	}
	public String getClassroomName() {
		return classroomName;
	}
	public void setClassroomName(String classroomName) {
		this.classroomName = classroomName;
	}
	public void setClassCode(String classCode) {
		this.classCode = classCode;
	}
	public void setClassTimeCode(String classTimeCode) {
		this.classTimeCode = classTimeCode;
	}
	public void setClassWeek(String classWeek) {
		this.classWeek = classWeek;
	}
	public int getTimeNumber() {
		return timeNumber;
	}
	public void setTimeNumber(int timeNumber) {
		this.timeNumber = timeNumber;
	}


}
