import React from "react";

const ContactUs = () => {
  return (
    <div className="surface-0 text-center">
      <div className="grid">
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-3 mb-3 inline-block"
            style={{ borderRadius: '65%' }}
          >
            <i className="pi pi-phone text-4xl font-bold text-white-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Call</div>
          <span className="text-700 line-height-3 font-bold text-primary">
            0936-0514-715 <br />
            0935-2713-954
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "65px" }}
          >
            <i className="pi pi-envelope text-4xl font-bold text-white-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium ">Email Us</div>
          <span className="text-700 line-height-3 font-bold text-primary">
            {" "}
            capstone.solutions24@gmail.com
          </span>
        </div>
        <div className="col-12 md:col-4 mb-4 px-5">
          <span
            className="p-3 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "65px" }}
          >
            <i className="pi pi-map-marker text-4xl font-bold text-white-500"></i>
          </span>
          <div className="text-900 text-xl mb-3 font-medium">Main Office</div>
          <span className="text-700 line-height-3 font-bold text-primary">Taguig City</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;