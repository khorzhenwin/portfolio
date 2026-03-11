import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const visibleRef = useRef(false);

  const dotSpringX = useSpring(mouseX, { stiffness: 800, damping: 45 });
  const dotSpringY = useSpring(mouseY, { stiffness: 800, damping: 45 });

  const ringSpringX = useSpring(mouseX, { stiffness: 180, damping: 28 });
  const ringSpringY = useSpring(mouseY, { stiffness: 180, damping: 28 });

  const dotX = useTransform(dotSpringX, (x) => x - 4);
  const dotY = useTransform(dotSpringY, (y) => y - 4);
  const ringX = useTransform(ringSpringX, (x) => x - 16);
  const ringY = useTransform(ringSpringY, (y) => y - 16);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(pointer: fine)");
    const updateMode = () => setEnabled(media.matches);
    updateMode();
    media.addEventListener("change", updateMode);

    return () => media.removeEventListener("change", updateMode);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-enabled");

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleOver = (e) => {
      const t = e.target;
      if (!t || !t.closest) return;
      setIsHovering(
        !!t.closest(
          "a, button, [role='button'], input, textarea, select, label",
        ),
      );
    };

    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleLeave = () => {
      visibleRef.current = false;
      setIsVisible(false);
    };
    const handleEnter = () => {
      visibleRef.current = true;
      setIsVisible(true);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.documentElement.addEventListener("mouseleave", handleLeave);
    document.documentElement.addEventListener("mouseenter", handleEnter);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
      document.documentElement.removeEventListener("mouseenter", handleEnter);
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          opacity: isVisible ? 1 : 0,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
          borderRadius: "9999px",
          backgroundColor: "#f97316",
        }}
        animate={{
          width: isClicking ? 5 : 8,
          height: isClicking ? 5 : 8,
          backgroundColor: isHovering ? "#fb923c" : "#f97316",
        }}
        transition={{ duration: 0.12 }}
      />

      <motion.div
        style={{
          x: ringX,
          y: ringY,
          opacity: isVisible ? 1 : 0,
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9998,
          borderWidth: "2px",
          borderStyle: "solid",
          borderRadius: "9999px",
        }}
        animate={{
          width: isHovering ? 52 : isClicking ? 22 : 32,
          height: isHovering ? 52 : isClicking ? 22 : 32,
          marginLeft: isHovering ? -10 : isClicking ? 5 : 0,
          marginTop: isHovering ? -10 : isClicking ? 5 : 0,
          borderColor: isHovering
            ? "rgba(251, 146, 60, 0.75)"
            : "rgba(249, 115, 22, 0.45)",
          backgroundColor: isHovering
            ? "rgba(251, 146, 60, 0.1)"
            : "transparent",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      />
    </>
  );
}
