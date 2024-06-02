'use client';                                                                                
                                                                                             
import Script from "next/script";                                                            
import { useState } from "react";
                                                                                             
export default function CanvasPaper() {                                                      
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  addEventListener("resize", (_) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });
  
  return (                                                                                   
    <>                                                                                       
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/paper.js/0.12.17/paper-full.min.js" onLoad={() => {
        let canvas = document.getElementById("canvasPaper");                                 
        paper.setup(canvas);
        const sprites = new Set();
        for (let i = 0; i < 100; i++) {
            let start = new paper.Point(Math.random() * width, Math.random() * height);                             
            let size = new paper.Size(1, 1);
            let shape = new paper.Shape.Rectangle(start, size);                                
            shape.style = { 
              fillColor: new paper.Color('black'),                                               
            };
            sprites.add({ shape, speed: Math.random() * 0.5 + 0.5 });                                     
        }
        setInterval(() => {                                                                  
          sprites.forEach(sprite => {                                                        
            sprite.shape.position.x += sprite.speed;                                         
            if (sprite.shape.position.x > width) {
              sprite.shape.position.x = 0;
            }
          });
        }, 10);                                                                              
      }} />
      <canvas id="canvasPaper" width={width} height={height} className="fixed -z-50"></canvas>                           
    </>
  );
}