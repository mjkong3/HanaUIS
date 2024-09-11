package ateam.dto;

import java.util.Date;

public class BoardDTO {

	private int boardCode;
	private String title;
	private String content;
	private Date boardDate;
	private int adminCode;
	public int getBoardCode() {
		return boardCode;
	}
	public void setBoardCode(int boardCode) {
		this.boardCode = boardCode;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}

	public Date getBoardDate() {
		return boardDate;
	}
	public void setBoardDate(Date boardDate) {
		this.boardDate = boardDate;
	}
	public int getAdminCode() {
		return adminCode;
	}
	public void setAdminCode(int adminCode) {
		this.adminCode = adminCode;
	}
	
	
}
