
function fly(latitude,longitude) {
    // Fly to a random location by offsetting the point 40, -74.50
    // by up to 5 degrees.
    map.flyTo([
        latitude,
        longitude], 13);
}