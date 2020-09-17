      var peoples;

      var strings=["Happy Birthday to me! ","Today is my Birthday ","Today i turnrd 15! "]

      var str=strings[0];

      var txt = '';

      var end = false;

      var count=0

      var gif_count=0;

      function emote(){

          var gif=document.getElementById("gif")

          gifs=["🥳","😺","🌟","💐","🐱","🎂","🍩","🎉","🎊","🎂","🎈","🎁"];

          gif.innerHTML=gifs[gif_count];

          gif_count++;

          if(gif_count==gifs.length){

              gif_count=0;

          }

          

      }

      

      

      function tick(){

      var el=document.getElementById("wrap");

        if (end==false) {

        txt = str.substring(0, txt.length+1);

            if (txt === str){

            count++

            str=strings[count]

                if(count==strings.length)

                {

                    end=true

                }

                txt=""

            }

        }

        if(end==true){

            txt=strings[0]

        }

       

        el.innerHTML = txt;

   }

   

     window.onload=function(){

         setInterval(tick,300);

         setInterval(emote,1000)

         getData();

     }

        

function send(){

    var text= document.getElementById("text").value

    var name=prompt("Please Enter Your Name")

    if(text=="" || name==null){

        alert("Either your greeting or name was not filled so greeting not sent!")

    }

    else{

    greet(name,text);

    alert("Your Greetings Sent!")

    alert("thanks!")

    

    }

    

    

}


