import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 700px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #203562;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const Th = styled.th`
  background-color: #e4ebf5;
  padding: 0.75rem;
  border: 1px solid #d0d7e2;
  text-align: center;
  font-weight: 600;
  color: #203562;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #d0d7e2;
  text-align: center;
  font-size: 0.95rem;
  color: #2e3a59;
`;

const CompetencyTable = () => {
  const data = [
    {
      competency: "Innovation",
      y2021: 3,
      y2022: 3,
      y2023: 4,
      y2024: 4,
      y2025: 4,
    },
    {
      competency: "Problem Solving",
      y2021: 4,
      y2022: 4,
      y2023: 3,
      y2024: 3,
      y2025: 4,
    },
    {
      competency: "Risk Management",
      y2021: 2,
      y2022: 3,
      y2023: 4,
      y2024: 3,
      y2025: 3,
    },
    {
      competency: "Collaboration",
      y2021: 3,
      y2022: 3,
      y2023: 3,
      y2024: 4,
      y2025: 3,
    },
    {
      competency: "Communication",
      y2021: 5,
      y2022: 5,
      y2023: 4,
      y2024: 4,
      y2025: 4,
    },
    {
      competency: "Decision Making",
      y2021: 3,
      y2022: 3,
      y2023: 3,
      y2024: 3,
      y2025: 4,
    },
    {
      competency: "Driving Force",
      y2021: 3,
      y2022: 3,
      y2023: 3,
      y2024: 4,
      y2025: 4,
    },
    {
      competency: "Global Perspective",
      y2021: 2,
      y2022: 2,
      y2023: 3,
      y2024: 4,
      y2025: 4,
    },
    {
      competency: "Continuous Learning",
      y2021: 4,
      y2022: 4,
      y2023: 4,
      y2024: 4,
      y2025: 4,
    },
    {
      competency: "Quality Focus",
      y2021: 4,
      y2022: 4,
      y2023: 4,
      y2024: 5,
      y2025: 5,
    },
  ];

  return (
    <Section>
      <SectionTitle>Competency Ratings across Years (TB5 → TB6)</SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th>Competency</Th>
            <Th>
              TB5
              <br />
              2021
            </Th>
            <Th>
              TB5
              <br />
              2022
            </Th>
            <Th>
              TB6
              <br />
              2023
            </Th>
            <Th>
              TB6
              <br />
              2024
            </Th>
            <Th>
              TB6
              <br />
              2025
            </Th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <Td>{row.competency}</Td>
              <Td>{row.y2021}</Td>
              <Td>{row.y2022}</Td>
              <Td>{row.y2023}</Td>
              <Td>{row.y2024}</Td>
              <Td>{row.y2025}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default CompetencyTable;
