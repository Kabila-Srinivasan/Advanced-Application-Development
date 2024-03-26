package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.response.PaymentResponse;
import com.example.demo.entity.Payment;
import com.example.demo.service.PaymentService;
@RestController
@RequestMapping("/auth")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;
    @PostMapping("/user/postpayment")
    @PreAuthorize("hasAuthority('ADMIN') or hasAuthority('USER')")
    public ResponseEntity<Payment> addUserBilling(@RequestBody PaymentResponse paymentResponseDto) {
        Payment payment = paymentService.addUserBilling(paymentResponseDto);
        return new ResponseEntity<>(payment, HttpStatus.CREATED);
    }

    @GetMapping("/admin/allpayment")
    @PreAuthorize("hasAuthority('ADMIN')")
    public List<Payment> getAllBillings() {
        return paymentService.getBillings();

    }

    @GetMapping("/admin/getpayment/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Payment> getUserBillingById(@PathVariable int id) {
        Payment userBilling = paymentService.getUserBilling(id);
        return new ResponseEntity<>(userBilling, HttpStatus.OK);
    }

    @DeleteMapping("/admin/delete/{id}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<String> deleteUserBilling(@PathVariable int id) {
        String message = paymentService.delUserBilling(id);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }

}
