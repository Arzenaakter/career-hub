// use local storage to manage cart data
const addToDb = id => {
    let jobsCart = {};
    const StoredJob = localStorage.getItem('Jobs-Cart');
    if(StoredJob){
        jobsCart = JSON.parse(StoredJob);
    }

    const quantity = jobsCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        jobsCart[id] = newQuantity;
    }
    else{
        jobsCart[id] = 1 ;
    }
    localStorage.setItem('Jobs-Cart',JSON.stringify(jobsCart))

}

export {addToDb}