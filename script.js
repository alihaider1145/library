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
        author: 'Paulo Choelo',
        title: 'The Alchemist',
        pages: 208,
        isRead: true,
    }
];

const table = document.querySelector('.library-table');
const tableBody = document.querySelector('.library-table tbody')

console.log(document.querySelector('.library-table'));      // should be <table> element
console.log(document.querySelector('.library-table tbody')); // should be <tbody> element



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
    tableBody.innerHTML = '';

    myLibrary.forEach((rowData)=>{
        const row = document.createElement('tr');
        let rowArr = Object.values(rowData); // converts the row obj to arr
        rowArr.forEach((cellData)=>{
            const cell = document.createElement('td')
            cell.textContent = cellData;
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });
}

displayBooks();
