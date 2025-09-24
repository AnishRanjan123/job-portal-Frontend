import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import React from "react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props: any) => {
  // Only use the actual props passed, no defaults
  const skills = props.skills || [];
  const experience = props.experience || [];
  const certifications = props.certifications || [];
  
  return (
    <div className="w-2/3">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-16">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name || "User"}
          <Button color="brightSun.4" variant="light">
            Message
          </Button>
        </div>
        <div className="text-xl flex gap-1 items-center">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role || "Professional"} &bull; {props.company || "Company"}
        </div>
        <div className="text-lg flex gap-1 text-mine-shaft-300 items-center">
          <IconMapPin className="h-5 w-5" stroke={1.5} /> {props.location || "Location"}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about || "No description available."}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3">Skill</div>
        <div className="flex flex-wrap gap-2">
          {skills.length > 0 ? (
            skills.map((skill: any, index: any) => (
              <div
                key={index}
                className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1"
              >
                {skill}
              </div>
            ))
          ) : null}
        </div>
      </div>
      <Divider size="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
          {experience.length > 0 ? (
            experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} />
            ))
          ) : null}
        </div>
      </div>
      <Divider size="xs" my="xl" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-5">Certifications</div>
        <div className="flex flex-col gap-8">
          {certifications.length > 0 ? (
            certifications.map((certi: any, index: any) => (
              <CertiCard key={index} {...certi} />
            ))
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
