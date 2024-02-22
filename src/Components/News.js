import React from 'react';
import '../styles/main.css';

function News() {
  return (
    <div className="news-container" data-testid="news-block">
      <br></br><br></br><br></br>
      <h2 id="news-title" data-testid="latest-title">Latest News:</h2>


      <div>
        <br /><br />
        <h3>Firefight: King of the Hill Refresh | Halo Infinte</h3>
        <img id="firefight-news" src={'/assets/images/firefight-refresh.jpg'} alt="Firefight battle" width="500" height="250" />
        <p>
          The Firefight: King of the Hill gamemode has been expanded today. 343 has added five new maps into the rotation.
          It has been a few months since Firefight was released for Halo Infinite so this refresh comes at a great time.
          To read the full article {' '}<a href="https://www.halowaypoint.com/news/firefight-king-of-the-hill-refresh-halo-infinte"
            target="_blank" rel="noopener noreferrer">Click here.</a>
          <br /><br /><br /><br />
          <i>Posted 20th Febuary 2024</i>
        </p>

      </div>

      <div>
        <br /><br />
        <h3>BTB Refresh | Halo Infinite</h3>
        <img id="article1" src={'/assets/images/article1-image.jpg'} alt="Banshee parked on the battlefield" width="500" height="250" />
        <p>
          The long awaited BTB refresh for Halo Infinite is now live! This update features FIVE new community made maps.
          This addition doubles, yes doubles, the map-pool for one of the most popular game modes in Halo. Big team battle
          players have been calling out for new maps for months, and 343 has finally delivered.{' '}
          <a href="https://www.halowaypoint.com/news/btb-refresh" target="_blank" rel="noopener noreferrer">Click here</a> to read the full article.
          <br /><br /><br /><br />
          <i>Posted: 13th February 2024</i>
        </p>
      </div>

      <div>
        <br /><br />
        <h3>Halo: Television Series | Season 2 Launch</h3>
        <img id="article2" src={'/assets/images/article2.jpg'} alt="Silver team" width="500" height="250" />
        <p>
          The highly anticipated second season of the Halo television series has launched on Paramount+ today.
          Although the first season launched with a rather mixed reception, achieving 7.2/10 on{' '}
          <a href="https://www.imdb.com/title/tt2934286/" target="_blank" rel="noopener noreferrer">IMDB</a>, the showrunners have assured fans that Season 2
          will be <q>a grittier, more grounded, more visceral ride.</q> The newly appointed showrunner, David Weiner,
          also added that <q>What we’re able to do in season two is actually remedy some of the things we would’ve liked to in season one
            but you don’t really get the chance to during the course of a season.</q> As a bonus, the fans have been treated
          to not one, but two episodes available for streaming on{' '}
          <a href="https://www.paramountplus.com/gb/shows/halo/" target="_blank" rel="noopener noreferrer">Paramount+</a> now.
          <br /><br /><br /><br />
          <i>Posted: 8th February 2024</i>
        </p>
      </div>

      <div>
        <br /><br />
        <h3>Spirit of Fire Launch | Halo Infinite CU29</h3>
        <img id="article3" src={'/assets/images/article 3.jpg'} alt="Spartans in Mark IV armor" width="500" height="250" />
        <p>
          Halo Infinite's latest update, content update 29 (CU29) has launched alongside the new Operation: Spirit of Fire.
          The recent removal of seasons in Halo Infinite has had fans wondering about the future of the title. As part
          of today's update, all players will receive the classic Mark IV armor Core which has appeared in the likes of <i>Halo Wars,
            Halo Wars 2, and Halo 5: Guardians</i>. In addition, 343 has added one new map, three new Operations, and
          multi-core shoulder customization. To read 343 industries' full article{' '}
          <a href="https://www.halowaypoint.com/news/cu29-launch" target="_blank" rel="noopener noreferrer">Click here.</a>
          <br /><br /><br /><br />
          <i>Posted: 31st January 2024</i>
        </p>
      </div>
    </div>
  );
}

export default News;
