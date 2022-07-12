import { describe, it, expect } from "vitest";
import { DEFAULT_TIMEFRAME, DAILY, WEEKLY, MONTHLY } from "./constants";

describe("constants", () => {
  it("should be a predefined timeframe (DEFAULT_TIMEFRAME equal WEEKLY)", () => {
    expect(DEFAULT_TIMEFRAME).toEqual(WEEKLY);
  });

  it("should be a predefined timeframe (DAILY)", () => {
    expect(DAILY).toEqual(DAILY);
  });

  it("should be a predefined timeframe (WEEKLY)", () => {
    expect(WEEKLY).toEqual(WEEKLY);
  });

  it("should be a predefined timeframe (MONTHLY)", () => {
    expect(MONTHLY).toEqual(MONTHLY);
  });
});
