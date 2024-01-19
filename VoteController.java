package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Vote;
import com.example.demo.Service.VoteService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class VoteController {
	
	@Autowired
	public VoteService voteservice;
	
	@PostMapping("/vote")
	public Vote saveAllVotes(@RequestBody Vote vote)
	{
		return voteservice.saveAllVotes(vote);
	}
	
	@GetMapping("/admin")
	public List<Vote> getAllVotes(Vote vote)
	{
		return voteservice.getAllVotes(vote);
	}
	

}
