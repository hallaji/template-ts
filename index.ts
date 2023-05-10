import { format } from "date-fns"

console.log()

export * from "./regex"

console.log("- - - - - - - - - - - at", format(new Date(), "h:mm:ssaaa"))
