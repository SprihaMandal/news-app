package com.echannel.channelBackend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.echannel.channelBackend.model.Subsriber;
import com.echannel.channelBackend.repository.SubscriberRepository;


@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("api/")
public class SubscriberController {
	
	@Autowired
	private SubscriberRepository subscriberRepository;
	
	@GetMapping("subscriber")
	public List<Subsriber>getSubscriber(){
		return subscriberRepository.findAll();
	}
	
	@PostMapping("subscriber")
	public Subsriber createSubscriber(@RequestBody Subsriber s) {
		return this.subscriberRepository.save(s);
	}

}
