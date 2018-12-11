const timerId = setTimeout(
    () => console.log("You will not see this one"),
    0
)

clearTimeout(timerId)


// setImmediate -> the same as setTimeout 0
// clearInmediate
// clearInterval

/**
 * setTimeout after 0 mls, does not mean execute it right away, but rather
 * it means execute right away after you are done with everything in this script
 * 
 * Example
 * setTimeout(
 *  () => console.log("Hello after 0.5 seconds, MAYBE")
 * ,0
 * )
 * 
 * for(let i = 0; i < 1e10; i++) {
 *  //Block node Syncrhonously
 * }
*/



