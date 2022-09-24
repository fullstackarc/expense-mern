import './App.css';

function App() {
  function handleSubmit() {}
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <input type='number' placeholder='Enter transaction amount' />
          <input type='text' placeholder='Enter transaction'/>
          <input type='date' />
          <button type='submit'> Submit </button>
        </div>
        </form>      
    </div>
  );
}

export default App;
