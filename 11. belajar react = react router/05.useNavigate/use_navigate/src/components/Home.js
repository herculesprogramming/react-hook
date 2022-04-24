import { useState, useEffect, } from "react";
import {useNavigate} from 'react-router-dom'

/*

kita gunakan useState untuk menyimpan datanya
dan kita gunakna useEffect untuk mengambil datanya
ketika pertama kali sebuah component itu dirender

*/

const Home = () => {
    const [user,setUser] = useState([])
    const rdct = useNavigate()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(res => setUser(res))
         .catch(err => console.log(err))
    },[])

    const redirect = (id) => {
        rdct(`/${id}`)
    }

    return ( <section>
        <h1>ini adalah halaman home</h1>
        <ul>
            {
                user.map(dt => (
                    <li key={dt.id} >{dt.name} 

                    <button type="button" onClick={() => redirect(dt.id)} >go to detil</button>
                    
                    </li>
                ))
            }
        </ul>
    </section> );
}
 
export default Home;