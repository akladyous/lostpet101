import { useFormSteps } from '../../../components/form/formWizard/useFormSteps.jsx';
import FormStpesProvider from '../../../components/form/formWizard/FormStpesProvider.jsx';

import { reportInitialValues } from '../reports/form/reportSchema.jsx';
import { petIntialValues } from '../pets/form/petSchema.jsx';
import NewPet from '../pets/NewPet.jsx';
import NewReport from '../reports/NewReport.jsx';
function Final(props) {
  debugger;
  return (
    <div>
      <h4>state data</h4>
      <pre className="text-xs">
        {JSON.stringify(props.getState, undefined, 2)}
      </pre>
    </div>
  );
}

// ----------------------------------------------------------------------------------
const steps = [
  { name: 'report', href: '#', status: 'upcoming' },
  { name: 'pet', href: '#', status: 'upcoming' },
  { name: 'preview', href: '#', status: 'upcoming' },
];
// ----------------------------------------------------------------------------------
export default function Steps() {
  const { currentStep, ...rest } = useFormSteps({
    steps: steps,
    initialValues: [reportInitialValues, petIntialValues],
  });

  return (
    <>
      <FormStpesProvider currentStep={currentStep} {...rest}>
        <NewReport initialValues={reportInitialValues} />
        <NewPet initialValues={petIntialValues} />
        <Final />
      </FormStpesProvider>
    </>
  );
}
