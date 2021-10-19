//Condicionales

// const persona = {
//   nombre: "Daniel",
//   age: 25,
//   job: "Front"
// };

// if (persona.age >= 18) {
//   alert("Mayor de edad");
// } else {
//   alert("No es mayor de edad");
// }

//Operador ternario
// alert(persona.age >= 18 ? "Es mayor de edad" : "Es menor de edad");

//Operador cuyo nombre no recuerdo nunca ):

// console.log(
//   persona.job && persona.job.title ? persona.job.title : "No hay empleo"
// );

// console.log(persona?.job?.title); // ---> persona && persona.job && persona.job.title

//Desestructuración
// const nombrePersona = persona.nombre;
// {
//   nombre
// }

// const nombre = "Dulce";

// const persona = {
//   nombre: "Daniel",
//   age: 25,
//   job: {
//     title: "Front End Dev"
//   },
//   estatura: 1.73,
//   pais: "México"
// };

// const { nombre: nombrePersona, age, job, ...rest } = persona; // ---> const nombrePersona = persona.nombre, age, {con todo el objeto restante}
// const { title } = job;
// console.log(
//   `Hola ! Me llamo ${nombrePersona} y tengo ${age} años, soy ${title}`
// );
// console.log(rest.job);

// console.log(nombre);

// console.log(rest.nombre);

//Map, Filter, Some y Mutabilidad (...)

// const tasks = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false
//   }
// ];

//MAP
// const myId = 8;
// const newArray = tasks.map(task =>
//   task.id === myId ? { ...task, completed: !task.completed } : task
// );
// console.log(newArray);
// console.log(tasks);

//FILTER
// const myId2 = 5;
// const filteredTasks = tasks.filter(task => task.id !== myId2);
// console.log(filteredTasks);
// console.log(tasks);

//EJERCICIO INTERESANTE
// const myId2 = [1, 2, 5, 8, 9];

// const filteredTasks = tasks.filter(task => !myId2.includes(task.id));
// console.log(filteredTasks);
// console.log(tasks);

//API

const API = "https://jsonplaceholder.typicode.com/todos";

let myTodos;

const handleFetchData = async () => {
  const response = await fetch(API);
  const result = await response.json();
  const todos = result.slice(0, 10);
  myTodos = todos;
  console.log(myTodos);
};

//Pintar

handleFetchData();

console.log(myTodos);

//React, quién usa React, existen Frameworks de react, ventajas sobre otros frameworks
//Librería y un framework
