var items = [];

var num = 2;

document.getElementsByClassName("btn-success")[0].addEventListener("click",function(){
    document.querySelector("#game h3").innerText="Player 1 It's your turn";
})

for (var i = 0; i < 9; i++) {
    items.push(document.getElementsByClassName("item")[i]);
}


for (var i = 0; i < 9; i++) {
    items[i].addEventListener("click", game);
}

function game() {
    if (num % 2 === 0) {

        this.innerText="O";
        document.querySelector("#game h3").innerText="Its player 2's turn";
        this.setAttribute("class","item2");

        if (checkWin()) {
            document.querySelector("#game h3").innerText = "player 1 wins";
            document.getElementsByClassName("click")[0].setAttribute("class","click2");
            return;

        }
        num++;
    }
    else {

        this.innerText="X";
        document.querySelector("#game h3").innerText="Its player 1's turn";
        this.setAttribute("class","item2");

        if (checkWin()) {
            document.querySelector("#game h3").innerText = "player 2 wins";
            document.getElementsByClassName("click")[0].setAttribute("class","click2");
            return;
        }
        num++;

    }

}

function checkWin() {
    if (((items[0].innerText == items[1].innerText) && (items[1].innerText == items[2].innerText)) || ((items[3].innerText == items[4].innerText) && (items[4].innerText  == items[5].innerText)) || ((items[6].innerText == items[7].innerText) && (items[7].innerText == items[8].innerText)) || ((items[0].innerText == items[3].innerText) && (items[3].innerText == items[6].innerText))
        || ((items[1].innerText == items[4].innerText) && (items[4].innerText == items[7].innerText)) || ((items[3].innerText == items[5].innerText) && (items[5].innerText == items[8].innerText)) || ((items[0].innerText == items[4].innerText) && (items[4].innerText == items[8].innerText)) || ((items[2].innerText == items[4].innerText) && (items[4].innerText == items[6].innerText)) ) {

        return 1;
    }

    else {
        return 0;
    }
}

// function match(a,b,c)
// {
//     if(a==b)
//     {
//         if(b==c)
//         {
//             return 1;
//         }
//         else
//         {
//             return 0;
//         }
//     }

//     if(a==c)
//     {
//         if(b==c)
//         {
//             return 1;
//         }
//         else{
//             return 0;
//         }
//     }

//     else
//     {
//         return 0;
//     }
// }