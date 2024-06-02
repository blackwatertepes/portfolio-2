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
        let mouseX = -1000;
        let mouseY = -1000;
        for (let i = 0; i < 500; i++) {
          const x = Math.random();
          const y = Math.random();
          const alpha = Math.random() * 0.8;
          const speed = alpha * 0.0002 + 0.0002;
          let start = new paper.Point(x * window.innerWidth, y * window.innerHeight);
          let size = new paper.Size(1, 1);
          let shape = new paper.Shape.Rectangle(start, size);                                
          shape.style = { 
            fillColor: new paper.Color(alpha),                                               
          };
          sprites.add({ shape, speed, alpha, x, y });
        }

        let lines = [];
        setInterval(() => {                                                                  
          lines.forEach(line => line.remove());
          lines = [];

          sprites.forEach(sprite => {                                                        
            sprite.x += sprite.speed;                                         
            const x = sprite.x * window.innerWidth;
            const y = sprite.y * window.innerHeight;
            sprite.shape.position.x = x;
            sprite.shape.position.y = y;
            if (sprite.x > 1) {
              sprite.x = 0;
            }

            const dist = Math.sqrt(Math.pow(x - mouseX, 2) + Math.pow(y - mouseY, 2));
            if (dist < 200 * sprite.alpha) {
              const from = new paper.Point(sprite.shape.position.x, sprite.shape.position.y);
              const to = new paper.Point(mouseX, mouseY);
              const path = new paper.Path.Line(from, to);
              path.strokeColor = new paper.Color(sprite.alpha);
              lines.push(path);
            }
          });
        }, 10);                                                                              

        window.addEventListener("mousemove", (e) => {
          mouseX = e.x;
          mouseY = e.y;
        });
      }} />
      <canvas id="canvasPaper" width={5000} height={5000} className="fixed -z-50"></canvas>                           
    </>
  );
}