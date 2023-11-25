class Book {
    constructor(title, author, publishedYear, isRead) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isRead = isRead || false;
    }
    
    markAsRead() {
        return (this.isRead = true);
    }

    markAsUnread() {
        return (this.isRead = false);
    }

    getBookInfo() {
        return this;
    }
}

var book1 = new Book("The Power Of Your Subconscious MIND", "Joseph Murphy", 1963);
book1.markAsRead();
console.log(book1.getBookInfo());