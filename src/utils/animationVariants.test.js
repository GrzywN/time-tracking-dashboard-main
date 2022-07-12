import { describe, it, expect } from "vitest";
import {
  createOpacityVariants,
  scaleFromBottom,
  scaleFromTop,
  cardHover,
} from "./animationVariants";

describe("animationVariants", () => {
  it("creates variants with increasing delays", () => {
    const variants = createOpacityVariants(3);
    expect(variants).toEqual([
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.5,
          },
        },
      },
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 0.75,
          },
        },
      },
      {
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            duration: 1,
            delay: 1,
          },
        },
      },
    ]);
  });

  it("should be a predefined hover animation", () => {
    expect(cardHover).toEqual({
      whileHover: {
        backgroundColor: "hsl(234,41%,33%)",
      },
    });
  });

  it("should be a predefined scale animation (from bottom)", () => {
    expect(scaleFromBottom).toEqual({
      initial: { scaleY: 0, transformOrigin: "bottom" },
      animate: {
        scaleY: 1,
        transition: { duration: 1, type: "spring" },
      },
    });
  });

  it("should be a predefined scale animation (from top)", () => {
    expect(scaleFromTop).toEqual({
      initial: { scaleY: 0, transformOrigin: "top" },
      animate: {
        scaleY: 1,
        transition: { duration: 1, type: "spring" },
      },
    });
  });
});
