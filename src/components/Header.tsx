export function Header({ title }: { title: string }) {
  return (
    <div className="place-content-center bg-white text-center my-2">
      <a href="https://julianalenz.com.br/">
        <span className="text-2xl">Daniela Nascimento</span>
        <br />
        <span className="text-base">Consultora de Imagem e Estilo</span>
      </a>
      <div>
        <div className="flex space-x-3 place-content-center my-2">
          <a
            href="https://www.youtube.com/channel/UC-YE1-cxYt8cnAmB4Q09QIw"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://julianalenz.com.br/wp-content/themes/lenz-wordpress/img/bface.png"
              alt="TODO IMG youtube"
            />
          </a>
          <a href="https://www.instagram.com/daniela_consultora/" target="_blank" rel="noreferrer">
            <img
              src="https://julianalenz.com.br/wp-content/themes/lenz-wordpress/img/binsta.png"
              alt="TODO"
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5521968062099"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://julianalenz.com.br/wp-content/themes/lenz-wordpress/img/bwpp.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
