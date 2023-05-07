export class User {
    id: any
    name: any;
    pwd: any;
    getDetails(): string {
      return `${this.name} (${this.pwd})`;
    }
  }