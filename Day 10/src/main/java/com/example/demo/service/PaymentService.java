package com.example.demo.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.response.PaymentResponse;
import com.example.demo.entity.Payment;
import com.example.demo.repository.PaymentRepository;
@Service
public class PaymentService {
     @Autowired
    private PaymentRepository paymentRepository;

    public Payment addUserBilling(PaymentResponse paymentReponseDto){
        Payment payment=new Payment();
        payment.setInvoiceno(paymentReponseDto.getInvoiceno());
        payment.setAddress(paymentReponseDto.getAddress());
        payment.setMobileno(paymentReponseDto.getMobileno());
        payment.setDays(paymentReponseDto.getDays());
        payment.setAmount(paymentReponseDto.getAmount());
        paymentRepository.save(payment);
        return payment;
    }
        public List<Payment> getBillings() {
        return paymentRepository.findAll();
    }

    public Payment getUserBilling(int id) {
        return paymentRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Billing with ID: " + id + " not found"));
    }
        public String delUserBilling(int id) {
        Optional<Payment> optionalProduct = paymentRepository.findById(id);
        if (optionalProduct.isPresent()) {
        paymentRepository.deleteById(id);
            return "Admin deleted the Billing with ID: " + id;
        } else {
            throw new NoSuchElementException("Billing with ID: " + id + " not found");
        }
    }
}
