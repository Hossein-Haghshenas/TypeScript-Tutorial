const greet = (name: string | null | undefined) => {
  name ? console.log(name.toUpperCase()) : console.log("hola!");
};

greet(null);
