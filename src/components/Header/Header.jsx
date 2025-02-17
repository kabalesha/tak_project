import { Header } from "./Header.styled";
const Hat = () => {
  return (
    <>
      <Header>
        <div class="header-container container">
          <a class="header-logo" href="">
            <svg class="header-logo" width="45" height="35">
              <use href="./img/icons.svg#icon-main_mob_logo"></use>
            </svg>
          </a>

          <nav class="header-nav">
            <ul class="header-list">
              <li class="header-item animate__animated animate__heartBeat">
                <a class="scale-header" href="#hero">
                  Anemone
                </a>
              </li>
              <li class="header-item animate__animated animate__heartBeat">
                <a class="scale-header" href="#about">
                  About us
                </a>
              </li>
              <li class="header-item animate__animated animate__heartBeat">
                <a class="scale-header" href="#store">
                  Store
                </a>
              </li>
              <li class="header-item animate__animated animate__heartBeat">
                <a class="scale-header" href="#delivery">
                  Delivery
                </a>
              </li>
              <li class="header-item animate__animated animate__heartBeat">
                <a class="scale-header" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </nav>

          <a class="contact-btn" href="tel:+380631234567">
            <svg class="tel-icon" width="22" height="22">
              <use href="./img/icons.svg#icon-tel_logo"></use>
            </svg>
          </a>

          <button
            class="menu-btn js-open-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            type="button"
          >
            <svg class="menu-icon" width="24" height="24">
              <use href="./img/icons.svg#icon-burger_menu"></use>
            </svg>
          </button>
        </div>
      </Header>
    </>
  );
};

export default Hat;
