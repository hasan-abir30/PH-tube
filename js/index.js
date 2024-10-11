// get the category data using fetch

function loadData() {
  fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayData(data.categories))
    .catch(err => console.log(err));
}
const categoryVideos=(id)=>{
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => videos(data.category))
    .catch(err => console.log(err));
}
function displayData(data) {
  const div = document.getElementById('button-position');
  data.forEach((item) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.innerHTML =
    `
    <button onclick="categoryVideos(${item.category_id})" class='btn'>${item.category}</button>
    `
    div.append(buttonContainer);
  })
}

// get the video category by using arrow function and fetch

const loadVideos = () => {
  fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => videos(data.videos))
    .catch(err => console.log(err));
}

const videos = (video) => {
  const div = document.getElementById('video');
  div.innerHTML="";
  video.forEach((item) => {
    console.log(item);
    const card = document.createElement('div');
    card.classList = 'card card-compact';
    card.innerHTML = `<figure class="h-[200px]">
    <img class="h-full w-full object-cover"
      src=${item.thumbnail};
      alt="Shoes" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
   <div>
       <img class="w-10 h-10 rounded-full" src=${item.authors[0].profile_picture} alt="profile pic"/>
   </div>
   <div>
        <h2>
        ${item.title}
        </h2>
        <div class="flex gap-1">
            <p>
        ${item.authors[0].profile_name}
        </p>
        ${item.authors[0].verified === true ? `<img class="w-[30px]" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="verify"/>` : ""}
        </div>
        <p>
        ${item.others.views}
        </p>
   
   </div>
  </div>`
    div.append(card);
  })
}
loadData();
loadVideos();
