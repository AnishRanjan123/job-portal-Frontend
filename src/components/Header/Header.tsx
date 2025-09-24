import { Avatar, Indicator } from "@mantine/core";
import {
  IconAsset,
  IconBell,
  IconHandStop,
  IconSettings,
} from "@tabler/icons-react";
import NavLink from "./NavLink";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();

  if (location.pathname === "/signup") {
    return null;
  }

  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-28  flex justify-between items-center  font-['poppins']">
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconHandStop className="h-10 w-10" stroke={1.25} />
        <div className="text-3xl font-semibold">OneStop</div>
      </div>
      <NavLink />
      <div className="flex gap-5 items-center">
        <ProfileMenu />
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="brightSun.4" offset={6} processing>
            <IconBell />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
