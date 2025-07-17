import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">User Management Dashboard</h2>
      <div className="card shadow p-4">
        <table className="table table-hover text-center">
          <thead className="table-light">
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-primary btn-sm mx-1" to={`/viewuser/${user.id}`}>
                    👁️ View
                  </Link>
                  <Link className="btn btn-outline-primary btn-sm mx-1" to={`/edituser/${user.id}`}>
                    ✏️ Edit
                  </Link>
                  <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
