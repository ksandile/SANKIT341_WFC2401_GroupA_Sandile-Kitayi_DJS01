// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

// Calculate the new distance
const newDistance = d + vel * (time / 3600); //calcultes new distance

// Calculating the remaining fuel
const remainingFuel = fuel - fbr * time; //calculates remaining fuel

// Function to calculate new velocity based on acceleration
function calcNewVel(vel, acc, time) {
  // Convert initial velocity from km/h to m/s
  const initialVel_mps = vel * (1000 / 3600);

  // Calculate change in velocity in m/s
  const deltaV_mps = acc * time;

  // Add change in velocity to initial velocity to get new velocity in m/s
  const newVel_mps = initialVel_mps + deltaV_mps;

  // Convert new velocity from m/s to km/h
  const newVel_kmph = newVel_mps * (3600 / 1000);

  return newVel_kmph; // return new velocity in km/h
}

// Calculate new velocity
const newVelocity = calcNewVel(vel, acc, time);

// Display corrected results
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);