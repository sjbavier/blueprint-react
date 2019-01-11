// FETCH does not recognize error responses, as an error response is a response

export function handleApiErrors ( response ) {
   if ( !response.ok ) { 
      return response.json().then(( json ) => {
            // grab the messages or default to the statusText
            const error = new Error(json.messages || response.statusText )
            return Promise.reject(Object.assign(error, response ))
      })
   }
      return Promise.resolve(response)
}
