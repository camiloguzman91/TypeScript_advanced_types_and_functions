export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer",
}

export type User = {
  username: string;
  role: ROLES;
}

const camiUser: User = {
  username: 'camilo',
  role: ROLES.ADMIN
}
