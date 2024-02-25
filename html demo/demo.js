console.log("hi")
function checkvalue(){
    console.log("in");
    let data=document.getElementById("user").value;
    if(data==""){
        console.log("give a username");
        document.getElementById('show').innerHTML="wrtie username";
        //document.getElementById('show').innerHTML='Name cant be blank...!' 
    }
    console.log(data);
}