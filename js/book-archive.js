const loadData = () =>{
    const searchInput = document.getElementById('input-text');
    const searchText = searchInput.value;
    // searchInput.value = '';
    console.log(searchText)

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayBook((data.docs)))
}

const displayBook = books =>{
    document.getElementById('books-numbers').innerText = `Find Books: ${books.length}`; 
    const bookField = document.getElementById('book-field')
    bookField.textContent = '';
    books.forEach(book =>{
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"><span class="text-primary">Book Name:</span> ${book.title}</h5>
                    <h5 class="card-title text-danger"><span class="text-primary">Author Name:</span> ${book.author_name}</h5>
                    <h5 class="card-title"><span class="text-primary">First Publish:</span> ${book.first_publish_year}</h5>
                    <p class="card-text">Text: ${book.text.slice(0, 10)}</p>
                </div>
            </div>
        `;
        bookField.appendChild(div)
    })
}