// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3.6; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// Function to calculate new velocity
const calcNewVel = ({ vel, acc, time }) => { 
  if (typeof vel !== 'number' || typeof acc !== 'number' || typeof time !== 'number') {
    throw new Error('Invalid input. Please provide numerical values for velocity, acceleration, and time.');
  }
  return vel + (acc * (time / 3600)); // Convert time to hours for consistent units
}

// Calculate new velocity, distance, and remaining fuel
const newVelocity = calcNewVel({ vel: initialVelocity, acc: acceleration, time });
const newDistance = initialDistance + (initialVelocity * (time / 3.6)); // Convert time to hours for consistent units
const remainingFuel = initialFuel - (fuelBurnRate * time);

console.log(`Corrected New Velocity: ${newVelocity.toFixed(2)} km/h`);
console.log(`Corrected New Distance: ${newDistance.toFixed(2)} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel.toFixed(2)} kg`);