import "./App.css";
import logo1 from "../src/assets/TK_Table_Logo_2022.png";
import logo2 from "../src/assets/TK_Logo_2022_DarkGreen.png";
function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid p-0">
          <div className="logo1_container">
            <a class="navbar-brand logo1_bg" href="#">
              <img src={logo1} className="logo1" alt="" />
            </a>
          </div>
          <a class="nav-link active" aria-current="page" href="#">
            <img className="logo2" src={logo2} alt="" />
          </a>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="toggler-icon top-bar"></span>
            <span class="toggler-icon middle-bar"></span>
            <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"></li>
            </ul>
            <form class="d-flex">
              
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default App;
