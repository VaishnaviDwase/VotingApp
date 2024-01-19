package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.Register;
import com.example.demo.Repository.RegisterRepository;

@Service
public class RegisterServiceImpl implements RegisterService{

	@Autowired
	public RegisterRepository registerrepo;
	
	@Override
	public Register saveRegisterData(Register register) {
		// TODO Auto-generated method stub
		return registerrepo.save(register) ;
	}

	@Override
	public List<Register> getAllUsers(Register register) {
		// TODO Auto-generated method stub
		return registerrepo.findAll();
	}

	

}
