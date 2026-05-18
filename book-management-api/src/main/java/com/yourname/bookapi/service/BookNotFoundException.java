// book-management-api/src/main/java/com/yourname/bookapi/service/BookNotFoundException.java
package com.yourname.bookapi.service;

public class BookNotFoundException extends RuntimeException {

    public BookNotFoundException(Long id) {
        super("Book not found: " + id);
    }
}
