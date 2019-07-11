import React from 'react';
import './Books.css';
const Books = props =>  (
  
<div id='book_cont' className="books__container" >
{props.books.map((book)=>
{
  let booker = document.querySelector('book')
          console.log(booker)

        return (
        
          <div className='books' key={book.id}>
           <p className='title'>{book.volumeInfo.title}</p>
           <p className='authors'>Authors: {book.volumeInfo.authors ? book.volumeInfo.authors : 'No info'}</p>
           <p className='authors'>Language: {book.volumeInfo.language}</p>
           <p className='desc'>Category: {book.volumeInfo.categories ? book.volumeInfo.categories : 'No info'} </p>

           <p className='desc'>description: {book.volumeInfo.description ?  book.volumeInfo.description : 'No description'}</p>   
        
         
           {book.volumeInfo.imageLinks ? 
              <a href={book.volumeInfo.previewLink}>
              <img className='image' src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}/> </a> :
                <p>No image to display</p>

           }
          
         </div>
         
        )
       })}
</div>
 

)
   




export default Books;