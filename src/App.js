import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './about.js'
import { Carousel } from 'react-bootstrap';

function App() {
  const [floatingCarrot, setFloatingCarrot] = useState(null);
  const [showFacts, setShowFacts] = useState(false); 
  const [showKnow, setShowKnow] = useState(false); 
  const [showPet, setShowPet] = useState(false); 



  const handleCarrotClick = (carrotId) => {
    setFloatingCarrot(carrotId);

    if (carrotId === 'carrot1') {
      setShowFacts(true); 
    } else {
      setShowFacts(false);
    }

    if (carrotId === 'carrot2') {
      setShowKnow(true); 
    } else {
      setShowKnow(false);
    }
     if (carrotId === 'carrot3') {
      setShowPet(true); 
    } else {
      setShowPet(false);
    }

  
  };

  const carrotInfo = {
    carrot1: 'This is the first carrot!',
    carrot2: 'Yum! This is the second carrot!',
    carrot3: 'Whoa! You found the third carrot!',
  };

  const facts = () => {
    return (
      <div className="facts">
        <h2>🐰 Rabbit Facts!</h2>
       <ul>
          <li>Rabbits can rotate their ears 270 degrees.</li>
          <li>Their teeth never stop growing!</li>
          <li>They purr when they're happy.</li>
          <li>They can run up to 30–45 km/h (about 30 mph).</li>
          <li>When excited, they jump and twist — it's called a "binky".</li>
          <li>Rabbits eat cecotropes — a special kind of poop — to redigest nutrients.</li>
          <li>They communicate mostly through body language.</li>
          <li>Rabbits are social animals and can get lonely if left alone too long.</li>
          <li>Their vision covers nearly 360 degrees, but they have a blind spot right in front of their nose.</li>
          <li>Baby rabbits are called kits or kittens.</li>
        </ul>
      </div>
    );
  };
    const know = () => {
    return (
      <div className="know">
        <h2>DID  YOU KNOW?</h2>
          <p>In some countries, they eat rabbit meat!</p>
            <ul>
              <li><strong>Italy</strong> is the top consumer of rabbit meat in the world. Traditional dishes like <em>coniglio alla cacciatora</em> are popular.</li>
              <li><strong>France</strong> considers rabbit a gourmet food, served in dishes like <em>lapin à la moutarde</em> (rabbit in mustard sauce).</li>
              <li><strong>China</strong> is the largest producer of rabbit meat globally — both for domestic use and export.</li>
              <li><strong>Spain</strong> includes rabbit in classic recipes, especially <em>paella valenciana</em>.</li>
              <li><strong>Belgium</strong> and <strong>Germany</strong> have strong traditions of eating rabbit in stews and roasts.</li>
              <li><strong>Malta</strong> has rabbit as a national dish, called <em>fenek</em>, typically stewed in wine and garlic.</li>
              <li>In several <strong>African countries</strong>, like Nigeria and Ghana, rabbit is an affordable and accessible protein source.</li>
              <li><strong>The United States</strong> sees limited rabbit meat use, but some chefs promote it for being lean and sustainable.</li>
              <li>Rabbit is a <strong>very sustainable meat</strong> — it requires less space and food than cows or pigs and has a low environmental impact.</li>
              <div style={{display:'flex'}}>
                  <img src="/nutrition.png"className="nutrition"/>
                  <img src="/cryingbun.gif"className="cryingbun"/>

              </div>
            </ul>
      </div>
    );
  };
  const pet = () => {
    return (
      <div className="pet">

        <Carousel className="my-carousel">
            <Carousel.Item>
              <img
                className="d-block w-200 rabbitpic"
                src="/1.png"
                alt="First slide"
                className="rabbitpic"
              />
              <Carousel.Caption>
                {/*<h3>Meet Bunbun</h3>*/}
                {/*<p>This rabbit loves carrots!</p>*/}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-200 rabbitpic"
                src="/2.png"
                alt="Second slide"
                className="rabbitpic"
              />
              <Carousel.Caption>
                {/*<h3>Fluffy Friends</h3>*/}
                {/*<p>They are very social!</p>*/}
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-200 rabbitpic"
                src="/3.png"
                alt="Third slide"
                className="rabbitpic"
              />
              <Carousel.Caption>
                {/*<h3>Happy Bunny</h3>*/}
                {/*<p>This one just did a binky!</p>*/}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
                  <h2>RABBIT AS A PET!</h2>
        <p>Do you want one?</p>

      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="col-md-12 header">
          <img src="/animal.png" alt="Easter Bunny" className="bunny" />
          <h1>Hello! This is react practice!</h1>
        </div>
      </header>

      <div className="col-md-6 animate_con">
          <h2 className="pull_carrots">PULL THE CARROTS!</h2>
        <div className="carrot_con">
          <img
            src="/carrot.png"
            alt="carrot"
            className={`carrot carrot1 ${floatingCarrot === 'carrot1' ? 'floating' : ''}`}
            onClick={() => handleCarrotClick('carrot1')}
          />
          <img
            src="/carrot.png"
            alt="carrot"
            className={`carrot carrot2 ${floatingCarrot === 'carrot2' ? 'floating' : ''}`}
            onClick={() => handleCarrotClick('carrot2')}
          />
          <img
            src="/carrot.png"
            alt="carrot"
            className={`carrot carrot3 ${floatingCarrot === 'carrot3' ? 'floating' : ''}`}
            onClick={() => handleCarrotClick('carrot3')}
          />
        </div>
        <img src="/grass.png" alt="grass" className="grass" />
      </div>

      <div className="info_con">
        {floatingCarrot && <p>{carrotInfo[floatingCarrot]}</p>}
        {showFacts  &&  ( <>{facts()} <About /> </>)}
        {showKnow && know()}
        {showPet && pet()}
      </div>
    </div>
  );
}



export default App;
