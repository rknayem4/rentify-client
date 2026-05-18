"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Badge, Button, Dropdown, Label } from "@heroui/react";
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
          <Button aria-label="Menu" className={'border-none rounded-full'} variant="none">
            <Avatar>
              <Avatar.Image src={session.user?.image} />
              <Avatar.Fallback>
                <FaUser />
              </Avatar.Fallback>
            </Avatar>
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" href="/my-booking" textValue="New file">
                <Label>My Booking</Label>
              </Dropdown.Item>
              <Dropdown.Item id="copy-link" href="/my-add" textValue="Copy link">
                <Label>My Add </Label>
              </Dropdown.Item>
              <Dropdown.Item id="edit-file" href="my-profile" textValue="Edit file">
                <Label>Edit Profile</Label>
              </Dropdown.Item>
              <Dropdown.Item
                id="delete-file"
                textValue="Delete file"
                variant="danger"
                onClick={handleSignOUt}
              >
                <Label>LogOut</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      )}
    </div>
  );
};

export default UserProfile;
