import {
  ActionIcon,
  Button,
  Divider,
  Select,
  TagsInput,
  Textarea,
} from "@mantine/core";
import {
  IconAdjustments,
  IconBriefcase,
  IconDeviceFloppy,
  IconMapPin,
  IconPencil,
  IconPlus,
} from "@tabler/icons-react";
import React, { useState } from "react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import SelectInput from "./SelectInput";
import { fields } from "../Data/PostJob";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";

const Profile = (props: any) => {
  // Add default values and null checks

  const select = fields;
  const [addExp, setAddExp] = useState(false);
  const [addCerti, setCertiExp] = useState(false);
  const [skills, setSkills] = useState(props.skills || []);
  const experience = props.experience || [];
  const certifications = props.certifications || [];
  const name = props.name || "User";
  const role = props.role || "Professional";
  const company = props.company || "Company";
  const location = props.location || "Location";
  const [value, setValue] = useState("lorem7");
  const about = props.about || "No description available.";
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };

  return (
    <div className="w-4/5 mx-auto">
      <div className="relative">
        <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
        <img
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
          src="/avatar.png"
          alt=""
        />
      </div>
      <div className="px-3 mt-20 ">
        <div className="text-3xl font-semibold flex justify-between">
          {name}
          <ActionIcon
            onClick={() => handleEdit(0)}
            variant="subtle"
            color="brightSun.4"
            size="lg"
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase className="h-5 w-5" stroke={1.5} />
              {role} &bull; {company}
            </div>
            <div className="text-lg flex gap-1 text-mine-shaft-300 items-center">
              <IconMapPin className="h-5 w-5" stroke={1.5} /> {location}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          About
          <ActionIcon
            onClick={() => handleEdit(1)}
            variant="subtle"
            color="brightSun.4"
            size="lg"
          >
            {edit[1] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[1] ? (
          <Textarea
            autosize
            minRows={3}
            placeholder="Enter About Yourself..."
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        ) : (
          <>
            <div className="text-sm text-mine-shaft-300 text-justify">
              {about}
            </div>
          </>
        )}
      </div>
      <Divider mx="xs" my="xl" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3 flex justify-between">
          Skill
          <ActionIcon
            onClick={() => handleEdit(2)}
            variant="subtle"
            color="brightSun.4"
            size="lg"
          >
            {edit[2] ? (
              <IconDeviceFloppy className="h-4/5 w-4/5" />
            ) : (
              <IconPencil className="h-4/5 w-4/5" />
            )}
          </ActionIcon>
        </div>
        {edit[2] ? (
          <TagsInput
            value={skills}
            onChange={setSkills}
            placeholder="Add Skill"
            splitChars={[",", ";", " ", "|"]}
          />
        ) : (
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
            ) : (
              <div className="text-mine-shaft-300 text-sm">
                No skills listed
              </div>
            )}
          </div>
        )}
      </div>
      <Divider size="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Experience{" "}
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setAddExp(true)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>{" "}
            <ActionIcon
              onClick={() => handleEdit(3)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              {edit[3] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {experience.length > 0 ? (
            experience.map((exp: any, index: any) => (
              <ExpCard key={index} {...exp} edit={edit[3]} />
            ))
          ) : (
            <div className="text-mine-shaft-300 text-sm">
              No experience listed
            </div>
          )}
          {addExp && <ExpInput add setEdit={setAddExp} />}
        </div>
      </div>
      <Divider size="xs" my="xl" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-5 flex justify-between">
          Certifications
          <div className="flex gap-2">
            <ActionIcon
              onClick={() => setCertiExp(true)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              <IconPlus className="h-4/5 w-4/5" />
            </ActionIcon>{" "}
            <ActionIcon
              onClick={() => handleEdit(4)}
              variant="subtle"
              color="brightSun.4"
              size="lg"
            >
              {edit[4] ? (
                <IconDeviceFloppy className="h-4/5 w-4/5" />
              ) : (
                <IconPencil className="h-4/5 w-4/5" />
              )}
            </ActionIcon>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {certifications.length > 0 ? (
            certifications.map((certi: any, index: any) => (
              <CertiCard key={index} edit={edit[4]} {...certi} />
            ))
          ) : (
            <div className="text-mine-shaft-300 text-sm">
              No certifications listed
            </div>
          )}
          {addCerti && <CertiInput setEdit={setCertiExp} />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
