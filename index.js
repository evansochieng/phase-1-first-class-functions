// First-class Functions

// Create a callback function
function dailyRoutine() {
    return 'It\'s Moringa day!';
};

// receivesAFunction Function
function receivesAFunction(routine) {
    return routine();
};

// returnsANamedFunction Function
function returnsANamedFunction() {
    const namedFunction = parameter => parameter; 
    return namedFunction;
};

// returnsAnAnonymousFunction
function returnsAnAnonymousFunction() {
    return () => console.log('An anonymous function');
};