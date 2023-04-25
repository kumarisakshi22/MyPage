// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "harry ";


function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Textutils" />
      <div className="container my-3" >
        <TextForm heading="Enter the text to analyse" />
      </div>
    </>


  );
}

export default App;
