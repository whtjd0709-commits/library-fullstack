// book-management-api/src/main/java/com/yourname/bookapi/service/BookService.java
package com.yourname.bookapi.service;

import com.yourname.bookapi.entity.Book;
import com.yourname.bookapi.repository.BookRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BookService {

    private final BookRepository bookRepository;

    public List<Book> findAll() {
        return bookRepository.findAll();
    }

    public Book findById(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    public List<Book> searchByTitle(String title) {
        return bookRepository.findByTitleContainingIgnoreCase(title);
    }

    @Transactional
    public Book create(Book book) {
        return bookRepository.save(book);
    }

    @Transactional
    public Book update(Long id, Book request) {
        Book book = findById(id);
        book.update(request.getTitle(), request.getAuthor(), request.getPrice(), request.getAvailable());
        return book;
    }

    @Transactional
    public void delete(Long id) {
        bookRepository.delete(findById(id));
    }
}
