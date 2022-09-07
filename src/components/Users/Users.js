import React, { useState, useEffect } from "react";
import axios from "axios";
// import styled from "styled-components";

// const Loader = styled.div``;

// const Row = styled.li`
//   list-style: none;
//   margin: 10px;
// `;

export const url = "https://randomuser.me/api/?results=5";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const {
          data: { results }
        } = await axios.get(url);
        setUsers(results);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);
 console.log(users);
  return (
    <>
      {users.length === 0 ? (
        <div>Loading...</div>
      ) : (
        users.map(user => (
          <div data-testid="row">
            {user.name.first} 
            </div> 
        ))
      )}
    </>
  );
}

export default Users;
