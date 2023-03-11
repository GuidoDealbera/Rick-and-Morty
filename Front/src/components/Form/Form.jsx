import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";

export default function Form (props){
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })
    const handleInputChange = (evento) => {
        const {name, value} = evento.target;
        setUserData({
            ...userData,
            [name]: value
        })
        setErrors(
            validation({
                ...userData,
                [name]: value,
            }
            )
        )
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData);
    }

    return (
        <div className={style.formulario}>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <br />
            <input type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            placeholder="Correo Electrónico:"/>
            {errors.username && <p>{errors.username}</p>}
            <br/>
            <label>Password:</label>
            <br />
            <input type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            placeholder="Contraseña:"/>
            {errors.password && <p>{errors.password}</p>}
            <div>
            <button>Sign in</button>
            </div>
        </form>
        </div>
    )
}