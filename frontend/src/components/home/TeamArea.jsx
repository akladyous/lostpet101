import { Link } from 'react-router-dom'
export default function TeamArea() {
    return (
        <div className="mx-0 bg-team-area bg-cover bg-center h-[25rem] flex flex-col justify-between py-20">
            <div className="text-center text-white">
                <h2 className='text-6xl mb-3'>Pet Finder</h2>
            </div>
            {/* <div>
                <p className='text-xl px-40 pb-3'>
                    If you are interested in listing your pets on our site, please click here . Once you send us the information we need, we will get you signed up in the system and let you know how to access the site and post your animals!
                    <br />
                </p>
            </div> */}
            <div className='text-center text-white'>
                <p className='text-lg'>
                    Because we know that even the best technology is only as good as the people behind it. 24/7 tech support.
                </p>
            </div>
            <div className="text-center">
                <Link
                    to='users/signup'
                    state={'Contact Us'}
                    className='btn-secondary px-8 py-3 text-lg'
                >
                    Contact Us
                </Link>
            </div>
        </div>
    )
}
