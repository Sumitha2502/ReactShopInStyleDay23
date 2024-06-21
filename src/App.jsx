import React, { useState } from "react";
import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import ShopList from "./ShopList";
import ShopName from "./ShopName";
import Card from "./Card";
import Copyright from "./Copyright";

function App() {
  const [cart, setCart] = useState(0);
  const datas = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00 - $80.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: false,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: " $18.00",
      sale: true,
      originalPrice: "$20.00",
      original: true,
      reviews: true,
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$25.00",
      sale: true,
      originalPrice: "",
      original: false,
      reviews: false,
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: "$40.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: " $25.00",
      sale: true,
      originalPrice: "$50.00",
      original: true,
      reviews: false,
    },
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: " $120.00",
      sale: false,
      originalPrice: "$280.00",
      original: true,
      reviews: false,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: " $18.00",
      sale: true,
      originalPrice: "$20.00",
      original: true,
      reviews: true,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      price: " $20.00",
      sale: false,
      originalPrice: "",
      original: false,
      reviews: true,
    },
  ];

  return (
    <>
      <ShopList cart={cart} setCart={setCart} />
      <ShopName />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {datas.map((product, i) => {
              return (
                <Card product={product} key={i} cart={cart} setCart={setCart} />
              );
            })}
          </div>
        </div>
      </section>
      <Copyright />
    </>
  );
}

export default App;
