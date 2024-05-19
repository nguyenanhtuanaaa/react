import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQe1rs34BTTYwi7nrzBMgIkJSBzQ_gWuE",
  authDomain: "demoreact-8a8e4.firebaseapp.com",
  projectId: "demoreact-8a8e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
