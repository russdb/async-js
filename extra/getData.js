console.info('hello world')

function getData() {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(46)
  //   }, 1)
  // })
  return 46
}
async function returnData(params) {
  const result = await getData()
  console.info(result) //now we can access the result
}

returnData()