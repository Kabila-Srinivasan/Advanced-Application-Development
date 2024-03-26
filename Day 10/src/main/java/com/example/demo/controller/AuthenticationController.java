package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.entity.UserRegister;
import com.example.demo.repository.UserRegisterRepository;
import com.example.demo.service.AuthenticationService;

import lombok.RequiredArgsConstructor;



@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
	@Autowired
	private UserRegisterRepository repository;
	private final AuthenticationService aservice ;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		aservice.register(request);
		    return ResponseEntity.ok("User is succesfully registered");
		  }
		  @GetMapping("/admin/getregister")
	   public List<UserRegister> getregister()
	    {
		return repository.findAll();
	     }
		  @PostMapping("/authenticate")
		  public ResponseEntity<AuthenticationResponse> authenticate(
		      @RequestBody AuthenticationRequest request
		  ) {
		    return ResponseEntity.ok(aservice.authenticate(request));
		  }

}


