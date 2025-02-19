import React from "react";
import styled, { keyframes } from "styled-components";
// import { IoClose } from "react-icons/io5"; // Import close icon

// Fade-in background animation
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Scale-up modal animation
const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(4, 24, 57, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: var(--lavenderBlue);
  color: var(--oxfordBlue);
  padding: 24px;
  border-radius: 12px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 90%;
  max-width: 800px;
  position: relative;
  animation: ${scaleUp} 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  ${"" /* left: 12px; */}
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: var(--oxfordBlue);
  transition: color 0.3s ease;

  &:hover {
    color: var(--brightBlue);
  }
`;

export default function Modal({ show, onClose, children, className }) {
  if (!show) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent className={className} onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <br></br>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}
