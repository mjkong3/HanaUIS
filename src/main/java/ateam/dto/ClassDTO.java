package ateam.dto;

public class ClassDTO {

	private int classCode;
	private String className;
	private int semester;
	private int departmentCode;
	private int professorId;
	private int classroomId;
	
	public int getClassCode() {
		return classCode;
	}
	public void setClassCode(int classCode) {
		this.classCode = classCode;
	}
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public int getDepartmentCode() {
		return departmentCode;
	}
	public void setDepartmentCode(int departmentCode) {
		this.departmentCode = departmentCode;
	}
	public int getProfessorId() {
		return professorId;
	}
	public void setProfessorId(int professorId) {
		this.professorId = professorId;
	}
	public int getClassroomId() {
		return classroomId;
	}
	public void setClassroomId(int classroomId) {
		this.classroomId = classroomId;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
	
	
	
	
}
