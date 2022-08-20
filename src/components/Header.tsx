import { BsFacebook, BsWhatsapp, BsYoutube, BsInstagram } from 'react-icons/bs';

export function Header({ title }: { title: string }) {
  return (
    <div className="place-content-center bg-white text-center my-2">
      <a href="https://daniela-consultora.netlify.app/">
        <span className="text-2xl">Daniela Nascimento</span>
        <br />
        <span className="text-base">Consultora de Imagem e Estilo</span>
      </a>
      <div className="flex space-x-3 place-content-center my-2">
        <a
          href="https://www.youtube.com/channel/UC-YE1-cxYt8cnAmB4Q09QIw"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube />
        </a>
        <a href="https://www.instagram.com/daniela_consultora/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5521998522194"
          target="_blank"
          rel="noreferrer"
        >
          <BsWhatsapp />
        </a>

        <a href="https://www.facebook.com/dani.style.consultora" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
      </div>
    </div>
  );
}
