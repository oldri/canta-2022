import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Collections from './components/Collections';
import Cards from './components/Cards';
import About from './components/About';
import Nav from './components/Nav';

function App() {
  const [ showAbout, setShowAbout ] = useState(false);
  const [ showCollectionModal, setShowCollectionModal ] = useState(false);
  const [ selectCollection, setSelectCollection ] = useState("F22/");

  return (
    <div className='container'>
      <Header />
      <Collections showCollectionModal={showCollectionModal} setSelectCollection={setSelectCollection}  />
      <Cards selectCollection={selectCollection} />
      <About showAbout={showAbout} />
      <Nav setShowAbout={setShowAbout} showAbout={showAbout} showCollectionModal={showCollectionModal} setShowCollectionModal={setShowCollectionModal} />
    </div>
  );
}

export default App;
