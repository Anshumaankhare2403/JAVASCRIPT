let value: any;

value = "Hello"; // ✅ Valid
value = 123;     // ✅ Valid
value = true;    // ✅ Valid

// No Type Errors, but this can lead to runtime issues!
console.log(value.toUpperCase()); // ❌ No error at compile-time, but crashes if value is not a string.


// unknown

let value1: unknown;

value1 = "Hello"; // ✅ Valid
value1 = 123;     // ✅ Valid

// ❌ Error: Property 'toUpperCase' does not exist on type 'unknown'
// console.log(value.toUpperCase()); 

// ✅ You must check the type before using it
if (typeof value1 === "string") {
    console.log(value1.toUpperCase()); // ✅ Works safely
}
else{
    console.log(value1);
}