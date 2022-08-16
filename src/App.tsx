import { Header } from 'components/Header';

import Logo from 'assets/dani_512_512.png';

function App() {
  return (
    <div className="App">
      <Header title="hola" />
      <img src={Logo} alt="logo" />
    </div>
  );
}

export default App;
