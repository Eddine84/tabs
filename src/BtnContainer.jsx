import React from "react";

const BtnContainer = ({ initialData, handleClick, page }) => {
  return (
    <div className="btn-conainer">
      {initialData.map(({ company }, index) => {
        return (
          <button
            className={page === index ? "job-btn active-btn" : "job-btn"}
            key={crypto.randomUUID()}
            onClick={() => {
              handleClick(index);
            }}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
