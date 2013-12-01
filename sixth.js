process.stdin.once('data', function(buf) {
  var bl = buf.length,
      ui8a = new Uint8Array(bl)
  for (var i = 0; i < bl; ++i) {
    ui8a[i] = buf[i]
  }
  console.log(JSON.stringify(ui8a))
})
