
// In javascript, is zero truthy or falsy?

// Although most numbers are truthy, zero is not. Keep this in mind if you're ever trying to use
// an "if" statement with a variable that might be zero.

function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}

// Outputs: "Truthy!"
logTruthiness(true);

// Outputs: "Truthy!"
logTruthiness({});

// Outputs: "Truthy!"
logTruthiness([]);

// Outputs: "Truthy!"
logTruthiness("some string");

// Outputs: "Truthy!"
logTruthiness(3.14);

// Outputs: "Truthy!"
logTruthiness(new Date());

// Outputs: "Falsy!"
logTruthiness(0);