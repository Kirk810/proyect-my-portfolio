import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p>Hey, I'm</p>
    <h1>Adrián Soto</h1>
    <p>I am a student of the web development bootcamp in Neoland, Madrid. Here I will share my projects and creations to make themselves known.</p>
    <a href="mailto:adriansoto89@gmail.com">Say hi →</a>
    </section>`;
};