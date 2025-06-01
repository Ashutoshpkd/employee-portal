// components/Profile.js
import CompetencyTable from "@/components/CompetencyTable";
import IDPTable from "@/components/IDPTable";
import React from "react";
import styled from "styled-components";

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background: #f3f6fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  gap: 3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 2rem 3rem;
  border-radius: 1.25rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 700px;
  gap: 2.5rem;
`;

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 2.5px solid #c7cdd9;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const InfoItem = styled.div`
  font-size: 1rem;
  color: #3b3b3b;

  span {
    font-weight: 600;
    color: #1a1a1a;
  }
`;

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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ProfileTab = () => {
  return (
    <Main>
      <ProfileCard>
        <ImageContainer>
          <Image src="Ruchika.jpeg" alt="Profile" />
        </ImageContainer>
        <Info>
          <InfoItem>
            <span>Name:</span> Ruchika Chamedia
          </InfoItem>
          <InfoItem>
            <span>Title Band (TB):</span> 7
          </InfoItem>
          <InfoItem>
            <span>Current Role:</span> Reporting Manager
          </InfoItem>
          <InfoItem>
            <span>Total Learning Hours (FY):</span> 18
          </InfoItem>
        </Info>
      </ProfileCard>

      <Section>
        <SectionTitle>Learning & Training Summary</SectionTitle>
        <TextContainer>
          <InfoItem>
            <span>Completed Courses:</span> M1 - Strategic Thinking, M2 -
            Problem Solving, M3 - Innovation @Scale
          </InfoItem>
          <InfoItem>
            <span>Training Sessions Attended:</span> M1 - Manager Bootcamp, M2 -
            Behavioral Calibration Workshop
          </InfoItem>
        </TextContainer>
      </Section>

      <CompetencyTable />
      <IDPTable />
    </Main>
  );
};

export default ProfileTab;
