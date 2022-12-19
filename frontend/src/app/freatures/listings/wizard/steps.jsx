import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";
import NewPet from "../pets/NewPet.jsx";
import NewReport from "../reports/NewReport.jsx";

const steps = [
  { name: "Step 1", href: "/", status: "complete" },
  { name: "Step 2", href: "/", status: "current" },
  { name: "Step 3", href: "/", status: "upcoming" },
  { name: "Step 4", href: "/", status: "upcoming" },
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
        <NewReport />
      </WizardContainerComponent>
    </>
  );
}
