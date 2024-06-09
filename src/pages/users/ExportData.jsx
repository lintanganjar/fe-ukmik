import React, { useState, useEffect } from "react";
import axios from "axios";

const bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImUyYTc2YzljLTM1ZjktNGE3Mi1iMGI0LTJiN2VkZDg3N2FmZiIsIm5hbWUiOiJBZG1pbiBVc2VyIiwidXNlcm5hbWUiOiJhZG1pbiIsImltYWdlIjoiYWRtaW4uanBnIiwicm9sZSI6IkFkbWluIiwicm9sZV9wZXJtaXNzaW9uIjpbXSwic3ViX3JvbGUiOiIiLCJzdWJfcm9sZV9wZXJtaXNzaW9uIjpbXSwiaWF0IjoxNzA4MzQ1MjM0LCJleHAiOjE3MDgzNDcwMzR9.DjYVY4AGjDIXUYiMC1i8Vwov80WEB8zbUaUOEgnTJtI";

const ExportData = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get("https://api-oms-dev.up.railway.app/users", {
                    headers: {
                        Authorization: `Bearer ${bearerToken}`,
                    },
                });

                // Handle response
                if (response.status === 200) {
                    // Berhasil mendapatkan data
                    setUsers(response.data);
                    setIsLoading(false);
                } else {
                    // Gagal mendapatkan data
                    console.error(response.statusText);
                }
            } catch (error) {
                // Terjadi error jaringan
                console.error(error.message);
            }
        };

        getData();
    }, []);


    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExportData;
