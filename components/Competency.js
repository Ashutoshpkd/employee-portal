import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: auto;
  line-height: 1.8;
  color: #1e1e1e;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #111111;
  margin-bottom: 1.5rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2e2e2e;
  margin-bottom: 0.75rem;
`;

const List = styled.ol`
  padding-left: 1.25rem;
  color: #333333;
`;

const Bullet = styled.li`
  margin-bottom: 0.75rem;
`;

const Note = styled.p`
  background-color: #f3f4f6;
  padding: 1rem;
  border-left: 4px solid #3b82f6;
  margin-top: 1rem;
  font-style: italic;
  color: #2a2a2a;
`;

export default function Guide() {
  return (
    <Container>
      <Title>📝 Guide for Competency Assessment</Title>

      <Section>
        <SectionTitle>🔄 Competency Assessment Process</SectionTitle>
        <List>
          <Bullet>
            <strong>Step 1:</strong> Self Assessment
          </Bullet>
          <Bullet>
            <strong>Step 2:</strong> First-Line Manager Review & Approval
          </Bullet>
          <Bullet>
            <strong>Step 3:</strong> Second-Line Manager Review & Approval
          </Bullet>
        </List>
      </Section>

      <Section>
        <SectionTitle>👤 How to Conduct Self-Assessment</SectionTitle>
        <List>
          <Bullet>
            Read the definitions and behavioral indicators of each competency
            before selecting a level.
          </Bullet>
          <Bullet>
            Provide a rationale using the <strong>STAR framework</strong>{" "}
            (Situation, Task, Action, Result).
          </Bullet>
          <Bullet>
            Click <strong>Submit</strong> to complete your assessment for all 10
            competencies.
          </Bullet>
          <Bullet>
            Click <strong>Save for Later</strong> to store progress in your
            inbox and resume anytime.
          </Bullet>
          <Bullet>
            If your manager requests revision, align expectations through
            discussion before resubmitting.
          </Bullet>
        </List>
      </Section>

      <Section>
        <SectionTitle>👨‍💼 How Managers Conduct Review</SectionTitle>
        <List>
          <Bullet>
            Review definitions and behavioral indicators before rating each
            competency.
          </Bullet>
          <Bullet>
            Ensure the participant has provided a STAR-based rationale for each
            level.
          </Bullet>
          <Bullet>
            Feedback is highly recommended if:
            <ul>
              <li>You assign Level 4 or 5</li>
              <li>Your rating differs from the participant's</li>
            </ul>
          </Bullet>
          <Bullet>
            Second-line managers and participants can view each other's
            rationale and ratings.
          </Bullet>
          <Bullet>
            Click <strong>Send Back</strong> if rationale is insufficient.
            Request clarification and resubmission.
          </Bullet>
        </List>
      </Section>

      <Note>
        This guide is intended to ensure clarity, alignment, and fairness in the
        competency assessment process.
      </Note>
    </Container>
  );
}
