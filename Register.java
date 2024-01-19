package com.example.demo.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Register {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String username;
	private String password;
	private String emailid;
	private String mobilenumber;
	
	public Register() {}
	
	public Register(Long id, String username, String password, String emailid, String mobilenumber) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.emailid = emailid;
		this.mobilenumber = mobilenumber;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	@Override
	public String toString() {
		return "Register [id=" + id + ", username=" + username + ", password=" + password + ", emailid=" + emailid
				+ ", mobilenumber=" + mobilenumber + "]";
	}
	
	

}
