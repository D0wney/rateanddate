var name;
var password;

function login()
{
    document.getElementById("title").innerHTML = "Hello JavaScript";
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    var loginInfo = 
    {
    	username: name,
    	password: password
    }
    var loginInfoJson = JSON.stringify(loginInfo);
    window.alert(name);
    $.post("https://web.njit.edu/~al356/webapis",loginInfoJson);
};

//$(document).ready(foo);