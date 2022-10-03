export interface IErrorResponse {
  /**
   * Return true if the response success else return false
   */
  success: boolean;
  /**
   * Detail about the error
   */
  detail: string | null;
  /**
   * The Error message
   */
  message: string;
  /**
   * The Error message
   */
  error: string;
  /**
   * The time when the errors occurred
   */
  timestamp: string;
}

export interface ISuccessResponse {
  /**
   * Return true if the response success else return false
   */
  success: boolean;
  /**
   * The detail about response if needed
   */
  detail: string | null;
  /**
   * The message for response
   */
  message: string;
  /**
   * Return the data
   */
  data: any;
  /**
   * The time when the errors occurred
   */
  timestamp: string;
}
