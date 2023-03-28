console.log("hello");

var canvas = document.getElementById( "myCanvas" );

var ctx = canvas.getContext( "2d" );

ctx.fillStyle = "blue";

let x = 50;
let y = 50;
let w = 100;
let h = 100;
ctx.fillRect( x, y, w, h);

let chocolate_scoop = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: "chocolate"
}

let strawberry_scoop = {
    x: 50,
    y: 100,
    width: 50,
    height: 50,
    color: "crimson"
}

let vanilla_scoop = {
    x: 75,
    y: 50,
    width: 50,
    height: 50,
    color: "antiquewhite"
}

function draw( timestamp ) {
    console.log( `Canvas width: ${canvas.width}`);
    console.log( `Canvas height: ${canvas.height}`);
    console.log( `Timestamp: ${timestamp}` );
    
}

function draw_scoops(scoop) {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    ctx.beginPath();
    ctx.arc(scoop.x, scoop.y, scoop.width, scoop.height, Math.PI * 2 );
    ctx.fillStyle = scoop.color;
    ctx.fill();    
}

function evtHandler( evt ) {
        
    console.log( evt );
    
    if( evt.srcElement.type === "radio" && evt.srcElement.checked ) {
        if( evt.srcElement.value === "vanilla" ) {
            ctx.clearRect( 0, 0, canvas.width, canvas.height );
            ctx.fillStyle = "antiquewhite";
            ctx.fillRect( x, y, w, h);
            console.log( "vanilla" );
        } else if( evt.srcElement.value === "chocolate") { 
            draw_scoops( chocolate_scoop );            
            console.log( "chocolate" );
        } else {
            ctx.clearRect( 0, 0, canvas.width, canvas.height );
            ctx.fillStyle = "crimson";
            ctx.fillRect( x, y, w, h);
            console.log( "strawberry" );
        }
    }
}

document.addEventListener( "change", evtHandler );

let animationID = window.requestAnimationFrame( draw );

// window.cancelAnimationFrame( animationID );

