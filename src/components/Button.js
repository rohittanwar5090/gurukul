import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export function Button() {
  
  return (
    <>
      <Helmet>
        <title>
        PayFee
        </title>
        <meta name="robots" content="index, follow" />
        <meta
          content="Honor Above All "
          name="description"
        />
        <meta
          content="Honor Above All "
          property="og:title"
        />
        <meta
          content="Honor Above All "
          property="og:description"
        />

        {
          /**
            <meta
          content=""
          property="og:image"
      />
           */
        }
        <meta
          content="Honor Above All "
          property="twitter:title"
        />
        <meta
          content="Honor Above All "
          property="twitter:description"
        />        
        <meta property="og:type" content="website" />
      </Helmet>
      <Link to='Pay'>
      <button className='btn bg-gradient-to-r from-[#025091] to-[#71C5EE]'>Pay Fee</button>
    </Link>
    </>
    
  );
}
