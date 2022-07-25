<h1 align="center">TypeScript</h1>

## What's TypeScript ?

`JavaScript and More` : TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor.

`A Result You Can Trust` : TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps.

`Safety at Scale` : TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.

---

## How to install that ?

for install typescript you most run this code in the terminal :

```
npm i typescript
```

---

## How to config that ?

for config typescript you most run this code in the terminal then you can see a file with name tsconfig.json :

```
tsc --init
```

if you open this file you can see a lot line of codes and most of them are comment.
you can uncomment and edit this codes and config your app.

---

## How to compile Ts codes to Js codes ?

for compile codes to js you can run this code in the terminal :

```
tsc
or
tsc filename.ts
```

#### `Auto compile `

for auto compile ts codes to js codes you most run this code :

```
tsc filename.ts -w
```

for auto compile ts codes to js codes in the all file you most at first create config file then run this code :

```
tsc -w
```

---

## How to run ts code in the browser ?

you can't run ts codes in the browser becaues browser don't support ts codes. so you most at first compile ts codes to js codes then use js file in the html file and run that in the browser.

---

## Docs

### `dynamic type & static type Concepts`

We have three common type in js and ts there are :

1. number
2. string
3. boolean

js can understand and recognize types but can't use these like ts
js use `dynamic types` that's mean js can change types at the moment
but ts use static types that's mean you can't change types and types are constant

### `Use types in ts`

#### `Type inference` : that mean typescript can recognize types and Assign that to the variables

In ts we can set types when we declaration variables.
but its bad practice because typescript have type inference and we set types only when we wanna don't set value for variable in declaration.
we can't change types after declaration variable.

`set type for number,string,...` :

```TS
let user : string = "jack";
```

`set type for object` :

```Ts
let person: {
  name: string;
  age: 30;
} = {
  name: 'Maximilian',
  age: 30
};
```

`set type for array ` :

```Ts
let favoriteActivities: string[];
favoriteActivities = ['Sports','videogame','football'];
```

`set any type ` :

```Ts
let favoriteActivities: any;
```

##### `notice` : this codes are just for example so never use because its bad practice.

use set type like this is ok :

```Ts
let user : string ;
user = "jack";
```

`What's tuple ` : A tuple is a TypeScript type that works like an array with some special considerations: The number of elements of the array is fixed. The type of the elements is known. The type of the elements of the array need not be the same.

```Ts
let person: [number,string] = [10,hello]
```

`What's enum ` : In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values that can only be a certain number of possible values.

```Ts
enum Direction {
  first,
  second,
  third,
  Fourth,
}
```

`What's Union Type` : TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.

```Ts
let age : number | string;
age = 20;
age = "20";

```

`What's Literal Type` : There are three sets of literal types available in TypeScript today: strings, numbers, and booleans; by using literal types you can allow an exact value which a string, number, or boolean must have.

```Ts
let Easing = "ease-in" | "ease-out" | "ease-in-out";

```

`alias in ts ` : In Typescript, Type aliases give a type a new name. They are similar to interfaces in that they can be used to name primitives and any other kinds that you'd have to define by hand otherwise. Aliasing doesn't truly create a new type; instead, it gives that type a new name.

```Ts
type Combinable = number | string;
```

`return type in ts ` : function return type used when we return value from the function. We can return any type of value from the function or nothing at all from the function in TypeScript.

```ts
function add(n1: number, n2: number): number {
  return n1 + n2;
}
```

`function types in ts` : A function type has two parts: parameters and return type. When declaring a function type, you need to specify both parts.

The following example shows how to declare a variable which has a function type that accepts two numbers and returns a number:

```Ts
let add: (x: number, y: number) => number;
```

`callback in ts` : A callback function is defined as a function passed into another function as an argument, which is then invoked inside the outer function to complete the desirable routine or action.

```Ts
function addAndHandle(n1: number, n2: number, cb: (num: number) => number) {
  const result = n1 + n2;
  cb(result);
}
```

`Unknown type in ts` : unknown is the type-safe counterpart of any . Anything is assignable to unknown , but unknown isn't assignable to anything but itself and any without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an unknown without first asserting or narrowing to a more specific type.

`never type in ts` : TypeScript introduced a new type never , which indicates the values that will never occur. The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception. Example: never.

### `class in the ts`

A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object. Typescript gives built in support for this concept called class. JavaScript ES5 or earlier didn't support classes.

```Ts
class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('Accounting');

accounting.describe();

const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accountingCopy.describe();

Result :

Department : Accounting
Department : DUMMY
```

### `access modifier`

TypeScript provides three access modifiers to class properties and methods: private , protected , and public . The private modifier allows access within the same class. The protected modifier allows access within the same class and subclasses. The public modifier allows access from any location.

```Ts

class Department {
    public name: string;
    protected family: string;
    private employees: string[];
}

```

### `readonly`

TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface. Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed.

```Ts

class Department {
   readonly private id: string;
}

```

### `inheritance`

TypeScript supports the concept of Inheritance. Inheritance is the ability of a program to create new classes from an existing class. The class that is extended to create newer classes is called the parent class/super class.

```Ts
class ITDepartment extends Department {
}
```

### `Generic types `

TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.

```Ts
const names: Array<string> = []; // string[]

const names: Array<any> = []; // string[]

const promise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is done!');
  }, 2000);
});

promise.then(data => {
  data.split(' ');
})
```

#### `Type castings`

Type castings allow you to convert a variable from one type to another. In TypeScript, you can use the as keyword or <> operator for type castings

```Ts
function merge (objA: object , objB: object) {
  return Object.assign(objA, objB);
}
const mergeObj = merge({ name: 'Max'}, { age: 30 }) as {name: string, age: number};
```

#### `generic function`

```Ts
function merge <T, U> (objA: T , objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge({ name: 'Max'}, { age: 30 });
```

#### `constrained`

TypeScript allows you to declare a type parameter constrained by another type parameter. The following prop() function accepts an object and a property name. It returns the value of the property.

```Ts
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
```

more example :

```Ts
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'Max' }, 'name');
```
