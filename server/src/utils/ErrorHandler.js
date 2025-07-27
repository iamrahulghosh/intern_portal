class CustomError extends Error {
    constructor(
        statusCode = 400,
        message = "Something went wrong!",
        stack = "",
        errors = []
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.data = null
        this.errors = errors
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default CustomError