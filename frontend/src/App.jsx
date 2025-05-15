import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

const API_URL = "http://localhost:5000/api/users"; // adapte l'URL pour le déploiement

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };

  const handleCreate = async (user) => {
    await axios.post(API_URL, user);
    fetchUsers();
  };

  const handleUpdate = async (user) => {
    await axios.put(`${API_URL}/${user._id}`, user);
    setEditingUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Gestion des Utilisateurs</h1>
        <UserForm onCreate={handleCreate} onUpdate={handleUpdate} editingUser={editingUser} />
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
