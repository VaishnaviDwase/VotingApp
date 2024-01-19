package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Register;
import com.example.demo.Service.RegisterService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class RegisterController {
	
	@Autowired
	public RegisterService registerservice;
	
	@PostMapping("/register")
	public Register saveRegisterData(@RequestBody Register register)
	{
		return registerservice.saveRegisterData(register);
	}
	
	@GetMapping("/login")
	public List<Register> getAllUsers(Register register)
	{
		return registerservice.getAllUsers(register);
	}
}
