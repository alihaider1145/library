const myLibrary = [
    {
        author: 'Fyodor Dostoevsky',
        title: 'Crime and Punishment',
        pages: 480,
        isRead: true,
    },
    {
        author: 'Khaled Husseini',
        title: 'The Kite Runner',
        pages: 402,
        isRead: true,
    },
    {
        author: 'The Alchemist',
        title: 'Paulo Choelo',
        pages: 208,
        isRead: true,
    }
];

const table = document.getElementsByClassName('library-table');


function Book(author, title, pages, isRead, ID){

    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
    this.ID = ID;
}

function addBookToLibrary(author, title, pages, isRead){
    myLibrary.push(new Book(author, title, pages, isRead, crypto.randomUUID()));
}

function displayBooks(){
    // table.innerHTML = '';

    myLibrary.forEach((rowData)=>{
        const row = document.createElement('tr');
        let rowArr = Object.values(rowData); // converts the row obj to arr
        rowArr.forEach((cellData)=>{
            const cell = document.createElement('td')
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
}

displayBooks();