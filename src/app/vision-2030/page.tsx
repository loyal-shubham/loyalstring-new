import React from "react";
import { Metadata } from "next";

import Hero from "./components/Hero";
import IntroMission from "./components/IntroMission";
import Ecosystem from "./components/Ecosystem";
import CoreTechnologies from "./components/CoreTechnologies";
import SparkleCaseStudy from "./components/SparkleCaseStudy";
import EngineeringTrust from "./components/EngineeringTrust";
import RoadmapAndPeople from "./components/RoadmapAndPeople";
import LeadershipClosing from "./components/LeadershipClosing";

export const metadata: Metadata = {
  title: "Vision 2030 | LoyalString",
  description: "LoyalString's roadmap to evolve into a globally recognised technology organisation—building scalable digital platforms and intelligent solutions.",
  keywords: "LoyalString Vision 2030, Enterprise Software, Artificial Intelligence, Robotics and Automation, RFID, IoT, Data Intelligence, Cloud Platforms",
};

export default function Vision2030Page() {
  return (
    <main className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden max-w-full">
      <Hero />
      <IntroMission />
      <Ecosystem />
      <CoreTechnologies />
      <SparkleCaseStudy />
      <EngineeringTrust />
      <RoadmapAndPeople />
      <LeadershipClosing />
    </main>
  );
}
