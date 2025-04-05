import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users, onUserClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {users.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => onUserClick(user)} />
      ))}
    </div>
  );
};

export default UserList;