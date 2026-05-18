// book-management-api/src/main/java/com/yourname/bookapi/entity/Book.java
package com.yourname.bookapi.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "book")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String author;

    private Integer price;

    @Builder.Default
    private Boolean available = true;

    @PrePersist
    void onCreate() {
        if (available == null) {
            available = true;
        }
    }

    public void update(String title, String author, Integer price, Boolean available) {
        if (title != null) {
            this.title = title;
        }
        if (author != null) {
            this.author = author;
        }
        if (price != null) {
            this.price = price;
        }
        if (available != null) {
            this.available = available;
        }
    }
}
