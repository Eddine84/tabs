import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const JobDuties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty) => (
        <div className="job-desc" key={crypto.randomUUID()}>
          <FaAngleDoubleRight className="job-icon" />
          <p> {duty}</p>
        </div>
      ))}
    </div>
  );
};

export default JobDuties;
