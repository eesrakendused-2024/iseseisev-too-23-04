//Tutoriali abil tehtud, sama kood on ka HTML failis, et see töötaks
import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        gutter: 10,
        horizontalOrder: true
    });        
}
