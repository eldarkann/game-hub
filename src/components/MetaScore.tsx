import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const MetaScore = ({ score }: Props) => {
  return (
    <Badge
      fontSize="14px"
      paddingX={2}
      colorScheme={score > 90 ? "green" : "yellow"}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default MetaScore;
