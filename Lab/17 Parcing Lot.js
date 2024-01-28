function manageParkingLot(entries) {
    const parkingLot = new Set();

    entries.forEach(entry => {
        const [direction, carNumber] = entry.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else if (direction === 'OUT') {
            parkingLot.delete(carNumber);
        }
    });

    // Convert the Set to an array and sort it
    const sortedCars = [...parkingLot].sort((a, b) => a.localeCompare(b));

    // Print the result
    if (sortedCars.length > 0) {
        console.log(sortedCars.join(' \n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// Example usage
const entries = ['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
;
manageParkingLot(entries);
