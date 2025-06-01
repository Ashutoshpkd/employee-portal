import React, { useState } from "react";
import styled from "styled-components";

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
  margin-bottom: 0.5rem;
`;

const SectionText = styled.p`
  font-size: 1rem;
  color: #2e2e2e;
  margin-bottom: 1.5rem;
  line-height: 1.7;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`;

const BulletList = styled.ul`
  padding-left: 1rem;
`;

const Bullet = styled.li`
  margin-bottom: 0.75rem;
  color: #374151;
  line-height: 1.6;
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

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  background-color: white;
  color: black;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  font-size: 1rem;
  padding: 0.75rem;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  resize: vertical;
  background-color: white;
  color: black;
`;

export default function Assessment() {
  const [rating, setRating] = useState("");
  const [reason, setReason] = useState("");

  return (
    <Container>
      <Title>Innovation</Title>

      <div>
        <SectionTitle>Definition:</SectionTitle>
        <SectionText>
          Actively questions current processes by creating intellectual property
          through research and implements that in new ideas to save cost and
          time. Not only collaborates while brainstorming but also
          guides/mentors peers, establishing a culture of open communication.
        </SectionText>
      </div>

      <div>
        <SectionTitle>Behavioral Indicators:</SectionTitle>
        <Grid>
          <BulletList>
            <Bullet>Challenges legacy systems to innovate</Bullet>
            <Bullet>Contributes to patents and publications</Bullet>
            <Bullet>Delivers measurable innovation impact</Bullet>
            <Bullet>Designs transformative frameworks or platforms</Bullet>
            <Bullet>Leads/participates in ideation & hackathons</Bullet>
          </BulletList>
          <BulletList>
            <Bullet>Applies emerging technologies effectively</Bullet>
            <Bullet>Fosters culture of experimentation</Bullet>
            <Bullet>Builds tools or automation for innovation velocity</Bullet>
            <Bullet>Iterates quickly based on feedback</Bullet>
            <Bullet>Solves systemic bottlenecks innovatively</Bullet>
          </BulletList>
        </Grid>
      </div>

      <InputSection>
        <Label>Innovation</Label>
        <InputGrid>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="5">5 (Does not meet)</option>
            <option value="4">4 (Meets sometimes)</option>
            <option value="3">3 (Meets)</option>
            <option value="2">2 (Exceeds sometimes)</option>
            <option value="1">1 (Exceeds most times)</option>
          </Select>
          <TextArea
            placeholder="Write the reason for the rating you selected, please write specific details in the format of STAR (Situation, Task, Action, Result) framework"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
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
