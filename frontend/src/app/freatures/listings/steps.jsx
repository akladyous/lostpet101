import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";

import { petSchema } from "../pets/form/petSchema.jsx";
import NewPet from "../pets/NewPet.jsx";
import { reportSchema } from "../reports/form/reportSchema.jsx";
import NewReport from "../reports/NewReport.jsx";
import StepsNav from "../../../components/form/formWizard/StepsNav.jsx";
function Final() {}

const stepsInfo = [
  { name: "Step 1", href: "#" },
  { name: "Step 2", href: "#" },
  { name: "Step 3", href: "#" },
];

export default function Steps() {
  const stepsProp = useFormWizard({ steps: stepsInfo });
  // {firstStep, lastStep, currentStep, next, previous, setCurrentStatus}

  return (
    <>
      <StepsNav steps={stepsProp.steps} />
      <WizardContainerComponent stepsProp={stepsProp}>
        <NewPet schema={petSchema} />
        <NewReport schema={reportSchema} />
        <Final />
      </WizardContainerComponent>
    </>
  );
}
