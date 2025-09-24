import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../components/JobDesc/JobDesc";
import RecommendedJob from "../components/JobDesc/RecommendedJob";

const JobDescPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
      <Link className="my-4 inline-block" to="/find-job">
        <Button
          leftSection={<IconArrowLeft size="20" />}
          color="brightSun.4"
          variant="light"
        >
          Back
        </Button>
      </Link>

      <div className="flex gap-5 justify-around">
        <JobDesc />
        <RecommendedJob />
      </div>
    </div>
  );
};

export default JobDescPage;
