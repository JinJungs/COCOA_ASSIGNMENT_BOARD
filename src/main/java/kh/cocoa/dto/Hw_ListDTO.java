package kh.cocoa.dto;

import java.sql.Date;

public class Hw_ListDTO {
	private int seq;
	private String title;
	private String contents;
	private Date start_date;
	private Date end_date;
	private int subject_seq;
	private int my_submit;
	private int std_submit;

	public Hw_ListDTO() {	
	}

	//	public Hw_ListDTO(int seq, String title, String contents, Date start_date, Date end_date, int subject_seq) {
	//		super();
	//		this.seq = seq;
	//		this.title = title;
	//		this.contents = contents;
	//		this.start_date = start_date;
	//		this.end_date = end_date;
	//		this.subject_seq = subject_seq;
	//	}
	public Hw_ListDTO(int seq, String title, String contents, Date start_date, Date end_date, int subject_seq,
			int my_submit, int std_submit) {
		super();
		this.seq = seq;
		this.title = title;
		this.contents = contents;
		this.start_date = start_date;
		this.end_date = end_date;
		this.subject_seq = subject_seq;
		this.my_submit = my_submit;
		this.std_submit = std_submit;
	}
	public int getStd_submit() {
		return std_submit;
	}
	public void setStd_submit(int std_submit) {
		this.std_submit = std_submit;
	}
	public int getMy_submit() {
		return my_submit;
	}
	public void setMy_submit(int my_submit) {
		this.my_submit = my_submit;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
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
	public int getSubject_seq() {
		return subject_seq;
	}
	public void setSubject_seq(int subject_seq) {
		this.subject_seq = subject_seq;
	}



}
