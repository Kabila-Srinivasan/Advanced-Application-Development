package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Contact;
import com.example.demo.service.ContactService;
@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class ContactController {
	@Autowired
	private ContactService cs;
	
	 @GetMapping("/admin/getcontact")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public List<Contact> getContactDetails()
	 {
		 return cs.getContactDetails();
	 }
	 @GetMapping("/admin/getcontact/{cId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
		public Optional<Contact> getContact1Details(@PathVariable Long cId){
			return cs.getContact1Details(cId);
		}	
	 @PostMapping("/user/postcontact")
	 @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
	

	 public void saveData(@RequestBody Contact ce)
	 {
		 cs.saveContact(ce);
	 }
	 
	 @PutMapping("/putcontact/{cId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void updateData(@RequestBody Contact ce,@PathVariable Long cId)
	 {
		 ce.setCId(cId);
		 cs.updateContact(ce);
	 }
	 
	 @DeleteMapping("/deletecontact/{cId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void deleteData(@PathVariable Long cId)
	 {
		 cs.deleteContact(cId);
	 }

}
