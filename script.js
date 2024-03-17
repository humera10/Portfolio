
// scroll Function

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav navbar-nav a");


window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top >= offset && top <offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector("nav navbar-nav a[href'=' + id +']").classList.add('active');
            })
        }
    })
}


const numbers= document.querySelectorAll('.number');
const svgE1 = document.querySelectorAll('svg circle');
const counter= Array(numbers.length);
const intervals = Array(counter.length);
counter.fill(0);

numbers.forEach ((number,index)=>{
    intervals[index] = setInterval(()=>{
        if(counter[index]=== parseInt(number.dataset.num)){

        }else{
            counter[index] += 1;
            number.innerHTML = counter[index] + "%";
            svgE1[index].style.strokeDashoffset = math.floor(472-400*parseFloat(number.dataset.num/100))
        }
    },20)
})