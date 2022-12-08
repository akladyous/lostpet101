import { Container } from "../Container.jsx";
import { Link } from 'react-router-dom'

export default function PetCare() {
    return (
        <Container>
            <div className="grid grid-col-1 border border-orange-200 rounded-xl md:border-none md:grid-cols-2">
                <div className="">
                    <div className="">
                        <img src={require('../../assets/images/about/pet_care.png')} alt="" />
                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start md:py-36 h-full">
                    <h2 className='text-3xl font-medium tracking-tight text-slate-600 md:text-4xl py-1'>
                        We care your pet
                    </h2>
                    <h1 className='text-5xl font-semibold tracking-tight text-slate-600 md:text-7xl py-3'>
                        As you care
                    </h1>
                    <p className="py-3 text-center md:text-start">
                        Help reuniting lost pets by placing lost and
                        found pet flyers in your neghbourhood.
                        <br />
                        Supporting our mission, we collaborate with Pet finder to help ensure more animals find their forever homes.
                        {/* Get your pet home sooner. */}
                    </p>
                    <div className="py-5">
                        <Link to='users/about'
                            state={'About Us'}
                            className="btn-primary px-9 text-lg"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}
