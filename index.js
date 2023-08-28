//URL Format: https://openapi.programming-hero.com/api/phones?search=${searchText}

//Example: https: //openapi.programming-hero.com/api/phones?search=iphone

// Phone detail url:
// URL Format: https: //openapi.programming-hero.com/api/phone/${id}

//Example: https: //openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089 



const loadPhone = async(searchValue) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchValue}`)
    const data = await response.json()
    const mainData = data.data
    dataConvert(mainData)
}


function dataConvert(phoneDatas) {
    const container = document.getElementById('container')
    container.textContent = ''
    const showBtn = document.getElementById('show')
    if (phoneDatas.length > 10) {
        showBtn.classList.remove('hidden')
    } else {
        showBtn.classList.add('hidden')
    }

    let phoneDataSort = phoneDatas.slice(0, 10)


    phoneDataSort.map(phoneData => {
        console.log(phoneData)
        const card = document.createElement('div')
        card.className = `card w-96 card-compact  bg-base-100 shadow-xl py-4`

        card.innerHTML = `<figure><img src="${phoneData.image}" alt="Shoes" /></figure>
        <div class="card-body text-center">
        <h2 class="text-3xl">${phoneData.brand}</h2>
        <p>${phoneData. phone_name}</p>
            <div class="card-actions justify-center">
                <button class="btn btn-">Buy now</button>
            </div>
        </div>`
        container.appendChild(card)

    });


}



//loadPhone()


const inputField = document.getElementById("inputField")
const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener('click', function() {
    toggleSpinner(true)

    const searchValue = inputField.value
    inputField.value = ''


    loadPhone(searchValue)

})

function toggleSpinner(isLoading) {

    const spinner = document.getElementById('spinner')
    if (isLoading) {
        spinner.cl

    } else {

    }

}