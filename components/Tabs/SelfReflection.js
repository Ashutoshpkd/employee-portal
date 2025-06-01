import React from "react";
import styled from "styled-components";
import Dropdown from "../InputSection";

const Container = styled.div`
  max-width: 900px;
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
  margin-bottom: 1rem;
`;

const List = styled.ol`
  padding-left: 1.25rem;
  color: #2e2e2e;
`;

const Bullet = styled.li`
  margin-bottom: 1rem;
  line-height: 1.7;
`;

const InputSection = styled.div`
  margin-top: 2.5rem;
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 0 1px #e5e7eb;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1f2937;
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 1rem;
  align-items: start;
`;

export default function SelfReflection() {
  return (
    <Container>
      <Title>🧠 Guidelines for Self-Reflection</Title>

      <SectionTitle>Instructions:</SectionTitle>
      <List>
        <Bullet>
          Select <strong>3 strengths</strong> and{" "}
          <strong>3 areas of improvement</strong> based on your personal
          reflection.
        </Bullet>
        <Bullet>
          Do not automatically choose your{" "}
          <strong>lowest-rated competencies</strong> as areas of improvement.
        </Bullet>
        <Bullet>
          Focus on competencies that are most relevant to your{" "}
          <strong>current role</strong> and{" "}
          <strong>future career aspirations</strong>. Choose areas that, if
          improved, would enhance your effectiveness, impact, or readiness for
          the next level.
        </Bullet>
      </List>

      <InputSection>
        <Label>Areas of Strengths</Label>
        <InputGrid>
          <Dropdown placeholder="Write why you consider this a strengths — include examples or situations that demonstrate your capability." />
        </InputGrid>

        <InputGrid>
          <Dropdown placeholder="Write why you consider this a strengths — include examples or situations that demonstrate your capability." />
        </InputGrid>

        <InputGrid>
          <Dropdown placeholder="Write why you consider this a strengths — include examples or situations that demonstrate your capability." />
        </InputGrid>
      </InputSection>

      <InputSection>
        <Label>Areas of Weakness</Label>
        <InputGrid>
          <Dropdown placeholder="Write why you consider this a weakness — include examples or situations that demonstrate your capability." />
        </InputGrid>

        <InputGrid>
          <Dropdown placeholder="Write why you consider this a weakness — include examples or situations that demonstrate your capability." />
        </InputGrid>

        <InputGrid>
          <Dropdown placeholder="Write why you consider this a weakness — include examples or situations that demonstrate your capability." />
        </InputGrid>
      </InputSection>

      <button
        onClick={() => setIsAssesmentStarted(true)}
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
    </Container>
  );
}
