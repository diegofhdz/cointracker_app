getData();
function getData(){
    fetch('http://api.coinlayer.com/api/live?access_key=5e07c458e18f845cad9810690348e9eb&symbols=BTC,ETH')
    .then(response => response.json())
    .then(data => {
        // parse the JSON data
        console.log(data.rates);
        // select the element where you want to insert the data
        const element_btc = document.querySelector('#btc');
        const element_eth = document.querySelector('#eth');
        const date = new Date(data.timestamp*1000);

        const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
        const options2 = { year: 'numeric', month: 'long', day: 'numeric'};
        const formattedTime = date.toLocaleTimeString('en-US', options);
        const formattedDate = date.toLocaleDateString('en-US', options2);
        // insert the data into the element using template literals
        element_btc.innerHTML = `$${data.rates.BTC.toFixed(2)} <span class="text-dark">, last updated ${formattedTime} ${formattedDate}</span>`;
        element_eth.innerHTML = `$${data.rates.ETH.toFixed(2)} <span class="text-dark">, last updated ${formattedTime} ${formattedDate}</span>`;
    });
};

