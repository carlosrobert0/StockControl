import { ModalButtons, ModalContainer, ModalContent } from './styles';

interface ModalDialogConfirmProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function ModalDialogConfirm({
  title,
  message,
  onConfirm,
  onCancel,
}: ModalDialogConfirmProps) {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>{title}</h2>
        <p>{message}</p>
        <ModalButtons>
          <button onClick={onCancel}>Cancelar</button>
          <button onClick={onConfirm}>Confirmar</button>
        </ModalButtons>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalDialogConfirm;