import React from "react";
import JobDuties from "./JobDuties";

const JobInfo = ({ initialData, page }) => {
  const { company, title, dates, duties } = initialData[page];
  return (
    <article>
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>

      <JobDuties duties={duties} />
    </article>
  );
};

export default JobInfo;
