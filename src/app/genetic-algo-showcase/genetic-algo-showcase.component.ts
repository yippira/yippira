import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-genetic-algo-showcase',
  templateUrl: './genetic-algo-showcase.component.html',
  styleUrls: ['./genetic-algo-showcase.component.css']
})


export class GeneticAlgoShowcaseComponent implements OnInit {
  private p5;

  constructor() { }

  ngOnInit() {
    this.createCanvas();
  }

  private createCanvas() {
    this.p5 = new p5(this.sketch);
  }

  private sketch(p: any) {
    let angle = 0;
    //Smaller means more cubes.
    let w = 40;
    let ma;
    let maxD;


    p.setup = () => {
      p.createCanvas(400, 400, p.WEBGL).parent('canvas-holder');
      ma = p.atan(1 / p.sqrt(2));
      maxD = p.dist(0, 0, 300, 300);
    };

    p.draw = () => {
      p.background(255);
      var locX = p.mouseX - p.height / 2;
      var locY = p.mouseY - p.width / 2;

      p.ambientLight(100, 100, 100);
      p.pointLight(255, 255, 255, locX, locY, 100);

      p.ortho(-450, 450, -450, 450, -300, 1000);

      p.rotateX(-p.PI / 6);
      p.rotateY(ma);
      //rotateX(PI / 4);
      p.rectMode(p.CENTER);
      // rotateX(angle * 0.25);
      let offset = 0;


      for (let z = 0; z < p.height; z += w) {
        for (let x = 0; x < p.width; x += w) {
          p.push();
          //distance off center
          let d = p.dist(x, z, p.width / 2, p.height / 2);
          offset = p.map(d, 0, maxD, -(1.25) * p.PI, 1.25 * p.PI);
          let a = angle + offset;
          //map value start1 stop 1 start 2 stop 2
          //remaps a number from one range to another. Kinda like ratio? 
          //But we need it for the changing value for some reason... find out why
          let h = p.map(p.sin(a), -1, 1, 75, 300);
          //since h is not a constant, we use h
          //fill(255);
          p.translate(x - p.width / 2 - 25, -125, z - p.height / 2);
          //normalMaterial();
          p.ambientMaterial(114, 255, 200);
          p.noStroke();
          p.box(w, h, w);

          p.pop();

        }

      }
      angle -= 0.11;
    };
  }
}
