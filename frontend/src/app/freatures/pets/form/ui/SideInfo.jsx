import dogPlaceHolder from "../../../../../assets/images/banner/golden_retriever.jpeg";
import Image from "../../../../../components/ui/Image.jsx";

export default function SideInfo() {
    return (
        <div className='relative overflow-hidden md:rounded-tl-xl md:rounded-bl-xl md:p-5'>
            <div className='flex flex-col justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'>
                <div className='_space-y-1 text-center opacity-80'>
                    <Image
                        sourceImage={"image"}
                        fallBackImage={dogPlaceHolder}
                        alt='dog-placeholder'
                        className='h-full wh-full'
                    />
                </div>
                <button className='rounded-lg border-orange-500 p-2 bg-slate-200'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6 inline-block text-orange-500'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
                        />
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
                        />
                    </svg>
                    {" upload"}
                </button>
            </div>
        </div>
    );
}
/*

<div className='flex text-sm text-gray-600'>
                        <label
                            htmlFor='file-upload'
                            className='relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500'
                        >
                            <span>Upload a file</span>
                            <input
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                className='sr-only'
                            />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs text-gray-500'>
                        PNG, JPG, GIF up to 10MB
                    </p>
*/
