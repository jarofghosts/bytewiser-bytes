process.stdin.on('data', function(buf) {
  for (var i = 0, l = buf.length; i < l; ++i) {
    if (buf[i] === 46) buf[i] = 33
  }
  console.log(buf)
})
