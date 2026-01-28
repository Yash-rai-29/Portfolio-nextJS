import { Variants, Transition } from "framer-motion";

// ============================================
// Custom Easing Functions
// ============================================
export const easings = {
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  spring: { type: "spring", stiffness: 300, damping: 30 },
  springBouncy: { type: "spring", stiffness: 400, damping: 25 },
  springSmooth: { type: "spring", stiffness: 200, damping: 40 },
} as const;

// ============================================
// Default Transitions
// ============================================
export const transitions = {
  fast: { duration: 0.2, ease: easings.easeOutExpo },
  medium: { duration: 0.4, ease: easings.easeOutQuart },
  slow: { duration: 0.6, ease: easings.easeOutExpo },
  spring: easings.spring as Transition,
  springBouncy: easings.springBouncy as Transition,
} as const;

// ============================================
// Fade Variants
// ============================================
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: transitions.medium },
  exit: { opacity: 0, transition: transitions.fast },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: easings.easeOutExpo } 
  },
  exit: { opacity: 0, y: 20, transition: transitions.fast },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -40 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: easings.easeOutExpo } 
  },
  exit: { opacity: 0, y: -20, transition: transitions.fast },
};

export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: easings.easeOutQuart } 
  },
  exit: { opacity: 0, scale: 0.95, transition: transitions.fast },
};

// ============================================
// Slide Variants
// ============================================
export const slideInLeft: Variants = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: transitions.medium },
  exit: { x: -30, opacity: 0, transition: transitions.fast },
};

export const slideInRight: Variants = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: transitions.medium },
  exit: { x: 30, opacity: 0, transition: transitions.fast },
};

// ============================================
// Stagger Container Variants
// ============================================
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: easings.easeOutQuart }
  },
};

// ============================================
// Scale Variants
// ============================================
export const scaleIn: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: easings.springBouncy as Transition
  },
  exit: { scale: 0.8, opacity: 0, transition: transitions.fast },
};

export const popIn: Variants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: easings.springBouncy as Transition
  },
  exit: { scale: 0.9, opacity: 0, transition: transitions.fast },
};

// ============================================
// Floating/Bobbing Animation
// ============================================
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatSlow: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// Pulse/Glow Animation
// ============================================
export const pulse: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const glow: Variants = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// Section Transition Variants
// ============================================
export const sectionVariants: Variants = {
  initial: { 
    opacity: 0, 
    y: 30,
    filter: "blur(10px)",
  },
  animate: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.5, 
      ease: easings.easeOutExpo,
      staggerChildren: 0.1,
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    filter: "blur(5px)",
    transition: { duration: 0.3, ease: easings.easeOutQuart }
  },
};

// ============================================
// Text Reveal Variants
// ============================================
export const textReveal: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: easings.easeOutExpo }
  },
};

export const letterReveal: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: easings.easeOutQuart,
    },
  }),
};

// ============================================
// Hover Effect Helpers
// ============================================
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverLift = {
  y: -5,
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
  transition: { duration: 0.2 },
};

// ============================================
// 3D Tilt Effect Helper
// ============================================
export const calculate3DTilt = (
  e: React.MouseEvent<HTMLElement>,
  maxTilt: number = 10
) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const tiltX = ((y - centerY) / centerY) * -maxTilt;
  const tiltY = ((x - centerX) / centerX) * maxTilt;
  
  return { rotateX: tiltX, rotateY: tiltY };
};

// ============================================
// Underline Draw Animation
// ============================================
export const drawUnderline: Variants = {
  initial: { scaleX: 0, originX: 0 },
  animate: { 
    scaleX: 1, 
    transition: { duration: 0.6, ease: easings.easeOutExpo, delay: 0.2 }
  },
};

// ============================================
// Icon Morph Helper (for theme switch)
// ============================================
export const iconMorph: Variants = {
  initial: { rotate: 0, scale: 1 },
  animate: { 
    rotate: 360, 
    scale: [1, 0.8, 1],
    transition: { duration: 0.5, ease: easings.easeOutQuart }
  },
};
