import { useEffect, useState } from "react";
import ActivityGraph from "../components/ActivityGraph";
import LoginGraph from "../components/LoginGraph";
import UserList from "../components/UserList";

const Dashboard = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [userActivity, setUserActivity] = useState({ labels: [], values: [] });
    const [loginActivity, setLoginActivity] = useState({ labels: [], values: [] });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    // Fetch user data from the backend
    useEffect(() => {
      fetch("http://biodatamakerapi.local/api/index/users")
        .then((response) => response.json())
        .then((data) => {
          if (data.status && data.data) {
            const userData = data.data;
            setUsers(userData);
  
            // Process user data for registration activity
            const groupedData = userData.reduce((acc, user) => {
              const date = user.created_at.split('T')[0];
              acc[date] = (acc[date] || 0) + 1;
              return acc;
            }, {});
            console.log("groupedData= ", groupedData);
  
            const labels = Object.keys(groupedData);
            const values = Object.values(groupedData);
  
            setUserActivity({ labels, values });
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setError("Failed to fetch user data.");
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div className="p-6 text-center">Loading...</div>;
    }
  
    if (error) {
      return <div className="p-6 text-center text-red-500">{error}</div>;
    }
  
    return (
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
  
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User List Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">All Users</h2>
            <UserList users={users} onUserClick={setSelectedUser} />
          </div>
  
          {/* Graphs Section */}
          <div className="space-y-6">
            {/* User Activity Graph */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">User Registration Activity</h2>
              <ActivityGraph data={userActivity} />
            </div>
  
            {/* Login Activity Graph */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Login Activity</h2>
              <LoginGraph data={loginActivity} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Dashboard;