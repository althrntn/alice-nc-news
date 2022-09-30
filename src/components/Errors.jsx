const Errors = ({error}) => {
    if(!error){
        return <p>Page not found</p>
    }
    if(error.error.msg) {
        return (<p>Error: {error.error.msg}</p>)
    }
    
    const errorCode = error.error.status
    const errorMessage = error.error.data.msg
    return <p>Error: {errorCode} - {errorMessage}</p>
}
export default Errors