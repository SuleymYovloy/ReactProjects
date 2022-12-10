import React from "react";
import "./index.scss";
import Counter from "./components/Counter";
import Modal from "./components/Modal";
import Quiz from "./components/Quiz";
import { Success } from "./components/Users/Success";
import { Users } from "./components/Users";
import Convertor from "./components/Convertor";
import CollectionApp from "./components/Collection";
import { Routes, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = React.useState(false); //Modal

  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(success)

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка получения пользователей");
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true)
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path="/counter" element={<Counter />} />

        <Route
          path="/modal"
          element={
            <Modal open={open} setOpen={setOpen}>
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
        
        
        
      </Routes>
      {
        success ? <Success count={invites.length}/> : <Users items={users} isLoading={isLoading} searchValue={searchValue} onChangeSearchValue={onChangeSearchValue} invites={invites} onClickInvite={onClickInvite} onClickSendInvites={onClickSendInvites}/>
      }
      {/* <Counter/> */}

      {/* <Quiz/> */}
      {/* <Users/> */}
      {/* <Success/> */}
    </div>
  );
}

export default App;
