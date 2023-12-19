import React from 'react'
import "../styles/home.css";
import teachingImg from '../images/img0.png'
import teachingImg1 from '../images/img1.png'
import teachingImg2 from '../images/img2.png'
import teachingImg3 from '../images/img3.png'

function Home() {
  return (
    <div className='flexbody'>
        <div className='flexbody-container'>
            <div className='flexbody-container-h1'>
                <h1>
                    "It's not about being good at something. It's about being good to yourself.”
                </h1>
            </div>
        </div>
        <div className='flexbody-main'>
            <h1>Our Services</h1>
            <div className='flex-body-row'>
                <div className='flexbody-col1'>
                    {/* hello */}
                </div>
                <div className='flexbody-col3'>
                    <div className='flexbody-col3-card'>
                        <div className='flexbody-card-img'>
                            <img src={teachingImg} alt='teaching image'width='70%'/>
                        </div>
                        <div className='flexbody-card-text'>
                            <h2>Guru Shishya Teaching</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flexbody-col3-card'>
                        <div className='flexbody-card-img'>
                            <img src={teachingImg1} alt='teaching image'width='70%'/>
                        </div>
                        <div className='flexbody-card-text'>
                            <h2>TEACHER TRAINING</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className='flexbody-col4'>

                </div>
                <div className='flexbody-col3 flexbody-left'>
                    <div className='flexbody-col3-card'>
                        <div className='flexbody-card-img'>
                            <img src={teachingImg2} alt='teaching image'width='50%'/>
                        </div>
                        <div className='flexbody-card-text'>
                            <h2>STUDIO CLASSES</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className='flexbody-col3-card'>
                        <div className='flexbody-card-img'>
                            <img src={teachingImg3} alt='teaching image'width='50%'/>
                        </div>
                        <div className='flexbody-card-text'>
                            <h2>LIFE COACHING</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
                <div className='flexbody-col1'>
                {/* hello */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home