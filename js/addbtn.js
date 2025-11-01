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


form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;

      let str="";

      str+=`
      
      <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `;
      document.getElementById("result").innerHTML=str

})
