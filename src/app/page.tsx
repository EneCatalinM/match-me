import { Button, Link } from "@heroui/react";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Test</h1>
      <Button as={Link}
        href='/members'
        color="primary"
        variant='bordered'
        startContent={<FaRegSmile size={20} />}>
        Click me!
      </Button>
    </div>
  );
}
