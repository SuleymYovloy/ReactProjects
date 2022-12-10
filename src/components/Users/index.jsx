import React from "react";
import { Skeleton } from "./Skeleton";
import { User } from "./User";

import { Success } from "./Success";

import "./index.scss";

// Тут список пользователей: https://reqres.in/api/users

export const Users = () => {

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


  return success ? <Success count={invites.length}/> : (
    <div className="users-wrapper">
      <div className="users">
        <div className="search">
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
          <input value={searchValue} onChange={onChangeSearchValue} type="text" placeholder="Найти пользователя..." />
        </div>
        {isLoading ? (
          <div className="skeleton-list">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        ) : (
          <ul className="users-list">
            {
              users.filter((user) => {
                const fullName = (user.first_name + user.last_name).toLowerCase();
                
                return fullName.includes(searchValue.toLowerCase()) || user.email.toLowerCase().includes(searchValue.toLowerCase())

              }).map((user) => {
                return <User onClickInvite={onClickInvite} isInvited={invites.includes(user.id)} key={user.id} data={user}  />;
              })
            }
          </ul>
        )}
        {
          invites.length > 0 && (
            <button onClick={onClickSendInvites} className="send-invite-btn">Отправить приглашение</button>
          )
        }
      </div>
    </div>
  );
};
