import Aos from "aos";
import "aos/dist/aos.css";
import "./Trending.css";
import frostyPic from "../images/frostyPic.jpeg";
import lightNorth from "../images/lightNorth.jpeg";
import cityWinery from "../images/cityWinery.jpeg";
import gardenWinter from "../images/gardenWinter.png";
import skinnyLe from "../images/skinnyLe.jpeg";
import pinkLounge from "../images/pinkLounge.jpeg";
import tinselWest from "../images/tinselWest.jpeg";
import miracle9 from "../images/miracle9.png";
import maccabeeWest from "../images/maccabeeWest.jpeg";
import midtownWest from "../images/midtownWest.jpeg";
import felizLatin from "../images/felizLatin.jpeg";
import { useEffect } from "react";

const Trending = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="trending-section" data-aos="fade-up">
      <p className="trending-bg">
        <h1 className="trending-header">Trending Nightlife Experience</h1>
        <br></br>
        <p className="trending-subtext">
          10 Holiday Pop-Up Bars In NYC To Visit This Year
        </p>
        <p className="trending-sub">Holiday-Themed pop-ups are taking over!</p>
      </p>
      <section className="trending-info">
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="frost-Pic"
                src={frostyPic}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          "As we near the holidays, we to put together a list of some of the
          most exciting holiday-themed bar pop-ups around New York City. Each
          year various bars and restaurants go all out in holiday spirit with
          magical decorations. Some rooftops become alpine lodges or igloos,
          However the one thing they all have in common are their fun and
          festive cocktail drinks! Whether you're looking to enjoy some holiday
          cheer, or just want to check out a new space, here are all of the
          holiday pop-up bars that should be on your winter list!"
        </p>
        <break></break>
        <p className="trending-name">1. Santa Clause's North Pole, Seaport</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="light-North"
                src={lightNorth}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          Take in these beautiful views of the waterfront and the Brooklyn
          Bridge at Watermark's Santa Clause North Pole installation. The
          experience is based off of the new “The Santa Clauses” series on
          Disney+ and features festive IRL areas like Santa's hallway lined with
          candy cane pillars, the Gingerbread House Bar, and Santa's Living
          Room. When you're done with the walkthrough, eat and dine at one of
          Watermark's heated glass houses or snap a photo in front of the giant
          snow globe!
          <p className="trending-add">Where: 78 South St</p>
        </p>
        <p className="trending-name">2. City Winery Winter Domes, Midtown</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="city-Winery"
                src={cityWinery}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          The Winter Domes at Rockefeller Plaza will be opening back up this
          winter. If you're looking to stay at the heart of all the holiday
          festivities in NYC, City Winery's winter dome igloos are a nice heated
          spot for you and up to 8 people to hang out.
          <p className="trending-add"> Where: Rockefeller Plaza</p>
        </p>
        <p className="trending-name">
          3. Magic Hour's Pink Winter Lounge, Midtown
        </p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="pink-Lounge"
                src={pinkLounge}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          This gorgeously decorated ski lodge-themed rooftop is welcoming back
          it's pop up winter lounge this year once again. When you're not
          looking at the 25,000 sparkling crystals hanging overhead or trying to
          capture a perfect photo of the Empire State Building, be sure to try
          out one of their Après Ski (boozy pink hot chocolate) or the Pink
          Campfire S'mores!
          <p className="trending-add"> Where: 485 7th Ave, Floor 1</p>
        </p>
        <p className="trending-name">4. The Skinny, LES</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="skinny-Le"
                src={skinnyLe}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          With all the festive holiday bars popping up around NYC, we definitely
          needed an anti-holiday one, no matter if we've been Naughty or Nice!
          The bar will be decked in over-the-top gaudy Christmas decor and will
          even host events such as seductive burlesque performances!
          <p className="trending-add"> Where: 174 Orchard St.</p>
        </p>
        <p className="trending-name">5. Miracle on 9th Street, East Village</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="miracle-9"
                src={miracle9}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          The holiday-themed cocktail pop-up bar reopens for its ninth season,
          with their staple holiday décor and festive, well-crafted cocktails.
          The pop-up originally began at Mace in 2014, but has since grown
          globally with over 120 locations worldwide, with this year's location
          being at The Cabinet in Alphabet City!
          <p className="trending-add">
            {" "}
            Where: 649 East 9th St (Miracle on Ninth at The Cabinet); 595 Union
            Ave, Brooklyn (Miracle on Union at Thief's)
          </p>
        </p>
        <p className="trending-name">6. Feliz Coctelería, Nolita</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="feliz-Latin"
                src={felizLatin}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          Experience all the holiday festivities at this “Latin inspired”
          pop-up! Sip on their festive cocktails like A Lump of Coal including
          blackberry, mint, mango butter, black sesame, tequila, lime, egg
          white, Chilean red wine, or the SanTiki Clause with Mezcal, sherry,
          cinnamon, almond orgeat, allspice, and lime all served in
          holiday-themed glassware.
          <p className="trending-add"> Where: 349 Broome St</p>
        </p>
        <p className="trending-name">
          7. Maccabee Bar at Ollie's, West Village
        </p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="maccabee-West"
                src={maccabeeWest}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          A Hannukah-themed pop-up bar is coming to NYC this month, complete
          with decor and festive cocktail drinks! Maccabee Bar (which will be
          located inside Ollie's in the West Village) will be serving unique
          offerings like the Everything Bagel Martini and the Latke Sour.
          <p className="trending-add">Where: 64 Downing St</p>
        </p>
        <p className="trending-name">8. Santa Clause's North Pole, Seaport</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="tinsel-West"
                src={tinselWest}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          Tinsel Town is taking over Pekarna this year, and it's an enchanting
          and immersive Christmas experience. Find Santa, elves, presents,
          tinsel, festive tunes and lots of winter warm drinks. Tickets are
          required for this pop-up.
          <p className="trending-add"> Where: 594 Amsterdam Ave</p>
        </p>
        <p className="trending-name">9. Frosty's, Midtown West</p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="midtown-West"
                src={midtownWest}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          Get ready to take in the most amount of ceiling holiday decorations
          you've (probably) ever seen, all while dining and sipping on festive
          bites and drinks. The over-the-top-decor is picturesque and the staff
          is dressed in ugly sweaters. Plus, the four bars spread across three
          levels makes it seem like you're stepping into a Christmas movie.
          <p className="trending-add"> Where: 220 W 44th St</p>
        </p>
        <p className="trending-name">
          10. Loreley Garden's Winter Wonderland, Lower East Side
        </p>
        <h1 className="venue-Header">
          <section className="venue-section">
            <article>
              <img
                classname="garden-Winter"
                src={gardenWinter}
                alt="wait until the page loads"
              />
            </article>
          </section>
        </h1>
        <p className="trending-text">
          Returning to serve hearty food and drink like Boozy Bourbon Black &
          White Hot Chocolate, Spiked Eggnog, Hot Bourbon Apple Cider,
          Peppermint Nitro Martinis, Gluhwein, Winter Sangria, Hot Toddys, and
          more. Between their heated garden out back and assortment of holiday
          decor, this is the perfect place to hangout, even on the coldest of
          days.
          <p className="trending-add"> Where: 7 Rivington St</p>
        </p>
      </section>
    </section>
  );
};

export default Trending;
