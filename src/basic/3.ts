let value: string | number;

const amount = (value: string | number): number => {
  if (typeof value === "string") {
    return value.split("").length;
  } else {
    return value;
  }
};
value = "My name is Anna";
console.log(amount(value));
value = 123;
console.log(amount(value));

let permision: "enable" | "disable";
permision = "enable";
