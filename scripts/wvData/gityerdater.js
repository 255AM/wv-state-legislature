//declare empty array as placeholder to hold data that you will be returning
let dataArr = []

//methods:
// /jurisdictions	Get list of available jurisdictions.	[1]
// /jurisdictions/{jurisdiction_id}	Get detailed metadata for a particular jurisdiction.	[2]
// /people	List or search people (legislators, governors, etc.)	[3]
// /people.geo	Get legislators for a given location.	[4]
// /bills	Search bills by various criteria.	[5]
// /bills/ocd-bill/{uuid}	Get bill by internal ID.	[6]
// /bills/{jurisdiction}/{session}/{id}	Get bill by jurisdiction, session, and ID.	[7]
//https://v3.openstates.org/.
//"ocd-jurisdiction/country:us/state:wv/government"

 // x-api-key 32fd16b7-463e-4bb3-8fbd-0a817fe14f34


// let rootUrl = '/https://v3.openstates.org'
// let wvId = "ocd-jurisdiction/country:us/state:wv/government"

//     //jurisdiction-id required**, additional/optional info 'orgnizations' 'legislative_sessions'
// let metaInfo = '/jurisdictions/ocd-jurisdiction/country:us/state:wv/government'

   

// let people = '/people.geo'
// let bills = '/bills'
// let billsById = '/bills/ocd-bill/{uuid}'
// let billsByJurisdictionSessionAndId = '/bills/{jurisdiction}/{session}/{id}'



// fetch('https://api.github.com/users/manishmshiva', {
//   method: "GET",
//   headers: {"Content-type": "application/json;charset=UTF-8"}
// })
// .then(response => response.json()) 
// .then(json => console.log(json)); 
// .catch(err => console.log(err))



//using fetch request, return data from api
export const gitYerDaterFx = () => {
    //let people = '/people.geo/jurisdictions/ocd-jurisdiction/country:us/state:wv/government'
    let goToPage = 2;
    let goToPageString = `&page=${goToPage}`
    let perPage = 2;  
    let perPageString = `&per_page=${perPage}`
    let root = 'https://v3.openstates.org/people?jurisdiction=wv'
    
    
    return fetch(root+goToPageString+perPageString, {
        method: 'GET',
        headers: {'Content-type':'application/json;charset=UTF-8',
                   'x-api-key':'32fd16b7-463e-4bb3-8fbd-0a817fe14f34' }
    })
    //with callbackfunction turn data in json
    .then(reply => reply.json())
    //callback fx that takes data and logs it to console.
    //***********************************************what is the parsedCriminal parameter??? Where is the response.json utilized?? */
    .then(
        parsedData => {
            dataArr = parsedData
            console.log(dataArr);
        }
        
    )
    
}

//function returns a copy of criminal objects
export const copyOfDataFunction = () => {
    return dataArr.slice()
}

