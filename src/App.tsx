import { Card, CardContent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      ?.then(({ data }) => {
        setUserList(data);
      })
      ?.catch(({ error }) => {
        console.log(error);
      });
  };

  return (
    <>
      {userList.map((user: any) => (
        <Card key={user.id} data-testid="user-card">
          <CardContent>
            <p>{user?.id}</p>
            <p>{user?.name}</p>
            <p>{user?.email}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default App;
