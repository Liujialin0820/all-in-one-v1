function Son(props) {
  console.log(props);
  return <div>this is son, {props.name}</div>;
}

function App() {
  const name = "father";
  return (
    <div>
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={["a", "b"]}
        child={<span>this is father span</span>}
      ></Son>
    </div>
  );
}

export default App;
