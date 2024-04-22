import React from "react";
import "./Home.css";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "./data";
import Product from "./Product";


function Home() {
  const products = productData.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      location={item.location}
    />
  ));

  return (
    <>
    <div className="home">
      <div className="ill">
      <img src="./src/components/Home/DrawKit.png" alt="image" className="drawkit"></img>
        </div>
        <div className="word">
        <h1>
          welcome to Nairobi haven hunt!<br></br>
          <p className="b"> where you can make better decessions</p>
         
          </h1>
        </div>
        <div className="p2">{products}</div>
        <div className="market">
          <img src="./src/components/Home/DrawKit2.png" alt="illustration" className="illa" />
          <div className="illaword"><h2>Hooked up over 40,000 + clients</h2>
          <div className="ww"><h3>Checkout our wide collection of homes </h3>
          <h3>There is something for everyone!</h3></div>
          </div>
          
        </div>
    </div>
    
    {/* <div className="product-carousel">
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {products}
        </Carousel>
      </div>   */}
      </>
  );
}

export default Home;
