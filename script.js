const myLibrary = [
    {
        author: 'Fyodor Dostoevsky',
        title: 'Crime and Punishment',
        pages: 480,
        isRead: true,
        ID: crypto.randomUUID(),
    },
    {
        author: 'Khaled Husseini',
        title: 'The Kite Runner',
        pages: 402,
        isRead: true,
        ID: crypto.randomUUID(),
    },
    {
        author: 'Paulo Choelo',
        title: 'The Alchemist',
        pages: 208,
        isRead: true,
        ID: crypto.randomUUID(),
    }
];

const tableBody = document.querySelector('.library-table tbody')
const form = document.querySelector('.library-form');
const formBtn = document.querySelector('.formBtn');

class Book{
    constructor(author, title, pages, isRead, ID){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.isRead = isRead;
        this.ID = ID;
    }
}

function addBookToLibrary(author, title, pages, isRead){
    myLibrary.push(new Book(author, title, pages, isRead, crypto.randomUUID()));
}

function displayBooks(){
    tableBody.innerHTML = '';

    myLibrary.forEach((rowData)=>{
        const row = document.createElement('tr');
        let rowArr = Object.values(rowData).slice(0,3); // converts the row obj to arr
        rowArr.forEach((cellData)=>{
            const cell = document.createElement('td')
            cell.textContent = cellData;
            row.appendChild(cell);
        });

        const cell = document.createElement('td')
        const readBtn = document.createElement('button');
        readBtn.style.backgroundColor = '#FFFFFF';
        readBtn.style.width = '90px';
        readBtn.style.height = '35px';
        readBtn.style.color = '#111';
        readBtn.style.border = '1px solid #111';
        readBtn.style.borderRadius = '4px';
        readBtn.textContent = (rowData.isRead ? "Read" : "Not Read");

        readBtn.addEventListener('click', ()=>{
            if(readBtn.textContent === 'Read'){
                readBtn.textContent = 'Not Read';
            }
            else
                readBtn.textContent = 'Read';
        });

        readBtn.addEventListener('mouseenter', ()=>{
            readBtn.style.border = '1px solid grey';
            readBtn.style.cursor = 'pointer';
        });

        readBtn.addEventListener('mouseleave', ()=>{
            readBtn.style.border = '1px solid #111';
            readBtn.style.cursor = 'default';
        });

        const delBtn = document.createElement('button');
        delBtn.style.backgroundColor = 'Red';
        delBtn.style.padding = '8px 24px';
        delBtn.style.color = '#FFFFFF';
        delBtn.textContent = 'Delete';
        delBtn.style.border = 'none';
        delBtn.style.borderRadius = '4px';

        delBtn.addEventListener('mouseenter', ()=>{
            delBtn.style.backgroundColor = 'Maroon';
            delBtn.style.cursor = 'pointer';
        });

        delBtn.addEventListener('mouseleave', ()=>{
            delBtn.style.backgroundColor = 'Red';
            delBtn.style.cursor = 'default';
        });

        delBtn.addEventListener('click', (e)=>{
            const delRowIndex = myLibrary.indexOf(rowData);
            if(delRowIndex > -1)
                myLibrary.splice(delRowIndex, 1);
            e.target.parentNode.remove();
        });

        row.appendChild(cell);
        cell.appendChild(readBtn);
        row.appendChild(delBtn);

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
