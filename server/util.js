export const getAPIKey = function() {
    const config = ServiceConfiguration.configurations.findOne({service: IVLE.serviceName});

    if (!config)
        throw new ServiceConfiguration.ConfigError();

    return config.apiKey;
};

export const extend = function(a, b){
    for (var key in b)
        if (b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
};

/**
 * Maps object keys using a given function.
 * @param  {Object}   obj   Target object
 * @param  {Function} fn    Mapping function that takes in an object key, and returns a new object key.
 * @return {Object}         Newly constructed object with mapped keys. Original object is not modified.
 */
export const map_obj_keys = function(obj, fn) {
    return Object.keys(myObject).reduce(function(accum, curr) {
        accum[fn(curr)] = obj[curr];
        return accum;
    }, {});
}

/**
 * Maps object properties using a given function.
 * @param  {Object}   obj   Target object
 * @param  {Function} fn    Mapping function that takes in an object property value, and returns a new value to be assigned.
 * @return {Object}         Newly constructed object with mapped properties. Original object is not modified.
 */
export const map_obj = function(obj, fn) {
    return Object.keys(myObject).reduce(function(accum, curr) {
        accum[curr] = fn(obj[curr]);
        return accum;
    }, {});
}

/**
 * Checks if a deeply nested property exists. 
 * Takes in an array of properties, where each subsequent element is a property of the previous element.
 *
 * For example,
 *     propExistsDeep(object, ['property', 'really', 'deep', 'inside'])
 * returns true if
 *     object.property.really.deep.inside exists.
 */
export const propExistsDeep = function(parent, arrayOfChildProps) {
    if (!parent)
        return false;

    if (!arrayOfChildProps)
        return true;

    let object = parent;
    return arrayOfChildProps.every(function(prop) {
        if (!object.hasOwnProperty(prop))
            return false;
        object = object[prop];
        return true;
    });
}