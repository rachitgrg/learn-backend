// Error class is used when we want a pre-fined structured error in our code 

class ApiError extends Error {
  // we need these from constructor
  constructor(
    statusCode,
    message = "Something went wrong",      // if we doesn't get any error use "Something went wrong"
    errors = [],                           // can be multiple errors
    stack = ""  
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };



// Complete Flow Example --

// throw new ApiError(
//     404,
//     "User not found"
// )

// Produces something like --

// {
//     statusCode:404,
//     message:"User not found",
//     success:false,
//     data:null,
//     errors:[],
//     stack:"..."
// }
