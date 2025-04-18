"use client";

// import useMessageStore from "@/hooks/useMessageStore";
import { NavbarItem } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  label: string;
};

export default function NavLink({
  href,
  label,
}: Props) {
  const pathname = usePathname();
  // const { unreadCount } = useMessageStore(
  //   (state) => ({
  //     unreadCount: state.unreadCount,
  //   })
  // );

  return (
    <NavbarItem
      isActive={pathname === href}
      as={Link}
      href={href}
    >
      <span>{label}</span>
    </NavbarItem>
  );
}
