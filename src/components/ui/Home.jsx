import Navbar from './home/Navbar.jsx'
import SlideArea from './home/SlideArea.jsx'
import ServiceArea from './home/ServiceArea.jsx'
import PetCare from './home/PetCare.jsx'
import TeamArea from './home/TeamArea.jsx'

export default function Home() {
    return (
        <div className="home-page vh-100 vw-100">
            <Navbar />
            <SlideArea />
            <ServiceArea />
            <PetCare />
            <TeamArea />

        </div>
    )
}
