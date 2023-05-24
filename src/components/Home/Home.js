import Cards from "./Cards";
import AboutSection from "./AboutSection";
import MeetTeam from "./MeetTeam";
import Join from "./Join";


const Home = () => {
    return (
        <div>
           <AboutSection/>
           <Cards/>
           <MeetTeam/>
           <Join/>
        </div>
    );
};

export default Home;