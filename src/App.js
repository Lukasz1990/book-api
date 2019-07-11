import React, {Component} from 'react';
import axios  from 'axios';
import Books from './Books';
import Layout from './Layout';
import './App.css';
const API_KEY = "AIzaSyDbtnUhms6boHopglPXbxh3GHSz3orNmFE";



class App extends Component {
  constructor (props) {
    super(props)
    this.inputRef = React.createRef()
    
    
  }
  state = {
      error: false,
      books : [],
      scrolled: false,
      hasMore: true,
      result: 5

    
  }



  
       
      getBook = async (book) => {
        const result = this.state.result;
    
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=${result}&key=${API_KEY}`);
        const books =  response.data.items;

          this.setState({
            books: books
          })
      } catch (err) {
        console.error(err);
      }
    
    }
  
   
 

  render() {
  
   
    return (
      <Layout>
      <div className="App">

      <h1 className="title">Book searchear</h1>
 
      <div>
    
  
     </div>
     <input className='input' ref={this.inputRef} placeholder='Please type a phrase'></input>

     <button className='btn' onClick={()=>this.getBook(this.inputRef.current.value)}>Search book...</button>
    
      <Books books={this.state.books}/>
    
    </div>
    </Layout>
  );

}
}


export default App;
