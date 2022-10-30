import React, { useRef, useState, useEffect } from "react";
import './LoginForm.css';

const LoginForm = () => {
    const [isLogged, setIsLogged] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [usersData, setUsersData] = useState([]);
    const userReference = useRef();
    const passwordReference = useRef();

    useEffect(() => {
        fetch(`/api/users/login?username=${userName}&password=${password}`)
            .then(response => response.json())
            .then(users => {
                console.log(users.data);
                setUsersData(users.data);
                if(users.data.length > 0){
                    setIsLogged(true);
                }
            })
            .catch(error => console.log(error));
    }, [userName, password] );

    const signUser = (event) => {
        event.preventDefault();
        setUserName(userReference.current.value);
        setPassword(passwordReference.current.value);
    }

    const showLoginForm = () => {
        return(
            <div className="login-container">
            <p className="login-title">Login</p>
            <form method="GET" className="login-form" onSubmit={ e => signUser(e) }>
                <label htmlFor="" className="login-label">Usuario</label>
		    	<input type="text" className="login-input" ref={userReference}/>
                <label htmlFor="" className="login-label">Password</label>
                <input type="text" className="login-input" ref={passwordReference} />
                <button className="login-btn">Log in</button>
            </form>
        </div>
        );
    }

    const showLogMessage = () => {
        return(
            <div>
                <p>Bienvenido {usersData[0].username}</p>
            </div>
        );
    }

    return(
        <div>
            {  !isLogged && showLoginForm() }
            { isLogged && showLogMessage() }
        </div>
    );

}

export default LoginForm;