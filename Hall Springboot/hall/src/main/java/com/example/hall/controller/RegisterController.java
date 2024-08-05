package com.example.hall.controller;

import com.example.hall.model.Register;
import com.example.hall.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    @PostMapping("/register")
    public Register createRegister(@RequestBody Register register) {
        return registerService.saveRegister(register);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Register> getRegister(@PathVariable Long id) {
        Register register = registerService.getRegisterById(id);
        if (register != null) {
            return ResponseEntity.ok(register);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping
    public List<Register> getAllRegisters() {
        return registerService.getAllRegisters();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRegister(@PathVariable Long id) {
        registerService.deleteRegister(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/login")
    public ResponseEntity<Register> login(@RequestParam String uname, @RequestParam String pass) {
        Register register = registerService.findByUname(uname);
        if (register != null && register.getPass().equals(pass)) {
            return ResponseEntity.ok(register);
        }
        return ResponseEntity.status(401).body(null); // Unauthorized
    }

    @PutMapping("/{id}")
    public ResponseEntity<Register> updateRegister(@PathVariable Long id, @RequestBody Register register) {
        Register updatedRegister = registerService.updateRegister(id, register);
        if (updatedRegister != null) {
            return ResponseEntity.ok(updatedRegister);
        }
        return ResponseEntity.notFound().build();
    }
}
