// components/Profile.js
import React, { useState } from "react";
import styled from "styled-components";
import SelfEvaluation from "@/components/Tabs/SelfEvaluation";
import SelfReflection from "@/components/Tabs/SelfReflection";
import IDPDevelopment from "@/components/Tabs/IDPDevelopment";
import ProfileTab from "@/components/Tabs/ProfileTab";

const TabContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 80vh;
`;

const TabHeaders = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f3f6fc;
  display: flex;
  width: 100%;
  max-width: 900px;
  border-bottom: 2px solid #cbd5e1;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ active }) => (active ? "#ffffff" : "#f3f6fc")};
  border: none;
  border-bottom: ${({ active }) =>
    active ? "4px solid #203562" : "4px solid transparent"};
  color: ${({ active }) => (active ? "#203562" : "#4f5b71")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e9edf5;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  width: 100vw;
  background: #f3f6fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileTab />;
      case "Self Evaluation":
        return <SelfEvaluation />;
      case "Self Reflection":
        return <SelfReflection />;
      case "IDP Development":
        return <IDPDevelopment />;
      default:
        return null;
    }
  };

  return (
    <Main>
      <TabContainer>
        <TabHeaders>
          {[
            "Profile",
            "Self Evaluation",
            "Self Reflection",
            "IDP Development",
          ].map((tab) => (
            <TabButton
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </TabHeaders>
        {renderTabContent()}
      </TabContainer>
    </Main>
  );
};

export default Profile;
