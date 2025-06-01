import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f9fafb;
  color: #1e1e1e;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin: 2rem 0 1rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const DropdownContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 0.95rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: #f8fafc;
  color: #374151;
`;

const Table = styled.table`
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #e5e7eb;
`;

const Th = styled.th`
  padding: 0.75rem;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid #f1f5f9;
  color: #374151;
`;

export default function IDPDevelopment() {
  const modules = [
    {
      title: "Innovation",
      items: [
        "Design Thinking Basics",
        "Fostering a Culture of Innovation",
        "Creative Ideation Techniques",
        "From Idea to Impact",
      ],
    },
    {
      title: "Problem Solving",
      items: [
        "Root Cause Analysis",
        "Structured Problem Solving",
        "Thinking in Systems",
        "Solving Real-World Challenges",
      ],
    },
    {
      title: "Collaboration",
      items: [
        "High-Trust Teams",
        "Cross-Functional Collaboration",
        "Collaborate with Clarity",
        "Working Across Boundaries",
      ],
    },
    {
      title: "Driving Force",
      items: [
        "Taking Ownership at Work",
        "Influence Without Authority",
        "Leading from the Front",
        "Proactive Execution",
      ],
    },
    {
      title: "Decision Making",
      items: [
        "Smart Decision-Making",
        "Data-Informed Judgement",
        "Managing Trade-offs",
        "Decide with Confidence",
      ],
    },
    {
      title: "Continuous Learning",
      items: [
        "Building a Learning Mindset",
        "Self-Driven Growth",
        "Upskilling with Purpose",
        "Adapting to Change",
      ],
    },
    {
      title: "Quality Focus",
      items: [
        "Doing It Right First Time",
        "Precision in Execution",
        "Attention to Detail",
        "Review & Feedback Loops",
      ],
    },
    {
      title: "Global Perspective",
      items: [
        "Working Across Cultures",
        "Global Business Basics",
        "Communicating Across Time Zones",
        "Cultural Intelligence",
      ],
    },
    {
      title: "Risk Management",
      items: [
        "Identifying Workplace Risks",
        "Decision-Making Under Uncertainty",
        "Mitigating Project Risks",
        "Risk-Aware Thinking",
      ],
    },
    {
      title: "Communication",
      items: [
        "Clear & Concise Messaging",
        "Communicating with Impact",
        "Active Listening Skills",
        "Business Communication Essentials",
      ],
    },
  ];

  const [selections, setSelections] = useState({});
  const [tableData, setTableData] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (title, value) => {
    setSelections((prev) => ({
      ...prev,
      [title]: value,
    }));

    const updatedTableData = [...tableData];
    updatedTableData.push({ title, value });

    setTableData((prev) => {
      if (prev.length === 2) {
        setDisabled(true);
      }
      return updatedTableData;
    });
  };

  return (
    <Container>
      <Title>Individual Development Plan</Title>
      <SectionTitle>
        Playlist (
        <a
          style={{
            color: "darkblue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Link to samsung university
        </a>
        )
      </SectionTitle>

      <Grid>
        {modules.map((module, index) => (
          <DropdownContainer key={index}>
            <Label htmlFor={module.title}>{module.title}</Label>
            <Select
              id={module.title}
              value={selections[module.title] || ""}
              onChange={(e) => handleChange(module.title, e.target.value)}
              disabled={disabled}
            >
              <option value="">Select a module</option>
              {module.items.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </Select>
          </DropdownContainer>
        ))}
      </Grid>

      <SectionTitle>IDP</SectionTitle>
      <Table>
        <Thead>
          <tr>
            <Th>Competency</Th>
            <Th>Module</Th>
            <Th>Date</Th>
          </tr>
        </Thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <Td>{row.title}</Td>
              <Td>{row.value}</Td>
              <Td></Td>
            </tr>
          ))}
        </tbody>
      </Table>

      <button
        onClick={() => {}}
        style={{
          marginTop: "2rem",
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
        Submit
      </button>

      <button
        onClick={() => {}}
        style={{
          marginTop: "2rem",
          backgroundColor: "#2563eb",
          color: "#ffffff",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: "600",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          display: "block",
          marginLeft: "auto",
        }}
      >
        Click here to download complete report
      </button>
    </Container>
  );
}
