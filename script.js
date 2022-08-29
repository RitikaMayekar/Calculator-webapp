const display=document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
const operator=["(",")",'+','-','*','/','.'];

buttons.forEach(element => {
    element.addEventListener("click",()=>{
        perform(element.innerText);
    })
});

function perform(text){
    if(text=="AC")
    {
        display.value="";
    }
    else if(text=="Back")
    {
        let value = display.value;
        display.value=value.slice(0,value.length-1);
    }
    else if((text>='0' && text<='9') || operator.includes(text) )
    {
        if(display.value=="Error")
            display.value="";
        display.value += text;
    }
    else
    {
        try{
            display.value= eval(display.value);

        }   
        catch{
            display.value="Error";
        }     
    }
}