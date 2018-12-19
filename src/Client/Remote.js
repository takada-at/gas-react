/*
  global google
 */

const module = {
  run: google.script.run,
  runPromise
}

function runPromise (func, args) {
  return new Promise((resolve, reject) => {
    const run = module.run.withSuccessHandler(resolve).withFailureHandler(reject)
    run[func](...args)
  })
}

export default module
