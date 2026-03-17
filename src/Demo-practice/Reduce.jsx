import React from 'react'

const Reduce = () => {

  const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)


  const studyCourses = [
    {
      itemName: 'js Course',
      price: 2999
    },

    {
      itemName: 'Mobile App',
      price: 4000
    },

    {
      itemName: 'Data-science',
      price: 10000
    },

    {
      itemName: 'flutter',
      price: 11000
    },

  ]

  // const Mybill = studyCourses.reduce((value,index)=>
  //   (
  //    value + index.price,0))


  const MyBill = studyCourses.reduce((value, index) => {
    return value + index.price
  }, 0)


  const Myarr = [11, 44, 55, 10, 25];
  const Myarray = [11, 44, 55, 10, 25];


  const Data = Myarr.find((val) => {
    return val > 44
  })

  console.log(Data);

  const ModeData = Myarray.indexOf(55)


  console.log(ModeData);

  let age = 18;

  if (age > 25) {
    age = 'Yes Im Ready For Vote';
  }
  else {
    age = "sorry I can't vote";
  }
  console.log(age);



  return (
    <div>
      reduce Output Is:"{myTotal}"


      <div>
        Mybill is Output Is:"{MyBill}"
      </div>

      <div>
        Find Method Is:"{Data}"
      </div>

      <div>
        index Number Is:"{ModeData}"
      </div>

      <div>
        if else Condtion is :
        "{age} "
      </div>

    </div>

  )
}

export default Reduce