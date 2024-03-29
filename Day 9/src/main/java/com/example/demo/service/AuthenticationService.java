package com.example.demo.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.example.demo.dto.request.AuthenticationRequest;
import com.example.demo.dto.request.RegisterRequest;
import com.example.demo.dto.response.AuthenticationResponse;
import com.example.demo.entity.UserRegister;
import com.example.demo.entity.enumerate.Role;

import com.example.demo.repository.UserRegisterRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService 
{
	private final UserRegisterRepository repository ; 
	 private final PasswordEncoder passwordEncoder;
	 private final JwtService jwtservice ;
	 private final AuthenticationManager authenticationManager ;
	 public AuthenticationResponse register(RegisterRequest request) {
		 if(request.getRole().equalsIgnoreCase("user")) {
		    var user = UserRegister.builder()
		            .username(request.getUsername())
		            .emailid(request.getEmailid())
		            .mobileno(request.getMobileno())
		            .password(passwordEncoder.encode(request.getPassword()))
		            .role(Role.USER)
		            .build();
		    repository.save(user); 
		    var jwtToken = jwtservice.generateToken(user);
		    
			return AuthenticationResponse.builder()
					.token(jwtToken)
					.build();
		 }else {
			 var user = UserRegister.builder()
			            .username(request.getUsername())
			            .emailid(request.getEmailid())
			            .mobileno(request.getMobileno())
			            .password(passwordEncoder.encode(request.getPassword()))
			            .role(Role.ADMIN)
			            .build();
			    repository.save(user); 
			    var jwtToken = jwtservice.generateToken(user);
			    
				return AuthenticationResponse.builder()
						.token(jwtToken)
						.build(); 
		 }
		}

	 public AuthenticationResponse authenticate(AuthenticationRequest request) {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
					request.getUsername(),
					request.getPassword()
					)
					);
					var user = repository.findByUsername(request.getUsername())
							.orElseThrow();
					 var jwtToken = jwtservice.generateToken(user);
					    
						return AuthenticationResponse.builder()
								.token(jwtToken)
								.role(user.getRole().toString())
								.build();
		}

}