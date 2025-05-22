import React, { useEffect, useState, type ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ANIMATION_DURATION = 300; // 300ms for dialog animations

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timeout = setTimeout(() => setVisible(false), ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div
      style={{
        ...styles.overlay,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: `opacity ${ANIMATION_DURATION}ms ease`,
      }}
      onClick={onClose}
    >
      <div
        style={{
          ...styles.dialog,
          transform: isOpen ? "scale(1)" : "scale(0.8)",
          opacity: isOpen ? 1 : 0,
          transition: `transform ${ANIMATION_DURATION}ms ease, opacity ${ANIMATION_DURATION}ms ease`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button style={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  dialog: {
    width: "500px",
    maxWidth: "90%",
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    position: "relative",
    zIndex: 1001,
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Dialog;
