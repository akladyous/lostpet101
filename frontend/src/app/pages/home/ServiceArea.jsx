import { Container } from '../../../components/ui/Container.jsx';
import service_icon_1 from '../../../assets/images/service/service_icon_1.png';
import service_icon_2 from '../../../assets/images/service/service_icon_2.png';
import service_icon_3 from '../../../assets/images/service/service_icon_3.png';
const services = [
  {
    title: 'Pet Boarding',
    content:
      'Create a free lost or found pet listing that is emailed faxed to over 25 local shelters, vets and rescue groups.',
    href: service_icon_1,
  },
  {
    title: 'Free Listing',
    content:
      'Speak with neighbors, about your missing pet.Put your lost pet flyer in local vet offices and other community establishments.',
    href: service_icon_2,
  },
  {
    title: 'Flyer Generator',
    content:
      'Create a lost or found pet flyer with all pertinent information will make it easy to help tracking down your pet.',
    href: service_icon_3,
  },
];

export default function ServiceArea() {
  return (
    <Container className="py-8 text-center">
      {/* <div className='container mx-auto mt-10 bg-slate-400'> */}
      <div className="py-11">
        <h1 className="mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-600 sm:text-7xl">
          Services{' '}
          <span className="relative whitespace-nowrap text-slate-900">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-orange-600"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">for every dog</span>
          </span>{' '}
        </h1>
        <p className="mx-auto mt-12 max-w-2xl text-xl tracking-tight text-slate-500">
          Match with highly rated local dog boarding kennels near you
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10">
        {services.map((service, idx) => {
          return (
            <div
              key={idx}
              className="flex h-full flex-col items-center justify-items-center  rounded-xl border border-orange-200 py-14 px-7 transition-all duration-300 ease-linear hover:border-none hover:shadow-lg"
            >
              <div className="relative mb-5 h-[145px] w-[165px] bg-service-icon bg-cover bg-no-repeat object-center">
                <img
                  className="absolute top-0 left-0 translate-x-1/2 translate-y-1/2 transform"
                  // src={require(`../../../assets/images/service/service_icon_${
                  //     idx + 1
                  // }.png`)}
                  src={service.href}
                  alt="service"
                />
              </div>
              <h3 className="mb-5 text-3xl font-medium">{service.title}</h3>
              <p className=" text-slate-500">{service.content}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
