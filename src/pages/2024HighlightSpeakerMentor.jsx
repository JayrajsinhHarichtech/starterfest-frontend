import React, { useEffect } from "react";

// Import child components
import HeroBanner from "../components/2024Highlights/HeroBanner";
import EsteemedGuests from "../components/2024Highlights/EsteemedGuests";
import Moderator from "../components/2024Highlights/Moderator";
import Mentors from "../components/2024Highlights/Mentors";
import MotivationalSpeaker from "../components/2024Highlights/MotivationalSpeaker";

// Import images
import Sandeep from "../assets/img/Sandeep.jpg";
import sneh from "../assets/img/sneh.jpg";  
import panel from "../assets/img/panel.JPG";  
import Chiranjeev from "../assets/img/Chiranjeev.webp"
import Deepali from "../assets/img/Deepali.webp"
import Hirav from "../assets/img/Hirav.webp"

// Import mentor images
import m1 from "../assets/img/m1.webp";
import m2 from "../assets/img/m2.webp";
import m3 from "../assets/img/m3.webp";
import m4 from "../assets/img/m4.webp";
import m5 from "../assets/img/m5.webp";
import m6 from "../assets/img/m6.webp";
import m7 from "../assets/img/m7.webp";
import m8 from "../assets/img/m8.webp";
import m9 from "../assets/img/m9.webp";

const Speakers2024 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ===================== DATA =====================
    const esteemedGuests = [
        {
            name: "Mr. Sandeep Engineer",
            subtitle: "Managing Director, Astral Limited",
            image: Sandeep,
        },
        {
            name: "Mr. Hirav Shah",
            subtitle: "Astro-Business Strategist",
            image: Hirav,
        },
        {
            name: "Mr. Chiranjeev Patel",
            subtitle: "Managing Director, PC Snehal Group",
            image: Chiranjeev,
        },
    ];

    const moderator = {
        name: "Ms. Deepali Chatwani",
        image: Deepali,
        subtitle: "Business Journalist and Media Host",
    };

    const mentors = [
        { image: m1 },
        { image: m2 },
        { image: m3 },
        { image: m4 },
        { image: m5 },
        { image: m6 },
        { image: m7 },
        { image: m8 },
        { image: m9 },
    ];

    const motivationalSpeaker = {
        name: "Sneh Desai",
        image: sneh,
        subtitle: "Business Journalist and Media Host",
    };

    // ===================== RENDER =====================
    return (
        <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 min-h-screen">
            <HeroBanner panelImage={panel} />
            <EsteemedGuests guests={esteemedGuests} />
            <Moderator moderator={moderator} />
            <Mentors mentors={mentors} />
            <MotivationalSpeaker speaker={motivationalSpeaker} />
        </div>
    );
};

export default Speakers2024;
