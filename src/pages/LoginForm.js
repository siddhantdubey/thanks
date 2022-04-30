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

//set up firebase
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = getAuth(app);

export default function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        {/* <Box textAlign="center">
          <Heading>Thank You</Heading>
        </Box> */}
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
                    console.log("POG");
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
    </Flex>
  );
}
