import React from 'react';
import BucketGirl from "../../assets/images/bucketgirl.png"

const Landing = () => {
    return (

        <div className='relative'>
            <div class="hero h-screen lg:h-[60vh] bg-accent relative z-10">
                <div class="hero-content flex-col lg:flex-row">
                    <div>
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200"> Best Quality </p>
                        <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="text-4xl font-bold"> Professional Cleaning <br /> Service  </h1>
                        <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" class="py-6 max-w-xl">Validation of cleaning procedures has generated considerable discussion since agency documents, including the Inspection Guide for Bulk Pharmaceutical Chemicals and the Biotechnology Inspection Guide, have briefly addressed this issue. These Agency documents clearly establish the expectation that cleaning procedures (processes) be validated.</p>
                        <button data-aos="zoom-in" data-aos-delay="1100" class="btn btn-primary">Get Started</button>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200" className='h-[47vh]'>
                        <img src={BucketGirl} className="max-w-sm h-full" alt='' />
                    </div>
                </div>
            </div>

            <div className='shadow-lg p-10 w-11/12 rounded-xl mx-auto bg-base-100 mt-[-50px] relative z-20'>
                <h1 className='text-2xl mb-5'> Get Free Estimate </h1>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary mt-5'> Request a quotes </button>
            </div>
        </div>

    );
};

export default Landing;