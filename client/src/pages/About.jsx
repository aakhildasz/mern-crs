import React from "react";

export default function About() {
  return (
    <div className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About CRS Portal
      </h1>
      <p className="mb-4 text-slate-700 text-justify">
        Welcome to CRS Portal, your trusted platform for reporting and tracking
        crime incidents in your community. Our mission is to provide a secure
        and efficient way for citizens to report crimes and stay informed about
        safety issues.
      </p>
      <p className="mb-4 text-slate-700 text-justify">
        Our portal allows you to submit detailed reports, upload evidence, and
        receive updates on the status of your case. We work closely with law
        enforcement agencies to ensure that your reports are handled promptly
        and effectively.
      </p>
      <p className="mb-4 text-slate-700 text-justify">
        Join us in making our community safer by reporting any suspicious
        activities or crimes you witness. Together, we can create a safer
        environment for everyone.
      </p>
    </div>
  );
}
