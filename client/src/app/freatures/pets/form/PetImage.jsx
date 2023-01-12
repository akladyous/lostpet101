import { useState, useEffect, useRef } from "react";
import { ImagePlaceHolder } from "../../../../assets/images/icons/ImagePlaceHolder.jsx";

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

export default function PetImage() {
  const [petImage, setPetImage] = useState(null);
  const isMounted = useRef(false);
  const inputRef = useRef();

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
    <section className='p-5 md:p-10 '>
      <h1 className='text-md md:text-3xl font-bold tracking-tight mb-2'>
        Upload Pet Photo
      </h1>
      <p className='mb-5'>
        Please upload a photo of a single pet. Our facial recognition technology
        will scan your photo for possible pet matches.
      </p>
      <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 p-6 mx-auto '>
        {petImage ? (
          <>
            <img src={petImage} className=' max-h-60 rounded-lg' />
          </>
        ) : (
          <div className='space-y-1 text-center '>
            <ImagePlaceHolder />
            <div className='text-sm text-gray-600'>
              <p>Drag and drop files into this box or click to upload</p>
              <button
                type='button'
                className='inline-flex justify-center px-4 py-2 text-base font-medium text-orange-500 bg-transparent  focus:outline-none sm:text-sm'
                onClick={(e) => {
                  inputRef.current.click();
                }}
              >
                Upload
              </button>
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
        )}
      </div>
      <div className='flex items-center justify-between'>
        <div></div>
        <button
          type='button'
          className='mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto'
          onClick={() => setOpen(true)}
        >
          Next
        </button>
      </div>
    </section>
  );
}
