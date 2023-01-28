import {
  ModalOverlay,
  ModalContainer,
  ModalButton,
  ModalDescription,
  ModalGroupButton,
  ModalIcon,
  ModalTitle,
} from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

interface GenericModalProps {
  type: "error" | "success";
  buttonPrimaryText: string;
  buttonSecondaryText: string;
  title: string;
  description?: string;
  handleConfirm: () => void;
  handleCancel: () => void;
}

const GenericModal = ({
  buttonPrimaryText,
  buttonSecondaryText,
  title,
  type,
  description,
  handleCancel,
  handleConfirm,
}: GenericModalProps) => {
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalIcon>
          {type === "error" && <BiErrorCircle fontSize={50} color="#e6474b" />}
          {type === "success" && (
            <IoCheckmarkDoneCircleSharp fontSize={50} color="green" />
          )}
        </ModalIcon>
        <ModalTitle>{title}</ModalTitle>
        <ModalDescription>{description}</ModalDescription>
        <ModalGroupButton>
          <ModalButton isOutlined onClick={handleCancel}>
            {buttonSecondaryText}
          </ModalButton>
          <ModalButton onClick={handleConfirm}>{buttonPrimaryText}</ModalButton>
        </ModalGroupButton>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default GenericModal;
