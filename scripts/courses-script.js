console.log('script is workking')
const levellength = document.getElementsByClassName('dt');
console.log('dt class found')
for (let i = 1; i < levellength.length; i++) {
    let id  = String(`level${i}`);
    console.log('loop initialized')
    const level = document.getElementById(`${id}`);
    const table = document.getElementById(`dd${i}`);
    
    level.addEventListener('click', () => {
        console.log(`level${i} clicked`);
    });
}


console.log('loop is working')