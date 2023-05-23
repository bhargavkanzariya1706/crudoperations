
import axios from 'axios';
import React, { useEffect, useState } from 'react';



export default function Crud() {
    const [api, Setapi] = useState([]);
    const [flag, setflag] = useState(true);

    const [filter, setfilter] = useState("");

    const adfilter =async () => {
        console.log("adfilter")
            try {
             const add10= await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${filter}`)
                Setapi([add10.data]);
                
            } catch (error) {
                
            }  
    
        }
    

    const show = async () => {
        const pet = await axios.get("https://63be78edf5cfc0949b58277e.mockapi.io/api")
        Setapi(pet.data)
        console.log(api);
    }

    const dele = async (id) => {

        await axios.delete(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`)
        setflag(!flag);
    }

    const additen = async () => {

        const name = prompt("Enter Name")
        const Email = prompt("Enter Email")

        const data1 = {
            "name": name,
            "Email": Email,
        }

        await axios.post(`https://63be78edf5cfc0949b58277e.mockapi.io/api`, data1)

    }

    const udate = async (id) => {
        const name = prompt("Enter New Name")
        const Email = prompt("Enter New Email")

        await axios.put(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`, { "name": name, "Email": Email })

        setflag(!flag);
    }

    useEffect(() => {
        show()
    }, [flag]);

    return (
        <div>
            <h1>Crud Api</h1>
            <br/>
                <input
                    type="text"
                    // className='input'
                    placeholder='Enter ID'
                    value={filter}
                    onChange={((a) => setfilter(a.target.value))}
                />
                <button  onClick={adfilter}>ok</button>
                 

            <table className="table" border={2} width={500} cellPadding="11" >
            <button className='btn btn-primary mr-2' onClick={additen} >Add</button>

                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>

                </tr>

                {api.map((value) => {
                    return (

                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.Email}</td>
                            <td>{value.Action}
                                <button onClick={() => udate(value.id)}>Update</button>&nbsp;&nbsp;&nbsp;
                                <button onClick={() => dele(value.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </div>

    );
}
