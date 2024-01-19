package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Vote;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long>{

}
