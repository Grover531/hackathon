import { useContext } from "react";
import { useNavigate } from "react-router"
import { DataProvider } from "../../context/Data";



function NavBarLoggedOut() {

  const context = useContext(DataProvider);

  // const { logged, setLogged } = context;


  const navigate = useNavigate();

  const handleLoginButton = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <but class="navbar-item" style={{ textDecoration: 'none' }} >
              Prudential
            </but>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <button class="button is-primary">
                  <strong>Sign up</strong>
                </button>
                <button class="button is-light"
                onClick={handleLoginButton}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBarLoggedOut