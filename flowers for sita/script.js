// const searchInput= document.querySelector("[data-search]")

// let flowers =
// [
//     {
//         "name":"rose"
//     },
//     {
//         "name":"Tulip"
//     },
//     {
//         "name":"Sunflower"
//     },
//     {
//         "name":"Jasmine"
//     },
//     {
//         "name":"Hibiscus"
//     },
//     {
//         "name":"Lotus"
//     },
//     {
//         "name":"Dahlia"
//     },
//     {
//         "name":"Marigold"
//     },
//     {
//         "name":"Lavender"
//     },
//     {
//         "name":"Magnolia"
//     },
//     {
//         "name":"Iris"
//     },
//     {
//         "name":"Primrose"
//     },
//     {
//         "name":"Amaryllis"
//     }
// ]

// searchInput.addEventListener("input", (e) => {
//     const value= e.target.value.toLowerCase()
//     const isVisible= flowers.name.toLowerCase().includes(value)
//     flowers.element.classList.toggle("hide", !isVisible)
// })

// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myinput");
//     filter = input.value.toUpperCase();
//     ul= document.getElementById("container");
//     li   = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function search_flowers(){
    let input = document.getElementById('searchbar').value
    // console.log(input)
    input=input.toLowercase();
    let x = getElementByClassName('flowername');

    for(i=0; i < x.length; i++){
        if(!x[i].innerHTML.toLowercase().includes(input)){
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-iten";
            
        }
    }
}