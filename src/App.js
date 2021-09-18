import "./App.css";

function App() {
  return (
    <div className="App">
      <Product name="Mobile" price="12000"></Product>
      <Product name="Mobile" price="12000"></Product>
      <Product name="Mobile" price="12000"></Product>
      <Product name="Mobile" price="12000"></Product>
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  );
}

export default App;
