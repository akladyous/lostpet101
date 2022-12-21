import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";
import NewPet from "../pets/NewPet.jsx";
import NewReport from "../reports/NewReport.jsx";
import PetImage from "../pets/form/PetImage.jsx";

const steps = [
  { name: "Step 1", href: "/", status: "complete", data: null },
  { name: "Step 2", href: "/", status: "current", data: null },
  { name: "Step 3", href: "/", status: "upcoming", data: null },
];

export default function Steps() {
  const { currentIndex, lastIndex, next, previous } = useFormWizard({
    steps: steps,
  });
  return (
    <>
      <WizardContainerComponent
        currentIndex={currentIndex}
        lastIndex={lastIndex.current}
        next={next}
        previous={previous}
      >
        <NewPet />
        <PetImage />
        <NewReport />
      </WizardContainerComponent>
    </>
  );
}
