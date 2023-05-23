import axios from "axios";
import React, { useState, useEffect } from "react";

export default function File() {
    const [api, setapi] = useState([]);
    const [id, setid] = useState();
    const [name, setname] = useState();
    const [city, setcity] = useState();

    const [delet, setdelet] = useState(null);
    const [edit, setedit] = useState(false);

    const show = async () => {
        await axios
            .get("https://63be7882e348cb07620f754c.mockapi.io/myapi")
            .then((res) => {
                setapi(res.data);
            });
    };

    const add = async () => {
        const data1 = {
            name: name,
            city: city,
        };
        await axios
            .post("https://63be7882e348cb07620f754c.mockapi.io/myapi", data1)
            .then((res) => {
                setid("");
                setname("");
                setcity("");
                show();
            });
    };

    const edit1 = async () => {
        const data2 = {
            name: name,
            city: city,
        };
        await axios
            .put(`https://63be7882e348cb07620f754c.mockapi.io/myapi/${id}`, data2)
            .then((res) => {
                setid("");
                setname("");
                setcity("");
                show();
            });
    };
    const enableEdit = () => {
        setedit(true);
    };

    const delet1 = async (id) => {
        setdelet(id);

        await axios
            .delete(`https://63be7882e348cb07620f754c.mockapi.io/myapi/${id}`)
            .then((res) => {
                show();
                setdelet(null);
            });
    };
    useEffect(() => {
        show();
    }, []);
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="enter name"
                    className="input"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                ></input>
                <br/>
                <input
                    type="text"
                    className="input"
                    placeholder="enter City"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                ></input>
            </form>
            <button
                onClick={() => {
                    if (edit) {
                        edit();
                    } else {
                        add();
                    }
                    setedit(false);
                }}
            >
                {edit? "Edit" : "Add"}
            </button>
            <table border={1} width={700}>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">City</th>
                        <th>Action</th>
                    </tr>
                </thead>

                {api.map((dk, index) => {
                    return (
                        <tbody key={index}>
                            <tr>
                                <td>{dk.id}</td>
                                <td>{dk.name}</td>
                                <td>{dk.city}</td>
                                <td>

                                    <button onClick={() => {
                                        delet(dk.id);
                                    }}>
                                        {delet1 === dk?.id}Delet

                                    </button>&nbsp;

                                    <button
                                        onClick={() => {
                                           enableEdit();
                                            setname(dk?.name);
                                            setcity(dk?.city);
                                            setid(dk?.id);
                                        }}>Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
        </div>
    );
}