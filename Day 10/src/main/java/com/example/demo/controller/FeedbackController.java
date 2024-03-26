package com.example.demo.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Feedback;
import com.example.demo.service.FeedbackService;
@RestController
@RequestMapping("/auth")
public class FeedbackController {
	@Autowired
	private FeedbackService fs;
	
	 @GetMapping("/admin/getfeedback")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public List<Feedback> getFeedbackDetails()
	 {
		 return fs.getFeedbackDetails();
	 }
	 @GetMapping("/admin/getfeedback/{fId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
		public Optional<Feedback> getFeedback1Details(@PathVariable Long fId){
			return fs.getFeedback1Details(fId);
		}	
	 @PostMapping("/user/postfeedback")
	 @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
	 public void saveData(@RequestBody Feedback fe)
	 {
		 fs.saveFeedback(fe);
	 }
	 
	 @PutMapping("/user/putfeedback/{fId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void updateData(@RequestBody Feedback fe,@PathVariable Long fId)
	 {
		 fe.setFId(fId);
		 fs.updateFeedback(fe);
	 }
	 
	 @DeleteMapping("/user/deletefeedback/{fId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void deleteData(@PathVariable Long fId)
	 {
		 fs.deleteFeedback(fId);
	 }

}
