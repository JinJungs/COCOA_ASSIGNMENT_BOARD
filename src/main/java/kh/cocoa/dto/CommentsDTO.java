package kh.cocoa.dto;

import java.sql.Date;

public class CommentsDTO {
	private int seq;
	private String contents;
	private Date write_date;
	private int board_seq;
	private String writer_id;
	private int comment_seq;
	private int parent_seq;
	public CommentsDTO() {
	}
	public CommentsDTO(int seq, String contents, Date write_date, int board_seq, String writer_id, int comment_seq,
			int parent_seq) {
		super();
		this.seq = seq;
		this.contents = contents;
		this.write_date = write_date;
		this.board_seq = board_seq;
		this.writer_id = writer_id;
		this.comment_seq = comment_seq;
		this.parent_seq = parent_seq;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
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
	public int getBoard_seq() {
		return board_seq;
	}
	public void setBoard_seq(int board_seq) {
		this.board_seq = board_seq;
	}
	public String getWriter_id() {
		return writer_id;
	}
	public void setWriter_id(String writer_id) {
		this.writer_id = writer_id;
	}
	public int getComment_seq() {
		return comment_seq;
	}
	public void setComment_seq(int comment_seq) {
		this.comment_seq = comment_seq;
	}
	public int getParent_seq() {
		return parent_seq;
	}
	public void setParent_seq(int parent_seq) {
		this.parent_seq = parent_seq;
	}
	
	
}
