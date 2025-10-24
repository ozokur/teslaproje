microIoT.initDevice()
microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
microIoT.WIFISetup("yourSSID", "yourPASSWORD")
basic.forever(function () {
    basic.showString("Tesla")
})
