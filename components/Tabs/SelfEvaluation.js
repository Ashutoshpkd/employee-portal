import React, { useState } from "react";
import Guide from "../Competency";
import Assessment from "../Assessment"; // Replace with actual path if different

export default function SelfEvaluation() {
  const [isAssesmentStarted, setIsAssesmentStarted] = useState(false);

  return (
    <div>
      {!isAssesmentStarted ? (
        <>
          <Guide />
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button
              onClick={() => setIsAssesmentStarted(true)}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Start Assessment
            </button>
          </div>
        </>
      ) : (
        <Assessment />
      )}
    </div>
  );
}
