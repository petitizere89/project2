package com.project2.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project2.enums.ICategory;
import com.project2.models.Category;
import com.project2.models.Items;
import com.project2.services.ItemService;
import com.project2.services.UserService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping(value="/users")
@NoArgsConstructor
@AllArgsConstructor(onConstructor=@__(@Autowired))

@CrossOrigin(value = "*")
public class ItemController {
	private ItemService iServ;
	
	//this may cause issues/not work
	@PostMapping("/createitem")
	public ResponseEntity<Items> createItem(@RequestBody LinkedHashMap<String,String>item){
		Category cat = new Category();
		switch(item.get("category")) {
		case "MEAT":
			cat.setCategory(ICategory.MEAT);
			break;
		case "FRUIT":
			cat.setCategory(ICategory.FRUIT);
			break;
		case "VEGETABLES":
			cat.setCategory(ICategory.VEGETABLES);
			break;
		case "HERB":
			cat.setCategory(ICategory.HERB);
			break;
		case "BREAD":
			cat.setCategory(ICategory.BREAD);
			break;
		case "FROZEN":
			cat.setCategory(ICategory.FROZEN);
			break;
		case "BAKERY":
			cat.setCategory(ICategory.BAKERY);
			break;
		}
		Items i = new Items(Integer.parseInt(item.get("item_id")),item.get("item_name"),Integer.parseInt(item.get("price")),item.get("description"),cat,Integer.parseInt(item.get("quantity")));
		iServ.createItem(i);
		return new ResponseEntity<Items>(i,HttpStatus.ACCEPTED);
	}
}
