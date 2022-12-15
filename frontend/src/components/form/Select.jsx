/*
<Select
    fieldName="report_type"
    handleChange={formik.setFieldValue}
    currentValue={formik.values['report_type']}
    options={formFields[0].input.options}
/>
*/

import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Select(props) {
    const { fieldName, currentValue, handleChange, options } = props || {};

    const [selected, setSelected] = useState('');

    return (
        <Listbox
            name={fieldName}
            value={selected}
            as="div"
            onChange={(selectItem) => {
                handleChange(fieldName, selectItem);
                setSelected.call(void 0, selectItem);
            }}
        >
            {(props) => {
                const { open } = props;
                console.log('Listbox props : ', props);
                return (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700">
                            Assigned to
                        </Listbox.Label>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative h-12 w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                <span className="block truncate capitalize">
                                    {selected.name}
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((option) => (
                                        <Listbox.Option
                                            key={option.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active
                                                        ? 'bg-indigo-600 text-white'
                                                        : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                                )
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'block truncate'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active
                                                                    ? 'text-white'
                                                                    : 'text-indigo-600',
                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                            )}
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                );
            }}
        </Listbox>
    );
}
