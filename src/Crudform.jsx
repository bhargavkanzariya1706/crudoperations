import axios from 'axios';
import React, { useState, useEffect } from 'react';


export default function Crudform() {

    const [api, setapi] = useState([]);
    const [id, setid] = useState();
    const [name, setname] = useState();
    const [Email, setEmail] = useState();
    const [city, setcity] = useState();

    const [Company, setCompany] = useState();
    const [price, setprice] = useState();
    const [image, setimage] = useState();

    const [filter, setfilter] = useState("");

    const [delet, setdelet] = useState(null);
    const [edit, setedit] = useState(false);


    const adfilter = async () => {
        console.log("adfilter")
        try {
            const add10 = await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${filter}`)
            setapi([add10.data]);

        } catch (error) {

        }



    }

    const show = async () => {
        await axios.get(`https://63be78edf5cfc0949b58277e.mockapi.io/api`)
            .then((response) => {
                setapi(response.data);
            });
    };
    const add = async () => {
        const data = {
            name: name,
            Email: Email,
            city: city,
            Company,
            price,
            image,
        }
        await axios.post(`https://63be78edf5cfc0949b58277e.mockapi.io/api`, data)
            .then((response) => {
                setid('');
                setname('');
                setEmail('');
                setcity('');
                setCompany('');
                setprice('');
                setimage('');
                show();
            });
    }
    const edit1 = async () => {
        const data2 = {
            name: name,
            Email: Email,
            city: city,
            Company,
            price,
            image,

        }
        await axios.put(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`, data2)
            .then((response) => {
                setid('');
                setname('');
                setEmail('');
                setcity('');
                setCompany('');
                setprice('');
                setimage('');
                show();
            });
    }
    const delet1 = async (id) => {
        setdelet(id);
        await axios.delete(`https://63be78edf5cfc0949b58277e.mockapi.io/api/${id}`)
            .then((response) => {
                setdelet(null);
                show();
            });
    }
    const enableEdit = () => {
        setedit(true);
    }

    useEffect(() => {
        show();
    }, []);
    return (
        <div>
            <div className='box'>
                <form>

                    <input
                        type="text"
                        className='input'
                        placeholder='Enter Name'
                        value={name}
                        onChange={((a) => setname(a.target.value))}
                    />
                    <br />
                    <input
                        type="text"
                        className='input'
                        placeholder='Enter Email'
                        value={Email}
                        onChange={((a) => setEmail(a.target.value))}
                    />
                    <br />
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter City'
                        value={city}
                        onChange={((a) => setcity(a.target.value))}
                    />
                    <br />
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Company'
                        value={Company}
                        onChange={((a) => setCompany(a.target.value))}
                    />
                    <br />
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Price'
                        value={price}
                        onChange={((a) => setprice(a.target.value))}
                    />
                    <br />
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Image'
                        value={image}
                        onChange={((a) => setimage(a.target.value))}
                    />
                    <br />
                </form>

                <button className='btn'
                    onClick={() => {
                        if (edit) {
                            edit1();
                        } else {
                            add();
                        }
                        setedit(false);
                    }} >
                    {edit ? "Edit" : "Add"}
                </button>
            </div>

            <div className='in' >
                <input
                   className='in1'        
                    type="text"
                    placeholder='Enter ID'
                    value={filter}
                    onChange={((a) => setfilter(a.target.value))}
                /> <button   className='btn6' onClick={adfilter}>Search</button>
            </div>
            <br />

            <div className='container'>
                <table className='table' width={1000} border={2}>
                    <tr className='th'>
                        <th scope='col'>ID</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>city</th>
                        <th scope='col'>Company</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Image</th>
                        <th scope='col'>Action</th>
                    </tr>
                    {api.map((bb, index) => {
                        return (
                            <tr key={index}>
                                <td>{bb.id}</td>
                                <td>{bb.name}</td>
                                <td>{bb.Email}</td>
                                <td>{bb.city}</td>
                                <td>{bb.Company}</td>
                                <td>{bb.price}</td>
                                <td><img width={200} height={200} src={bb.image} /></td>
                                <td>{bb.Action}

                                    &nbsp;&nbsp; <button className='btn' onClick={() => {
                                        enableEdit();
                                        setname(bb?.name);
                                        setEmail(bb?.Email);
                                        setcity(bb?.city);
                                        setCompany(bb?.Company);
                                        setprice(bb?.price);
                                        setimage(bb?.image);
                                        setid(bb?.id);
                                    }}>Edit</button>

                                    &nbsp;<button className='btn2' onClick={() => {
                                        delet1(bb.id, bb);
                                    }}>{delet === bb?.id}Delete</button>
                                </td>
                            </tr>

                        )
                    }
                    )}
                </table>
            </div>
        </div>
    );
}
