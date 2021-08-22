package com.project2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project2.enums.URoles;
import com.project2.models.User;
import com.project2.models.UserRoles;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
	public List<User> findAll();
	public User findByUsername(String username);
	//public double getBalance(int user_id);
	public UserRoles getUserById(int user_id);
	
}
