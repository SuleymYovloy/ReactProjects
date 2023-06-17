import React from 'react';
import './index.scss';
import Counter from './components/Counter';
import Modal from './components/Modal';
import Quiz from './components/Quiz';
import Convertor from './components/Convertor';
import CollectionApp from './components/Collection';
import { Routes, Route } from 'react-router-dom';
import { Users } from './components/Users/index';
import Tabs from './components/Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <Tabs />
      <Routes>
        <Route path="/counter" element={<Counter />} />

        <Route
          path="/modal"
          element={
            <Modal>
              <img
                src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
                alt="Картинка"
              />
              <h2>Модальное окно</h2>
            </Modal>
          }
        />

        <Route path="/quiz" element={<Quiz />} />

        <Route path="/convertor" element={<Convertor />} />

        <Route path="/collections" element={<CollectionApp />} />

        <Route path="/collections" element={<CollectionApp />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
