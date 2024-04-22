import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const Product = (props) => (
  <Link to= '/properties' > <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.url} />}
  >
    <Meta title={props.location} description={props.price} />
  </Card></Link>
 
);
export default Product;