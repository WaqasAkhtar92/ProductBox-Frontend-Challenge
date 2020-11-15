import axios from 'axios';

const baseUrl = 'http://localhost:3001';


// fetch products from backend
export function getProducts() {
    let state = {
        products: []
    }
    axios.get(`${baseUrl}/items`).then(res => {

        
        console.log('this is data')
        console.log(res.data)
        console.log('this is data')
        console.log(...res.data)
        state.products = res.data
        console.log(state)
        console.log('this is last data sjdfkldsflsdjfk  state')
    })
    .catch(err => console.log(err))

    return state;
    
}

// post product on Backend
export function addProduct(){
   return  axios.post().then(res=>{
        if(res.stateCode === 200){
            console.log('product added')
        }
        else{
            console.log('product not added')
        }
        
    })
    .catch(err=> console.log(err))

}