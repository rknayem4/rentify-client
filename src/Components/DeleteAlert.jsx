"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export function DeleteAlert({ res: resData }) {
  const router = useRouter();
  const { carName, _id } = resData;
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:8000/car-collection/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    await res.json();
    router.push("/my-added-car");
  };

  return (
    <AlertDialog>
      <Button variant="danger" className={"rounded-md"}>
        Delete Car
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete project permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{carName}</strong> and all
                of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
