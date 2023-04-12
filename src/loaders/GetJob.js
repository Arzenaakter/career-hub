import { getStoredJob } from "../Utilities/FakeDB"

export const JobCartData = async ()=>{
    const JobData = await fetch('/features.JSON');
    const Jobs = await JobData.json();
    const getDataFromLocalStorage = getStoredJob();
    let newJobArray = [];
    for (const id in getDataFromLocalStorage){
        const foundJob = Jobs.find(job =>job.id === parseInt(id))
        if(foundJob){
            newJobArray.push(foundJob)
        }
    }
    return {newJobArray};
}