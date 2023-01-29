import {Guitar} from "./guiter.model";

export interface User {
  id: number;
  username: string;
  favourites: Guitar[];
}
