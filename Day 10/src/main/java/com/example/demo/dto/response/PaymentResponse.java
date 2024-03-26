package com.example.demo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PaymentResponse {
    private int id;
        private String name;
        private int invoiceno;
        private String address;
        private int days;
        private float amount;
        private String mobileno;
}
