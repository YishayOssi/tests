import { error } from "node:console";

export function caloriesBurned(weightInKg, distanceInKm) {
  if (
    typeof weightInKg === "number" &&
    weightInKg > 0 &&
    typeof distanceInKm === "number" &&
    distanceInKm > 0
  ) {
    const calories = weightInKg * distanceInKm * 1.036;
    return calories;
  } else {
    throw new Error("No numbers entered!");
  }
}
