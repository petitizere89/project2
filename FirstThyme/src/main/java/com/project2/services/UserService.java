package com.project2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project2.enums.URoles;
import com.project2.models.Cart;
import com.project2.models.User;
import com.project2.models.UserRoles;
import com.project2.repository.UserRepo;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
public class UserService {
	private UserRepo uDao;
	//view all items
	//create shopping cart
	//create customer account
	//update user info
	//how git api
	//purchase items
	//manager creates inventory system
	//manager can adjust inventory
	
	public void createUser(User u) {
		//create shopping cart
		//add roll
		createShoppingCart(u);
		addRollC(u);
		uDao.save(u);
	}
	public void createShoppingCart(User u) {
		Cart c = new Cart(u.getId());
		u.setCart(c);
		//return u;
	}
	public void addRollC(User u) {
		UserRoles role = new UserRoles(URoles.CUSTOMER);
		u.setUser_role(role);
		//return u;
	}
	public void addRollM(User u) {
		UserRoles role = new UserRoles(URoles.MANAGER);
		u.setUser_role(role);
		//return u;
	}
}
