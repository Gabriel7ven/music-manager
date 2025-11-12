function Cards({ value }) {
  return (
    <div className="cards-container" role="list" aria-label="Recursos disponíveis">
      <article className="card" role="listitem">
        <div className="card-icon" aria-hidden="true">
          <i className="fa-regular fa-2xl fa-calendar-days"></i>
        </div>
        <h3 className="card-title">Cronogramas</h3>
        <p className="card-description">
          Crie e organize cronogramas de cultos com data, hora e tipo de evento
        </p>
      </article>

      <article className="card" role="listitem">
        <div className="card-icon" aria-hidden="true">
          <i className="fa-solid fa-2xl fa-users"></i>
        </div>
        <h3 className="card-title">Participantes</h3>
        <p className="card-description">
          Gerencie os componentes da sua equipe com a facilidade que você necessita
        </p>
      </article>

      <article className="card" role="listitem">
        <div className="card-icon" aria-hidden="true">
          <i className="fa-solid fa-2xl fa-music"></i>
        </div>
        <h3 className="card-title">Músicas</h3>
        <p className="card-description">
          Cadastre músicas e monte setlists para cada momento do culto
        </p>
      </article>
    </div>
  );
}

// let foo = document.querySelector('footer').parentElement
// console.log(foo)

function Footer() {
  return (
    <footer role="contentinfo">
      <p>&copy; 2025 Sistema de Gerenciamento de Cultos. Todos os direitos reservados.</p>
    </footer>
  )
}


function Header() {
  return (
    <>
      <header>
        <span className="logo">Worship Manager</span>
        <Button text="Entrar" />
      </header>
    </>
  )
}

function Button({text}) {
  return <a className="btn-violet">{text}</a>
}

export default function App() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Gerencie seus Cultos com Facilidade</h1>
        <p className="intro">Sistema completo para organizar cronogramas de cultos, gerenciar participantes e agendar músicas de forma simples e eficiente.</p>
        <Cards />
        <Button text="Começar agora"/>
        
      </div>
      <Footer />
    </>
  );
}
