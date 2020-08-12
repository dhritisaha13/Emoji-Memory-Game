const tiles_array = ["tile1", "tile2", "tile3", "tile4", "tile5", "tile6", "tile7", "tile8", "tile9", "tile10", "tile11", "tile12"];

const emoji_array = [
    'url(emojis/kiss.jpg)',
    'url(emojis/laugh.jpg)',
    'url(emojis/love.jpg)',
    'url(emojis/smile.jpg)',
    'url(emojis/think.jpg)',
    'url(emojis/wink.jpg)'
];

var kiss_array = [],
    laugh_array = [],
    love_array = [],
    smile_array = [],
    think_array = [],
    wink_array = [];

var last_emoji = '';
var click = 0;
var clicked_tiles = [];
var duplicate_click = false;
var game_start = false;

document.getElementById("start").addEventListener("click", start_game);
document.getElementById("reset").addEventListener("click", reset_game);


document.getElementById("tile1").addEventListener("click", function(){
    tiles("tile1");
});
document.getElementById("tile2").addEventListener("click", function(){
    tiles("tile2");
});
document.getElementById("tile3").addEventListener("click", function(){
    tiles("tile3");
});
document.getElementById("tile4").addEventListener("click", function(){
    tiles("tile4");
});
document.getElementById("tile5").addEventListener("click", function(){
    tiles("tile5");
});
document.getElementById("tile6").addEventListener("click", function(){
    tiles("tile6");
});
document.getElementById("tile7").addEventListener("click", function(){
    tiles("tile7");
});
document.getElementById("tile8").addEventListener("click", function(){
    tiles("tile8");
});
document.getElementById("tile9").addEventListener("click", function(){
    tiles("tile9");
});
document.getElementById("tile10").addEventListener("click", function(){
    tiles("tile10");
});
document.getElementById("tile11").addEventListener("click", function(){
    tiles("tile11");
});
document.getElementById("tile12").addEventListener("click", function(){
    tiles("tile12");
});


function reset_var_shallow(){
    last_emoji = '';
    click = 0;
    clicked_tiles = [];
    duplicate_click = false;
    game_start = true;
    
    for(var j = 1; j < 13; j++){
        var element = "tile" + j;
        document.getElementById(element).style.backgroundImage = "";
    }
}


function reset_var_deep(){
    var kiss = 0,
        laugh = 0,
        love = 0,
        smile = 0,
        think = 0,
        wink = 0;
    
    kiss_array = [],
    laugh_array = [],
    love_array = [],
    smile_array = [],
    think_array = [],
    wink_array = [];
    
    for(var i = 0; i < 12; i++){
        var number = Math.floor(Math.random()*6);
        
        if(number === 0){
            if(kiss < 2){
                kiss++;
                kiss_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }else if(number === 1){
            if(laugh < 2){
                laugh++;
                laugh_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }else if(number === 2){
            if(love < 2){
                love++;
                love_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }else if(number === 3){
            if(smile < 2){
                smile++;
                smile_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }else if(number === 4){
            if(think < 2){
                think++;
                think_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }else if(number === 5){
            if(wink < 2){
                wink++;
                wink_array.push(tiles_array[i]);
            }else{
                i--;
            }
        }
    }
}

window.onload = function(){
    reset_var_deep();
}

function start_game(){
    reset_var_shallow();
}

function reset_game(){
    reset_var_shallow();
    reset_var_deep();
    console.log("Game has been reset");
}

function tiles(tile){
    
    if(game_start){
        console.log("Game has started");
        
        for(var i = 0; i < clicked_tiles.length; i++){
            if(tile == clicked_tiles[i]){
                duplicate_click = true;
                console.log("Duplicate tile clicked");
            }
        }
        if(!duplicate_click){
            clicked_tiles.push(tile);
            
            if(tile == kiss_array[0] || tile == kiss_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/kiss.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[0];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[0];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[0];
                        last_emoji = 'url(emojis/kiss.jpg)';
                    }
                }
            else if(tile == laugh_array[0] || tile == laugh_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/laugh.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[1];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[1];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[1];
                        last_emoji = 'url(emojis/laugh.jpg)';
                    }
            }else if(tile == love_array[0] || tile == love_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/love.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[2];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[2];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[2];
                        last_emoji = 'url(emojis/love.jpg)';
                    }
            }else if(tile == smile_array[0] || tile == smile_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/smile.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[3];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[3];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[3];
                        last_emoji = 'url(emojis/smile.jpg)';
                    }
            }else if(tile == think_array[0] || tile == think_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/think.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[4];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[4];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[4];
                        last_emoji = 'url(emojis/think.jpg)';
                    }
            }else if(tile == wink_array[0] || tile == wink_array[1]){
                if(last_emoji.length > 2){
                    if(last_emoji == 'url(emojis/wink.jpg)'){
                        document.getElementById(tile).style.backgroundImage = emoji_array[5];
                        last_emoji = '';
                    }
                else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[5];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        },2000);
                    }
                }else{
                        document.getElementById(tile).style.backgroundImage = emoji_array[5];
                        last_emoji = 'url(emojis/wink.jpg)';
                    }
            }
            
        }
            
        duplicate_click = false;
        
    }else{
        console.log("Game hasn't started");
    }
    
}
