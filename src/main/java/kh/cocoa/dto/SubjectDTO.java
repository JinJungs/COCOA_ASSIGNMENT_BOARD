package kh.cocoa.dto;

public class SubjectDTO {
	private int seq;
	private String name;
	private String contents;
	private String color;
	private int class_code;
	public SubjectDTO() {
	}
	public SubjectDTO(int seq, String name, String contents, String color, int class_code) {
		super();
		this.seq = seq;
		this.name = name;
		this.contents = contents;
		this.color = color;
		this.class_code = class_code;
	}
	public int getSeq() {
		return seq;
	}
	public void setSeq(int seq) {
		this.seq = seq;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContents() {
		return contents;
	}
	public void setContents(String contents) {
		this.contents = contents;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public int getClass_code() {
		return class_code;
	}
	public void setClass_code(int class_code) {
		this.class_code = class_code;
	}
	
	
}
