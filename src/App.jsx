// src/App.jsx
import "./App.css";
import Navbar from './components/NavBar/NavBar';
// import DaisyNav from './components/DaisyNav/DaisyNav';
import PriceOptions from './components/PriceOptions/PriceOptions'; 
function App() {
  return (
    <>
      <Navbar />
      {/* <DaisyNav /> */}
      <h1 className='text-3xl bg-red-200 font-bold underline'>Hello world!</h1>
      <PriceOptions />
    </>
  );
}

export default App;
