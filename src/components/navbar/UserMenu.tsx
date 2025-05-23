"use client";

import { signOutUser } from "@/app/actions/authActions";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger } from "@heroui/react";

import { Session } from "next-auth";
import Link from "next/link";
import React from "react";

type Props = {
    user: {
        name: string | null;
        image: string | null;
    } | null;
};

export default function UserMenu({
    user,
}: Props) {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="default"
                    name={user?.name || "user avatar"}
                    size="sm"
                    src={user?.image || "/images/user.png"}
                />
            </DropdownTrigger>
            <DropdownMenu
                variant="flat"
                aria-label="User actions menu"
            >
                <DropdownSection showDivider>
                    <DropdownItem
                        key='username'
                        isReadOnly
                        as="span"
                        className="h-14 flex flex-row"
                        aria-label="username"
                    >
                        Signed in as {user?.name}
                    </DropdownItem>
                </DropdownSection>
                <DropdownItem
                    key='edit'
                    as={Link}
                    href="/members/edit"
                >
                    Edit profile
                </DropdownItem>
                <DropdownItem
                    key='logout'
                    color="danger"
                    onPress={async () => signOutUser()}
                >
                    Log out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}