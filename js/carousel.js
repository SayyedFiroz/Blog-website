const track=document.querySelector('.track_carousel');

const slides = Array.from(track.children);
const prev_button =document.querySelector('.button_carousel--left');
const next_button= document.querySelector('.button_carousel--right');

const nav_dot = document.querySelector('.carousel_nav');
const dots = Array.from(nav_dot.children);

const slidewidth=slides[0].getBoundingClientRect().width+50

const slide_pos=(slide,index)=>{
    {
        slide.style.left= slidewidth *index + "px";
    }

}

//arranging slide next to each other
slides.forEach(slide_pos);

const moves_slide =(track,curr_slide,target_slide)=>{
    track.style.transform = 'translateX(-' + target_slide.style.left + ')';
    curr_slide.classList.remove('current_slide');
    target_slide.classList.add('current_slide');

}
const update_dots=(current_dot,target_dot)=>{
    current_dot.classList.remove('current_slide');
    target_dot.classList.add('current_slide')
}
//event listner when button is clicked 
next_button.addEventListener('click', e=> {
    const curr_slide = track.querySelector('.current_slide');
    const next_slide = curr_slide.nextElementSibling;
    const current_dot =nav_dot.querySelector('.current_slide')
    const next_dot = current_dot.nextElementSibling;

    moves_slide(track,curr_slide,next_slide)
    update_dots(current_dot,next_dot)

})
prev_button.addEventListener('click',e=>{
    const curr_slide = track.querySelector('.current_slide');
    const prev_slide = curr_slide.previousElementSibling;
    const current_dot =nav_dot.querySelector('.current_slide')
    const prev_dot = current_dot.previousElementSibling;

    moves_slide(track,curr_slide,prev_slide)
    update_dots(current_dot,prev_dot)
})

nav_dot.addEventListener('click',e=>{
    const target_dot = e.target.closest('button');

    const current_slide = track.querySelector('.current_slide')
    const current_dot = nav_dot.querySelector('.current_slide')
    const taget_index = dots.findIndex(dot=>dot ===target_dot);
    const target_slide = slides[taget_index]


    moves_slide(track,current_slide,target_slide)
    update_dots(current_dot,target_dot)

})


