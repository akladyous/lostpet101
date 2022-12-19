import React from "react";

export default function PetImage() {
  return (
    <div className='p-5 md:p-10'>
      <h1 className='text-md md:text-3xl font-bold tracking-tight mb-2'>
        Upload Pet Photo
      </h1>
      <p className='mb-5'>
        Please upload a photo of a single pet. Our facial recognition technology
        will scan your photo for possible pet matches.
      </p>
      <div className='flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 p-6 mx-auto '>
        <div className='space-y-1 text-center'>
          <svg
            className='mx-auto h-12 w-12 text-gray-400 md:h-[12rem]'
            stroke='currentColor'
            fill='none'
            viewBox='0 0 48 48'
            aria-hidden='true'
          >
            <path
              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <div className='text-sm text-gray-600'>
            <p>.JPG .JPEG .PNG</p>
            <p>Drag and drop a single pet image into this box or</p>
            <input
              id='file-upload'
              name='file-upload'
              type='file'
              className='sr-only'
            />
            <p className='pl-1'>upload from your computer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
