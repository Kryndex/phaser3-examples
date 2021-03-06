/**
* Takes a Uniform Resource Identifier (URI) component (previously created by encodeURIComponent or by a similar routine) and
* decodes it, replacing \ with spaces in the return. Used internally by the Net classes.
*
* @method Phaser.Net#decodeURI
* @param {string} value - The URI component to be decoded.
* @return {string} The decoded value.
*/
function decodeURI (value)
{
    return decodeURIComponent(value.replace(/\+/g, ' '));
}

/**
* Returns the Query String as an object.
* If you specify a parameter it will return just the value of that parameter, should it exist.
*
* @method Phaser.Net#getQueryString
* @param {string} [parameter=''] - If specified this will return just the value for that key.
* @return {string|object} An object containing the key value pairs found in the query string or just the value if a parameter was given.
*/
function getQueryString (parameter)
{
    if (parameter === undefined) { parameter = ''; }

    var output = null;
    var keyValues = location.search.substring(1).split('&');

    for (var i in keyValues)
    {
        var key = keyValues[i].split('=');

        if (key.length > 1)
        {
            if (parameter && parameter === decodeURI(key[0]))
            {
                return decodeURI(key[1]);
            }
            else
            {
                if (!output)
                {
                    output = {};
                }

                output[decodeURI(key[0])] = decodeURI(key[1]);
            }
        }
    }

    return output;

};
