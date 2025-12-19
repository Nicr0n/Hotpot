import {
  ArchLinuxIcon,
  CentOSIcon,
  DebianIcon,
  LinuxIcon,
  NixOSIcon,
  UbuntuIcon,
} from "./icons/index.ts";

interface OsIconProps {
  os: string;
}

const OsIcon = ({ os }: OsIconProps) => {
  switch (os) {
    case "os=arch":
      return <ArchLinuxIcon className="w-5 h-5 translate-y-1" />;
    case "os=debian":
      return <DebianIcon className="w-5 h-5 translate-y-1" />;
    case "os=ubuntu":
      return <UbuntuIcon className="w-5 h-5 translate-y-1" />;
    case "os=nixos":
      return <NixOSIcon className="w-5 h-5 translate-y-1" />;
    case "os=linux":
      return <LinuxIcon className="w-5 h-5 translate-y-1" />;
    case "os=centos":
      return <CentOSIcon className="w-5 h-5 translate-y-1" />;
  }
};

export default OsIcon;
