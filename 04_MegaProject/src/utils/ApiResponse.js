// Both ApiError And ApiResponse are being used to standarized the success and error response
// Now all will follow same structure
// {
//   "statusCode": ...,
//   "success": ...,
//   "message": "...",
//   "data": ...,
//   "errors": ...
// }



class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
