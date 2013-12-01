var ui32a = new Uint32Array(1),
    ui16a

ui32a[0] = +process.argv[2]
ui16a = new Uint16Array(ui32a.buffer)

console.log(JSON.stringify(ui16a))
