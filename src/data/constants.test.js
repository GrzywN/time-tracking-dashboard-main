import { describe, it, expect } from "vitest";
import {
  DEFAULT_TIMEFRAME,
  DAILY,
  WEEKLY,
  MONTHLY,
  PHOTO_URL,
  ELLIPSIS_URL,
} from "./constants";

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

  it("should be a predefined URL (PHOTO_URL)", () => {
    expect(PHOTO_URL).toEqual("./src/assets/image-jeremy.png");
  });

  it("should be a predefined URL (ELLIPSIS_URL)", () => {
    expect(ELLIPSIS_URL).toEqual("./src/assets/icon-ellipsis.svg");
  });
});
