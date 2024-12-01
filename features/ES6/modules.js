import assert from "node:assert";

class User {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
  get fullname() {
    return `${this.name} ${this.lastname}`;
  }
}

(function testModules() {
  console.log("Modules");

  const user = new User("Jane", "Doe");

  assert.ok(user instanceof User);
  assert.ok("User class was imported from classUser module");
})();
