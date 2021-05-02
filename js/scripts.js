const dataDunat = {
  labels: ['Score to go','My total feedback score' 
    
  ],
  datasets: [{
    label: 'Total feedback score',
    data: [25,75],
    backgroundColor: [
      'rgba(211,211,211)',
      'rgba(75, 192, 192)'
    ],
    hoverOffset: 4
  }]
};

const labels = ['Smooth Driving', 'Balance','Sudden breaks','Accelerations','Sharp Turns','Transitions'];
const dataBar = {
  labels: labels,
  datasets: [{
    label: 'My Score',
    data: [67, 33, 70, 58, 50, 55],
    backgroundColor: [
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5',
      'rgba(75, 192, 192, 0.5'
    ],
    borderColor: [
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)',
      'rgb(75, 192, 192)'
    ],
    borderWidth: 1
  },{
    label: 'Drivers Score',
    data: [80, 75, 74, 72, 60, 50],
    backgroundColor: [
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)',
      'rgba(211,211,211,0.8)'
    ],
    borderColor: [
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)',
      'rgb(136, 136, 136)'
    ],
    borderWidth: 1
  }]
};

const configBar = {
  type: 'bar',
  data: dataBar,
  options:{
    scales: {
        yAxes : [{
            ticks : {
                max : 100,    
                min : 0
            }
        }]
    }
}
};

window.onload = function() {
  var ctx = document.getElementById('chDonut1');
  var dataLabel = document.getElementById('data-label');
  const config = {
    type: 'doughnut',
    data: dataDunat,
          options: {
            legend: {
                display: false
            },
            animation: {
                animateScale: true,
                animateRotate: true,
                onComplete: function() {
                  dataLabel.innerHTML = dataDunat['datasets'][0]['data'][1];
                  dataLabel.style.top = '42%';
                  dataLabel.style.left = '47%';
                }
            },
        }
  };
  var dunatChart = new Chart(ctx,config);
  var bar1 = document.getElementById('bar1');
  var barChart = new Chart(bar1, configBar);
};

function redirect(url){
  window.location=url;
}

// Profile upload start
function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
                      $(function() {
            $('#profile-image1').on('click', function() {
                $('#profile-image-upload').click();
            });
        });