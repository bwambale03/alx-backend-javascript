const getPaymentTokenFromAPI = (success) => ((resolve, _reject)=>
    {
        if(success){
            resolve({data: 'successful response fro API'});
        }
    });
    module.exports = getPaymentTokenFromAPI;
    