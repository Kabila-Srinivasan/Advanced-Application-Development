package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long cId;
	private String name;
	private String mobileNo;
	private String emailId;
	private String message;
	

}
