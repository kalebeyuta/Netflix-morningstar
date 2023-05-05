import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Rows from './Rows';
import Footer from './Footer';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Rows title="Popular Movies" fetchUrl="https://api.themoviedb.org/3/movie/popular?api_key=82551f4d1b6f85de2b7be0f27ff24c2b" />
      <Rows title="Top Rated" fetchUrl="https://api.themoviedb.org/3/movie/top_rated?api_key=82551f4d1b6f85de2b7be0f27ff24c2b" />
      <Rows title="Action Movies" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=82551f4d1b6f85de2b7be0f27ff24c2b&with_genres=28" />
      <Rows title="Comedy Movies" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=82551f4d1b6f85de2b7be0f27ff24c2b&with_genres=35" />
      <Rows title="Horror Movies" fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=82551f4d1b6f85de2b7be0f27ff24c2b&with_genres=27" />
      <Footer />
    </div>
  );
}

export default App;
