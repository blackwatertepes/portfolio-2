'use client';                                                                                
                                                                                             
import Script from "next/script";                                                            
                                                                                             
export default function CanvasPaper() {                                                      
  return (                                                                                   
    <>                                                                                       
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js" onLoad={() => {
        window.addEventListener("load", (_) => {
          document.getElementById("canvasPaper").setAttribute("width", window.innerWidth);
          document.getElementById("canvasPaper").setAttribute("height", window.innerHeight);
        });

        window.addEventListener("resize", (_) => {
          document.getElementById("canvasPaper").setAttribute("width", window.innerWidth);
          document.getElementById("canvasPaper").setAttribute("height", window.innerHeight);
        });

        let canvas = document.getElementById("canvasPaper");                                 
        paper.setup(canvas);

        const sprites = new Set();
        for (let i = 0; i < 500; i++) {
          const x = Math.random();
          const y = Math.random();
          const speed = Math.random() * 0.0002 + 0.0002;
          let start = new paper.Point(x * window.innerWidth, y * window.innerHeight);
          let size = new paper.Size(1, 1);
          let shape = new paper.Shape.Rectangle(start, size);                                
          shape.style = { 
            fillColor: new paper.Color('black'),                                               
          };
          sprites.add({ shape, speed, x, y });
        }

        setInterval(() => {                                                                  
          sprites.forEach(sprite => {                                                        
            sprite.x += sprite.speed;                                         
            sprite.shape.position.x = sprite.x * window.innerWidth;
            sprite.shape.position.y = sprite.y * window.innerHeight;
            if (sprite.x > 1) {
              sprite.x = 0;
            }
          });
        }, 10);                                                                              
      }} />
      <canvas id="canvasPaper" width={5000} height={5000} className="fixed -z-50"></canvas>                           
    </>
  );
}