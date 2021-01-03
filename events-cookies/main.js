var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>Diana\'s Delicious Desserts</h2>';
msg += 'Weekend Special: <br> ';
msg += '1 Dozen Iced Cookies $8.00 <br> ';
msg += '2 Dozen Iced Cookies $12.00</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);                // Add it to the page

function dismissNote() {                          // Declare function
  document.body.removeChild(elNote);              // Remove the note
}

var elClose = document.getElementById('close');   // Get the close button
elClose.addEventListener('click', dismissNote, false);// Click close-clear note



/////////BEGIN CHECK USERNAME
function checkUsername() {                        // Declare function
  var username = el.value;                        
  if (username.length < 8) {                     
    elMsg.className = 'warning';                 // Change class on message
    elMsg.textContent = 'Must be 8 characters';// Update message
  } else {                                        
    elMsg.textContent = '';                       
  }
}

function tipUsername() {                          
    elMsg.className = 'tip';                
    elMsg.innerHTML = 'Username must be at least 8 characters'; 
}

var el = document.getElementById('username');     
var elMsg = document.getElementById('feedback'); 

el.addEventListener('focus', tipUsername, false); 
el.addEventListener('blur', checkUsername, false);

/////////////ENTER PASSWORD
(function () {
function checkPassword() {                      
  var password = el.value;                        
  if (password.length < 5) {                    
    elPasswordMsg.className = 'Warning';            
    elPasswordMsg.textContent = 'Must be 5 characters';
  } else {                                      
    eLMsg.textContent = '';                      
  }
}

function tipPassword() {                          
  elPasswordMsg.className = 'tip';                        
  elPasswordMsg.innerHTML = 'Password must be at least 5 characters'; 
}

var elCheckPassword = document.getElementById('password');
var elCheckPasswordMsg = document.getElementById('passwordFeedback');

el.addEventListener('focus', tipPassword, false);
el.addEventListener('blur', checkPassword, false);

/////////CONFIRM PASSWORD MATCH
function confirmPassword() {
  var pass = txtConfirmPass.value;
  var confirm = elConfirmPasswordFeedback.value;
  if(!(checkPassword === confirmPassword)||checkPassword.length<5||confirmPassword.length<5){
    event.preventDefault();
    elPasswordHint.innerHTML = 'Passwords must be matching and at least 5 characters.';
  }
}

var confPass = document.getElementById('txtConfirmPassword');   
var confPasswordFeedback = document.getElementById('confirmPasswordFeedback');  

el.addEventListener('focus', confirmPassword, false); 
el.addEventListener('blur', tipPassword, false);
} ());

var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint; 
elForm          = document.getElementById('formSignup');         
elSelectPackage = document.getElementById('package');
elPackageHint   = document.getElementById('packageHint');
elTerms         = document.getElementById('terms');
elTermsHint     = document.getElementById('termsHint');

function packageHint() {                                 // Declare function
  var pack = this.options[this.selectedIndex].value;     // Get selected option
  if (pack === 'monthly') {                              // If monthly package
    elPackageHint.innerHTML = '$12 per 2 Dozen!';//Show this msg
  } else {                                               // Otherwise
    elPackageHint.innerHTML = '$8 per Dozen!';            // Show this message
  } 
}

function checkTerms(event) {                          
  if (!elTerms.checked) {                                
    elTermsHint.innerHTML = 'You must agree to the terms.'; 
    event.preventDefault();                           
  }
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);