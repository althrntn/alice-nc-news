const Errors = (error) => {
    const errorCode = error.error.error.status
    const errorMessage = error.error.error.data.msg
    return <p>Error: {errorCode} - {errorMessage}</p>
}
export default Errors