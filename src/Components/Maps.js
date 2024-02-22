import React from 'react';
import '../styles/main.css';

function Maps() {
  return (
    <div className="Maps">
      <h2 id="map-title">--------Maps--------</h2>
      <ul>
        <li>
          <a href="catalyst.html">
            Catalyst<br />
            <img id="catalyst" src={'/assets/images/catalyst-map.jpg'} alt="Catalyst map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/coliseum.html">
            Coliseum<br />
            <img id="coliseum" src={'/assets/images/coliseum-map.webp'}alt="Coliseum map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/eden.html">
            Eden<br />
            <img id="eden" src={'/assets/images/eden-map.jpg'} width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/empire.html">
            Empire<br />
            <img id="empire-map" src={'/assets/images/empire-map.jpg'} alt="Empire map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/fathom.html">
            Fathom<br />
            <img id="fathom-map" src={'/assets/images/fathom-map.jpg'} alt="Fathom map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/overgrowth.html">
            Overgrowth<br />
            <img id="overgrowth-map" src={'/assets/images/overgrowth-map.jpg'} alt="Overgrowth map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/plaza.html">
            Plaza<br />
            <img id="plaza-map" src={'/assets/images/plaza-map.jpg'}alt="Plaza map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/regret.html">
            Regret<br />
            <img id="regret-map" src={'/assets/images/regret-map.jpg'} alt="Regret map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/riptide.html">
            Riptide<br />
            <img id="riptide-map" src={'/assets/images/riptide-map.webp'} alt="Riptide map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/stasis.html">
            Stasis<br />
            <img id="stasis-map" src={'/assets/images/stasis-map.png'} alt="Stasis map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/torque.html">
            Torque<br />
            <img id="torque-map" src={'/assets/images/torque-map.jpg'} alt="Torque map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/truth.html">
            Truth<br />
            <img id="truth-map" src={'/assets/images/truth-map.webp'} alt="Truth map" width="200" height="100" />
          </a>
        </li>
        <li>
          <a href="maps/tyrant.html">
            Tyrant<br />
            <img id="tyrant-map" src={'/assets/images/tyrant-map.jpg'} alt="Tyrant map" width="200" height="100" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Maps;
