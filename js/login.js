// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'index.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

// this will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

function logOut() {
    firebase.auth().signOut();
}

function logIn() {
    $("#loginModal").modal("show");
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // user is signed in
        console.log("Yes");
        $("#log_in").hide();
        $("#loginModal").modal("hide");
        $("#log_out").show();
        $("#user_state").text("User IS signed in!");
    } else {
        // user is not signed in
        console.log("No");
        $("#log_in").show();
        $("#log_out").hide();
        $("#user_state").text("User is NOT signed in!")
    }
});