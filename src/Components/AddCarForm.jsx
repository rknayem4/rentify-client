"use client";
import { authClient } from "@/lib/auth-client";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Modal,
  Select,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function AddCarForm() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  //   const carData = {
  //     usrName: user.name,
  //     userId: user.id,
  //     userEmail: user?.email,
  //     carName: data.name,
  //     price: data.price,
  //     type: data.type,
  //     carImage: data.image,
  //     seat: data.seat,
  //     status: data.status,
  //     location: data.location,
  //     description: data.description,
  //   };
  //   const res = await fetch("http://localhost:8000/car-collection", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(carData),
  //   });
  //   await res.json();
  //   toast.success(`${data.name} successfully added!`);
  //   redirect("/my-add");
  // };
  const onSubmit = async (e) => {
  e.preventDefault();

  if (!user) {
    toast.error("Please login first");
    return;
  }

  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData.entries());

  const carData = {
    usrName: user?.name,
    userId: user?.id,
    userEmail: user?.email,
    carName: data.name,
    price: data.price,
    type: data.type,
    carImage: data.image,
    seat: data.seat,
    status: data.status,
    location: data.location,
    description: data.description,
  };

  const res = await fetch("http://localhost:8000/car-collection", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(carData),
  });

  await res.json();

  toast.success(`${data.name} successfully added!`);
};
  const carTypes = [
    { id: "sedan", name: "Sedan" },
    { id: "suv", name: "SUV" },
    { id: "hatchback", name: "Hatchback" },
    { id: "microbus", name: "Microbus" },
    { id: "pickup", name: "Pickup" },
    { id: "crossover", name: "Crossover" },
    { id: "luxury", name: "Luxury Car" },
    { id: "sports", name: "Sports Car" },
  ];
  return (
    <Modal>
      <Button variant="secondary">Add </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />
            {/* <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Welcome to HeroUI</Modal.Heading>
            </Modal.Header> */}
            <Modal.Body>
              <Form className="w-full max-w-150" onSubmit={onSubmit}>
                <Fieldset>
                  <Fieldset.Legend>Add your car</Fieldset.Legend>
                  <Description>Your car Information.</Description>
                  <FieldGroup>
                    <TextField isRequired name="name">
                      <Label>Car Name</Label>
                      <Input placeholder="Mitsubishi Pajero" />
                      <FieldError />
                    </TextField>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <TextField isRequired name="price">
                        <Label>Daily Rent Price</Label>
                        <Input placeholder=" Your care rent" />
                        <FieldError />
                      </TextField>
                      <Select
                        isRequired
                        className="w-full"
                        name="type"
                        placeholder="Select one"
                      >
                        <Label>Car Types</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            {carTypes.map((car) => (
                              <ListBox.Item
                                key={car.id}
                                id={car.id}
                                textValue={car.id}
                              >
                                {car.name}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>
                    <TextField isRequired name="image">
                      <Label>Car Image URI</Label>
                      <Input placeholder="https://image.com/car54215.jpg" />
                      <FieldError />
                    </TextField>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <TextField isRequired name="seat">
                        <Label>Seat Capacity</Label>
                        <Input placeholder="Your car seat capacity" />
                        <FieldError />
                      </TextField>
                      <Select
                        isRequired
                        className="w-full"
                        name="status"
                        placeholder="Select one"
                      >
                        <Label>Status</Label>
                        <Select.Trigger>
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item id="florida" textValue="available">
                              Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="washington" textValue="busy">
                              Now is busy
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>
                    {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                            <TextField isRequired name="seat">
                              <Label>Seat Capacity</Label>
                              <Input placeholder=" Your care rent" />
                              <FieldError />
                            </TextField>
                            
                          </div> */}
                    <TextField isRequired name="location">
                      <Label>Pickup Location</Label>
                      <Input placeholder="Mirpur-10, Dhaka-1216." />
                      <FieldError />
                    </TextField>
                    <TextField isRequired name="description">
                      <Label>Description</Label>
                      <TextArea placeholder="Tell us about your car" />
                      <Description>Minimum 10 characters</Description>
                      <FieldError />
                    </TextField>
                  </FieldGroup>
                  <Fieldset.Actions>
                    <Button type="submit">
                      <FloppyDisk />
                      Save changes
                    </Button>
                    <Button type="reset" variant="secondary">
                      Cancel
                    </Button>
                  </Fieldset.Actions>
                </Fieldset>
              </Form>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button className="w-full" slot="close">
                Continue
              </Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
