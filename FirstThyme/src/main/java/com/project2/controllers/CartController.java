package com.project2.controllers;

import java.util.LinkedHashMap;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.models.Items;
import com.project2.models.User;
import com.project2.services.CartService;
import com.project2.services.ItemService;
import com.project2.services.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/cart")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))
@CrossOrigin(value = "*")
public class CartController {
	private CartService cServ;
	private UserService uServ;
	private ItemService iServ;
	
	@PostMapping(value="/addItem")
	public ResponseEntity<String> addItem(@RequestBody LinkedHashMap<String,String>req){
		User u = uServ.getUserById(Integer.parseInt(req.get("userId")));
		Items i = iServ.getItemById(Integer.parseInt(req.get("itemId")));
		if(u==null || i==null) {
			return new ResponseEntity<String>("Failed to Grab either user or item",HttpStatus.CONFLICT);
		}
		cServ.addItem(u, i);
		return new ResponseEntity<String> ("item added to cart",HttpStatus.OK);
	}
	}
