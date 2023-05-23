import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Crudapi3() {
    const [Api, setApi] = useState([]);
    const [id, setid] = useState();
    const [name, setname] = useState();
    const [city, setcity] = useState();
    const [price, setprice] = useState();

    const [image, setimage] = useState();

    const [delet, setdelet] = useState(null);
    const [edit, setedit] = useState(false);

    const show = async () => {
        await axios.get(`https://63be8dd3e348cb076211daa0.mockapi.io/test2`)
            .then((response) => {
                setApi(response.data);
            });
    };

    const add = async () => {
        const data = {
            name,
            city,
            price,
            image,
        }
        await axios.post(`https://63be8dd3e348cb076211daa0.mockapi.io/test2`, data)
            .then((response) => {
                setid('');
                setname('');
                setcity('');
                setprice('');
                setimage('');
                show();
            });
    };

    const edit1 = async () => {
        const data2 = {
            name,
            city,
            price,
            image,
        }
        await axios.put(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`, data2)
            .then((response) => {
                setid('');
                setname('');
                setcity('');
                setprice('');
                setimage('');
                show();
            });
    }
    const Dele = async (id) => {
        setdelet(id);

        await axios.delete(`https://63be8dd3e348cb076211daa0.mockapi.io/test2/${id}`)
            .then((response) => {
                setdelet(null);
                show();
            });
    };

    const enableEdit = async () => {
        setedit(true);
    };
    useEffect(() => {
        show();
    }, []);
    return (
        <div>

            <form>
                <input
                    type='text'
                    placeholder='Enter Name'
                    value={name}
                    onChange={((k) => setname(k.target.value))}
                /><br />
                <input
                    type='text'
                    placeholder='Enter City'
                    value={city}
                    onChange={((k) => setcity(k.target.value))}
                /><br />
                <input
                    type={Number}
                    placeholder='Enter Price'
                    value={price}
                    onChange={((k) => setprice(k.target.value))}
                /><br />
                <input
                    type='text'
                    placeholder='Enter image'
                    value={image}
                    onChange={((k) => setimage(k.target.value))}
                /><br />
            </form>
            <button
                onClick={() => {
                    if (edit) {
                        edit1();

                    } else {
                        add();
                    }
                    setedit(false);
                }}>{edit ? "Edit" : "Add"}</button>
            <table width={1000} border={2}>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Price</th>
                    <th>image</th>
                    <th>Action</th>
                </tr>
                {Api.map((bb, index) => {
                    return (
                        <tr key={index}>
                            <td>{bb.id}</td>
                            <td>{bb.name}</td>
                            <td>{bb.city}</td>
                            <td>{bb.price}</td>
                            <td> <img src={bb.image} /></td>
                            <td>{bb.Action}

                                &nbsp;&nbsp; <button
                                    onClick={() => {
                                        enableEdit();
                                        setname(bb?.name);
                                        setprice(bb?.price);
                                        setcity(bb?.city);
                                        setimage(bb?.image);
                                        setid(bb?.id);
                                    }}>Edit</button>

                                &nbsp;&nbsp;   <button
                                    onClick={() => {
                                        Dele(bb.id, bb)
                                    }}>{delet === bb?.id}Delete</button>

                            </td>
                        </tr>

                    )
                })}
            </table>



        </div>
    );
}
