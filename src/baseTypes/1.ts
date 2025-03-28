// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number = 50;
let name: string = "Max";
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// let callback2 = (a: number | string | boolean): number => {
//   if (typeof a === "number") {
//     return 100 + a;
//   } else if (typeof a === "string") {
//     return 100 + a.length;
//   } else if (typeof a === "boolean") {
//     return a ? 101 : 100;
//   }
//   // default value
//   return 100;
// };

export {};
