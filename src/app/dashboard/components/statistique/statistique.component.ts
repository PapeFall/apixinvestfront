import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  data:any
  data1:any
  basicData:any
  data2:any
  projets:any

  

  constructor() {
      
   }

  ngOnInit(): void {

    this.data = {
      labels: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
      datasets: [ {
          type: 'bar',
          label: 'Projets',
          backgroundColor: '#66BB6A',
          data: [
              21,
              84,
              24,
              75,
              37,
              65,
              34
          ],
          borderColor: 'white',
          borderWidth: 2
      }, {
          type: 'bar',
          label: 'Investisseurs',
          backgroundColor: '#FFA726',
          data: [
              41,
              52,
              24,
              74,
              23,
              21,
              32
          ]
      }]
  };

  this.data1 = {
    labels: ['Agriculture','Energie','Transport'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
};

this.data2 = {
    labels: ['Etudiants','Retraités','Salariés'],
    datasets: [
        {
            data: [40, 150, 100],
            backgroundColor: [
                "#42A5F5",
                "#66BB6A",
                "#FFA726"
            ],
            hoverBackgroundColor: [
                "#64B5F6",
                "#81C784",
                "#FFB74D"
            ]
        }
    ]
};

this.basicData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
      {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
      },
      {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
      }
  ]
};

this.projets=[
    {
        "date":"24-02-2022",
        "projet":4,
        "montant":5000000
    },
    {
        "date":"20-02-2022",
        "projet":6,
        "montant":8000000
    },
    {
        "date":"18-02-2022",
        "projet":9,
        "montant":35000000
    },
    {
        "date":"14-02-2022",
        "projet":6,
        "montant":95000000
    },
    {
        "date":"13-02-2022",
        "projet":6,
        "montant":7000000
    },
    {
        "date":"12-02-2022",
        "projet":6,
        "montant":5000000
    },
    {
        "date":"10-02-2022",
        "projet":6,
        "montant":5000000
    },
    {
        "date":"09-02-2022",
        "projet":6,
        "montant":5000000
    },
    {
        "date":"24-02-2022",
        "projet":4,
        "montant":5000000
    },
    {
        "date":"20-02-2022",
        "projet":6,
        "montant":5000000
    },
    {
        "date":"18-02-2022",
        "projet":9,
        "montant":9000000
    },
    {
        "date":"14-02-2022",
        "projet":6,
        "montant":3000000
    },
    {
        "date":"13-02-2022",
        "projet":6,
        "montant":100000
    }
]

  }

}
