import React from "react";

type Props = {
  steps: string[];
  nowStep: number;
};

function StepsList({ steps, nowStep }: Props) {
  return (
    <div className="relative mb-10 py-4">
      <ul className="flex justify-between">
        {steps.map((step, index: number) => {
          return (
            <React.Fragment key={index}>
              <li className={`step ${index + 1 > nowStep && "step--none"}`}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </li>
              {index + 1 !== steps.length && (
                <li className="step-line">
                  <span></span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default StepsList;
