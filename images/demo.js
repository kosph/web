function canvasTextAutoLine(str,canvas,initX,initY,lineHeight){
    var ctx = canvas.getContext("2d"); 
	ctx.font="100px Verdana";
    var lineWidth = 0;
    var canvasWidth = canvas.width-100; 
    var lastSubStrIndex= 0; 
    for(let i=0;i<str.length;i++){
        lineWidth+=ctx.measureText(str[i]).width; 
        if(lineWidth>canvasWidth-initX){//减去initX,防止边界出现的问题
            ctx.fillText(str.substring(lastSubStrIndex,i),initX,initY);
            initY+=lineHeight;
            lineWidth=0;
            lastSubStrIndex=i;
        } 
        if(i==str.length-1){
            ctx.fillText(str.substring(lastSubStrIndex,i+1),initX,initY);
        }
    }
  }
function btClick(){

	username = document.getElementById('name').value;
	canvasTextAutoLine('    就这样被你征服，切断了所有退路”'+username+'想着心中的那个她，优哉游哉，辗转反侧，深夜时起来唱《征服》，歌声响彻复旦的整栋宿舍楼。唱到高音时突然破嗓，然后整栋楼都沸腾起来……',c,10,150,100);

	var image = new Image();
 image.src = c.toDataURL("image/png");

document.getElementById('hide').style.display = "none";

document.getElementById('test').appendChild(image);

}
var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
c.width = 0.7*document.body.offsetWidth;
c.height = 800;
var username;
