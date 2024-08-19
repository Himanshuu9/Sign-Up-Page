// Form transition
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const container = document.querySelector('.container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

logInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

// Google Sign-In Success Handler
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    
    // Send user details to your backend or handle them as needed
}

// Sign Out (Optional)
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        console.log('User signed out.');
    });
}

// Render Google Sign-In Button for Sign-Up and Log-In
function renderGoogleButton() {
    gapi.signin2.render('googleSignUp', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn
    });

    gapi.signin2.render('googleLogIn', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSignIn
    });
}

window.onload = function() {
    renderGoogleButton();
};
