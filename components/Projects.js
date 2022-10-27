import ProjectStyles from "../styles/projects.module.css";

import Image from "next/image";
import BackgroundAnimation from "./Background";
import BackgroundAnimation2 from "./Background2";

const Projects = () => {

  return (
    <div className={ProjectStyles.project}>
      <h1>Projects</h1>

      <div className={ProjectStyles.cardgroup}>
        <div className="card card1">
          <Image
            src="/1.jpg"
            alt="photo of happy hour guide"
            width={500}
            height={300}
          />
          <h1>Happy Hour Guide</h1>
          <hr />
          <p>
          <strong>JavaScript, CSS3, HTML5</strong> - An API used to generate the recipes of your favourite drinks or a new one to try!
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button><a href="https://github.com/LadyBluenotes/TheHappyHourGuide">Code</a></button>
            <button><a href="https://thehappyhourguide.netlify.app/">Website</a></button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/2.jpg"
            alt="photo of poke dex website"
            width={500}
            height={300}
          />
          <h1>The Poke-Dex</h1>
          <hr />
          <p>
          <strong>React, JavaScript</strong> - The PokeAPI was used to create a poke-dex that renders all generations of pokemon and their information.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button><a href="https://github.com/LadyBluenotes/the-poke-dex">Code</a></button>
            <button><a href="https://the-poke-dex.herokuapp.com/">Website</a></button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/3.jpg"
            alt="photo of nasa apod website"
            width={500}
            height={300}
          />
          <h1>NASA APOD</h1>
          <hr />
          <p>
          <strong>JavaScript, CSS3, HTML5</strong> - Using the NASA APOD API, users can generate the photos of the day based on date.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button><a href="https://github.com/LadyBluenotes/NASA">Code</a></button>
            <button><a href="https://welcometospace.netlify.app/">Website</a></button>
          </div>
        </div>
        <div className="card card1">
          <Image
            src="/4.jpg"
            alt="photo of weather application"
            width={500}
            height={300}
          />
          <h1>Weather App</h1>
          <hr />
          <p>
          <strong>React, JavaScript</strong> - Using the OpenWeatherMap API to showcase current weather details.
          </p>

          <div className={ProjectStyles.buttongroup}>
            <button><a href="https://github.com/LadyBluenotes/WeatherApp">Code</a></button>
            <button><a href="https://checkingweather.netlify.app/">Website</a></button>
          </div>
        </div>
      </div>
      <BackgroundAnimation />
      <BackgroundAnimation2 />
    </div>
  );
};

export default Projects;
