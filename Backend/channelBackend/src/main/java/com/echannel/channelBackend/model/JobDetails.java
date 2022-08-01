package com.echannel.channelBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="jobs")
public class JobDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer jobId;
	@Column(name="job_desc")
	private String jobDesc;
	@Column(name="opening")
	private int opening;
	@Column(name="salary")
	private long salary;
	
	
	public JobDetails() {
		
	}
	public JobDetails(String jobDesc, int opening, long salary) {
		super();
		this.jobDesc = jobDesc;
		this.opening = opening;
		this.salary = salary;
	}
	public Integer getJobId() {
		return jobId;
	}
	public void setJobId(Integer jobId) {
		this.jobId = jobId;
	}
	public String getJobDesc() {
		return jobDesc;
	}
	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}
	public int getOpening() {
		return opening;
	}
	public void setOpening(int opening) {
		this.opening = opening;
	}
	public long getSalary() {
		return salary;
	}
	public void setSalary(long salary) {
		this.salary = salary;
	}
	
	

}
