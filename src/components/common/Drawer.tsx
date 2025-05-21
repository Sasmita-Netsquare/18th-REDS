import React, { useEffect, useState, type ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ANIMATION_DURATION = 1000; // 1 second for slow animation

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, children }) => {
  // Track if drawer should be visible (mounted)
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Delay unmount so animation can finish
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
          ...styles.drawer,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: `transform ${ANIMATION_DURATION}ms ease`,
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
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "flex-end",
    zIndex: 1000,
  },
  drawer: {
    width: "400px",
    height: "100%",
    backgroundColor: "#fff",
    padding: "20px",
    boxSizing: "border-box",
    boxShadow: "-2px 0 5px rgba(0,0,0,0.5)",
    position: "relative",
    overflowY: "auto",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    background: "none",
    border: "none",
    cursor: "pointer",
  },
};

export default Drawer;
