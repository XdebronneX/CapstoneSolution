import React from 'react';
import monte from '../assets/images/monte.jpg';
import frans from '../assets/images/frans.jpg';
import nov from '../assets/images/nov.jpg';
import daniel from '../assets/images/daniel.jpg';

const Footer = () => {
    return (
        <div className="surface-0 py-8">
            <div className="text-900 font-bold text-6xl mb-4 text-center">Meet the Developers</div>
            <div className="text-700 text-xl mb-8 text-center line-height-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam eligendi quos.
            </div>

            <div className="grid">
                <div className="col-12 lg:col-3 text-center">
                    <img src={monte} alt="Monte" className="w-6rem h-6rem mb-3 shadow-3" style={{ borderRadius: '50%' }} />
                    <div className="text-900 font-medium text-xl mb-2">Elija Reigne Monterona</div>
                    <div className="text-800">Fullstack Mobile Developer</div>
                    <hr className="my-3 mx-0 border-top-1 border-300" />
                </div>

                <div className="col-12 lg:col-3 text-center">
                    <img src={frans} alt="Frans" className="w-6rem h-6rem mb-3 shadow-3" style={{ borderRadius: '50%' }} />
                    <div className="text-900 font-medium text-xl mb-2">Frans Adryhel Mnalangit</div>
                    <div className="text-800">Fullstack Mobile Developer</div>
                    <hr className="my-3 mx-0 border-top-1 border-300" />
                </div>

                <div className="col-12 lg:col-3 text-center">
                    <img src={nov} alt="Nov" className="w-6rem h-6rem mb-3 shadow-3" style={{ borderRadius: '50%' }} />
                    <div className="text-900 font-medium text-xl mb-2">Novemger Pascua</div>
                    <div className="text-800">Fullstack Web Developer</div>
                    <hr className="my-3 mx-0 border-top-1 border-300" />
                </div>

                <div className="col-12 lg:col-3 text-center">
                    <img src={daniel} alt="Daniel" className="w-6rem h-6rem mb-3 shadow-3" style={{ borderRadius: '50%' }} />
                    <div className="text-900 font-medium text-xl mb-2">Daniel Angelo Rodriguez</div>
                    <div className="text-800">Fullstack Web Developer</div>
                    <hr className="my-3 mx-0 border-top-1 border-300" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
