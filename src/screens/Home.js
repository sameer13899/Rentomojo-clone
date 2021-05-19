import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default props => {
  const [userData, setData] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(buffer => buffer.text())
      .then(stringResponse => JSON.parse(stringResponse))
      .then(users => setData(users));
  }, []);
  return (
    <div style={{ display: 'flex', margin: '10%', justifyContent: 'center' }}>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {userData &&
            userData.map((usersData, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{usersData.username}</td>
                <td>{usersData.company.name}</td>
                <td>
                  <Link to={'/posts?userId=' + usersData.id}>Posts</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
