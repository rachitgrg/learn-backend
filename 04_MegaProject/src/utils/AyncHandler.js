// Step by Step way to understand higher order function --
// const asyncHandler = () => {}
// const asyncHandler = (func) => {
//   () => {}
// }
// const asyncHandler = (func) => { async () => {} }
// const asyncHandler = (func) => async () => {}



// We can make them by two methods -

// 1. Using Promise --
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// 2. Using try-catch --
// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }


export { asyncHandler };