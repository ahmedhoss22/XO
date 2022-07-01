var screen=document.querySelector('.screen');
let turn='X';
var arr=[];
var draw=[]
var counter=0;
var single=document.querySelector('.single');
var multi=document.querySelector('.multi');
var cont2=document.querySelector('.conatiner2');
var btn=document.querySelectorAll('.btn');
var gameSwitch='';
// //////////////////////////////////
single.onclick= function btnSingle(){
    single.style.display='none';
    multi.style.display='none';
    cont2.style.display='none';
    screen.style.display='block';
    gameSwitch='single';
    for (var i=0;i<btn.length;i+=1){
        btn[i].style.display = 'block';
      }}
multi.onclick= function btnMulti(){
    single.style.display='none';
    multi.style.display='none';
    cont2.style.display='none';
    screen.style.display='block';
    gameSwitch='multi';



    for (var i=0;i<btn.length;i+=1){
        btn[i].style.display = 'block';
      }
}
// ////////////////////////////////////////
function game(id){
    switch(gameSwitch){
        case ('single'):
            singleGame(id);
        break;
        case('multi'):
        multiGame(id);
        break;

    }
}
// //////////////////////////////////////////////
function singleGame(id){
    let ele=document.getElementById(id);
    if(ele.innerHTML==''){
        ele.innerHTML= 'X';
        counter++;

        check();
        random();
    }
}
function random(){
    while(true){
        var rand=Math.floor(Math.random()*10);
        var ele=document.getElementById(rand);
       if(rand !=0 && ele.innerHTML==''){
        ele.innerHTML='O'
        check();
        counter++;
        break;
       }
       else if(counter >=8){
        break;
       }
    }
           
}



// ///////////////////////////////////
function multiGame(id){
    let ele=document.getElementById(id);
    if(turn=='X' && ele.innerHTML==''){
        ele.innerHTML= turn;

        turn='O';
        screen.innerHTML='O'
        counter++;

        check();
    }
    else if(turn=='O' && ele.innerHTML==''){
        ele.innerHTML= turn;

        turn='X'
        screen.innerHTML='X'
        counter++;

        check();

    }

}



function end(num1,num2,num3){
    screen.innerHTML=` ${arr[num1]} is Winner`;   

    document.getElementById(num1).style.background = '#1B2631';
    document.getElementById(num2).style.background = '#1B2631';
    document.getElementById(num3).style.background = '#1B2631';

    setInterval(function(){
        screen.innerHTML+='.'
    },1000);
    setTimeout(function(){location.reload()},3500);
}



function check(){

    for(var i=1;i<10;i++){
        arr[i] = document.getElementById(i).innerHTML ;
    }

    if(arr[1] == arr[2] && arr[2] == arr[3] && arr[2]!== ''){
        end(1,2,3)
    }
   else if(arr[4]==arr[5] && arr[5]==arr[6] && arr[4]!=''){
    end(4,5,6)
    }
   else if(arr[7]==arr[8] && arr[8]==arr[9] && arr[7]!=''){
    end(7,8,9)
    }
   else if(arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=''){
    end(1,4,7)
    }
   else if(arr[5]==arr[2] && arr[2]==arr[8] && arr[2]!=''){
    end(2,5,8)
    }
   else if(arr[3]==arr[6] && arr[9]==arr[3] && arr[3]!=''){
    end(3,9,6)
    }
   else if(arr[1]==arr[5] && arr[5]==arr[9] && arr[1]!=''){
    end(1,5,9)
    }
   else if(arr[7]==arr[5] && arr[5]==arr[3] && arr[3]!=''){
    end(7,5,3)
    }
    else if(counter==9){
        screen.innerHTML='The game is draw';  
        setInterval(function(){
            screen.innerHTML+='.'
        },1000);
        setTimeout(function(){location.reload()},3500); 
    }
}


