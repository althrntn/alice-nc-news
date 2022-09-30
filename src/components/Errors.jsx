const Errors = ({error}) => {
    if(!error){
        return <p className='error'>Page not found</p>
    }
    if(error.msg) {
        return (<p className='error'>Error: {error.msg}</p>)
    }
    
    const errorCode = error.error.status
    const errorMessage = error.error.data.msg
    return <p className='error'>Error: {errorCode} - {errorMessage}</p>
}
export default Errors