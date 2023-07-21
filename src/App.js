import { useFormik } from "formik";
import React from "react";
import AuthService from "./services/auth";

// 1. Dapatkan nilai username dan password ke console.log
// 2. kirim username dan password (payload) ke End Point `/auth/login` di API (Backend)

const App = () => {
  const handleSubmit = async (loginPayload) => {
    console.log(loginPayload, "ini payload");
    try {
      const response = await AuthService.signIn(loginPayload);
      const data = response.data;
      console.log(data, "ini hasil request");
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h3>Contoh Cara Integrasi FE ke BE</h3>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>username</label>
          <input
            onChange={formik.handleChange("username")}
            value={formik.values.username}
          />
        </div>
        <div>
          <label>password</label>
          <input
            onChange={formik.handleChange("password")}
            value={formik.values.password}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default App;
