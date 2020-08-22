import './component/portfolio-item.js';
import {Data} from './data.js';

let portfolio_filter = "";

$(".navbar-nav .nav-item").on("click", function(){
    $(".navbar-nav").find(".active").removeClass("active");
    $(this).addClass("active");
    
 });

$("#port-menu .menu-link").on("click", function(){
    $("#port-menu").find(".blue").removeClass("blue");
    $(this).addClass("blue");
    // fetch_func();
    portfolio_filter = $(this).attr('id');    
    getData();
}); 


// fetch_func();

function fetch_func(){
    $('#portfolio-data').hide();
    $('#portfolio-data').empty();
    // const portfolioElement = document.querySelector("portfolio-data");
    // console.log(portfolioElement);    
    $.ajax({
        url: 'https://my.api.mockaroo.com/data/id.json?key=739b1e50',
        type: 'GET',
        dataType: 'json',
        success: res => forElement(res)
    })
    $('#portfolio-data').show();
}


function forElement(data) {
    data.forEach(portfolios => {        
        const html = `<div class="col-md-4 col-sm-2 my-3 p-0"> <img src="${portfolios.image}" class="img-fluid port-img" alt="Responsive image"> <div class="caption my-2"> <p class="font-16 font-medium text-center black pt-3">${portfolios.title}</p> <p class="font-13 font-thin text-center black">${portfolios.tools}</p> </div> </div>`;
        $('#portfolio-data').append(html);

    });    
}

getData();

function getData() {
    let i = 0;
    $('#portfolio-data').hide();
    $('#portfolio-data').empty();
    if(portfolio_filter != ""){
        Data[portfolio_filter].forEach(portfolios => {
            if(portfolios.image != ''){
                const html = `<div class="portfolio-items col-md-4 col-sm-4 my-3 p-0"> <img src="${portfolios.image}" class="img-fluid port-img" alt="Responsive image"> <div class="caption my-2"> <p class="font-16 font-medium text-center black pt-3">${portfolios.title}</p> <p class="font-15 font-thin text-center black">${portfolios.tools}</p> </div> </div>`;
                $('#portfolio-data').append(html);
            }else{
                const html = `<div class="portfolio-items col-md-4 col-sm-4 my-3 p-0"> ${portfolios.embed} <p class="font-16 font-medium text-center black pt-3">${portfolios.title}</p> <p class="font-15 font-thin text-center black">${portfolios.tools}</p> </div> </div>`;
                $('#portfolio-data').append(html);
            }
        });
    } else {
        for(var key in Data){            
            Data[key].forEach(portfolios => {
                if(portfolios.image != ''){
                    const html = `<div class="portfolio-items col-md-4 col-sm-4 my-3 p-0"> <img src="${portfolios.image}" class="img-fluid port-img" alt="Responsive image"> <div class="caption my-2"> <p class="font-16 font-medium text-center black pt-3">${portfolios.title}</p> <p class="font-15 font-thin text-center black">${portfolios.tools}</p> </div> </div>`;
                    $('#portfolio-data').append(html);
                }else{
                    const html = `<div class="portfolio-items col-md-4 col-sm-4 my-3 p-0"> ${portfolios.embed} <p class="font-16 font-medium text-center black pt-3">${portfolios.title}</p> <p class="font-15 font-thin text-center black">${portfolios.tools}</p> </div> </div>`;
                    $('#portfolio-data').append(html);
                }
            });
        }        
    }

    $('#portfolio-data').show();
}


// console.log(Data)
