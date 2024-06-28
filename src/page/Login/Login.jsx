import React from "react";
import "./Login.css";
import { useGetvaleinput } from "../../hook/useGetInputvalue";
import { useUserIsLoginMutation } from "../../context/api/user";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../context/slice/authSlice";

const insatalstate = {
  UserName: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { formdata, handleChange, setformdata } = useGetvaleinput(insatalstate);
  const [login, { isLoading, isSuccess, data }] = useUserIsLoginMutation();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    login(formdata);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data?.data?.token));
      dispatch(setUser(data?.data?.user));
      navigate("/admin");
      toast.success("login success");
      setformdata(insatalstate);
    }
  }, [isSuccess]);

  return (
    <>
      <form onSubmit={handleSubmit} className="form_login">
        <h1>Login</h1>
        <label>User Name</label>
        <input
          onChange={handleChange}
          value={formdata.UserName}
          type="text"
          name="UserName"
          placeholder="username"
        />
        <label>Pasword</label>
        <input
          onChange={handleChange}
          value={formdata.password}
          type="password"
          name="password"
          placeholder="password"
        />
        <button disabled={isLoading}>
          {isLoading ? "loading..." : "Login"}
        </button>
      </form>
    </>
  );
};

export default Login;
