 import axios from 'axios';
import React , {useState,useEffect}from 'react';
 
 export default function Apiprompt() {

    const [api, setapi] = useState([]);

    const [flag, setflag] = useState(true);

    const show = async () => {
        const store = await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api1`);
        setapi(store.data);
        console.log(api);
    }

    const add = async () => { 
        const d1 = prompt ("Enter Name");
        const d2 = prompt ("Enter Email");
        const d3 = prompt ("Enter City");

        const data = {
            Name : d1,
            Email : d2,
            City : d3
        };
        await axios.post(`https://63be78edf5cfc0949b58277e.mockapi.io/api1`,data);
        setflag(!flag);
    }

    const update = async (id) => {
        const u1 = prompt ("Enter Update  Name");
        const u2 = prompt ("Enter Update Email");
        const u3 = prompt ("Enter Update City");

        const data1 = {
            Name : u1,
            Email : u2,
            City : u3
        }

        await axios.put(`https://63be78edf5cfc0949b58277e.mockapi.io/api1/${id}`,data1);
        setapi(!flag);
    }
    
    const dele = async (id) => {
        await axios.delete(`https://63be78edf5cfc0949b58277e.mockapi.io/api1/${id}`);
        setapi(!flag);
    }

    useEffect(()=> {
        show();

    },[flag]);

   return (
     <div>
        <h1>Api Prompt</h1>
       <table className='table' border={2} width={800} cellPadding="11">
       <button className='btn btn-primary mr-2' onClick={add}>Add</button>
        
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">City</th>
                <th scope="col">Action</th>
            </tr>
        
        {api.map((val) => {
            return (
                <tr>
                    <td>{val.id}</td>
                    <td>{val.Name}</td>
                    <td>{val.Email}</td>
                    <td>{val.City}</td>

                    <td>{val.Action}
                    &nbsp; &nbsp; <button className='btn btn-primary'  onClick={()=> update(val.id)}>Edit</button>
                        &nbsp; &nbsp; &nbsp;
                        <button className='btn btn-danger ml-2' onClick={()=> dele(val.id)}>Delete</button>
                    </td>
                </tr>
            )
        })}
       </table>
     </div>
   );
 }
 