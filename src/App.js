import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Collections from './components/Collections';
import Cards from './components/Cards';
import About from './components/About';
import Nav from './components/Nav';
import News from './components/News';

function App() {
  const [ showAbout, setShowAbout ] = useState(false);
  const [ showCollectionModal, setShowCollectionModal ] = useState(false);
  const [ showNewsModal, setShowNewsModal ] = useState(false);
  const [ selectCollection, setSelectCollection ] = useState("");

  return (
    <div className='container'>
      <Header />
      <Collections showCollectionModal={showCollectionModal} setSelectCollection={setSelectCollection}  />
      <Cards selectCollection={selectCollection} />
      <About showAbout={showAbout} />
      <News showNewsModal={showNewsModal} />
      <Nav setShowAbout={setShowAbout} showAbout={showAbout} showCollectionModal={showCollectionModal} setShowCollectionModal={setShowCollectionModal} showNewsModal={showNewsModal} setShowNewsModal={setShowNewsModal} />
    </div>
  );
}

export default App;
