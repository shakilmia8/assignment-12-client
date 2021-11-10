import React from 'react';
import './AboutUs.css';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const AboutUs = () => {
    const aboutBanner = 'https://media.smallbiztrends.com/2019/04/About-Us.png';
    return (
        <>
            <Navigation></Navigation>
            <div className='about-container'>
                <img src={aboutBanner} alt="" />
                <div className='about'>
                    <h2>Our Mission</h2>
                    <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip. Travel can also include relatively short stays between successive movements, as in the case of tourism.The origin of the word "travel" is most likely lost to history. The term "travel" may originate from the Old French word travail, which means 'work'.[2] According to the Merriam Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).
                        In English, people still occasionally use the words travail, which means struggle. According to Simon Winchester in his book The Best Travelers' Tales (2004), the words travel and travail both share an even more ancient root: a Roman instrument of torture called the tripalium (in Latin it means "three stakes", as in to impale). This link may reflect the extreme difficulty of travel in ancient times. Travel in modern times may or may not be much easier depending upon the destination. Travel to Mount Everest, the Amazon rainforest, extreme tourism, and adventure travel are more difficult forms of travel. Travel can also be more difficult depending on the method of travel, such as by bus, cruise ship, or even by bullock cart.</p>

                    <h2>History of Travels</h2>
                    <p>Travel dates back to antiquity where wealthy Greeks and Romans would travel for leisure to their summer homes and villas in cities such as Pompeii and Baiae. While early travel tended to be slower, more dangerous, and more dominated by trade and migration, cultural and technological advances over many years have tended to mean that travel has become easier and more accessible. Mankind has come a long way in transportation since Christopher Columbus sailed to the new world from Spain in 1492, an expedition which took over 10 weeks to arrive at the final destination; to the 21st century where aircraft allow travel from Spain to the United States overnight.

                        Travel in the Middle Ages offered hardships and challenges, however, it was important to the economy and to society. The wholesale sector depended (for example) on merchants dealing with/through caravans or sea-voyagers, end-user retailing often demanded the services of many itinerant peddlers wandering from village to hamlet, gyrovagues (Wandering Monks) and wandering friars brought theology and pastoral support to neglected areas, traveling minstrels practiced the never-ending tour, and armies ranged far and wide in various crusades and in sundry other wars.[9] Pilgrimages were common in both the European and Islamic world and involved streams of travelers both locally (Canterbury Tales-style) and internationally.
                        In the late 16th century it became fashionable for young European aristocrats and wealthy upper-class men to travel to significant European cities as part of their education in the arts and literature. This was known as the Grand Tour, it included cities such as London, Paris, Venice, Florence, and Rome. However, The French Revolution brought with it the end of the Grand Tour.
                        Travel by water often provided more comfort and speed than land-travel, at least until the advent of a network of railways in the 19th century. Travel for the purpose of tourism is reported to have started around this time when people began to travel for fun as travel was no longer a hard and challenging task. This was capitalized on by people like Thomas Cook selling tourism packages where trains and hotels were booked together. Airships and airplanes took over much of the role of long-distance surface travel in the 20th century, notably after the Second World War where there was a surplus of both aircraft and pilots. Indeed, air travel has become so ubiquitous in the 21st century that one woman, Alexis Alford, visited all 196 countries before the age of 21.</p>

                    <h2>Our Motivation</h2>
                    <p>Reasons for traveling include recreation,[4] holidays,[5] tourism[4] or vacationing,[4] research travel,[4] the gathering of information, visiting people, volunteer travel for charity, migration to begin life somewhere else, religious pilgrimages[4] and mission trips, business travel,[4] trade,[4] commuting, and other reasons, such as to obtain health care[4] or waging or fleeing war or for the enjoyment of traveling. Travelers may use human-powered transport such as walking or bicycling; or vehicles, such as public transport, automobiles, trains, ferries, boats, cruise ships and airplanes.
                        Motives for travel include:
                    </p>
                    <ul>
                        <li>Pleasure</li>
                        <li>Relaxation</li>
                        <li>Discovery and exploration</li>
                        <li>Intercultural communications</li>
                        <li>Taking personal time for building interpersonal relationships.</li>
                        <li>Avoiding stress</li>
                        <li>Forming memories</li>
                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;