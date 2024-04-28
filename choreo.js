

document.addEventListener('DOMContentLoaded', function () {
    let choreographer = new Choreographer({
        animations: [
            { range: [-1, window.innerWidth], selector: '#text', type: 'scale', style: 'height', from: 100, to: 70, unit: 'vh' },
            { range: [-1, window.innerWidth / 2], selector: '#text', type: 'scale', style: 'opacity', from: 0.2, to: 1 },
            { range: [window.innerWidth / 2, window.innerWidth], selector: '#section4', type: 'change', style: 'backgroundColor', to: 'black' },
            { range: [window.innerWidth / 2, window.innerWidth], selector: '#section4', type: 'change', style: 'color', to: 'white' },
          ]
      })

    document.body.addEventListener('mousemove', function (e) {
        choreographer.runAnimationsAt(e.clientX);
    });
});
