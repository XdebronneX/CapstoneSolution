import React from "react";

const Technologies = () => {
  return (
    <div className="surface-0 text-center py-8">
      <div className="mb-6 font-bold text-3xl">
        <span className="text-900">Technologies we use </span>
        <span className="text-primary">MERN</span>
      </div>
      <div className="text-700 mb-8 text-xl">
        Cutting-edge tools and technologies that power our solutions.
      </div>
      <div className="grid grid-nogutter justify-content-center">
        <div className="col-12 md:col-3 mb-4 px-5 flex flex-column align-items-center">
          <span
            className="p-4 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px", backgroundColor: "#f5f5f5" }}
          >
            <i className="pi pi-database text-5xl text-green-600"></i>
          </span>
          <div className="text-900 text-xl mb-2 font-medium">MongoDB</div>
          <span className="text-700 line-height-3">NoSQL database for modern apps.</span>
        </div>
        <div className="col-12 md:col-3 mb-4 px-5 flex flex-column align-items-center">
          <span
            className="p-4 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px", backgroundColor: "#f5f5f5" }}
          >
            <i className="pi pi-globe text-5xl text-gray-800"></i>
          </span>
          <div className="text-900 text-xl mb-2 font-medium">Express.js</div>
          <span className="text-700 line-height-3">
            Backend framework for building scalable web applications.
          </span>
        </div>
        <div className="col-12 md:col-3 mb-4 px-5 flex flex-column align-items-center">
          <span
            className="p-4 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px", backgroundColor: "#f5f5f5" }}
          >
            <i className="pi pi-star text-5xl text-blue-600"></i>
          </span>
          <div className="text-900 text-xl mb-2 font-medium">React.js</div>
          <span className="text-700 line-height-3">Frontend library for building user interfaces.</span>
        </div>
        <div className="col-12 md:col-3 mb-4 px-5 flex flex-column align-items-center">
          <span
            className="p-4 shadow-2 mb-3 inline-block"
            style={{ borderRadius: "10px", backgroundColor: "#f5f5f5" }}
          >
            <i className="pi pi-cloud text-5xl text-green-600"></i>
          </span>
          <div className="text-900 text-xl mb-2 font-medium">Node.js</div>
          <span className="text-700 line-height-3">
            Server-side platform for building scalable network applications.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
