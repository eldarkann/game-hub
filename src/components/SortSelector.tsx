import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSetOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelector = ({
  onSelectSetOrder,
  selectedOrder = "Relevance",
}: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added ", label: "Data added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrder.find(
    (order) => order.value == selectedOrder
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrder.map((item) => (
          <MenuItem
            onClick={() => onSelectSetOrder(item.value)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
