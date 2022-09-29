const Errors = (error) => {
    if(error.error.msg) {
return (<p>{error.error.msg}</p>)
    }
    
//     const errorCode = error.error.error.status
//     const errorMessage = error.error.error.data.msg
//     return <p>Error: {errorCode} - {errorMessage}</p>
}
export default Errors