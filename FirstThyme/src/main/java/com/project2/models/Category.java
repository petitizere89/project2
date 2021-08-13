package com.project2.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.project2.enums.ICategory;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name="categories")
public class Category {
	@Column(name="category")
	private ICategory category;

}
