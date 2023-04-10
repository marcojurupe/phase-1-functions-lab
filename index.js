// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}

function distanceFromHqInFeet(someValue) {
    const distanceFromHqInFeet = distanceFromHqInBlocks(someValue);
    return distanceFromHqInFeet * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distanceInBlocks = Math.abs(start - destination);
    return distanceInBlocks * 264;
}

function calculatesFarePrice (start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let fare;

    if(distanceInFeet <= 400){
        fare = 0;
    } else if(distanceInFeet >= 400 && distanceInFeet <= 2000) {
        fare = (distanceInFeet - 400) * 0.02;
    } else if(distanceInFeet > 2000 && distanceInFeet <= 2500) {
        fare = 25;
    } else if(distanceInFeet > 2500) {
        return "cannot travel that far";
    }
        return  fare;
} 