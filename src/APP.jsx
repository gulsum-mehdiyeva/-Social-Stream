import inputChange from './fonksionlar/inputChange.js';
import clickButton from './fonksionlar/clickButton.js'; 
import MainComponent from './MainComponent'; 
import Header from './Header'; 
import { useState,useEffect } from 'react';



function App() {
const [posts, setPosts] = useState([]);
const [text, setText] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  clickButton(setPosts, setLoading, setError);
}, []);

  return (
    <>
     <Header />
      <input type="text" onChange={(e) => inputChange(e, setText)} />
      <button onClick={() => clickButton(setPosts, setLoading, setError)}>Yenile</button>

      {loading && <p>Yükleniyor...</p>}
      {error && <p>{error}</p>}
      
      <MainComponent posts={posts} text={text} />
    </>
  );
}

export default App;