const button = document.getElementById("btn");
const randomColor = () =>{
    let val = "0123456789ABCDEF"
    let cons = "#";

    for(let i = 0; i<6 ; i++)
    {
        cons = cons +  val[ Math.floor(Math.random() * 16) ]   // *16 is very imp for us bcz Math.random will give values form (0 - 0.99) //0.99*16 = 15.84 // 15 is pur index
        
    }

    return cons;
}



function changeRandomColor() {
    document.body.style.backgroundColor = randomColor();

}
button.addEventListener("click" , changeRandomColor);  
console.log(randomColor());

// line 1 se button var declre hua usse #btn wala fecth hoke vo id select ho gyi or button name ke constant me store ho gyi
// fir ek random color ka fn banaya jo random color generate krega cons me # store kr rkha usme add krdega ek random value jo ki value se li gyi h
// fir randomcolor() return krega cons ko 
// line 17 me ek changeRandomColor() bana jo bgc ko change krega jo bhi bhi randomColor() return krta ha 
//line 21 me us button me event listener lagaege click ka us changerandomColor sath me parameter denge