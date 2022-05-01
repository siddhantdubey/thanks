import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import Letter from "../components/Letter";
import firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvOh-k1_Gg0wvGbray85VNsRZ_nOLiKEE",
  authDomain: "thankyou-6cc7f.firebaseapp.com",
  projectId: "thankyou-6cc7f",
  storageBucket: "thankyou-6cc7f.appspot.com",
  messagingSenderId: "128220502382",
  appId: "1:128220502382:web:0f18dad7e7614a9745497f",
  measurementId: "G-EC3PKHWM6R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


//use the await function to set up querySnapshot with collections(db, "users")

async function getQueries() {
  var querySnapshot = await getDocs(collection(db, "users"));
  return querySnapshot;
}

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);
  const [message, setMessage] = React.useState("");
  return (    


    signedIn ?  (<Letter letter={message}></Letter>) :
    (<Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box my={4} textAlign="left">
          <form>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" onChange={(e) => setEmail(e.currentTarget.value)}/>
            </FormControl>
            <FormControl mt={6}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" onChange={(e) => setPassword(e.currentTarget.value)} />
            </FormControl>
            {/* on submit send request to firebase */}
            <Button
              type="submit"
              variantColor="teal"
              variant="outline"
              width="full"
              mt={4}
              //get the email and password from the input
              onClick={(e) => {
                e.preventDefault();
                signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user.uid);
                    //find the user by email
                    getQueries().then((querySnapshot) => {
                      querySnapshot.docs.forEach((doc) => {
                        if (doc.data().email === email) {
                          setMessage(doc.data().message);
                        }
                      });
                    });
                    setSignedIn(true);
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                  });
              }}
            >
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>) 
  );
}
