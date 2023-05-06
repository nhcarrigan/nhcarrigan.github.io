export interface Client {
  name: string;
  link: string;
  avatar: string;
  since: string;
}

export interface PastClient extends Client {
  until: string;
}
