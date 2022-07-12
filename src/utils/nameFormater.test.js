import { describe, it, expect } from "vitest";
import { removeWhiteSpaces } from "./nameFormater";

describe("nameFormater", () => {
  it("should remove white spaces", () => {
    expect(removeWhiteSpaces("  hELLo world  ")).toEqual("hELLoworld");
  });
});
