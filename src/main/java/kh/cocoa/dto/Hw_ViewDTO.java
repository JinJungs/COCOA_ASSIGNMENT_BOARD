package kh.cocoa.dto;

import java.sql.Date;

public class Hw_ViewDTO {
	private int subject_seq;
	private String subject_name;
	private String color;
	private int list_seq;
	private String list_title;
	private Date write_date;
	private int my_submit;
	private Date end_date;
	public Hw_ViewDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Hw_ViewDTO(int subject_seq, String subject_name, String color, int list_seq, String list_title,
			Date write_date, int my_submit, Date end_date) {
		super();
		this.subject_seq = subject_seq;
		this.subject_name = subject_name;
		this.color = color;
		this.list_seq = list_seq;
		this.list_title = list_title;
		this.write_date = write_date;
		this.my_submit = my_submit;
		this.end_date = end_date;
	}

	public int getMy_submit() {
		return my_submit;
	}

	public void setMy_submit(int my_submit) {
		this.my_submit = my_submit;
	}

	public Date getWrite_date() {
		return write_date;
	}

	public void setWrite_date(Date write_date) {
		this.write_date = write_date;
	}

	public int getSubject_seq() {
		return subject_seq;
	}
	public void setSubject_seq(int subject_seq) {
		this.subject_seq = subject_seq;
	}
	public String getSubject_name() {
		return subject_name;
	}
	public void setSubject_name(String subject_name) {
		this.subject_name = subject_name;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getList_seq() {
		return list_seq;
	}
	public void setList_seq(int list_seq) {
		this.list_seq = list_seq;
	}
	public String getList_title() {
		return list_title;
	}
	public void setList_title(String list_title) {
		this.list_title = list_title;
	}

	public Date getEnd_date() {
		return end_date;
	}
	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}
	
	
}
