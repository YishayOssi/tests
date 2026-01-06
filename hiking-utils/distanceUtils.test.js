import test from "node:test";
import assert from "node:assert";
import { kmToMeters } from "./distanceUtils.js";
import { caloriesBurned } from "./calories.js";


// checking kmToMeters
test.describe("tests kmToMeters", () => {
  test("kmToMeters with valid result", () => {
    assert.strictEqual(kmToMeters(1), 1000);
    assert.strictEqual(kmToMeters(2.5), 2500)
    
  });
  test("kmToMeters with unvalid result", () => {
    assert.throws(() => kmToMeters("hjfhj"), /^Error: No positive number entered!$/)
    assert.throws(() => kmToMeters(-1), /^Error: No positive number entered!$/)
    assert.throws(() => kmToMeters([]), /^Error: No positive number entered!$/)
    assert.throws(() => kmToMeters(true), /^Error: No positive number entered!$/)
    assert.throws(() => kmToMeters(), /^Error: No positive number entered!$/)
  });
});


// checking caloriesBurned
test.describe("tests caloriesBurned", ()=>{
    test("caloriesBurned with valid result", ()=>{
        assert.strictEqual(caloriesBurned(70, 5), 362)
    })
})