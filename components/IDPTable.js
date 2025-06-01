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

const LinkWrapper = styled.div`
  margin-top: 28px;
  text-align: center;
  font-size: 0.95rem;
  color: darkblue;
  text-decoration: underline;
  text-align: left;
`;

const IDPTable = () => {
  const idpData = [
    {
      competency: "Innovation",
      module: "Managing Innovation",
      link: "https://learning.srib.com/innovation", // Replace with actual link
      percent: "100%",
    },
    {
      competency: "Quality Focus",
      module: "Quality Assurance",
      link: "https://learning.srib.com/quality", // Replace with actual link
      percent: "50%",
    },
    {
      competency: "Driving Force",
      module: "Driving for Results",
      link: "https://learning.srib.com/driving", // Replace with actual link
      percent: "85%",
    },
  ];

  return (
    <Section>
      <SectionTitle>This Year’s IDP</SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th>Competency</Th>
            <Th>Module</Th>
            <Th>Link</Th>
            <Th>Percent of Completion</Th>
          </tr>
        </thead>
        <tbody>
          {idpData.map((item, index) => (
            <tr key={index}>
              <Td>{item.competency}</Td>
              <Td>{item.module}</Td>
              <Td>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.percent === "100%"
                    ? "Download certificate"
                    : "View course"}
                </a>
              </Td>
              <Td>{item.percent}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <LinkWrapper>
        <a href="https://random.com" target="_blank" rel="noopener noreferrer">
          Click here to view past data
        </a>
      </LinkWrapper>
    </Section>
  );
};

export default IDPTable;
