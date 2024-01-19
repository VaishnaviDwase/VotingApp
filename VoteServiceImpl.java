package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Vote;
import com.example.demo.Repository.VoteRepository;

@Service
public class VoteServiceImpl implements VoteService
{
	@Autowired
	public VoteRepository voterepo;

	@Override
	public Vote saveAllVotes(Vote vote) {
		// TODO Auto-generated method stub
		return voterepo.save(vote);
	}

	@Override
	public List<Vote> getAllVotes(Vote vote) {
		// TODO Auto-generated method stub
		return voterepo.findAll();
	}
	
}
