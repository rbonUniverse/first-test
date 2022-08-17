
let counter = 1

// save vacation button
function saveVacation() {
      const name = document.querySelector('#vacationNameBox').value;

      const photo = document.querySelector('#vacationPhotoBox');
      photo.value = 'https://travel.usnews.com/dims4/USNEWS/00e9466/2147483647/resize/445x280%5E%3E/crop/445x280/quality/85/?url=https://travel.usnews.com/images/gettyimages-520025941_5j9mOtt.jpg';

      const price = document.querySelector('#vacationPriceBox').value;

      const rank = document.querySelector('#rankSelectionBox').value;


      if (!name || !photo || !price || !rank || rank === '') {
            alert('Fill all the fields Please')
            return
      }


      vacObj = {
            name: name,

            photo: photo.value,

            price: price,

            rank: rank,

            id: counter += 1,
      }

      saveVacToArray(vacObj)
      addVacToPage(vacObj)
}


vacationArray = []

// sase vication to array
function saveVacToArray(vacObj) {

      (!vacationArray || [])

      vacationArray.push(vacObj)

      console.log(vacationArray);
}

// add item to the page after submit
function addVacToPage(vacObj) {
      const vacDivId = document.querySelector('#vacContainerDiv');
      let ul = document.createElement('ul');
      ul.setAttribute('class', 'ul-class');
      let li = document.createElement(`li`);
      li.setAttribute('id', `li-${vacObj.id}`);

      li.innerHTML += `<div class="card" style="width: 18rem;">
      <img src="${vacObj.photo}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${vacObj.name}</h5>
        <p class="card-text-rank">This Vacation Location Rank is:
        ${vacObj.rank}
        Stars</p>
        <p class="card-price-text"> Price: ${vacObj.price}</p >
            <button type="" button onclick="deleteCard(${vacObj.id})" class="btn btn-primary">Delete Selection</button>
      </div >
    </div > `

      ul.appendChild(li);
      vacDivId.appendChild(ul);
}

// delete card from array
function deleteCard(vacId) {
      const deleteItem = vacationArray.findIndex(item => item.counter === vacId)
      vacationArray.splice(deleteItem, 1);

      deleteFromPage(vacId)
}

// delete card from page
function deleteFromPage(counter) {
      let cardId = document.querySelector(`#li-${counter}`);
      cardId.remove();
}