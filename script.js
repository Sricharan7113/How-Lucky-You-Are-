debugger;
let Lucky = Math.floor(Math.random()*20);

function Check(){
    
    const Guess = document.getElementById('InputField').value;
     
   
   if(Guess>20||Guess<1)
    {
        document.getElementById('Text').innerText="Please Enter A Number Between 0 - 20 ";
        document.getElementById('Text').style.backgroundColor="#55B5A1";
        document.getElementById('Text').style.color="black";
        document.getElementById('Text').style.borderRadius='10px';
        document.getElementById('Text').style.borderColor='black';
        console.log(Guess);
    }
    
     else if( Lucky == Guess)
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Text').innerText="Horray! You Are lucky!🥳🥳";
        document.getElementById('Text').style.backgroundColor="#295D99 ";
        document.getElementById('Text').style.color="white";
        document.getElementById('Text').style.borderRadius='10px';
        console.log(Guess);
    }

    else if( Lucky < Guess)
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Text').innerText="Your Guess is To High!⬆️⬆️";
        document.getElementById('Text').style.backgroundColor="#D5B036 ";
        document.getElementById('Text').style.color="black";
        document.getElementById('Text').style.borderRadius='10px';
        console.log(Guess);

    }

    else if( Lucky > Guess)
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Text').innerText="Your Guess is Too Low!⬇️⬇️";
        document.getElementById('Text').style.backgroundColor="#1C985C";
        document.getElementById('Text').style.color="white";
        document.getElementById('Text').style.borderRadius='10px';
        console.log(Guess);

    }
    
    else{
        document.getElementById('Text').innerText="Better Luck Next Time! 😔😔";
        console.log(Lucky);
        console.log(Guess);
   
    }
    
}
   