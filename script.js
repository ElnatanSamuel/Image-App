// import { fabric } from "./fabric.js";
const grayScale = document.querySelector(".grayscale");
const saturation = document.querySelector(".saturation");
const chooseImg = document.querySelector(".chooseimg");
const Createimg = document.querySelector(".createimg");
const insertTxt = document.querySelector(".insertbtn");
const saveBtn = document.querySelector(".savebtn");
const addNewImg = document.querySelector(".addnewimg");
const addimgBtn = document.querySelector(".newimagebtn");
const pencilTool = document.querySelector(".pencildraw");
const ExitTool = document.querySelector(".exitdraw");
const removeTool = document.querySelector(".removeobj");
const rectangle = document.querySelector(".rectangle");
const triangle = document.querySelector(".triangle");
const circle = document.querySelector(".circle");
const pentagon = document.querySelector(".pentagon");
const insertLine = document.querySelector(".insertline");

var canvas = new fabric.Canvas("canvas", {
  preserveObjectStacking: true,
});
canvas.setWidth(document.body.scrollWidth);
canvas.setHeight(600);

//create image at first
//
//
//
document.querySelector(".createimg").onchange = function (e) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function () {
      var img = new fabric.Image(image);
      img.set({
        left: 400,
        top: 100,
      });
      img.scaleToWidth(500);
      canvas.add(img).setActiveObject(img).renderAll();

      //
      //
      //filters
      //
      //
      //
      const filters = {
        brightness: new fabric.Image.filters.Brightness(),
        saturation: new fabric.Image.filters.Saturation(),
        contrast: new fabric.Image.filters.Contrast(),
        hue: new fabric.Image.filters.HueRotation(),
        invert: new fabric.Image.filters.Invert(),
        blur: new fabric.Image.filters.Blur(),
        noise: new fabric.Image.filters.Noise(),
        viberance: new fabric.Image.filters.Vibrance(),
      };

      img.filters.push(filters.brightness);
      const brightnessInput = document.querySelector("#brightness");
      brightnessInput.oninput = () => {
        const value = parseFloat(brightnessInput.value);
        // Edit the filter value
        filters.brightness.brightness = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.saturation);
      const saturationInput = document.querySelector("#saturation");
      saturationInput.oninput = () => {
        const value = parseFloat(saturationInput.value);
        // Edit the filter value
        filters.saturation.saturation = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.contrast);
      const contrastInput = document.querySelector("#contrast");
      contrastInput.oninput = () => {
        const value = parseFloat(contrastInput.value);
        // Edit the filter value
        filters.contrast.contrast = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.hue);
      const hueInput = document.querySelector("#hue");
      hueInput.oninput = () => {
        const value = parseFloat(hueInput.value);
        // Edit the filter value
        filters.hue.rotation = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.blur);
      const blurInput = document.querySelector("#blur");
      blurInput.oninput = () => {
        const value = blurInput.value;
        // Edit the filter value
        filters.blur.blur = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.noise);
      const noiseInput = document.querySelector("#noise");
      noiseInput.oninput = () => {
        const value = noiseInput.value;
        // Edit the filter value
        filters.noise.noise = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };

      img.filters.push(filters.viberance);
      const viberanceInput = document.querySelector("#viberance");
      viberanceInput.oninput = () => {
        const value = viberanceInput.value;
        // Edit the filter value
        filters.viberance.vibrance = value;
        // Apply the changes
        img.applyFilters();
        // Display the result
        canvas.renderAll();
      };
      //filters
      //
      //
    };
  };
  reader.readAsDataURL(e.target.files[0]);
  {
    crossOrigin: "anonymous";
  }
};
//
//
//
//create image at first

