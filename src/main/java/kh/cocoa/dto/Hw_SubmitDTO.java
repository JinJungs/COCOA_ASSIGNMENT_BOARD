package kh.cocoa.dto;

import java.sql.Date;

public class Hw_SubmitDTO {
	private int seq;
	private String title;
	private String contents;
	private Date write_date;
	private String writer_id;
	private int list_seq;
	private int view_count;
	private String name;
	public Hw_SubmitDTO() {
		
	}
	public Hw_SubmitDTO(int seq, String title, String contents, Date write_date, String writer_id, int list_seq,
			int view_count, String name) {
		super();
		this.seq = seq;
		this.title = title;
		this.contents = contents;
		this.write_date = write_date;
		this.writer_id = writer_id;
		this.list_seq = list_seq;
		this.view_count = view_count;
		this.name = name;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public Date getWrite_date() {
		return write_date;
	}
	public void setWrite_date(Date write_date) {
		this.write_date = write_date;
	}
	public String getWriter_id() {
		return writer_id;
	}
	public void setWriter_id(String writer_id) {
		this.writer_id = writer_id;
	}
	public int getList_seq() {
		return list_seq;
	}
	public void setList_seq(int list_seq) {
		this.list_seq = list_seq;
	}
	public int getView_count() {
		return view_count;
	}
	public void setView_count(int view_count) {
		this.view_count = view_count;
	}
}
