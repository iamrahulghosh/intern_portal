const AsyncHandler = (request) => {
    return (req, res, next) => {
        Promise
        .resolve(request(req, res, next))
        .catch((error) => {return next(error)})
    }
}

export default AsyncHandler