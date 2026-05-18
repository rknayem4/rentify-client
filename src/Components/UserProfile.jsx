"use client";

import { Avatar, Badge, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const UserProfile = ({ session, isPending }) => {
  const handleSignOUt = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {isPending ? (
        "Loading"
      ) : (
        <Dropdown>
          <Button aria-label="Menu" variant="outline" className="border-none">
            <Badge.Anchor>
              <Avatar>
                <Avatar.Image src={session.user?.image} />
                <Avatar.Fallback><FaUser /></Avatar.Fallback>
              </Avatar>
            </Badge.Anchor>
          </Button>

          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" textValue="New file">
                <Link href="/user-profile">
                  <Label>Profile</Label>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item
                id="delete-file"
                textValue="Delete file"
                variant="danger"
              >
                <Button variant="none"  onClick={handleSignOUt}>
                  <Label>SignOut</Label>
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      )}
    </div>
  );
};

export default UserProfile;
