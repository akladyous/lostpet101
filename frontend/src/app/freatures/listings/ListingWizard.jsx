import { useFormWizard } from '../../../components/form/formWizard/useFormWizard.jsx';
import WizardContainerComponent from '../../../components/form/formWizard/WizardContainerComponent.jsx';
import NewPet from '../pets/NewPet.jsx';
import NewReport from '../reports/NewReport.jsx';

export default function ListingWizard() {
    const { currentIndex, lastIndex, next, previous } = useFormWizard({
        titles: ['report details', 'pet details'],
    });
    return (
        <div className="content min-h-screen">
            <div>
                <h3 className="my-5 text-center text-3xl">Listing</h3>
            </div>
            <div>
                <WizardContainerComponent
                    currentIndex={currentIndex.current}
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
