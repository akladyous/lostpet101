import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";

import { petSchema } from "../pets/form/petSchema.jsx";
import NewPet from "../pets/NewPet.jsx";
import { reportSchema } from "../reports/form/reportSchema.jsx";
import NewReport from "../reports/NewReport.jsx";

export default function Steps() {
  const { currentIndex, lastIndex, next, previous } = useFormWizard({
    steps: [petSchema.info, reportSchema.info],
  });
  return (
    <>
      <WizardContainerComponent
        currentIndex={currentIndex}
        lastIndex={lastIndex.current}
        next={next}
        previous={previous}
      >
        <NewPet schema={petSchema} />
        <NewReport schema={reportSchema} />
      </WizardContainerComponent>
    </>
  );
}
