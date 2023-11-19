let books = [];
let counter =0;
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