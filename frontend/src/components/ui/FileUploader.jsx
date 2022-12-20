import { useState, useRef } from "react";

const defaultProps = {
  disabled: false,
  multiple: false,
  minSize: 1,
  maxSize: 5120000, // 5kb
  maxFiles: 1,
  label: "Drag and drop files into this box or click to upload",
};

const filesValidation = ({ files, multiple, minSize, maxSize, maxFiles }) => {
  if (
    (!multiple && files.length > 1) ||
    (multiple && maxFiles > 1) ||
    files.length > maxFiles
  ) {
    return false;
  }
  return files.every((file) => {
    return file.size >= minSize && file.size <= maxSize;
  });
};

export default function FileUploader(props = {}) {
  const {
    disabled,
    multiple,
    minSize,
    maxSize,
    maxFiles,
    label,
    filesUploaderCB,
  } = {
    ...defaultProps,
    ...props,
  };
  const inputRef = useRef();
  const [file, setFile] = useState(null);

  const handleUploadBtn = () => {
    inputRef.current.click();
  };

  const handleFileUploads = (event) => {
    event.preventDefault();
    const file = inputRef.current?.files[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      if (isMounted.current) {
        setPetImage(objectUrl);
        // event.target.src = objectUrl;
      }
    }
  };

  return (
    <>
      <div className={"p-5"}>
        <p className='mb-5'>
          Please upload a photo of a single pet. Our facial recognition
          technology will scan your photo for possible pet matches.
        </p>
        <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 p-6 mx-auto '>
          <div className='space-y-1 text-center'>
            <ImagePlaceHolder />
            <div className='text-sm text-gray-600'>
              {/* <p>Drag and drop a single pet image into this box or</p> */}
              <p>{label}</p>

              <button
                type='button'
                className='inline-flex justify-center px-4 py-2 text-base font-medium text-orange-500 bg-transparent  focus:outline-none sm:text-sm'
                onClick={handleUploadBtn}
              >
                Upload
              </button>
            </div>
            <input
              ref={inputRef}
              id='inputFile'
              type='file'
              name='inputFile'
              title='upload Pet image'
              accept='image/*'
              multiple={multiple}
              className='hidden'
              onChange={handleFileUploads}
            />
            ;
          </div>
        </div>
      </div>
      ;
    </>
  );
}
