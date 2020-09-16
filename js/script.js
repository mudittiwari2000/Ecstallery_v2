function change(first, second, third) {
    
    // console.log(`first = ${first} \nsecond = ${second} \nthird = ${third}`);
    first.style.display = 'none';
    second.style.display = 'block';
    third.style.display = 'block';
}

function changeBack(first, second, third) {
    
    // console.log(`first = ${first} \nsecond = ${second} \nthird = ${third}`);
    first.style.display = 'block';
    second.style.display = 'none';
    third.style.display = 'none';
}

function photoGalleryFunc (first, second, third) {
    
    // console.log(`first = ${first} \nsecond = ${second} \nthird = ${third}`);
    first.style.display = 'block';
    second.style.display = 'none';
    third.style.display = 'none';

    let goBack = document.getElementById('go-back-btn');
    if (goBack.style.display == 'none') goBack.style.display = 'inline-block';
}
