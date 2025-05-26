const books = [
    {
        isbn: "9780140449136",
        title: "The Odyssey",
        author: "Homer",
        image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
        review: "An epic journey of bravery and intellect."
    },
    {
        isbn: "9780439139601",
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
        review: "Magical and thrilling installment in the series."
    },
    {
        isbn: "9780061120084",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
        review: "A profound novel on justice and humanity."
    }
];

const booksContainer = document.getElementById("booksContainer");
const searchBar = document.getElementById("searchBar");

function displayBooks(list) {
    booksContainer.innerHTML = "";
    list.forEach(book => {
        booksContainer.innerHTML += `
            <div class="book">
                <img src="\${book.image}" alt="\${book.title}">
                <div class="book-title">\${book.title}</div>
                <div>\${book.author}</div>
                <div>ISBN: \${book.isbn}</div>
                <div>Review: \${book.review}</div>
            </div>
        `;
    });
}

searchBar.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();
    const filtered = books.filter(book =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value) ||
        book.isbn.includes(value)
    );
    displayBooks(filtered);
});

displayBooks(books);

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login functionality placeholder.");
});

registerForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Register functionality placeholder.");
});