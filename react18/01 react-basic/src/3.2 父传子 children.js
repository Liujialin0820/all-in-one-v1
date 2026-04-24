function Son(props) {
  console.log(props);
  return <div>this is son, {props.name}</div>;
}

function App() {
  const name = "father";
  return (
    <div>
      <Son>
        {/* 子组件就有个children属性默认接收 */}
        <span>this is father</span>
      </Son>
    </div>
  );
}

export default App;
