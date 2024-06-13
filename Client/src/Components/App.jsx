/*بِسْمِ اللهِ الرَّحْمٰنِ */
/*ইনশাআল্লাহ, আল্লাহ তায়া’লা আমাকে সাহায্য করবে ১০০ বার */



//RequireMents
import react from 'react';
import {Routes,Route} from 'react-router-dom' ;
import Header from '/client/src/components /Header.jsx';
import Footer from '/client/src/components /Footer.jsx';

//Main App Function 
function App() {
  return (
    <>
    <Header/>
    <main>
       <Routes>
           <Route path="/" element={<Home />} exact/>
       </Routes>
    </main>
     
     <Footer/>
    </>
    )
;}

export default App;
