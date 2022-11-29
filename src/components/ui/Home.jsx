import Navbar from './home/Navbar.jsx'
import SlideArea from './home/SlideArea.jsx'
import ServiceArea from './home/ServiceArea.jsx'

export default function Home() {
    return (
        <div className="home-page vh-100 vw-100">
            <Navbar />
            <SlideArea />
            <ServiceArea />
        </div>
    )
}
