import { useState, useRef, useCallback } from "react";

const defaultProps = {
  disabled: false,
  multiple: false,
  minSize: 1,
  maxSize: 5120000, // 5kb
  maxFiles: 1,
  label: "Drag and drop files into this box or click to upload",
};

const fileValidation = ({ files, minSize, maxSize }) => {
  if (
    files.length === maxFiles ||
    files[0].size >= minSize ||
    files[0].size <= maxSize
  ) {
    return files[0];
  } else {
    return false;
  }
};

export default function FileUploader(props = {}) {
  const { disabled, multiple, minSize, maxSize, label, fileUploaderCB } = {
    ...defaultProps,
    ...props,
  };
  const inputRef = useRef();
  const [file, setFile] = useState(null);

  const handleUploadBtn = useCallback(() => {
    inputRef.current.click();
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

  const handleFileUploads = (event) => {
    event.preventDefault();
    const uploadedFile = fileValidation(event.target.files, minSize, maxSize);
    if (uploadedFile) {
      const objectUrl = URL.createObjectURL(uploadedFile);
      addFile(objectUrl);
      fileUploaderCB(uploadedFile);
      // if (isMounted.current) {
      //   setFile(objectUrl);
      //   fileUploaderCB(uploadedFile);
      // }
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
              disabled={disabled}
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
