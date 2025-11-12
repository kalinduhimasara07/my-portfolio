import React from "react";
import { Section } from "./common/Section";
import { userProfile } from "../data/userProfile";

export const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 leading-relaxed">
          {userProfile.summary}
        </p>
      </div>
    </Section>
  );
};