package com.example.hall.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.hall.model.Login;
import com.example.hall.service.LoginService;

import java.util.List;

@RestController
@RequestMapping("/api/logins")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<Login> login(@RequestParam String username, @RequestParam String password) {
        Login login = loginService.findByUsername(username);
        if (login != null && login.getPassword().equals(password)) {
            return ResponseEntity.ok(login);
        }
        return ResponseEntity.status(401).body(null); // Unauthorized
    }

    @PostMapping
    public Login createLogin(@RequestBody Login login) {
        return loginService.saveLogin(login);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Login> getLogin(@PathVariable Long id) {
        Login login = loginService.getLoginById(id);
        if (login != null) {
            return ResponseEntity.ok(login);
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping
    public List<Login> getAllLogins() {
        return loginService.getAllLogins();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLogin(@PathVariable Long id) {
        loginService.deleteLogin(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Login> updateLogin(@PathVariable Long id, @RequestBody Login login) {
        Login updatedLogin = loginService.updateLogin(id, login);
        if (updatedLogin != null) {
            return ResponseEntity.ok(updatedLogin);
        }
        return ResponseEntity.notFound().build();
    }
}
