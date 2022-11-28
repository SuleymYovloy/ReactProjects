import React from 'react';
import './index.scss';
import Counter from "./components/Counter";
import Modal from './components/Modal';
import Quiz from './components/Quiz';
import { Success } from './components/Users/Success';
import { Users } from './components/Users';
import {Routes, Route} from "react-router-dom"
// Тут список пользователей: https://reqres.in/api/users

function App() {
  
  const [open, setOpen] = React.useState(false); //Modal

  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/modal" element={<Modal open={open} setOpen={setOpen}>
        <img  src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" alt="Картинка"/>
        <h2>Модальное окно</h2>
        </Modal>}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="users/" element={< Users/>}/>
        <Route path='users/success' element={<Success/>}/>
      </Routes>
      {/* <Counter/> */}
      
      {/* <Quiz/> */}
      {/* <Users/> */}
      {/* <Success/> */}
      
    </div>
  )
}

export default App;
