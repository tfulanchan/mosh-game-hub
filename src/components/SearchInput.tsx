import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

// BsSearch icon

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch></BsSearch>} />
      <Input borderRadius={20} placeholder="Search games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
