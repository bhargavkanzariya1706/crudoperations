import React, { useEffect, useState } from 'react';
import axios from 'axios';
 

export default function Formcrudapi() {
  
  const [Api, setApi] = useState([]);
  const [id, setid] = useState();
  const [name, setname] = useState();
  const [Email, setEmail] = useState();
  const [city, setcity] = useState();

  const [delet, setdelet] = useState(null);
  const [edit, setedit] = useState(false);

  const show = async () => {
    await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api`)
      .then((response) => {
        setApi(response.data);
      });
  };

  const add = async () => {
    const data = {
      name,
      Email,
      city,
    }
    await axios.post(`https://63be78edf5cfc0949b58277e.mockapi.io/api`, data)
      .then((response) => {
        setid('');
        setname('');
        setEmail('');
        setcity('');
        show();
      });
  }
  const edit1 = async () => {
    const data1 = {
      name,
      Email,
      city,
    };
    await axios.put(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`, data1)
      .then((response) => {
        setid('');
        setname('');
        setEmail('');
        setcity('');
        show();
      });
  };
  const Dele = async (id) => {
    setdelet(id);
    await axios.delete(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`)
      .then((response) => {
        setdelet(null);
        show();
      });
  };

  const enableEdit = () => {
    setedit(true);
  };
  useEffect(() => {
    show();
  }, []);

  return (
    <div>

      <div className='box1'>
        <form>
          <input
            type='text'
            className='input1'
            placeholder='Enter your Name'
            value={name}
            onChange={((b) => setname(b.target.value))}
           /><br/>

          <input
            type='text'
            className='input1'
            placeholder='Enater your Email'
            value={Email}
            onChange={((b) => setEmail(b.target.value))}
          /><br/>

          <input
            type='text'
            className='input1'
            placeholder='Enter your City'
            value={city}
            onChange={((b) => setcity(b.target.value))}
          /><br/>
        </form>
        
        <button  className='Btn'
          onClick={() => {
            if (edit) {
              edit1();

            } else {
              add();
            }
            setedit(false);
          }}>{edit ? "Edit" : "Add"}</button></div>

        <div className='container'> 
      <table width={600} border={2} className='table1'>
        <tr>
          <th scope='col'>ID</th>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>City</th>
          <th scope='col'>Action</th>
        </tr>
        {Api.map((bk, index) => {
          return (
            <tr key={index}>
              <td>{bk.id}</td>
              <td>{bk.name}</td>
              <td>{bk.Email}</td>
              <td>{bk.city}</td>
              <td>{bk.Action}

                &nbsp;&nbsp;  <button className='Btn'
                  onClick={() => {
                    enableEdit();
                    setname(bk?.name);
                    setEmail(bk?.Email);
                    setcity(bk?.city);
                    setid(bk?.id);
                  }}>Edit</button>
                &nbsp;&nbsp;   <button  className='Btn2'
                  onClick={() => {
                    Dele(bk.id, bk)
                  }}>{delet === bk?.id}Delete</button>
              </td>
            </tr>
          )
        })}
      </table>
      </div>
    </div>
  );
}
