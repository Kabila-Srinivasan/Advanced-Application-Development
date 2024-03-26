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

import com.example.demo.entity.ServiceRequest;
import com.example.demo.service.ServiceRequestService;
@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class ServiceRequestController {
	@Autowired
	private ServiceRequestService rs;
	
	 @GetMapping("/user/getrequest")
	  @PreAuthorize("hasAuthority('ADMIN')")
	 public List<ServiceRequest> getServiceRequestDetails()
	 {
		 return rs.getServiceRequestDetails();
	 }
	 @GetMapping("/user/getrequest/{requestId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
		public Optional<ServiceRequest> getServiceRequest1Details(@PathVariable Long requestId){
			return rs.getServiceRequest1Details(requestId);
		}	
	 @PostMapping("/user/postrequest")
	 @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
	 public void saveData(@RequestBody ServiceRequest re)
	 {
		 rs.saveServiceRequest(re);
	 }
	 
	 @PutMapping("/user/putrequest/{requestId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void updateData(@RequestBody ServiceRequest re,@PathVariable Long requestId)
	 {
		 re.setRequestId(requestId);
		 rs.updateServiceRequest(re);
	 }
	 
	 @DeleteMapping("/user/deleterequest/{requestId}")
	 @PreAuthorize("hasAuthority('ADMIN')")
	 public void deleteData(@PathVariable Long requestId)
	 {
		 rs.deleteServiceRequest(requestId);
	 }

}
