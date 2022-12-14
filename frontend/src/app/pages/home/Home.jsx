import SlideArea from './SlideArea.jsx';
import ServiceArea from './ServiceArea.jsx';
import PetCare from './PetCare.jsx';
import TeamArea from './TeamArea.jsx';
// import Alerta from '../../../components/ui/Alerta.jsx';
// import BouncingLoader from '../../../components/ui/BouncingLoader.jsx';

export default function Home() {
    return (
        <div className="home">
            <SlideArea />
            <ServiceArea />
            <PetCare />
            <TeamArea />
        </div>
    );
}
