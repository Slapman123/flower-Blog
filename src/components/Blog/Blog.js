import React, { useState, useEffect } from "react";
import Card from "../BlogCard/Card";

const Blog = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    getFlower();
  }, []);
  const getFlower = async () => {
    const response = await fetch(
      "https://flowrspot-api.herokuapp.com/api/v1/flowers"
    );
    const data = await response.json();
    console.log(data);
    setFlowers(data.flowers);
  };
  return (
    <div>
      <Card />
    </div>
  );
};

export default Blog;
