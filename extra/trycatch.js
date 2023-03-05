function getData() {
  return new Promise(function(resolve,reject) {
    setTimeout(() => {
      reject(`Something has gone wrong! 🤖`)
    })
  })
}

async function returnData() {
  try {
    const result = await getData()
  } catch (error) {
    console.info(`Error: ${error}`)
  }
}

returnData()