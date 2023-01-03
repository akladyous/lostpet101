import { Fragment, useState, useCallback, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ImagePlaceHolder } from "../../../../assets/images/icons/ImagePlaceHolder.jsx";
import dogIcon from "../../../../assets/images/icons/3.png";
import { Image } from "../../../../components/ui/Image.jsx";

const filesValidation = (files, minSize, maxSize) => {
  if (
    files.length === 1 ||
    files[0].size >= minSize ||
    files[0].size <= maxSize
  ) {
    return files[0];
  } else {
    return false;
  }
};

export default function PetImageLoader({ open, setOpen, uploadImageCB }) {
  const [petImage, setPetImage] = useState(null);
  const isMounted = useRef(false);
  const inputRef = useRef();

  const handleUploadBtn = useCallback(() => {
    petInputImageRef.current.click();
  });

  const addFile = useCallback(
    (file) => {
      if (isMounted) {
        setFile(file);
      }
    },
    [file]
  );
  const removeFile = useCallback(
    (file) => {
      if (isMounted) {
        setFile(undefined);
      }
    },
    [file]
  );

  const handleFilesUpload = (event) => {
    event.preventDefault();

    const file = filesValidation(event.target.files, 1, 5120000);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      if (isMounted.current) {
        setPetImage(objectUrl);
        // event.target.src = objectUrl;
      }
    }
  };

  useEffect(() => {
    isMounted.current = true;

    return function () {
      isMounted.current = false;
    };
  }, [petImage]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6'>
                <div>
                  <div className='absolute top-0 right-0 hidden pt-4 pr-4 sm:block'>
                    <button
                      type='button'
                      className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      onClick={() => setOpen(false)}
                    >
                      <span className='sr-only'>Close</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                  </div>
                  {/* ----------------------- */}
                  <div className={"mt-3 text-center sm:mt-5"}>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-gray-900'
                    >
                      {petImage ? "Pet Image" : "Upload Pet Photo"}
                    </Dialog.Title>

                    {/* --------------------------------------------------------------------- */}
                    {petImage ? (
                      <img src={petImage} />
                    ) : (
                      <div className={"p-5"}>
                        <p className='mb-5'>
                          Please upload a photo of a single pet. Our facial
                          recognition technology will scan your photo for
                          possible pet matches.
                        </p>
                        <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 p-6 mx-auto '>
                          <div className='space-y-1 text-center'>
                            <ImagePlaceHolder />
                            <div className='text-sm text-gray-600'>
                              <p>
                                Drag and drop files into this box or click to
                                upload
                              </p>
                              <button
                                type='button'
                                className='inline-flex justify-center px-4 py-2 text-base font-medium text-orange-500 bg-transparent  focus:outline-none sm:text-sm'
                                onClick={(e) => {
                                  inputRef.current.click();
                                }}
                              >
                                Upload
                              </button>
                              {/* <p className='pl-1'>from your computer.</p> */}
                            </div>
                            <input
                              type='file'
                              ref={inputRef}
                              accept='image/*'
                              multiple={false}
                              className='hidden'
                              onChange={handleFilesUpload}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    {/* --------------------------------------------------------------------- */}
                  </div>
                </div>
                <div className='mt-5 sm:mt-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm'
                    onClick={() => setOpen(false)}
                  >
                    Go back to dashboard
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
