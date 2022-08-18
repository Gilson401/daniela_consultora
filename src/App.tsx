import React, { useState, useEffect } from 'react';
import { Header } from 'components/Header';

import { Cursos } from 'components/Cursos';
import { Servicos } from 'components/Servicos';
import { Clientes } from 'components/Clientes';
import { Contato } from 'components/Contato';
import { BioComponent } from 'components/Bio';
import { Home } from 'components/Home';

function App() {
  interface ILinks {
    label: string;
    component: React.FC;
  }

  const links: Array<ILinks> = [
    { label: 'HOME', component: Home },
    { label: 'BIO', component: BioComponent },
    { label: 'CURSOS', component: Cursos },
    { label: 'SERVIÇOS', component: Servicos },
    { label: 'CLIENTES', component: Clientes },
    { label: 'CONTATO', component: Contato },
  ];

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [component, setComponent] = useState<ILinks>(links[1]);

  function myFunction() {
    setShowMenu(!showMenu);
  }

  const styles = {
    topnav:
      'flex place-content-center  overflow-hidden py-4 bg-black text-white  space-x-10 w-full',
    topnavlinks: 'cursor-pointer  text-2xl hover:text-gray-600',
  };

  const setComponenti = (componenti: ILinks): void => {
    setComponent(componenti);
  };

  useEffect(() => {
    document.title = `Daniela ${component.label}`;
  }, [component]);

  return (
    <div className="App">
      <Header title="hola" />
      <div className="flex place-content-center w-full">
        <div className={styles.topnav} id="myTopnav">
          {links.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => setComponenti(link)}
              className={`${styles.topnavlinks}`}
            >
              {link.label}
            </button>
          ))}

          <button className="icon" onClick={myFunction}>
            btn
          </button>
        </div>
      </div>
      <>{component?.component({})}</>
    </div>
  );
}

export default App;
