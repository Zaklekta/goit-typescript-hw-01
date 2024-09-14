let value: string | number;

const amount = (value: string | number): number => {
  if (typeof value === "string") {
    return value.split("").length;
  } else {
    return value;
  }
};

let permision: "enable" | "disable";
