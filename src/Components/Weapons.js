import React from 'react';
import '../styles/main.css';

function Weapons() {
  return (
    <div className="Weapons">
      <h2 id="weapon-title">----Weapons----</h2>

      <div>
        <h3 className="weapon-types">Human:</h3>
        <ul>
          <li>Assault Rifle<br /><img src={'/assets/images/assault-rifle.webp'} alt="Assault Rifle" width="200" height="100" /></li>
          <li>Battle Rifle<br /><img src={'/assets/images/br.webp'} alt="Battle Rifle" width="200" height="100" /></li>
          <li>DMR<br /><img src={'/assets/images/DMR.webp'} alt="DMR" width="200" height="100" /></li>
          <li>Sidekick<br /><img src={'/assets/images/sidekick.webp'} alt="Sidekick" width="200" height="100" /></li>
          <li>SAW<br /><img src={'/assets/images/SAW.webp'} alt="SAW" width="200" height="100" /></li>
          <li>SMG<br /><img src={'/assets/images/SMG.webp'} alt="SMG" width="200" height="100" /></li>
          <li>Sniper Rifle<br /><img src={'/assets/images/sniper-rifle.webp'} alt="Sniper Rifle" width="250" height="100" /></li>
          <li>Shotgun<br /><img src={'/assets/images/bulldog.webp'}alt="Shotgun" width="200" height="100" /></li>
          <li>Rocket Launcher<br /><img src={'/assets/images/rockets.webp'} alt="Rocket Launcher" width="200" height="100" /></li>
          <li>Hydra Launcher<br /><img src={'/assets/images/hydra.webp'} alt="Hydra Launcher" width="200" height="100" /></li>
          <li>Frag Grenade<br /><img src={'/assets/images/frag-grenade.png'}alt="Fragmentation Grenade" width="100" height="100" /></li>
        </ul>
      </div>

      <div>
        <h3 className="weapon-types">Covenant:</h3>
        <ul>
          <li>Gravity Hammer<br /><img src={'/assets/images/grav-hammer.webp'} alt="Gravity Hammer" width="200" height="100" /></li>
          <li>Heatwave<br /><img src={'/assets/images/heatwave.webp'}alt="Heatwave" width="200" height="100" /></li>
          <li>Mangler<br /><img src={'/assets/images/mangler.webp'} alt="Mangler" width="200" height="100" /></li>
          <li>Needler<br /><img src={'/assets/images/needler.webp'} alt="Needler" width="200" height="100" /></li>
          <li>Energy Sword<br /><img src={'/assets/images/energy-sword.webp'} alt="Energy Sword" width="200" height="100" /></li>
          <li>Plasma Pistol<br /><img src={'/assets/images/plasma-pistol.webp'} alt="Plasma Pistol" width="200" height="100" /></li>
          <li>Skewer<br /><img src={'/assets/images/skewer.webp'}alt="Skewer" width="250" height="100" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Weapons;
