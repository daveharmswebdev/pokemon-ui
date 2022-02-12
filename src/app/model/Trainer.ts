export class Trainer {
  public id: number;
  public email: string;
  public password: string;
  public role: string;
  public authStatus: string;
  public name: string | undefined;

  constructor(
    id: number = 0,
    email: string = '',
    password: string = '',
    role: string = '',
    authStatus: string = '',
    name: string = ''
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.authStatus = authStatus;
    this.name = name;
  }
}
