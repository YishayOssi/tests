import test from "node:test";
import assert from "node:assert";
import { isSafeToHike } from "./weatherUtils.js"


test.describe("tests isSafeToHike", () => {
  test("isSafeToHike with valid result", () => {
    assert.deepStrictEqual(isSafeToHike(25, 25), { safe: true, message: "All conditions are good for hiking!" })
    assert.deepStrictEqual(isSafeToHike(-5, 25), { safe: false, message: "Too windy to hike!" })
  })
    })

  