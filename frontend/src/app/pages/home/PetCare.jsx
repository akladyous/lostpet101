import { Container } from "../../../components/ui/Container.jsx";
import { Link } from "react-router-dom";
import pet_care from "../../../assets/images/about/pet_care.png";
export default function PetCare() {
    return (
        <Container>
            <div className='grid-col-1 grid rounded-xl border border-orange-200 md:grid-cols-2 md:border-none'>
                <div className=''>
                    <div className=''>
                        <img src={pet_care} alt='pet-care' />
                    </div>
                </div>
                <div className='flex h-full flex-col items-center md:items-start md:py-36'>
                    <h2 className='py-1 text-3xl font-medium tracking-tight text-slate-600 md:text-4xl'>
                        We care your pet
                    </h2>
                    <h1 className='py-3 text-5xl font-semibold tracking-tight text-slate-600 md:text-7xl'>
                        As you care
                    </h1>
                    <p className='py-3 text-center md:text-start'>
                        Help reuniting lost pets by placing lost and found pet
                        flyers in your neghbourhood.
                        <br />
                        Supporting our mission, we collaborate with Pet finder
                        to help ensure more animals find their forever homes.
                        {/* Get your pet home sooner. */}
                    </p>
                    <div className='py-5'>
                        <Link
                            to='users/about'
                            state={"About Us"}
                            className='btn-primary px-9 text-lg'
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
