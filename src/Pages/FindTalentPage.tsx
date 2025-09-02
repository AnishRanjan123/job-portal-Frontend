import { Divider } from "@mantine/core";

import { useState } from "react";
import Jobs from "../FindJobs/Jobs";
import SearchBar from "../FindTalent/SearchBar";
import TalentCard from "../FindTalent/TalentCard";
import Talents from "../FindTalent/Talent";

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
