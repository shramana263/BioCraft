import React from "react";

const UserCard = ({ user, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p className="text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserCard;