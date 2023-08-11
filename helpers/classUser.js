export class User {
  constructor(name, lastname){
    this.name = name;
    this.lastname = lastname;
  }
  get fullname() {
    return `${this.name} ${this.lastname}`;
  }
}
