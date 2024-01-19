package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.Register;

public interface RegisterService {

	public Register saveRegisterData(Register register);

	public List<Register> getAllUsers(Register register);


}
