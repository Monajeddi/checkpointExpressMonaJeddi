var now = new Date()
var h = now.getHours()

const auth = (req, res, next)=> {
    if (h < 21 && h > 9) {
        console.log('authenticated')
        next()
    
    }
    else {
        res.send('not authenticated')
    }
}

module.exports = auth 