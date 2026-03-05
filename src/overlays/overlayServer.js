export function sendOverlayEvent(io, type, data) {

  io.emit("overlay_event", {
    type,
    data
  })

}
