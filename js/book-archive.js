// error handeling

const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
};
const searchResult = searchDisplayStyle =>{
    document.getElementById('display-field').style.display = searchDisplayStyle;
};
const emptySearchNumber = findDisplayBooks =>{
    document.getElementById('empty-input').style.display = findDisplayBooks;
};
const errorMessage = displayError =>{
    document.getElementById('errors').style.display = displayError;
};

// Input field 
const searchData = () =>{
    const searchInput = document.getElementById('input-text');
    toggleSpinner('block');
    searchResult('none');
    emptySearchNumber('none');
    errorMessage('none');
    const searchText = searchInput.value;
    searchInput.value = '';

    // empty input 
    if(searchText === ""){
        emptySearchNumber('block')
        toggleSpinner('none')
        return;
    }
    else{
        emptySearchNumber('none')
    };

    // books url 
    const url = `http://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displayBook(data.docs))
}

// display field 
const displayBook = books =>{

    // search results Number 
    if(books.length === 0){
        console.log(books.length);
        errorMessage('block');
    }
   
    document.getElementById('books-numbers').innerText = `Find Books: ${books.length}`; 
    const bookField = document.getElementById('book-field');
    bookField.textContent = '';

        books.forEach(book =>{ 
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div class="card h-100">
                    <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><span class="text-success">Book Name:</span> <span class="">${book.title}</span></h5>
                        <h5 class="card-title"><span class="text-success">Author Name:</span> ${book.author_name ? book.author_name: '<span class="text-danger">Not Available</span>'}</h5>
                        <h5 class="card-title"><span class="text-success">First Publisht: </span>${book.first_publish_year}</h5>
                        <p class="card-text"><span class="text-primary">Text:</span> ${book.text.slice(0, 5)}</p>
                    </div>
                </div>
            `;
            bookField.appendChild(div)
        });
        toggleSpinner('none')
        searchResult('block')
    };
    
        
    
    