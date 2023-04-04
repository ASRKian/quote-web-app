import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import MainBody from './Components/MainBody';

function App() {

  const url = "https://api.quotable.io/random";

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  function getQuote () {
    axios.get(`${url}`)
      .then((responce) => {
      let data = responce.data;
      setQuote(data.content);
      setAuthor(data.author);
    })
  }

  // if (quote === '') {
  //   getQuote();
  //   console.log(getQuote());
  // }

  useEffect(() => getQuote(), []);
  
  return (
    <div className='app-div'>
    <MainBody next = {getQuote} quote = {quote} author= {author} />
    </div>
  );
}

export default App;
