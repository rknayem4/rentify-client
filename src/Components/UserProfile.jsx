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
          <Button aria-label="Menu" className={'border-none rounded-full'} variant="secondary">
            <Avatar>
              <Avatar.Image src={session.user?.image} />
              <Avatar.Fallback>
                <FaUser />
              </Avatar.Fallback>
            </Avatar>
          </Button>
          <Dropdown.Popover>
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="new-file" textValue="New file">
                <Label>New file</Label>
              </Dropdown.Item>
              <Dropdown.Item id="copy-link" textValue="Copy link">
                <Label>Copy link</Label>
              </Dropdown.Item>
              <Dropdown.Item id="edit-file" textValue="Edit file">
                <Label>Edit file</Label>
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
