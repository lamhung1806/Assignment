export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: ILoginParams;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: String;
}
export interface Name {
  title: string;
  first: string;
  last: string;
  email: string;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postalCode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}
interface Street {
  number?: number;
  name?: string;
}

interface Coordinates {
  latidude?: string;
  longitude?: string;
}

interface Timezone {
  offset: string;
  description?: string;
}
interface ILoginParams {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
