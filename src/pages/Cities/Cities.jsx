/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function Cities() {
  const { token } = useSelector((state) => state.userToken);
  // console.log("Token Is:",token);

  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get("http://localhost:5079/api/v2/cities/", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setCities(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    if (token) {
      fetchCities();
    }

  }, []);

  if (!token) {
    return <h1>Unauthorised Access</h1>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cities;
