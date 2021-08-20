import auth from '@react-native-firebase/auth'

export function login(params) {
    console.log(this.params.email);
    console.log("This ")

    auth()
        .signInWithEmailAndPassword(params.email, 'params.password')
        .then(() => {
            console.log("Success!")
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }
        
            console.error(error);
          });
}