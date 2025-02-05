package com.project2.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project2.models.Items;

@Repository
public interface ItemRepo extends JpaRepository<Items, Integer>{
	public List<Items> findAll();
	public Items findById(int id);
	public Items findByItemName(String name);
//	public Items getItemPrice(int id);
//	public Items getItemDescription(int id);
//	public Items getItemCategory(int id);
//	public Items getItemQuantity(int id);
}
