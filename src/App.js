
// import './App.css';
// import BucketList from './components/BucketList';

// function App() {
//   return (
//     <div className="bucket-app">
//       <BucketList />
//     </div>
//   );
// }

// export default App;


import React, {useState} from 'react';

import About from './components/About';

import Contact from './components/Contact';

import {Footer, Header, Work} from './components'

function App() {
  // const [var, function] = useState(default value of the variable)
  const [currentPage, setCurrentPage] = useState("About")

  console.log(currentPage)

  return (
    <div>
      <Header setCurrentPage = {setCurrentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Work" && <Work/>}
      {currentPage === "Contact" && <Contact/>}
      <Footer />

export default App;