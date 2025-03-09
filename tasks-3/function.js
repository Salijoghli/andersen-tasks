function getPersons(name, age) {
  const object = { name, age };

  const newObject = Object.assign({}, object);

  const person = new Object();
  person.name = name;
  person.age = age;

  const newPerson = Object.create(object);
  Object.assign(newPerson, person);

  const map = new Map();
  map.set("name", name);
  map.set("age", age);
  const anotherObject = Object.fromEntries(map);

  const array = [object, newObject, person, newPerson, anotherObject];

  return array;
}

console.log(getPersons("guga", "98"));
