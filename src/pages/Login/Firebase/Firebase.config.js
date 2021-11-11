const firebaseConfig = {

    /* apiKey: "AIzaSyCHvu0eUxU8fUDiq7khrqtHn7YhY2-r_gg",
    authDomain: "assignment-12-abbcd.firebaseapp.com",
    projectId: "assignment-12-abbcd",
    storageBucket: "assignment-12-abbcd.appspot.com",
    messagingSenderId: "445510957173",
    appId: "1:445510957173:web:3b5b5aa5faf85e279e203c" */

    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;