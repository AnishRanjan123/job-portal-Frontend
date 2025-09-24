import { Divider } from "@mantine/core";

import { useState } from "react";
import Jobs from "../components/FindJobs/Jobs";
import SearchBar from "../components/FindTalent/SearchBar";
import TalentCard from "../components/FindTalent/TalentCard";
import Talents from "../components/FindTalent/Talent";

const FindTalentPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <SearchBar />
      <Divider size="sm" mx="md" />
      <Talents />
    </div>
  );
};

export default FindTalentPage;
