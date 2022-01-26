import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import getUsers from "../utils/utils";
import UsersList from "../components/Users/UsersList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import store from "../store";
import FavoriteList from "../components/Favorite/FavoriteList";

function MainPage() {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    getUsers().then((resp) => {
      const allUsers = resp.data;
      setUsers(allUsers);
    });
  }, [setUsers]);
  const filteredUsers = users.filter((user) => {
    return (
      user.login.toLowerCase().includes(value.toLowerCase()) ||
      String(user.id).includes(value)
    );
  });
  return (
    <Provider store={store}>
      <Router>
        <Header onChange={setValue} />
        <Switch>
          <UsersList exact path="/" users={filteredUsers} />
          <FavoriteList exact path="/favorite" />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}
export default MainPage;
