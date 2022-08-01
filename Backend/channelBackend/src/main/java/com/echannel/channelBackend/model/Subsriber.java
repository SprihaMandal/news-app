package com.echannel.channelBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="subscribers")
public class Subsriber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long subid;
	
	@Column(name="mail")
	private String mail;
	
	@Column(name="username")
	private String username;	
	
	@Column(name="password")
	private String password;
	
	public Subsriber() {
	}
	public Subsriber(String mail,String username,String password) {
		super();
		this.mail = mail;
		this.password = password;
		this.username=username;
	}
	public long getSubid() {
		return subid;
	}
	public void setSubid(long subid) {
		this.subid = subid;
	}
	public String getMail() {
		return mail;
	}
	public void setMail(String mail) {
		this.mail = mail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	

}
