document.addEventListener("DOMContentLoaded", function (event) {

    //init()
    document.getElementById("btngetNews").addEventListener('click', init);
});

function init() {
    let displayNews = document.getElementById('accordionExample');
    let apiKey = "149ea998318443fd92d5f79af04bae01";
    let country = document.getElementById('txtCountry').value;
    displayNews.innerHTML = '';

    fetch('https://newsapi.org/v2/top-headlines?country=' + country + '&apiKey=' + apiKey)
        .then(res => res.json())
        .then(json => {
            json.articles.map((data, index) => {
                if (data.urlToImage === null) {
                    data.urlToImage = "https://homepages.cae.wisc.edu/~ece533/images/frymire.png";
                }
                console.log(data);
                displayNews.innerHTML += `<div class="card">
            <div class="card-header">
              <h6 class="mb-0">
                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#news${index}" aria-expanded="true" aria-controls="collapseOne">
                  ${data.title}
                </button>
                <p> By: ${data.author} publishedAt - ${data.publishedAt}</p> 
              </h6>
            </div>
            <div id="news${index}" class="collapse show"  data-parent="#accordionExample">
              <div class="card-body col-12 d-md-flex">
              <div class="col-12 col-md-4"><img  class="responsive mx-auto" src="${data.urlToImage}" alt="image"></div>
                <div class="col-12 col-md-8">${data.content}</div>
              </div>
            </div>
          </div>`
            })

        })
        .catch(function () {
            alert("hi");
        });
}

// var randomName=function(res){
//     return res.json()
// }
// $(document).ready(function () {
//     let displayNews = $('.displayNews');
//     let apiKey = "149ea998318443fd92d5f79af04bae01";
//     let country = $('#txtCountry').val() + 'apiKey=' + appid;

//     $.ajax({
//         url: 'https://newsapi.org/v2/top-headlines?country='+ country + '&apiKey='+ apiKey,
//         method: 'get',
//         dataType: 'json',
//         success: function (data) {
//             console.log(data);
//         },
//         error: function (err) {
//             alert(err);
//         }
//     });
// });

//https://newsapi.org/v2/top-headlines?country=us&apiKey=149ea998318443fd92d5f79af04bae01