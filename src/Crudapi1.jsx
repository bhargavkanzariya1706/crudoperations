
import axios from 'axios';
import React,{useEffect,useState} from 'react';

export default function Crudapi1() {

        const [Api, setapi] = useState([]);
        const [flag, setflag] = useState(true);

        const show= async() => {
            const store = await axios.get(`https://6369dd5415219b849620d609.mockapi.io/FIRSTMOCKAPI/`);
            setapi(store.data)
            console.log(Api);

        }
        const add= async() => {
            const a1=prompt('Enter name')
            const a2=prompt('Enter email')
            const a3=prompt('Enter address')

            const data={
                name:a1,
                email:a2,
                address:a3
            }

            await axios.post(`https://6369dd5415219b849620d609.mockapi.io/FIRSTMOCKAPI/`,data);
            setflag(!flag);
        }
        const Update= async(id)=>{
            const u1=prompt('Enter name')
            const u2=prompt('Enter email')
            const u3=prompt('Enter address')

            const data1={
                name:u1,
                email:u2,
                address:u3
            }
             await axios.put(`https://6369dd5415219b849620d609.mockapi.io/FIRSTMOCKAPI/${id}`,data1);
                setflag(!flag);
        }
        const dele=async(id)=>{
            await axios.delete(`https://6369dd5415219b849620d609.mockapi.io/FIRSTMOCKAPI/${id}`);
            setflag(!flag);
        }


        useEffect(() => {
            show();
                        
        }, [flag]);

  return (
    <div>
    
            {Api.length > 0 && (
                <table className='table' border={1} width={800}>
                    <button className='add' onClick={add}>Add</button>
                    <tr className='th'>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    {Api.map((valu) => <tr>
                        <td>{valu.id}</td>
                        <td>{valu.name}</td>
                        <td>{valu.email}</td>
                        <td>{valu.address}</td>
                        <td>
                            &nbsp;&nbsp;<button className='btn' onClick={() => Update(valu.id)}>Update</button>
                            &nbsp;&nbsp; <button  className='btn1' onClick={() => dele(valu.id)}>Delete</button></td>

                    </tr>)}
                </table>
            )}

    
    </div>
  );
}
