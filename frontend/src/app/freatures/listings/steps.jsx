import { useFormSteps } from '../../../components/form/formWizard/useFormSteps.jsx';
import FormStpesProvider from '../../../components/form/formWizard/FormStpesProvider.jsx';

import { reportInitialValues } from '../reports/form/reportSchema.jsx';
import { petIntialValues } from '../pets/form/petSchema.jsx';
import NewPet from '../pets/NewPet.jsx';
import NewReport from '../reports/NewReport.jsx';
import Preview from './Preview.jsx';

const steps = [
  { name: 'report', title: '', href: '#', status: 'upcoming' },
  { name: 'pet', title: '', href: '#', status: 'upcoming' },
  { name: 'preview', title: '', href: '#', status: 'upcoming' },
];

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
        <Preview />
      </FormStpesProvider>
    </>
  );
}
