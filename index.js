const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeElapsed = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Calculate the new distance
const newDistance = distance + velocity * (timeElapsed / 3600); // calculates new distance

// Calculating the remaining fuel
const remainingFuel = initialFuel - fuelBurnRate * timeElapsed; // calculates remaining fuel

// Function to calculate new velocity based on acceleration
function calculateNewVelocity(velocity, acceleration, timeElapsed) {
  // Convert initial velocity from km/h to m/s
  const initialVelocity_mps = velocity * (1000 / 3600);

  // Calculate change in velocity in m/s
  const deltaVelocity_mps = acceleration * timeElapsed;

  // Add change in velocity to initial velocity to get new velocity in m/s
  const newVelocity_mps = initialVelocity_mps + deltaVelocity_mps;

  // Convert new velocity from m/s to km/h
  const newVelocity_kmph = newVelocity_mps * (3600 / 1000);

  return newVelocity_kmph; // return new velocity in km/h
}

// Calculate new velocity
const newVelocity = calculateNewVelocity(velocity, acceleration, timeElapsed);

// Display corrected results
console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);