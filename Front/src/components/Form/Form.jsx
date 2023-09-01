import { useState } from "react";
import validation from "./validation";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const handleInputChange = (evento) => {
    const { name, value } = evento.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    props.login(userData);
  };

  return (
    <div className="min-w-screen min-h-screen flex justify-center items-center portal">
      <div className="max-w-fit h-[30rem] p-10 flex justify-center items-center rounded-xl bg-img">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 text-lg w-64">
          <div className="flex flex-col gap-1">
            <label className="bg-[#adff2f] font-semibold w-fit px-2 py-1 rounded-3xl">
              <span className="animate-pulse">Username:</span>
            </label>
            <input
              className="focus:outline-none rounded-lg p-1"
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              placeholder="Correo Electrónico:"
            />
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <label className="bg-[#adff2f] font-semibold w-fit px-2 py-1 rounded-3xl">
              <span className="animate-pulse">Password:</span>
            </label>
            <input
              className="focus:outline-none rounded-lg p-1"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              placeholder="Contraseña:"
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="bg-[#adff2f] rounded-3xl py-2 translate-y-10 shadow-md shadow-black active:shadow-none hover:bg-lime-400 duration-200">Sign in</button>
        </form>
      </div>
    </div>
  );
}
