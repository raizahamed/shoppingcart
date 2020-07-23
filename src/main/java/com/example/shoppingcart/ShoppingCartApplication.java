package com.example.shoppingcart;

import Service.ProductService;
import model.Product;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ShoppingCartApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppingCartApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(ProductService productService) {
		return args -> {
			productService.save(new Product(1L, "Phone", 600.00, "http://placehold.it/200x100"));
			productService.save(new Product(2L, "TV", 800.00, "http://placehold.it/200x100"));
			productService.save(new Product(3L, "PS4", 320.00, "http://placehold.it/200x100"));
			productService.save(new Product(4L, "Camera", 149.00, "http://placehold.it/200x100"));
			productService.save(new Product(5L, "Hard Disk", 120.00, "http://placehold.it/200x100"));
			productService.save(new Product(6L, "Monitor", 230.00, "http://placehold.it/200x100"));
			productService.save(new Product(7L, "Laptop", 800.00, "http://placehold.it/200x100"));
		};
	}

}
