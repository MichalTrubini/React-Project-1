import React, { useState } from "react";

import AddUser from "./components/AddUser";
import UserData from "./components/UserData";

function App() {

  const [userList, setUserList] = useState([]);

  const submitDataHandler = (userName, userAge) => {
    setUserList((prevUserList) => {
      return [...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}]
    });
  }

  return (
    <div>
      <AddUser OnSubmitData={submitDataHandler}/>
      <UserData users={userList}/>
    </div>
  );
}

export default App;
