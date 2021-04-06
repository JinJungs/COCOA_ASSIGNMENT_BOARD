package kh.cocoa.dto;

import java.sql.Date;

public class ClassDTO {
	private String chk = "0";
	private int code;
	private String name;
	private Date start_date;
	private Date end_date;

	public ClassDTO(int code, String name, Date start_date, Date end_date) {
		super();
		this.code = code;
		this.name = name;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public ClassDTO(String chk, int code, String name, Date start_date, Date end_date) {
		super();
		this.chk = chk;
		this.code = code;
		this.name = name;
		this.start_date = start_date;
		this.end_date = end_date;
	}

	public ClassDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getStart_date() {
		return start_date;
	}

	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}

	public Date getEnd_date() {
		return end_date;
	}

	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}

	public String getChk() {
		return chk;
	}

	public void setChk(String chk) {
		this.chk = chk;
	}

}