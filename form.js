var formDataArray = [];
function validation(){
    // event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass1").value;
    var confirmpassword = document.getElementById("confir-pass").value;
    var email = document.getElementById("email").value;
    var gen=document.forms["myform"]["gender"].value;
  
    if(gen==""){
        document.getElementById("demo5").innerHTML="PLEASE CLICK MALE OR FEMALE";
    }
    else{
        document.getElementById("demo5").innerHTML="";
    }
   if(username == null ||username ==""){ 
    document.getElementById("demo").innerHTML="PLEASE FILL THE USER NAME";
    }
    else{
        document.getElementById("demo").innerHTML=""
    } 
    if(password==""){
        document.getElementById("demo1").innerHTML="PLEASE FILL THE PASSWORD";
    }
    else if(password.length<6){
        document.getElementById("demo1").innerHTML="THE PASSWORD AT LEAST 6 CHARACTOR";
    }
    else{
        pass="";
    } 

    if(confirmpassword==""){
        document.getElementById("demo2").innerHTML="PLEASE FILL THE CONFIRM PASSWORD";

    }
    else if(confirmpassword!=password){
        document.getElementById("demo2").innerHTML="PLEASE FILL THE SAME PASSWORD";
    }
    else{
        document.getElementById("demo2").innerHTML="";
    } 
    if(email==""){
        document.getElementById("demo3").innerHTML="PLEASE FILL THE EMAIL";
    }
    else if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        document.getElementById("demo3").innerHTML="PLEASE INCLUDE THE @EMAIL.COM"
    }
    else{
        document.getElementById("demo3").innerHTML=""
    }
    
    // document.getElementById("demo").innerHTML = text;
    // document.getElementById("demo1").innerHTML = pass; 
    // document.getElementById("demo2").innerHTML = passw; 
    // document.getElementById("demo3").innerHTML = mail; 
    // document.getElementById("demo5").innerHTML = gender; 
    // document.getElementById("demo4").innerHTML = coure; 
    
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    localStorage.setItem("confirmpassword",confirmpassword);
    localStorage.setItem("email",email);
    localStorage.setItem("gender",gen);


   
    


    if (localStorage.getItem('formDataArray')) {
      formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
    }
    if(username!="" && password!="" && confirmpassword !="" && confirmpassword==password!="" && email !="" && gen!=""){
        let num = {
            name : username,
            password : password,
            conform : confirmpassword,
            email : email,
            gender:gen
        }
        formDataArray.push(num);
        console.log('Form data:', formDataArray);
        buildTable(formDataArray);
        resetForm();
    }
    // localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

}

function resetForm(){
    document.myform.reset();
}
    function buildTable(data){
        var table=document.getElementById("mytable")
        // console.log('Form data:', data);
        table.innerHTML ="";
        for(var i=0;i<data.length;i++){
            var row =`<tr> 
                        <td>${data[i].name}</td> 
                        <td>${data[i].email}</td> 
                        <td>${data[i].gender}</td>
                        <td>
                            <button class="edit" type="button" style="padding:5px 13px 5px 13px;background-color:green;color:white;" onclick=edit(${i})>Edit</button>
                            <button class="del" type="button" style="padding:5px 15px 5px 15px;background-color:red;color:white;"  onclick=del(${i})>Delete</button>
                        </td>

                    </tr>`
                     table.innerHTML  +=row;
                      
                        // resetForm();
                        

        }
 
     }



function edit(indexnumber){
    // event.preventDefault();
    // alert("hi to tamil") 
    for(var i=0;i<formDataArray.length;i++){
        if(indexnumber==i){
            document.getElementById("name").value=formDataArray[i].name;
            document.getElementById("email").value=formDataArray[i].email;
            // document.forms["myform"]["gender"].value=formDataArray[i].gender;
        }
    }
    
}
function del(del){
    // document.getElementById("mytable").value="";
    console.log(del);
    formDataArray.splice(del, 1);
    buildTable(formDataArray);
}




// function tamil(){
//     document.getElementById("name").value="";
//     document.getElementById("pass1").value="";
//     document.getElementById("confir-pass").value="";
//     document.getElementById("email").value="";
//     docusment.myform["gender"].value="";
// }

// function validation(event) {
//     event.preventDefault()
//     let uname = document.getElementById('name').value;
//     let age = document.getElementById('age').value;
//     if (uname==="") {
//         document.getElementById('error').innerHTML="required"
//         document.getElementById('error').style.color = "red";
        
//     } else {
//         document.getElementById('error').innerHTML=""
       
       
//     }
//     if (age==="") {
//         document.getElementById('error1').innerHTML ="required"
//         document.getElementById('error1').style.color="red";
//     } else {
//         document.getElementById('error1').innerHTML =""
//     }
// }

// function validation() {
//     e.preventdefault()
//     var uname = document.getElementById('name').value;
//     var age = document.getElementById('age').value;
   

//     if (uname == "") {
//         error = "required";
       
//     }
//     else {
//         error = ""
//         // 
//     }
//     if (age == "") {
//         error1 = "required";
//     }
//     else if(age<5){
//         error1="age is mimum five"
//     }
//     else {
//         error1 = ""
//         // document.getElementById('age').value="";
//     }

//     document.getElementById('error').innerHTML=error;
//     document.getElementById('error').style.color = "red";

//     document.getElementById('error1').innerHTML = error1;
//     document.getElementById('error1').style.color="red";

//     if (error === "" && error1 === "") {
//         alert("Form submitted successfully!");
//     }
// }