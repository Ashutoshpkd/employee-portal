import React, { useState } from "react";
import styled from "styled-components";

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: #1e1e1e;
  background-color: #ffffff;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  font-size: 1rem;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  resize: vertical;
  color: #1e1e1e;
  background-color: #ffffff;
`;

function Dropdown({ placeholder }) {
  const [strength, setStrength] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <Select value={strength} onChange={(e) => setStrength(e.target.value)}>
        <option value="">Select a competency</option>
        <option value="Innovative">Innovative</option>
        <option value="Problem Solving">Problem Solving</option>
        <option value="Collaboration">Collaboration</option>
        <option value="Driving Force">Driving Force</option>
        <option value="Decision Making">Decision Making</option>
        <option value="Continuous Learning">Continuous Learning</option>
        <option value="Quality Focus">Quality Focus</option>
        <option value="Global Prospect">Global Prospect</option>
        <option value="Risk Management">Risk Management</option>
        <option value="Communication">Communication</option>
      </Select>

      <TextArea
        placeholder={placeholder}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </>
  );
}

export default Dropdown;
