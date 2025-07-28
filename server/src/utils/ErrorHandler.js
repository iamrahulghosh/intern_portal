class CustomError {
    constructor(
        statusCode = 400,
        message = "Something went wrong!",
        stack = "",
        errors = []
    ){
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.errors = errors
        this.success = false
        this.stack = stack
    }
}

export default CustomError