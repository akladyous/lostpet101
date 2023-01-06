import { useFormSteps } from '../../../../components/form/formWizard/useFormSteps.jsx';
import FormStpesProvider from '../../../../components/form/formWizard/FormStpesProvider.jsx';
import Decorative from './Decorative.jsx';
import { reportInitialValues } from '../../reports/form/reportSchema.jsx';
import { petIntialValues } from '../../pets/form/petSchema.jsx';
import NewPet from '../../pets/NewPet.jsx';
import NewReport from '../../reports/NewReport.jsx';
import Preview from './Preview.jsx';

const steps = [
  { name: 'report', title: '', href: '#', status: 'upcoming' },
  { name: 'pet', title: '', href: '#', status: 'upcoming' },
  { name: 'preview', title: '', href: '#', status: 'upcoming' },
];

export default function ListingWizard() {
  const { currentStep, ...rest } = useFormSteps({
    steps: steps,
    initialValues: [reportInitialValues, petIntialValues],
  });

  return (
    <>
      <div className="max-w-7xl mx-auto md:my-20 my-10 py-10">
        <div className="relative px-8 text-center md:text-start">
          <h1 className="text-warm-gray-900 text-4xl font-bold tracking-tight text-orange-600 sm:text-5xl lg:text-6xl">
            Listing Report
          </h1>
          <p className="text-warm-gray-500 my-5 max-w-3xl text-xl">
            Let us take care of the rest so you can have some peace of mind that
            you are doing all that you can to bring your pet home safely
          </p>
          <Decorative />
        </div>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:space-x-8">
          <FormStpesProvider currentStep={currentStep} {...rest}>
            <NewReport initialValues={reportInitialValues} />
            <NewPet initialValues={petIntialValues} />
            <Preview />
          </FormStpesProvider>
        </main>
      </div>
    </>
  );
}
