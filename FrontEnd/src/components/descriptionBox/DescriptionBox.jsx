import React from 'react';
import "./descriptionbox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>"Welcome to our online store! Explore a vast selection of products ranging from electronics to fashion, all at unbeatable prices. Whether you're searching for the latest gadgets, trendy clothing, or household essentials, we've got you covered. With secure payment options and fast shipping, shopping with us is convenient and hassle-free. Browse our catalog today and discover the perfect items to elevate your lifestyle."</p>
        <p>In my opinion, this paragraph provides a warm welcome to visitors while highlighting the key features of the e-commerce platform: variety of products, competitive prices, convenience, and security. It aims to engage potential customers and encourage them to explore the website further.</p>
      </div>
    </div>
  )
}

export default DescriptionBox