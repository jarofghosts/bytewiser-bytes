var fs = require('fs'),
    file = fs.createReadStream(process.argv[2])

file.on('data', function(buf) {
  var offset = 0,
      split_buf

  for (var i = 0, l = buf.length; i < l; ++i) {
    if (buf[i] === 10) {
      split_buf = buf.slice(offset, i)
      console.log(split_buf)
      i++
      offset = i
    }
  }
  console.log(buf.slice(offset))
})
