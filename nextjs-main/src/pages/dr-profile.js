import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CarouselComponent from './components/Carousel';
import SessionCheck from './components/sessionCheck';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Session from './components/session';
const { Fragment } = require("react");

function DrP() {

  return (
    <Fragment>
      <Session />

      <div className='bg-gray-900 text-white'>
        <title>Home</title>
        <div className="flex justify-between items-center py-4 px-8">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/images/resize.png" alt="Logo" width={200} height={200} />
            </Link>
            <Link href="/" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Home</Link>
            <Link href="/dr-profile" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Doctor Profile</Link>
            <Link href="/ambulance-details" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">Ambulance Details</Link>
            <Link href="/ghq" className="ml-4 text-lg font-bold text-gray-200 hover:text-gray-400">General Health Query</Link>
          </div>

          <div className="flex items-center">
            <Link href="logout" className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600">Logout</Link>
          </div>
        </div>
      </div>

      <main>

        <h1 className="text-xl font-bold">Doctor Profile</h1>

        <div>
          <h3>Dr. Raihan Rabbani</h3>
          <h4>Speciality : <span>Senior Consultant, Internal Medicine</span></h4>
          <h4>Degree : <span>MBBS, FCPS, US Board Certified in Internal Medicine</span></h4>
          <h4>Contact : <span>01645217852</span></h4>
        </div>

        <div>
          <h3>Dr. Shihan Mahmud Redwanul Huq</h3>
          <h4> Speciality : <span>Associate Consultant, Internal Medicine & ICU</span></h4>
          <h4> Degree : <span>MBBS, MRCP (UK), MRCPE, Fellowship in Intensive Care Medicine (India)</span></h4>
          <h4>Contact : <span>0168740126</span></h4>
        </div>

        <div>
          <h3>Dr. Tasnova Mahin</h3>
          <h4> Speciality : <span>Associate Consultant, Internal Medicine</span></h4>
          <h4> Degree : <span> MBBS, FCPS (Medicine), MRCP</span></h4>
          <h4>Contact : <span>01741201536</span></h4>
        </div>

        <div>
          <h3>Dr. Jahangir Alam </h3>
          <h4> Speciality : <span>Senior Consultant, Internal Medicine and Diabetes</span></h4>
          <h4> Degree : <span>MBBS (DMC), MRCP (UK), FRCP (Edin)</span></h4>
          <h4>Contact : <span>01874563210</span></h4>
        </div>

        <div>
          <h3> Prof. Dr. Md. Abu Bakar</h3>
          <h4>Speciality : <span>Senior Consultant - Internal Medicine</span></h4>
          <h4>Degree : <span>MBBS, FCPS (Internal Medicine), FACP (USA), FRCP (Edin)</span></h4>
          <h4>Contact : <span>01789654123</span></h4>
        </div>

        <div>
          <h3>Dr. Pratik Dewan</h3>
          <h4>Speciality : <span>Consultant, Internal Medicine and Endocrinology</span></h4>
          <h4>Degree : <span>MBBS, DEM, MD (Internal Medicine), BIRDEM Academy</span></h4>
          <h4>Contact : <span>01732140122</span></h4>
        </div>

        <div>
          <h3>Dr. Deepankar Kumar Basak </h3>
          <h4>Speciality : <span>Consultant, Internal Medicine</span></h4>
          <h4>Degree : <span>MBBS (DMC), FCPS (Internal Medicine)</span></h4>
          <h4>Contact : <span>01687456321</span></h4>
        </div>

        <div>
          <h3> Dr. Rozana Rouf</h3>
          <h4>Speciality : <span>Associate Consultant, Internal Medicine</span></h4>
          <h4>Degree : <span>MBBS, FCPS</span></h4>
          <h4>Contact : <span>01745120358</span></h4>
        </div>

        <div>
          <h3> Dr. Farzana Shumy</h3>
          <h4> Speciality : <span>Associate Consultant- Rheumatology and Internal Medicine</span></h4>
          <h4>Degree : <span> FCPS (Medicine), MRCP (UK), MD (Rheumatology)</span></h4>
          <h4>Contact : <span>01774569852</span></h4>
        </div>



      </main>

    </Fragment>
  )

}
export default DrP;