package com.example.hall.repository;

import com.example.hall.model.Register;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Long> {
    
    Register findByUname(String uname);
}
