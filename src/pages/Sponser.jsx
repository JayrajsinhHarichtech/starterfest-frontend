import React, { useEffect } from "react";
import { SponsorHeroBanner, SponsorGrid } from '../components/SponsorComponents';

// Import sponsor images
import startupImg from '../assets/img/startup.png';
import vanillaImg from '../assets/img/vanilla.png';
import zippitImg from '../assets/img/zippit.png';
import defImg from '../assets/img/def.png';
import rogueImg from '../assets/img/rogue.png';
import mirchiImg from '../assets/img/mirchi.png';
import swarnimImg from '../assets/img/swarnim.png';
import gallopsImg from '../assets/img/gallops.png';
import chitraImg from '../assets/img/chitra.png';
import insightImg from '../assets/img/insight.png';
import swenImg from '../assets/img/swen.png';
import inocenImg from '../assets/img/inocen.png';
import gyanjyotImg from '../assets/img/gyanjyot.png';
import dronaImg from '../assets/img/drona.png';
import heritageImg from '../assets/img/heritage.png';
import amdavadImg from '../assets/img/amdavad.png';
import gyaniImg from '../assets/img/gyani.png';
import mediaImg from '../assets/img/media.png';
import ssipImg from '../assets/img/ssip.png';
import eventImg from '../assets/img/event.png';
import swargamImg from '../assets/img/swargam.png';
import startupBannerImg from '../assets/img/startup-banner.jpg';

const sponsors = [
  { url: startupImg, heading: "Sponsor 1" },
  { url: vanillaImg, heading: "Sponsor 2" },
  { url: zippitImg, heading: "Sponsor 3" },
  { url: defImg, heading: "Sponsor 4" },
  { url: rogueImg, heading: "Sponsor 5" },
  { url: mirchiImg, heading: "Sponsor 6" },
  { url: swarnimImg, heading: "Sponsor 7" },
  { url: gallopsImg, heading: "Sponsor 8" },
  { url: chitraImg, heading: "Sponsor 9" },
  { url: insightImg, heading: "Sponsor 10" },
  { url: swenImg, heading: "Sponsor 11" },
  { url: inocenImg, heading: "Sponsor 12" },
  { url: gyanjyotImg, heading: "Sponsor 13" },
  { url: dronaImg, heading: "Sponsor 14" },
  { url: heritageImg, heading: "Sponsor 15" },
  { url: amdavadImg, heading: "Sponsor 16" },
  { url: gyaniImg, heading: "Sponsor 17" },
  { url: mediaImg, heading: "Sponsor 18" },
  { url: startupImg, heading: "Sponsor 19" },
  { url: ssipImg, heading: "Sponsor 20" },
  { url: eventImg, heading: "Sponsor 21" },
  { url: swargamImg, heading: "Sponsor 22" },
];

const Sponser = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen overflow-x-hidden">
      {/* Hero Banner */}
      <SponsorHeroBanner 
        image={startupBannerImg} 
        alt="Sponsors Banner" 
      />

      {/* Sponsors Grid */}
      <SponsorGrid sponsors={sponsors} />
    </div>
  );
};

export default Sponser;
