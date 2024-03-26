package com.example.demo.dto.request;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AuthenticationRequest 
{
	private String username;
    private String password;
	
    

}
