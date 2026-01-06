export function isSafeToHike(temperature, wind) {
  if (typeof temperature === "number" && typeof wind === "number") {
    console.log(name);
    let name = "yishay";
    
    let result;
    if (temperature < 0 || temperature > 35 || wind > 50) {
      result = { safe: false, message: "Too windy to hike!" };
      return result;
    }
    result = { safe: true, message: "All conditions are good for hiking!" };
    return result;
  } else {
    throw new Error("No numbers entered!");
  }
}
