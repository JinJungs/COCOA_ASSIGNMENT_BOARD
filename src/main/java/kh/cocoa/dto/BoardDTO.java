package kh.cocoa.dto;

import java.sql.Date;

public class BoardDTO {
	private int seq;
	private String title;
	private String contents;
	private Date write_date;
	private int view_count;
	private String writer_id;
	public BoardDTO() {
	}
	public BoardDTO(int seq, String title, String contents, Date write_date, int view_count, String writer_id) {
		super();
		this.seq = seq;
		this.title = title;
		this.contents = contents;
		this.write_date = write_date;
		this.view_count = view_count;
		this.writer_id = writer_id;
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
	public int getView_count() {
		return view_count;
	}
	public void setView_count(int view_count) {
		this.view_count = view_count;
	}
	public String getWriter_id() {
		return writer_id;
	}
	public void setWriter_id(String writer_id) {
		this.writer_id = writer_id;
	}

}
