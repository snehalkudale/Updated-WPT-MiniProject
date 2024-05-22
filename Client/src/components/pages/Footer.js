import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text' color='white' style={{ backgroundColor: 'rgba(6, 6, 7, 0.2)' }} bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4 d-flex justify-content-center'>
            <Link to='https://www.facebook.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='facebook-f' />
              </div>
            </Link>

            <Link to='https://www.twitter.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='twitter' />
              </div>
            </Link>

            <Link to='https://www.google.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='google' />
              </div>
            </Link>

            <Link to='https://www.instagram.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='instagram' />
              </div>
            </Link>

            <Link to='https://www.linkedin.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='linkedin-in' />
              </div>
            </Link>

            <Link to='https://www.github.com' className='m-1' target='_blank' rel='noopener noreferrer'>
              <div className='circle-icon'>
                <MDBIcon fab icon='github' />
              </div>
            </Link>
        </section>

        <style jsx>{`
          .circle-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 60%;
            border: 2px solid lightgray;
            color: lightgray;
            font-size: 20px;
          }
          
          .circle-icon:hover {
            color: white;
            background-color: lightgray;
          }
        `}</style>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2' color='light'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol >
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4' color='light'>
          <p>
          Unveiling clarity, one truth at a time. Explore our curated collection of articles, 
          uncovering hidden truths and shedding light on the world around us. 
          Join our community dedicated to fostering open dialogue and critical thinking. 
          Together, let's seek truth, challenge assumptions, and navigate the complexities of our reality with honesty and integrity."
          </p>
        </section>

        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(26, 20, 146, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://truthlens.com/'>
          Truthlense.com
        </a>
      </div>
    </MDBFooter>
  );
}