import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Submitform } from '../actions';
import './login.css';
const Login = () => {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    // console.log('username',username,'password',password)
    const list = useSelector((state) => state.submitdatareducer.list)
    const dispatch = useDispatch();
    return (
        <div id='main'>
            <div>Enter username : </div>
            <input type="text" onChange={(event) => setusername(event.target.value)} />
            <br /><br />
            <div>Enter password : </div>
            <input type="password" onChange={(event) => setpassword(event.target.value)} />
            <br /><br />
            <button onClick={() => dispatch(Submitform(username,password),setusername(''),setpassword(''))}>Submit</button>
            {list.map((value) => {
                return (
                    <div key={value.id}>
                        <div> <h3>{value.username}  {value.password}</h3></div>
                    </div>
                )
            })}
        </div>
    )
}
export default Login;