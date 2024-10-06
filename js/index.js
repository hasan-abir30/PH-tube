// get the category data using fetch

function loadData(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayData(data.categories))
        .catch(err => console.log(err));
}
function displayData(data){
    const div = document.getElementById('button-position');
  data.forEach((item)=>{
    const categories = item.category;
    const button = document.createElement('button');
    // console.log(button);
    button.innerText=categories;
    button.classList='btn btn-primary';
    // console.log(button);
    div.appendChild(button);
    div.style.marginTop='30px'
  })
}

loadData();

