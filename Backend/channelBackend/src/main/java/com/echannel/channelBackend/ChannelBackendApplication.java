package com.echannel.channelBackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.echannel.channelBackend.model.JobDetails;
import com.echannel.channelBackend.repository.JobRepository;

@SpringBootApplication
public class ChannelBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ChannelBackendApplication.class, args);
	}

	@Autowired
	private JobRepository jobRepository;
	@Override
	public void run(String... args) throws Exception {
		this.jobRepository.save(new JobDetails("Intern",1000,56000));
		this.jobRepository.save(new JobDetails("SDE-1",50,1000000));
		this.jobRepository.save(new JobDetails("SDE-2",30,4300000));
		this.jobRepository.save(new JobDetails("SDE-3",30,5000000));
		
	}

}
