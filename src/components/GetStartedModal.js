import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";

const reasons = [
  "Personal Growth",
  "Professional Development",
  "Curiosity",
  "Recommended by a Friend",
  "Other",
];

const GetStartedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    feedback: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
    onClose();
    alert("Thank you for joining Hackbook!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-background-light dark:bg-background-dark"
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 text-primary-light dark:text-primary-dark">
          Start Your Journey with Hackbook
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <Select
              label="Why are you joining Hackbook?"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              required
              fullWidth
            >
              {reasons.map((reason) => (
                <SelectItem key={reason} value={reason}>
                  {reason}
                </SelectItem>
              ))}
            </Select>
            <Textarea
              label="What are you looking to achieve? (Optional)"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              fullWidth
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>
            Maybe Later
          </Button>
          <Button color="primary" onPress={handleSubmit}>
            Begin Your Adventure
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default GetStartedModal;
