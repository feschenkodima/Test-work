import React from "react";
import UsersListItem from "./UsersListItem";
import classes from "../../styles/users.module.scss";
function UsersList({ users }) {
  const usersListItems = users.map((item, index) => {
    return <UsersListItem item={item} key={index} />;
  });
  return (
    <section>
      <h1 className={classes.users_title}>All users</h1>
      <div className={classes.users_container}>{usersListItems}</div>
    </section>
  );
}
export default UsersList;
