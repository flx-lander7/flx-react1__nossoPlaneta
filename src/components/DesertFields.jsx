import React from 'react';

const DesertFields = () => {
  return (
    <div id='desert-fields' className='grid sm:grid-cols-2'>
      <div className='relative'>
        <a href='https://youtu.be/XmtXC_n6X6Q'>
          <img
            src='https://raw.githubusercontent.com/flx-lander7/flx-react1__nossoPlaneta/main/public/img/desert-fields.png'
            alt=''
          />
        </a>
        <div className='play-icon'>
          <a href='https://youtu.be/XmtXC_n6X6Q'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={0.25}
              stroke='white'
              className='w-24 h-24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z'
              />
            </svg>
          </a>
        </div>
      </div>
      <div className='mb-7'>
        <h2 className='title'>Desertos</h2>
        <p className=''>
          Câmeras acompanham elefantes do deserto à procura de alimento, bisões
          vagando pelas pradarias da América do Norte e lagartas desfrutando da
          boa vida no subterrâneo.
        </p>

        <a className='btn' href='https://youtu.be/XmtXC_n6X6Q' target='_blank'>
          <button type='button'>Assistir no Youtube</button>
        </a>
      </div>
    </div>
  );
};

export default DesertFields;
