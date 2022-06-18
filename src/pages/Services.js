import React, { useEffect, useState } from "react";
import axios from "axios";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    // axios.get("http://localhost:5000/service").then((res) => setServices(res));

    (async () => {
      const res = await fetcher.get("/service");
      setServices(res.data);
    })();
  }, []);
  return (
    <div>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
      <h2> This is services page </h2>
    </div>
  );
};

export default Services;
