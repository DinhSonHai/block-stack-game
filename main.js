var canvas, ctx, h, w, run;
var stack_arr = [],
  score = 0,
  best = 0;
var colors = ['#04756F', '#FF8C00', '#FF2E00', '#D90000', '2E092F'],
  clr;

// Event listener
window.addEventListener('load', init);
window.addEventListener('resize', () => {
  window.location.reload;
});

//Initial
function init() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  ctx = canvas.getContext('2d');
}
