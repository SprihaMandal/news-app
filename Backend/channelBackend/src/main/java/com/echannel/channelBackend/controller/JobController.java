package com.echannel.channelBackend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.echannel.channelBackend.model.JobDetails;
import com.echannel.channelBackend.repository.JobRepository;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/")
public class JobController {
	
	@Autowired
	private JobRepository jobRepository;
	
	@GetMapping("jobs")
	public List<JobDetails>getJobs(){
		return this.jobRepository.findAll();
	}

}
