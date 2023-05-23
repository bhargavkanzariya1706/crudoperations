import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Api1() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {

        const response = await fetch("https://63be78edf5cfc0949b58277e.mockapi.io/api1")
        const data = await response.json();
        setUsers(data);
    }

    useEffect(() => {

        async function Apifunc() {
            const data1 = {
                Email: "arjun@gmail.com",
                name: "Arjun",
                city: "Botad",

            }
            try {
                const post = await axios.post("https://63be78edf5cfc0949b58277e.mockapi.io/api", data1)
                console.log(post)
            } catch (error) {
                console.log(error)
            }
        }

        Apifunc();
        fetchData()
    }, []);


    return (
        <div>
            <h1>
                {users.length > 0 && (
                    <div>
                        {users.map(bb => (
                    <ul>
                            <li key={bb.id}>{bb.title}{bb.Email}{bb.city}</li>
                            <li><img src={bb.image} alt=''></img></li>
                    </ul>
                        ))}
                        </div>
                )}
            </h1>
        </div>

    );
}
