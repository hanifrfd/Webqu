class Portfolio extends HTMLElement {
    constructor(){
        super();
        // this.shadowDOM = this.attachShadow({mode : "open"});        
    }

    set portfolio(portfolio){
        this._portfolio = portfolio;
        this.connectedCallback();
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="col-md-4 col-sm-1 my-3 p-0">
                <img src="${this._portfolio.image}" class="img-fluid port-img" alt="Responsive image">
                <div class="caption my-2">
                    <p class="font-16 font-medium text-center black pt-3">${this._portfolio.title}</p>
                    <p class="font-13 font-thin text-center black">${this._portfolio.tools}</p>
                </div>
            </div>
        `;        
        // this._portfolio.forEach(portfolios => {
        //     const portfolioItem = document.createElement("portfolio-item");
        //     portfolioItem.portfolio = portfolios;
        //     this.shadowDOM.querySelector('.list-movie-horizontal').appendChild(portfolioItem);
        // });
        
    }
}

customElements.define("portfolio-item", Portfolio);