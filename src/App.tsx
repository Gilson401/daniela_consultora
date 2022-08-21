import { useState, useEffect } from 'react';
import { Header } from 'components/Header';

import { Cursos } from 'components/Cursos';
import { Servicos } from 'components/Servicos';
import { Clientes } from 'components/Clientes';
import { Contato } from 'components/Contato';
import { BioComponent } from 'components/Bio';
import { Home } from 'components/Home';

const links = ['HOME', 'BIO', 'CURSOS', 'SERVIÇOS', 'CLIENTES', 'CONTATO'];

function App() {
  const [component, setComponent] = useState<string>('HOME');
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    document.title = `Daniela Consultora Imagem e Estilo - ${component}`;
  }, [component]);

  function myFunction(): void {
    setShowMenu(!showMenu);
  }

  const styles = {
    topnav: () =>
      `${
        showMenu ? 'flex-col' : ''
      } absolute md:flex place-content-end  md:place-content-center  bg-black text-white   w-full`,
    topnavlinks: () =>
      `${
        showMenu ? 'my-2' : 'hidden'
      }  md:flex w-full md:w-auto cursor-pointer  text-2xl hover:text-gray-600`,
  };

  const setComponenti = (componenti: string): void => {
    setShowMenu(false);
    setComponent(componenti);
  };

  return (
    <div className="App">
      <Header title="hola" />
      <div className="relative flex place-content-center w-full">
        <div className={styles.topnav()} id="myTopnav">
          <button type="button" className="block float-right  md:hidden  mx-3" onClick={myFunction}>
            <span className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="white">
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
              </svg>
            </span>
          </button>

          <div className={styles.topnav() + ' md:space-x-10 z-10'}>
            {links.map((link) => (
              <button
                type="button"
                key={link}
                onClick={() => setComponenti(link)}
                className={`${styles.topnavlinks()}`}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full rounded-md p-20 bg-gray-500 text-white text-center text-3xl mt-10">
        SITE EM CONSTRUÇÃO
      </div>

      <div className="mx-1   md:mx-10">
        <>{component === 'HOME' ? <Home /> : ''}</>
        <>{component === 'BIO' ? <BioComponent /> : ''}</>
        <>{component === 'CURSOS' ? <Cursos /> : ''}</>
        <>{component === 'SERVIÇOS' ? <Servicos /> : ''}</>
        <>{component === 'CLIENTES' ? <Clientes /> : ''}</>
        <>{component === 'CONTATO' ? <Contato /> : ''}</>
      </div>
    </div>
  );
}

export default App;
