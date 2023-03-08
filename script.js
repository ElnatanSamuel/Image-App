// import { fabric } from "./fabric.js";
const grayScale = document.querySelector(".grayscale");
const saturation = document.querySelector(".saturation");
const chooseImg = document.querySelector(".chooseimg");
const Createimg = document.querySelector(".createimg");

var canvas = new fabric.Canvas("canvas");
canvas.setWidth(document.body.scrollWidth);
canvas.setHeight(600);

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

chooseImg.addEventListener("click", () => Createimg.click());
