function Son({ onGetSonMsg }) {
  const sonMsg = "Son";
  return (
    <div>
      this is son
      <button onClick={() => onGetSonMsg(sonMsg)}>send message </button>
    </div>
  );
}

function App() {
  const getMsg = (msg) => {
    console.log(msg);
  };
  return (
    <div>
      <Son onGetSonMsg={getMsg}></Son>
    </div>
  );
}

export default App;
