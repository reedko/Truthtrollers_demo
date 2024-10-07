import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/ttlogo11.png";
import ColorModeSwitch from "./ColorModeSwitch";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" width="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
