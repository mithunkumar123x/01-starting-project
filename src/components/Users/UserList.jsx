import React from "react";

import Card from "../UI/Card";
import classes from './UserList.module.css';
const UserList = (props) => {
    return (
        <Card className={classes.users}>
          <ul>
            {props.isLoading ? (
              <p>Loading users...</p>
            ) : (
              props.users && props.users.length > 0 ? (
                props.users.map((user) => (
                  <li key={user.id}>
                    {user.name} ({user.age} years old)
                  </li>
                ))
              ) : (
                <p>No users found.</p>
              )
            )}
          </ul>
        </Card>
      );

    
  
}

export default UserList;