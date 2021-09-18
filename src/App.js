import "./App.css";

function App() {
  return (
    <div className="App">
      <Product name="Mobile" price="12000"></Product>
      <Product name="Laptop" price="77000"></Product>
      <Product name="Watch" price="21000"></Product>
      <Product name="Camera" price="33000"></Product>
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

export default App;
