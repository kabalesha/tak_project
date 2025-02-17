import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hat from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hat />
      <section id="hero" class="hero">
        <div class="hero-container">
          <h1 class="hero-title">ANEMONE</h1>
          <h2 class="hero-badge">flower studio</h2>
          <button class="hero-btn" type="button" data-modal-open>
            <svg class="hero-btn-icon">
              <use
                class="hero-btn-txt hero-btn-icon-mob"
                href="./img/icons.svg#btn-txt-mob"
              ></use>
              <use
                class="hero-btn-txt hero-btn-icon-tab"
                href="./img/icons.svg#btn-txt-tab"
              ></use>
              <use
                class="hero-btn-txt hero-btn-icon-desk"
                href="./img/icons.svg#btn-txt-desk"
              ></use>
              <use
                class="hero-btn-arrow"
                href="./img/icons.svg#btn-arrow"
              ></use>
            </svg>
          </button>
        </div>
        <div class="hero-shape">
          <picture>
            <source
              media="(min-width: 1280px)"
              srcset="
          ./img/hero/img_hero_desk@1x.webp 1x,
          ./img/hero/img_hero_desk@2x.webp 2x
        "
              type="image/webp"
            />
            <source
              media="(min-width: 1280px)"
              srcset="
          ./img/hero/img_hero_desk@1x.jpg 1x,
          ./img/hero/img_hero_desk@2x.jpg 2x
        "
              type="image/jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcset="
          ./img/hero/img_hero_tab@1x.webp 1x,
          ./img/hero/img_hero_tab@2x.webp 2x
        "
              type="image/webp"
            />
            <source
              media="(min-width: 768px)"
              srcset="
          ./img/hero/img_hero_tab@1x.png 1x,
          ./img/hero/img_hero_tab@2x.png 2x
        "
              type="image/png"
            />
            <source
              media="(max-width: 767px)"
              srcset="
          ./img/hero/img_hero_mob@1x.webp 1x,
          ./img/hero/img_hero_mob@2x.webp 2x
        "
              type="image/webp"
            />
            <source
              media="(max-width: 767px)"
              srcset="
          ./img/hero/img_hero_mob@1x.png 1x,
          ./img/hero/img_hero_mob@2x.png 2x
        "
              type="image/png"
            />
            <img
              class="hero-img"
              src="./img/hero/img_hero_mob@1x.png"
              alt="Flower studio preview"
              loading="lazy"
            />
          </picture>
        </div>
      </section>
    </>
  );
}

export default App;
