const request = require('request');

const MOCK_PRODUCT = {"name":"Dimethicone","description":"Complete traumatic metacarpophalangeal amputation of left ring finger, initial encounter","initial_price":"92","estimated_close":"2017-03-10T12:09:22Z"}


request.post('http://localhost:8080/api/item', { json: MOCK_PRODUCT })
    .on('error', function(error) { console.error(error) })