import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";
import NewPet from "../pets/NewPet.jsx";
import NewReport from "../reports/NewReport.jsx";

const steps = [
    { name: "Step 1", href: "#", status: "complete" },
    { name: "Step 2", href: "#", status: "current" },
    { name: "Step 3", href: "#", status: "upcoming" },
    { name: "Step 4", href: "#", status: "upcoming" },
];
// import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
export default function ListingWizard() {
    const { currentIndex, lastIndex, next, previous } = useFormWizard({
        steps: steps,
    });
    return (
        <div className='mt-10'>
            {/* <div className="grid grid-cols-12">
                <div className="col-span-12 px-2 md:col-span-8">

                </div>
                <div className="col-span-4 mx-auto hidden px-2 md:block">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis doloribus harum aliquam sunt illum qui impedit
                    officiis, at eaque nesciunt debitis quia deserunt, obcaecati
                    recusandae necessitatibus fuga vel eligendi aut!
                </div>
            </div> */}
            <svg
                className='absolute inset-0 h-full w-full'
                width={343}
                height={388}
                viewBox='0 0 343 388'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                    fill='url(#linear1)'
                    fillOpacity='.1'
                />
                <defs>
                    <linearGradient
                        id='linear1'
                        x1='254.553'
                        y1='107.554'
                        x2='961.66'
                        y2='814.66'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#fff' />
                        <stop offset={1} stopColor='#fff' stopOpacity={0} />
                    </linearGradient>
                </defs>
            </svg>
            <div>
                <WizardContainerComponent
                    currentIndex={currentIndex}
                    lastIndex={lastIndex.current}
                    next={next}
                    previous={previous}
                >
                    <NewPet />
                    <NewReport />
                </WizardContainerComponent>
            </div>
        </div>
    );
}
