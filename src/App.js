import { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {

    const [data, setData] = useState([]);

    const getData = () => {
        axios({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: 'GET'
        })
        .then(res => res.data.filter(person => person.address.geo.lat > 0))
        .then(data => setData(data))
        .catch(err => console.log(err));
    }

    return (
        <div className='App'>
            <p>
                <button onClick={getData}>
                    Click Here!
                </button>
            </p>
            <table style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <tbody>
                    { data.length ?
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                        :
                        null
                    }
                    {
                        data.map((person, index) => 
                            <tr key={index}>
                                <td>{person.name.split(' ')[0]}</td>
                                <td>{person.name.split(' ')[1]}</td>
                            </tr>
                        )
                    } 
                </tbody>
            </table>
        </div>
    );
}