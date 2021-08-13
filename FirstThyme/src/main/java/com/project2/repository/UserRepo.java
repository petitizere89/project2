package com.project2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project2.enums.URoles;
import com.project2.models.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	public List<User> findAll();
	public User findByUsername(String username);
	public double findUserBalance(int user_id);
	public URoles getUserRole(int user_id);
	
}
