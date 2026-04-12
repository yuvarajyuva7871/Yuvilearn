// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCW3tIpmaIrfPHcrI8f7MqgMLSNTUdh9e4",
  authDomain: "yuvilearn-c7ef2.firebaseapp.com",
  projectId: "yuvilearn-c7ef2",
  storageBucket: "yuvilearn-c7ef2.firebasestorage.app",
  messagingSenderId: "771501329007",
  appId: "1:771501329007:web:867469bd1cb50e9906db9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
