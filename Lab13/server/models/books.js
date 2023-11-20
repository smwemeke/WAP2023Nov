let books = [
    {id: 1, title: 'mine', ISBN: 'myISBN', publishedDate: '12/December/2023', author: 'Sue'},
    {id: 2, title: 'ours', ISBN: 'ourISBN', publishedDate: '12/August/2023', author: 'Damien'},
    {id: 3, title: 'his', ISBN: 'hisISBN', publishedDate: '12/September/2023', author: 'Alvin'},
    {id: 4, title: 'histoo', ISBN: 'histooISBN', publishedDate: '12/June/2023', author: 'Aaron'}
];
let counter = 4;
module.exports = class Book {
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

    static BookById(id){
        return books.find(b => b.id == id);
    }
    static BookByAuthor(author){
         const booksByAuthor = books.filter(b => b.author === author);
         if(booksByAuthor.length ==0){
            throw new Error('No books found for the specified author.');
         }
         return booksByAuthor;
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
            this.id = id;
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