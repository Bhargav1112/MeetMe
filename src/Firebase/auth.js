import { getAuth, signOut } from "firebase/auth";
import { app } from './';

export const auth = getAuth(app);