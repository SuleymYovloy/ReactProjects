import React from 'react';
import './index.scss';
// import Counter from "./components/Counter";
// import Modal from './components/Modal';
import Quiz from './components/Quiz';

function App() {
  
  // const [open, setOpen] = React.useState(false); //Modal

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Modal open={open} setOpen={setOpen}>
        <img  src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="Картинка"/>
        <h2>Модальное окно</h2>
      </Modal> */}
      <Quiz/>
      
    </div>
  )
}

export default App;
