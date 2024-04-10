/** This file allows the client to interact (Post & Get) with the server side.
 *  
 *  Author: Cole Turner
 */ 

const SERVER_URL = "http://ugdev.cs.smu.ca:3078";

/** This function posts the data JSON obj to the server. 
 * 
 */
function post() {

}

/** This function gets the data JSON obj from the server.
 * 
 */
function get() {

}

/*
  The purpose of this function is to log the JSON object received
  from the server.

  @param returnedData - contains the JSON object returned by the server

  Author: Terry Goldsmith
*/
function successFn(returnedData) {
    console.log(returnedData);
}

/*
  The purpose of this function is to log the error.

  @param err - the error object returned by the server

  Author: Terry Goldsmith
*/
function errorFn(err) {
    console.log(err.responseText);
}