import axios from 'axios';

const baseUrl = 'http://localhost:3001';


// fetch products from backend
export function getProducts() {
    let state1 = {}
    axios.get(`${baseUrl}/items`).then(ref => {
        
        //confirm Data being fetched
        console.log('this is data')
        console.log(ref.data)
        console.log('this is data')
        
        state1 = ref.data
        console.log(state1)
        //confirm data allocation to state1
        console.log('this is last data')

    })
    .catch(err => console.log(err))

    return state1;
}

// post product on Backend
export function addProduct(){
   return  axios.post().then(ref=>{

        if(ref.statusCode === 200){

            console.log('product added')
        }
        else{

            console.log('product not added')
        }
        
    })
    .catch(err=> console.log(err))

}