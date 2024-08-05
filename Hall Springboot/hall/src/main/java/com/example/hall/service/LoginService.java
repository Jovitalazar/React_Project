package com.example.hall.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hall.model.Login;
import com.example.hall.repository.LoginRepository;

import java.util.List;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public Login saveLogin(Login login) {
        return loginRepository.save(login);
    }

    public Login getLoginById(Long id) {
        return loginRepository.findById(id).orElse(null);
    }

    public List<Login> getAllLogins() {
        return loginRepository.findAll();
    }

    public void deleteLogin(Long id) {
        loginRepository.deleteById(id);
    }

    public Login findByUsername(String username) {
        return loginRepository.findByUsername(username);
    }

    public Login updateLogin(Long id, Login login) {
        if (loginRepository.existsById(id)) {
            login.setId(id); // Ensure the ID is set for the update
            return loginRepository.save(login);
        }
        return null; // Or throw an exception if desired
    }
}
