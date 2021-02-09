var canvas = new fabric.Canvas("myCanvas");
var block_width = 100;
var block_height = 100;
player_x= 150;
player_y=150;
var player_object="";
var block_object="";
var face=["belle face.JPG","elsa face.JPG","cinderella face.JPG","jasmine face.JPG","rapunzel face.JPG","snow white face.JPG"];
var legs=["belle legs.JPG","elsa legs.JPG","jasmine legs.JPG","rapunzel legs.JPG","snow white legs.JPG", "cinderella legs.JPG"];
var right_hand=["belle right hand.JPG","elsa right hand.JPG","jasmine right hand.JPG","snow white right hand.JPG","rapunzel right hand.JPG","cinderella right hand.JPG"];
var left_hand=["belle left hand.JPG","elsa left hand.JPG","cinderella left hand.JPG","jasmine left hand.JPG","rapunzel left hand.JPG","snow white left hand.JPG"];
var body=["belle body.JPG","cinderella body.JPG","elsa body.JPG","jasmine body.JPG","rapunzel body.JPG","snow white body.JPG"];
randomNumber=Math.floor(Math.random()*6);
face_image=face[randomNumber];
legs_image=legs[randomNumber];
right_hand_image=right_hand[randomNumber];
left_hand_image=left_hand[randomNumber];
body_image=body[randomNumber];
function player_update(){
    fabric.Image.fromURL("palyer.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}
function newImage(get_image){
    fabric.Image.fromURL(get_image,function (Img){
   block_object=Img;
   block_object.scaleToHeight(block_height);
   block_object.scaleToWidth(block_width);
   block_object.set({
       top:player_y,
       left:player_x
   });
       canvas.add(block_object);
    })
    
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed =="80"){
        console.log("p and shift key pressed together");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keyPressed =="77"){
        console.log("m and shift key pressed together");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(keyPressed == "37"){
        left();
        console.log("left");
    }
    if(keyPressed == "39"){
        right();
        console.log("right");
    }
    if(keyPressed == "40"){
        down();
        console.log("down");
    }
    if(keyPressed == "38"){
        up();
        console.log("up");
    }
    if(keyPressed=="70"){
        newImage(face_image);
    }
    if(keyPressed=="66"){
        newImage(body_image);
    }
    if(keyPressed=="76"){
        newImage(legs_image);
    }
    if(keyPressed=="82"){
        newImage(right_hand_image);
    }
    if(keyPressed=="72"){
        newImage(left_hand_image);
    }
}
