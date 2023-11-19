let books = [
    {id: 1, title: 'mine', ISBN: 'myISBN', publishedDate: '12/December/2023', author: 'Sue'},
    {id: 1, title: 'ours', ISBN: 'ourISBN', publishedDate: '12/August/2023', author: 'Damien'},
    {id: 1, title: 'his', ISBN: 'hisISBN', publishedDate: '12/September/2023', author: 'Alvin'},
    {id: 1, title: 'histoo', ISBN: 'histooISBN', publishedDate: '12/June/2023', author: 'Aaron'}
];
let counter =4;
module.express = class Book {
    constructor(id, title, ISBN, publishedDate, author){
               this.id = id;
               this.title = title;
               this.ISBN = ISBN;
               this.publishedDate = publishedDate;
               this.author = author;
    }
    static getAllBooks(){
        return books;
    }

    static getBookById(id){
        return books.find(b=> b.id == id);
    }

    save(){
        this.id = counter++; // generating ID numbers by counter increament
       // this.id = Math.random().toString(); //generating IDs numbers randomly
        books.push(this);
        return this;
    }

    updateById(id){
        const index =books.findIndex(p => p.id == id);
        if(index > -1){
            books[index] = this;
        }else{
            throw new Error (`Book with ID: ${id} cannot be found`);
        }
    }
    static deleteById(id){
        const index = books.findIndex(p => p.id == id)
        if(index >-1){
            books.splice(index, 1);
             //books =  books.filter(b => b.id != id) // delete using filter 
        }else{
            throw new Error(`Book with ID: ${id} cannot be found`);
        }
       

    }
}