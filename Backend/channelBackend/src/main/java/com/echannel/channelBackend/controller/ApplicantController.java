package com.echannel.channelBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.echannel.channelBackend.repository.ApplicantRepository;
import com.echannel.channelBackend.model.Applicant;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ApplicantController {
	
	@Autowired
	private ApplicantRepository applicantRepository;
	
	@GetMapping("applicants")
	public List<Applicant>getApplicants(){
		return this.applicantRepository.findAll();
	}
	
	@PostMapping("applicants")
	public Applicant createApplicant(@RequestBody Applicant a) {
	return this.applicantRepository.save(a);
}

}
