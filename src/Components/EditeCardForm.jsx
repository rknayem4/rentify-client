"use client";
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
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function EditCardForm({ res }) {
  // const { data: session } = authClient.useSession();
  // const user = session?.user;
  const {
    carImage,
    carName,
    description,
    location,
    price,
    seat,
    status,
    type,
    userEmail,
    userId,
    usrName,
    _id,
  } = res;

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    const carChange = {
      carName: formValues.name,
      price: formValues.price,
      type: formValues.type,
      carImage: formValues.image,
      seat: formValues.seat,
      status: formValues.status,
      location: formValues.location,
      description: formValues.description,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/car-collection/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(carChange),
    });

    await res.json();

    toast.success("Car updated successfully");

    router.push("/my-added-car");
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
      <Button variant="secondary" className={"rounded-md "}>
        <FaEdit />
        Add{" "}
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog>
            <Modal.CloseTrigger />

            <Modal.Body>
              <Form className="w-full max-w-150" onSubmit={handleSubmit}>
                <Fieldset>
                  <Fieldset.Legend>Add your car</Fieldset.Legend>
                  <Description>Your car Information.</Description>
                  <FieldGroup>
                    <TextField isRequired name="name" defaultValue={carName}>
                      <Label>Car Name</Label>
                      <Input placeholder="Mitsubishi Pajero" />
                      <FieldError />
                    </TextField>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <TextField isRequired name="price" defaultValue={price}>
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
                    <TextField isRequired name="image" defaultValue={carImage}>
                      <Label>Car Image URI</Label>
                      <Input placeholder="https://image.com/car54215.jpg" />
                      <FieldError />
                    </TextField>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <TextField isRequired name="seat" defaultValue={seat}>
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
                            <ListBox.Item id="Available" textValue="available">
                              Available
                              <ListBox.ItemIndicator />
                            </ListBox.Item>

                            <ListBox.Item id="Now is Busy" textValue="busy">
                              Now is Busy
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    <TextField
                      isRequired
                      name="location"
                      defaultValue={location}
                    >
                      <Label>Pickup Location</Label>
                      <Input placeholder="Mirpur-10, Dhaka-1216." />
                      <FieldError />
                    </TextField>
                    <TextField
                      isRequired
                      name="description"
                      defaultValue={description}
                    >
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
