import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border bg-white shadow rounded-lg text-xs sm:text-sm">
        <thead>
          <tr className="table-header bg-gray-100">
            <th className="p-2 sm:p-3 text-left">Nom</th>
            <th className="p-2 sm:p-3 text-left">Email</th>
            <th className="p-2 sm:p-3 text-left">Rôle</th>
            <th className="p-2 sm:p-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-gray-500 p-4">
                Aucun utilisateur trouvé.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr
                key={user._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-2 sm:p-3">{user.name}</td>
                <td className="p-2 sm:p-3">{user.email}</td>
                <td className="p-2 sm:p-3">{user.role}</td>
                <td className="p-2 sm:p-3 text-center space-x-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="btn btn-primary text-xs sm:text-sm inline-flex items-center gap-1"
                  >
                    <FiEdit />
                    Modifier
                  </button>
                  <button
                    onClick={() => onDelete(user._id)}
                    className="btn btn-danger text-xs sm:text-sm inline-flex items-center gap-1"
                  >
                    <FiTrash2 />
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
