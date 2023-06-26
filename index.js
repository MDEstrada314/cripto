


const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

crito()


async function crito(){
   try {
    const response = await fetch(url); 
    const result = await response.json();
    const valor = result.Data
    precios(valor)

   } catch (error) {
   }
}

function precios(valor){
    
    console.log(valor);
    valor.forEach(element => {
        const {CoinInfo,RAW} = element
        console.log(RAW.USD.PRICE);
        const opciones = document.createElement('option')
        const costo = document.querySelector('#nombreMonedas')
        costo.value = RAW.USD.PRICE
        opciones.value = RAW.USD.PRICE
        opciones.textContent = CoinInfo.FullName
        document.querySelector('#nombreMonedas').appendChild(opciones)


      

        })
    
        
    }




const costo = document.querySelector('#nombreMonedas')
costo.addEventListener('click',valoresMoneda)
    function valoresMoneda(e){
        const precio = e.target.value
        console.log(precio);

        const usdCosto = document.querySelector('#validation')
        
        usdCosto.addEventListener('change',element=>{
       
            var valorInvertir = usdCosto.value
            let valorTotal = valorInvertir /precio 
            
    
            console.log(valorInvertir);
    
            const valorMoneda = document.querySelector('#costos')
            valorMoneda.innerHTML=`<h6>${valorTotal} $</h6>`
        })  
    
        
    }


        
    

 

        

  
        
    