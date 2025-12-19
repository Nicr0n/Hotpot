import ArchLinux from "../assets/Arch_Linux.svg?react";
import Debian from "../assets/Debian.svg?react";
import Ubuntu from "../assets/Ubuntu.svg?react";
import NixOs from "../assets/NixOS.svg?react";
import Linux from "../assets/Linux.svg?react";

interface OsIconProps {
  os: string;
}

const OsIcon = ({ os }: OsIconProps) => {
  switch (os) {
    case "os=arch":
      return <ArchLinux className="w-5 h-5 translate-y-1" />;
    case "os=debian":
      return <Debian className="w-5 h-5 translate-y-1" />;
    case "os=ubuntu":
      return <Ubuntu className="w-5 h-5 translate-y-1" />;
    case "os=nixos":
      return <NixOs className="w-5 h-5 translate-y-1" />;
    case "os=linux":
      return <Linux className="w-5 h-5 translate-y-1" />;
  }
};

export default OsIcon;
