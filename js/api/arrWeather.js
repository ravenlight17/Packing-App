//Test slider value:

const totTravelSlider = document.getElementById('traveldays');
const sliderOutput = document.getElementById('sliderOutput');
export const totTravelVal = document.getElementById('traveldays').value;

totTravelSlider.textContent = `Value: ${totTravelVal}`;

totTravelSlider.oninput = function () {
  sliderOutput.innerHTML = `Value: ${this.value}`;
};
