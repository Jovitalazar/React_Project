package com.example.hall.service;

import com.example.hall.model.Register;
import com.example.hall.repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository registerRepository;

    public Register saveRegister(Register register) {
        return registerRepository.save(register);
    }

    public Register getRegisterById(Long id) {
        return registerRepository.findById(id).orElse(null);
    }

    public List<Register> getAllRegisters() {
        return registerRepository.findAll();
    }

    public void deleteRegister(Long id) {
        registerRepository.deleteById(id);
    }

    public Register findByUname(String uname) {
        return registerRepository.findByUname(uname);
    }

    public Register updateRegister(Long id, Register register) {
        if (registerRepository.existsById(id)) {
            register.setId(id); // Ensure the ID is set for the update
            return registerRepository.save(register);
        }
        return null; // Or throw an exception if desired
    }
}
