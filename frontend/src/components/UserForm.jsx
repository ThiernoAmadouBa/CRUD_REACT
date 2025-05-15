import React, { useEffect, useState } from "react";
import { FiUserPlus, FiSave } from "react-icons/fi";

const initialForm = { name: "", email: "", role: "" };

const UserForm = ({ onCreate, onUpdate, editingUser }) => {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingUser) setFormData(editingUser);
    else setFormData(initialForm);
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editingUser ? onUpdate(formData) : onCreate(formData);
    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 space-y-4 bg-gray-50 p-4 rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Rôle"
          className="form-input"
          value={formData.role}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary flex items-center gap-2">
        {editingUser ? <FiSave /> : <FiUserPlus />}
        {editingUser ? "Mettre à jour" : "Ajouter utilisateur"}
      </button>
    </form>
  );
};

export default UserForm;
