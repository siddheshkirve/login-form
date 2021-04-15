var state =false;
const password = document.getElementById("password").value;
function toggle(){
    if(state){
        document.getElementsById('password').setAttribute('type','password');
        state = false;
    }
    else{
        document.getElementById('password').setAttribute('type','text');
        state = true;
    }

}
function validationform() {
    
    const uname = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    

    if (uname == null || uname == ''){
        alert("Name can't be blank");
        
    }else if(!filter.test(uname)){
	    alert("Enter valid email id.");    
    }
    else if(password==''){
        alert("Password can't be blank");    
    }
    else if(password.length<6){
	    alert("Password must be at least 6 characters long.");     
    }
    else if(uname === "user@gmail.com" && password === "Webdev"){
        alert("You have successfully logged in.");
    }
    else{
        alert('Invalid credentials');
    }   
}