//add image from add image button
//
//
//
document.querySelector(".addnewimg").onchange = function (e) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var image = new Image();
    image.src = e.target.result;
    image.onload = function () {
      var img = new fabric.Image(image);
      img.set({
        left: 400,
        top: 100,
      });
      img.scaleToWidth(300);
      canvas.add(img).setActiveObject(img).renderAll();

      //
      //
      //filters
      //
      //
      //

      //filters
      //
      //
    };
  };
  reader.readAsDataURL(e.target.files[0]);
  {
    crossOrigin: "anonymous";
  }
};

//
//
//
//add image from button

const chooseImgFun = () => {
  Createimg.click();
  chooseImg.remove();
};

chooseImg.addEventListener("click", chooseImgFun);
addimgBtn.addEventListener("click", () => addNewImg.click());

const addText = () => {
  var text = new fabric.Textbox("Type Here", {
    width: 200,
    fontSize: 20,
    fill: "#000",
    left: 100,
    top: 100,
  });

  // Render the Textbox on Canvas
  canvas.add(text);
};

insertTxt.addEventListener("click", addText);

//save the canvas
//
//

saveBtn.addEventListener("click", saveBtnFun);
function saveBtnFun(e) {
  this.href = canvas.toDataURL({
    format: "png",
  });
  this.download = "canvas.png";
}

//
///
//save the canvas

// Draw
//
//

const drawWithPencil = () => {
  canvas.isDrawingMode = true;
  // var brush = new fabric.PencilBrush(canvas);
  // var points = [
  //   [10, 10],
  //   [20, 20],
  //   [25, 70],
  //   [100, 300],
  // ];

  // brush.onMouseDown({ x: points[0][0], y: points[0][1] });
  // for (var i = 1; i < points.length; i++) {
  //   brush.onMouseMove({ x: points[i][0], y: points[i][1] });
  // }
};

pencilTool.addEventListener("click", drawWithPencil);

//
//
//Draw

const erasePencil = () => {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);

  //  optional
  canvas.freeDrawingBrush.width = 10;

  //  undo erasing
  canvas.freeDrawingBrush.inverted = true;
};

ExitTool.addEventListener("click", () => (canvas.isDrawingMode = false));

//
//
//remove

const removeCurrent = () => {
  canvas.getActiveObjects().forEach((obj) => {
    canvas.remove(obj);
  });
  canvas.discardActiveObject().renderAll();
};

removeTool.addEventListener("click", removeCurrent);
//
//
//remove

//
//
//Shapes

const rectTool = () => {
  var rectangle = new fabric.Rect({
    width: 100,
    height: 100,
    fill: "",
    stroke: "green",
    strokeWidth: 3,
  });

  // Render the Rect in canvas
  canvas.add(rectangle);
};

const triangleTool = () => {
  var triangle = new fabric.Triangle({
    width: 300,
    height: 150,
    fill: "",
    stroke: "green",
    strokeWidth: 3,
  });

  // Render the Triangle in canvas
  canvas.add(triangle);
  canvas.centerObject(triangle);
};

const circleTool = () => {
  var ellipse = new fabric.Ellipse({
    rx: 40,
    ry: 40,
    fill: "",
    stroke: "green",
    strokeWidth: 3,
  });

  // Render the Ellipse in canvas
  canvas.add(ellipse);
};

const pentTool = () => {
  var polygon = new fabric.Polygon(
    [
      { x: 200, y: 10 },
      { x: 250, y: 50 },
      { x: 230, y: 100 },
      { x: 170, y: 100 },
      { x: 150, y: 50 },
    ],
    {
      fill: "",
      stroke: "green",
      strokeWidth: 3,
    }
  );

  // Render the polygon in canvas
  canvas.add(polygon);
};

const insertLineFun = () => {
  var line = new fabric.Line([50, 10, 200, 150], {
    stroke: "green",
  });

  // Render the rectangle in canvas
  canvas.add(line);
};

rectangle.addEventListener("click", rectTool);
triangle.addEventListener("click", triangleTool);
circle.addEventListener("click", circleTool);
pentagon.addEventListener("click", pentTool);
insertLine.addEventListener("click", insertLineFun);
//
//
//Shapes
