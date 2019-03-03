deviceSelected = [
  {
    device: '14/pms/P30001015',
    energy: [
      {
        name: 'energy_active',
        data: 13222
      },
      {
        name: 'energy_apparent',
        data: 27158
      },
      {
        name: 'energy_reactive',
        data: 30408
      }
    ]
  },
  {
    device: '17/pms/P01105773',
    energy: [
      {
        name: 'energy_active',
        data: 2000
      },
      {
        name: 'energy_apparent',
        data: 1000
      },
      {
        name: 'energy_reactive',
        data: 1500
      }
    ]
  }
]

function summaryData(data) {
  if (data == '') {
    console.log('There is no data')
    // alert('There is no data')
    return 0
  } else {
    var sum = data.reduce((data, elem) => data + elem)
    return sum
  }
}

pieActive = []
pieApparent = []
pieReactive = []

eActive = []
eApparent = []
eReactive = []

deviceSelected.map(item => {
  item.energy.map(name => {
    switch (name.name) {
      case "energy_active":
        // console.log('energy_active: ', name.data)
        eActive.push({
          device: item.device,
          data: name.data
        })
        break
      case "energy_apparent":
        // console.log('energy_apparent: ', name.data)
        eApparent.push({
          device: item.device,
          data: name.data
        })
        break
      case "energy_reactive":
        // console.log('energy_reactive: ', name.data)
        eReactive.push({
          device: item.device,
          data: name.data
        })
        break
    }
  })
})

let sumActive = calculateSum(eActive)
let sumApparent = calculateSum(eApparent)
let sumReactive = calculateSum(eReactive)

addPieChart('energy_active', sumActive, eActive)
addPieChart('energy_apparent', sumApparent, eApparent)
addPieChart('energy_reactive', sumReactive, eReactive)


function calculateSum(energyType) {
  let dataEnergy = []
  energyType.map(item => {
    dataEnergy.push(item.data)
  })
  let totalSum = summaryData(dataEnergy)
  return totalSum
}


function addPieChart(pieType, totalSum, param) {
  param.map(item => {
    let a = ((item.data * 100) / totalSum).toFixed(2)

    switch (pieType) {
      case "energy_active":
        this.pieActive.push([item.device,Number(a)])
        break
      case "energy_apparent":
        this.pieApparent.push([item.device, Number(a)])
        break
      case "energy_reactive":
      this.pieReactive.push([item.device, Number(a)])
    }
  })
}

console.log('pieAcitive: ', pieActive)
console.log('pieApparent: ', pieApparent)
console.log('pieReactive: ', pieReactive)