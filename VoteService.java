package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.Vote;

public interface VoteService {

	public Vote saveAllVotes(Vote vote);

	public List<Vote> getAllVotes(Vote vote);

}
