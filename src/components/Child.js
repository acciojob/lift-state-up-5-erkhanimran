import React , {useState} from "react";

const Child = ({ setIsLoggedIn }) =>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () =>{
        if(!userName || !password){
            alert('Fill both input fields to login');
        }
        else
            setIsLoggedIn(true);
    }

    return (
        <form>
            <label>Username: </label>
            <input type="text" onChange={(e) => setUserName(e.target.value)}/>
            <label>Password: </label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleClick}>Login</button>
        </form>
    )
}

export default Child;