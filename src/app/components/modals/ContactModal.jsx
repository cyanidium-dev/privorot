"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import SuccessModal from "./SuccessModal";
import { sendMessage } from "@/utils/sendMessage";

export default function ContactModal({ text = "Связаться" }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [inputValue, setInputValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleSendMessage = async () => {
    if (!inputValue.trim()) {
      setStatus("Введите сообщение!");
      return;
    }

    try {
      const result = await sendMessage(`Сообщение: ${inputValue}`);
      if (result.success) {
        setIsModalOpen(true);
        onClose();
        setInputValue("");
      } else {
        setStatus(`Ошибка: ${result.error}`);
      }
    } catch (error) {
      setStatus(`Ошибка отправки: ${error.message}`);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>{text}</Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader>Форма связи</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              label="Введите сообщение"
              variant="bordered"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            {status && <p className="text-red-500 text-sm mt-2">{status}</p>}
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onClick={onClose}>
              Закрыть
            </Button>
            <Button color="primary" onClick={handleSendMessage}>
              Отправить
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
