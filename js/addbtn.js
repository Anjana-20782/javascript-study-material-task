let addbtn=document.getElementById("addbtn")
let form=document.getElementById("form")


form.style.display = "none";

addbtn.addEventListener("click",()=>{

    // if(form.style.display==="none"||form.style.display==="")
    // {
    //     form.style.display="block"
        
    // }
    // else{

    //     form.style.display="none"
    // }


    form.style.display==="none"||form.style.display===""? form.style.display="block":  form.style.display="none"
    
});

