import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import mehImage from "../assets/meh.webp";
import thumbUpImage from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: mehImage, alt: "meh", boxSize: "25px" },
    4: { src: thumbUpImage, alt: "thumbUp", boxSize: "25px" },
    5: { src: bullsEye, alt: "bullsEye", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} marginTop={1}></Image>;
};

export default Emoji;
