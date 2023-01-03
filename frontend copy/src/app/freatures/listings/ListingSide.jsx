export default function ListingSide() {
  return (
    <div
      className={
        "relative overflow-hidden bg-gradient-to-b from-orange-400 to-orange-500 py-10 px-6 sm:px-10 md:rounded-tl-2xl md:rounded-bl-2xl xl:p-12"
      }
    >
      {/* Decorative angle backgrounds */}
      <div
        className='pointer-events-none absolute inset-0 sm:hidden'
        aria-hidden='true'
      >
        <svg
          className='absolute inset-0 h-full w-full'
          width={343}
          height={388}
          viewBox='0 0 343 388'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
            fill='url(#linear1)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear1'
              x1='254.553'
              y1='107.554'
              x2='961.66'
              y2='814.66'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden'
        aria-hidden='true'
      >
        <svg
          className='absolute inset-0 h-full w-full'
          width={359}
          height={339}
          viewBox='0 0 359 339'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
            fill='url(#linear2)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear2'
              x1='192.553'
              y1='28.553'
              x2='899.66'
              y2='735.66'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className='pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block'
        aria-hidden='true'
      >
        <svg
          className='absolute inset-0 h-full w-full'
          width={160}
          height={678}
          viewBox='0 0 160 678'
          fill='none'
          preserveAspectRatio='xMidYMid slice'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
            fill='url(#linear3)'
            fillOpacity='.1'
          />
          <defs>
            <linearGradient
              id='linear3'
              x1='192.553'
              y1='325.553'
              x2='899.66'
              y2='1032.66'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#fff' />
              <stop offset={1} stopColor='#fff' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ----------------------------------------------------- */}
      <dl className={"space-y-4"}>
        <dt>
          <span className='text-lg font-medium text-slate-50'>Pet Care</span>
        </dt>
        <dd className='flex text-base text-indigo-50'>
          <svg
            className='h-8 w-8 flex-shrink-0'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='dog'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'
            data-fa-i2svg=''
          >
            <path
              fill='currentColor'
              d='M332.7 19.85C334.6 8.395 344.5 0 356.1 0C363.6 0 370.6 3.52 375.1 9.502L392 32H444.1C456.8 32 469.1 37.06 478.1 46.06L496 64H552C565.3 64 576 74.75 576 88V112C576 156.2 540.2 192 496 192H426.7L421.6 222.5L309.6 158.5L332.7 19.85zM448 64C439.2 64 432 71.16 432 80C432 88.84 439.2 96 448 96C456.8 96 464 88.84 464 80C464 71.16 456.8 64 448 64zM416 256.1V480C416 497.7 401.7 512 384 512H352C334.3 512 320 497.7 320 480V364.8C295.1 377.1 268.8 384 240 384C211.2 384 184 377.1 160 364.8V480C160 497.7 145.7 512 128 512H96C78.33 512 64 497.7 64 480V249.8C35.23 238.9 12.64 214.5 4.836 183.3L.9558 167.8C-3.331 150.6 7.094 133.2 24.24 128.1C41.38 124.7 58.76 135.1 63.05 152.2L66.93 167.8C70.49 182 83.29 191.1 97.97 191.1H303.8L416 256.1z'
            ></path>
          </svg>
          <span className='ml-3'>
            Let us take care of the rest so you can have some peace of mind that
            you are doing all that you can to bring your pet home safely
          </span>
        </dd>
        <dt>
          <span className='text-lg font-medium text-slate-50'>
            Submit a Report
          </span>
        </dt>
        <dd className='flex text-base text-indigo-50'>
          <svg
            className='h-8 w-8 flex-shrink-0'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='users'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
            data-fa-i2svg=''
          >
            <path
              fill='currentColor'
              d='M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z'
            ></path>
          </svg>
          <span className='ml-3'>
            Fill out our grant-report form to show how your grant has helped the
            pets in your care.
          </span>
        </dd>
        <dt>
          <span className='text-lg font-medium text-slate-50'>
            Buttonwood, California
          </span>
        </dt>
        <dd className='flex text-base text-indigo-50'>
          <svg
            className='h-8 w-8 flex-shrink-0'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z' />
            <path d='M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z' />
          </svg>

          <span className='ml-3'>
            Reach out to us with any questions you may still have. We're here to
            help and do what we can to reunite you with your lost dog or cat
          </span>
        </dd>

        <dt>
          <span className='text-lg font-medium text-slate-50'>
            Listing Report
          </span>
        </dt>
        <dd className='flex text-base text-indigo-50'>
          <svg
            className='h-8 w-8 flex-shrink-0'
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='hands-holding-child'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 640 512'
            data-fa-i2svg=''
          >
            <path
              fill='currentColor'
              d='M279.1 40C279.1 17.91 297.9 0 319.1 0C342.1 0 360 17.91 360 40C360 62.09 342.1 80 319.1 80C297.9 80 279.1 62.09 279.1 40zM375.8 253C377.5 266.2 368.1 278.2 354.1 279.8C341.8 281.5 329.8 272.1 328.2 258.1L323.8 223.1H316.2L311.8 258.1C310.2 272.1 298.2 281.5 285 279.8C271.9 278.2 262.5 266.2 264.2 253L275.3 164.3L255.5 180.1C245.4 189.6 230.2 188.3 221.7 178.2C213.1 168 214.4 152.9 224.5 144.3L252.4 120.7C271.3 104.8 295.3 96 320 96C344.7 96 368.7 104.8 387.6 120.7L415.5 144.3C425.6 152.9 426.9 168 418.3 178.2C409.8 188.3 394.6 189.6 384.5 180.1L364.7 164.3L375.8 253zM39.1 64C62.09 64 79.1 81.91 79.1 104V264.2C79.1 281.2 86.74 297.5 98.74 309.5L149.8 360.6C158.1 368.9 171.1 370.1 180.8 363.7C193.7 355 195.5 336.8 184.6 325.8L137.4 278.6C124.9 266.1 124.9 245.9 137.4 233.4C149.9 220.9 170.1 220.9 182.6 233.4L255.2 305.9C276.2 326.9 288 355.4 288 385.1V464C288 490.5 266.5 512 240 512H173.3C156.3 512 140 505.3 128 493.3L28.12 393.4C10.11 375.4 0 350.1 0 325.5V104C0 81.91 17.91 64 40 64L39.1 64zM640 104V325.5C640 350.1 629.9 375.4 611.9 393.4L512 493.3C499.1 505.3 483.7 512 466.7 512H400C373.5 512 352 490.5 352 464V385.1C352 355.4 363.8 326.9 384.8 305.9L457.4 233.4C469.9 220.9 490.1 220.9 502.6 233.4C515.1 245.9 515.1 266.1 502.6 278.6L455.4 325.8C444.5 336.8 446.3 355 459.2 363.7C468.9 370.1 481.9 368.9 490.2 360.6L541.3 309.5C553.3 297.5 560 281.2 560 264.2V103.1C560 81.91 577.9 63.1 600 63.1C622.1 63.1 640 81.91 640 103.1L640 104z'
            ></path>
          </svg>
          <span className='ml-3'>
            Fill out our grant-report form to show how your grant has helped the
            pets in your care.
          </span>
        </dd>
      </dl>
    </div>
  );
}
