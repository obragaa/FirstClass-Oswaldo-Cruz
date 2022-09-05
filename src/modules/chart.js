const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Meus primeiros dados',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  const config =  { 
    type :  'doughnut' , 
    data : data , 
  } ;

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );