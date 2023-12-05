function logTime(req,res,next) {
    //console.log(req);

    let date = new Date(); // generating new Date object
// ! middleware can create new keys (req.datePosted)
    req.datePosted = date.toLocaleDateString();
    // look at object, generating new key, store date, variable, method of Date = toLocale
    console.log(`DatePosted:`, req.datePosted);
    next();
}

module.exports = {
    logTime: logTime,
}