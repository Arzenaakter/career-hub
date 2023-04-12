import { toast } from "react-hot-toast";



const addToDb = id => {
    let jobsCart = {};
    const StoredJob = localStorage.getItem('Jobs-Cart');
    if(StoredJob){
        jobsCart = JSON.parse(StoredJob);
    }

    const quantity = jobsCart[id];
    if(quantity){
        // const newQuantity = quantity + 1;
        // jobsCart[id] = newQuantity;
        toast.error('Allready Apply')

    }
    else{
        toast.success('Apply confirm')
        jobsCart[id] = 1 ;
    }
    localStorage.setItem('Jobs-Cart',JSON.stringify(jobsCart))

}
const getStoredJob =()=>{
    let JobsCart ={};
    const StoredJob = localStorage.getItem('Jobs-Cart')
    if(StoredJob){
        JobsCart = JSON.parse(StoredJob);
    }
    return JobsCart
    
}


export {addToDb,getStoredJob}