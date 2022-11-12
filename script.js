debugger;

alert("Enter a Number \n If Your Guessed It Right, Then You Are The Luckiest Person🥳 \n If Not, Do The Same Until You Find Yourself Lucky😅😅  \n \"All The Best\"  ")
let Lucky = Math.floor(Math.random()*10);
if(Lucky==0)
{
    Lucky++;
}

var Life = 5;
function Check(){
    const Guess = document.getElementById('InputField').value;
    Life--;
    console.log("Lives="+Life);
    document.getElementById('Lives').innerText= "❤️"+Life;
  
   
   if(Guess>10||Guess<0)
    {
        document.getElementById('Text').innerText="Please Enter A Number Between 0 - 10 ";
        document.getElementById('Text').style.backgroundColor="#55B5A1";
        document.getElementById('Text').style.color="black";
        document.getElementById('Text').style.borderRadius='10px';
        document.getElementById('Text').style.borderColor='black';
        document.getElementById('Reload').style.display='none';
        console.log(Guess);
    }

    else if( Lucky < Guess)
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Text').innerText="Your Guess is To High!⬆️⬆️";
        document.getElementById('Text').style.backgroundColor="#D5B036 ";
        document.getElementById('Text').style.color="black";
        document.getElementById('Text').style.borderRadius='10px';
        document.getElementById('Reload').style.display='none';
        console.log(Guess);

    }

    else if( Lucky > Guess)
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Text').innerText="Your Guess is Too Low!⬇️⬇️";
        document.getElementById('Text').style.backgroundColor="#1C985C";
        document.getElementById('Text').style.color="white";
        document.getElementById('Text').style.borderRadius='10px';
        document.getElementById('Reload').style.display='none';

    }

      
    else
    {
        document.getElementById('Text').style.display='block';
        document.getElementById('Reload').style.display='block';
        document.getElementById('Text').innerText="Horay! You Are lucky!🥳🥳";
        document.getElementById('Text').style.backgroundColor="#295D99 ";
        document.getElementById('Text').style.color="white";
        document.getElementById('Text').style.borderRadius='10px';
        console.log(Guess);
        console.log(Lucky);
    }
     if (Life<1)
        {
        document.getElementById('Text').innerText="Better Luck Next Time! 😔😔";
        document.getElementById('Lives').innerText= "❤️"+"0";
        document.getElementById('Reload').style.display='block';
        }  
     }
     function Reload(){
        location.reload();
    }
 
    


  
