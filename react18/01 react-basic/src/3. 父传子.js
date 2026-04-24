function Son(props) {
  console.log(props);
  return <div>this is son, {props.name}</div>;
}

function App() {
  const name = "father";
  return (
    <div>
      <Son name={name}></Son>
    </div>
  );
}

export default App;
