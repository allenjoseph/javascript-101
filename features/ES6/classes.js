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

(function testClasses() {
  console.log("Classes");

  const user = new User("John", "Doe");

  assert.strictEqual(user.name, "John");
  assert.strictEqual(user.lastname, "Doe");
  assert.strictEqual(user.fullname, "John Doe");
})();
