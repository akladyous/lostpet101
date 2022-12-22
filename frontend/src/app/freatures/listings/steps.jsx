import { useFormWizard } from "../../../components/form/formWizard/useFormWizard.jsx";
import WizardContainerComponent from "../../../components/form/formWizard/WizardContainerComponent.jsx";

import { petSchema } from "../pets/form/petSchema.jsx";
import NewPet from "../pets/NewPet.jsx";
import { reportSchema } from "../reports/form/reportSchema.jsx";
import NewReport from "../reports/NewReport.jsx";
function Final() {}

const steps = [
  { name: "report", href: "#", status: "upcoming" },
  { name: "pet", href: "#", status: "upcoming" },
  { name: "preview", href: "#", status: "upcoming" },
];

export default function Steps() {
  const stepsProp = useFormWizard({
    steps: steps,
    data: {
      pet: petSchema.initialValues,
      report: reportSchema.initialValues,
    },
  });

  return (
    <>
      <WizardContainerComponent {...stepsProp}>
        <NewPet schema={petSchema} {...stepsProp} />
        <NewReport schema={reportSchema} {...stepsProp} />
        <Final />
      </WizardContainerComponent>
    </>
  );
}
