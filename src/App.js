import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUser></ExternalUser>
    </div>
  );
}

function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h3>External User</h3>
      {users.map((user) => (
        <User name={user.name} phone={user.phone} email={user.email}></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h3>Phone: {props.phone}</h3>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  /* 
  const handleIncrease=()=>{
  const newCount =count+1;
  setCount(newCount)
  }
*/

  //const handleIncrease=()=>setCount(count+1);
  //const handleDecrease=()=>setCount(count-1);

  // console.log(count, setCount);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>INCREASE</button>
      <button onClick={handleDecrease}>DECREASE</button>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    margin: "10px 8px",
    color: "#eb6e34",
  };
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

/* 

  const products = [
    { name: "Smart television", price: 122000 },
    { name: "Apple watch", price: 55000 },
    { name: "Realme mobile", price: 25000 },
    { name: "SunGlass", price: 5000 },
    { name: "Tablet", price: 33000 },
  ];

*/

/* 

    {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}

      <Product name="Mobile" price="12000"></Product>
      <Product name="Laptop" price="77000"></Product>
      <Product name="Watch" price="21000"></Product>
      <Product name="Camera" price="33000"></Product>


*/
export default App;
