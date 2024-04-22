// Properties.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Properties.css";
import { productData } from "../Home/data"; // Import productData from data.js
import SearchBar from "./SearchBar";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

function Properties() {
  const [properties, setProperties] = useState([]);
  const [handle, setHandle] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Initially, set properties to the entire productData array
    setProperties(productData);
  }, []);

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = () => {
    // Simulate fetching data from an API (in your case, productData is a static array)
    const filteredData = productData.filter((property) =>
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filteredData);
  };

  const handleSearch = () => {
    fetchData();
  };

  const handleClick = (propertyid) => {
    setHandle((properties) => {
      if (properties.includes(propertyid)) {
        return properties.filter((id) => id !== propertyid);
      } else {
        return [...properties, propertyid];
      }
    });
  };

  return (
    <>
      <h1>Properties</h1>
      {/* <div className="search-field">
        <input
          className="input-field"
          type="text"
          placeholder="Search by location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div> */}
      {/* <nav>
    <div class="nav-wrapper black" >
      <form>
        <div class="input-field">
          <input id="search" type="search" required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav> */}
  <SearchBar/>
      <div className="properties--1">
        {properties.map((property) => (
          // <div className="item" key={property.id}>
          //   <img src={property.imageurl} alt={`House ${property.id}`} />
          //   <h4>Location: {property.location}</h4>
          //   <h4>Price: {property.price}</h4>
          //   <button id="btn-seemore">
          //     <Link to={`/details/${property.id}`} className="seemore--btn">
          //       See More
          //     </Link>
          //   </button>
          // </div>
          <Link to={`/details/${property.id}`}> <Card
    style={{
      width: 300,
      padding:5,
      margin:4,
      spacebetween:52
    }}
    
    cover={
      
      <img
        alt="example"
        src={property.imageurl}
      />
    }
    actions={[
      
      <SettingOutlined  key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
      title={property.location}
      description='click image to see more!'
    />
  </Card></Link>
         
        ))}
      </div>
    </>
  );
}

export default Properties;
