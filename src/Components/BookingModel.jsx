"use client";

import { authClient } from "@/lib/auth-client";
import { FloppyDisk, Rocket } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Label,
  ListBox,
  Modal,
  TextArea,
  TextField,
  Select,
  DateField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function BookingModel({ car }) {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const { carName, carImage, location, price, _id } = car;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    const bookInfo = {
      carName,
      carImage,
      carId: _id,
      location,
      price,
      userId: user?.id,
      userName: user?.name,
      diverNeed: formValues.diverNeed,
      bookingDate: formValues.date,
      note: formValues.note,
    };
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/car-booking-collection`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(bookInfo),
    });

    await res.json();

    toast.success(`${carName} successfully booked!`);
    redirect("/my-booking");
  };
  return (
    <Modal>
      <Button
        variant="secondary"
        className="w-full mt-10 py-4 rounded-2xl bg-[#004078] hover:bg-[#00315f] transition-all duration-300 text-white text-lg font-semibold"
      >
        Book Now
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-90">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Booking a Car</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Form className="w-full max-w-150" onSubmit={handleSubmit}>
                <Fieldset>
                  <Fieldset.Legend>Add your car</Fieldset.Legend>
                  <Description>Your car Information.</Description>
                  <FieldGroup>
                    <Select
                      isRequired
                      className="w-full"
                      name="diverNeed"
                      placeholder="Select one"
                    >
                      <Label>Diver needed?</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="Yes" textValue="yes">
                            Yes!
                            <ListBox.ItemIndicator />
                          </ListBox.Item>

                          <ListBox.Item id="No" textValue="no">
                            No!
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    <DateField isRequired className="w-full" name="date">
                      <Label>Date</Label>
                      <DateField.Group>
                        <DateField.Input>
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                      </DateField.Group>
                    </DateField>
                    <TextField isRequired name="note">
                      <Label>Special Note</Label>
                      <TextArea placeholder="Tell us ....." />
                      <FieldError />
                    </TextField>
                  </FieldGroup>
                  <Fieldset.Actions>
                    <Button type="submit">
                      <FloppyDisk />
                      Booking Car
                    </Button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
