const loadData = () =>{
    const searchInput = document.getElementById('input-text');
    const searchText = searchInput.value;
    console.log(searchText)

    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayBook((data.docs)))
}

const displayBook = books =>{
    const bookField = document.getElementById('book-field')
    books.forEach(book =>{
        console.log(book)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
            <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <h5 class="card-title text-danger"><span class="text-primary">Author Name:</span> ${book.author_name}</h5>
                    <h5 class="card-title">${book.first_publish_year}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `;
        bookField.appendChild(div)
    })
}