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

const tableBody = document.querySelector('.library-table tbody')
const form = document.querySelector('.library-form');
const formBtn = document.querySelector('.formBtn');

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

form.addEventListener('submit', (e)=>{
    console.log('The submit event works');
    e.preventDefault();
    const newAuthor = document.querySelector('#author').value;
    const newTitle = document.querySelector('#title').value;
    const newPages = document.querySelector('#pages').value;
    const newIsRead = document.querySelector('#isRead').checked;
    addBookToLibrary(newAuthor, newTitle, newPages, newIsRead);
    displayBooks();
    form.reset();
});

displayBooks();
