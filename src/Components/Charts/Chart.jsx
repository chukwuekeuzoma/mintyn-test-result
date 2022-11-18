import React, { useRef, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';
import {Line , getElementAtEvent } from 'react-chartjs-2';
import Leftbutton from "../../Asset/Svg/LeftButton.svg"
import RightButton from "../../Asset/Svg/RightButton.svg"
import "./Chart.scss"



const labelObject = { '183,234': 183234, '192,342': 192342, '123,234': 123234, '153,852': 153852, '123,643': 123643, '193,232': 193232 }


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales:{
        y: {
            display: false
        },
        x: {
            grid: { drawOnChartArea: false, drawBorder: false, drawTicks: false, },
            ticks: {
              padding: 10,
              color: 'black',
              font: {
                size: 16,
                weight: '300',
                family: "'Outfit', sans-serif",
              }
            }
        }
    },
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: false,
        text: 'earnings',
      },
    },
  };
  var labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const backgroundColors = ["#494949", "#1C1C1C", "#727272", "#383838", "#757575", "black", "#F04D22"]


  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Earnings',
        barPercentage: 0.9,
        categoryPercentage: 1,
        data: Object.values(labelObject),
        backgroundColor: ["#F04D22", "black", "black", "black", "black", "black"],
      }
    ],
  };
  
  const setNextData = () => {
    data.labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    data.datasets[0].data = [183234, 192342, 123234, 153852, 123643, 193232]
    // console.log('next');
  }
  const setPreviousData = () => {
    data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    data.datasets[0].data = [153234, 22342, 243234, 223852, 143236, 193232]
    // console.log('previous')
  }

function Chart(props) {
    const chartRef = useRef();
    const [currentMonth, setCurrentMonth] = useState(data?.labels[0])
    const [currentEarning, setCurrentEarning] = useState(data?.datasets[0].data[0])
    const [currentLabel, setCurrentLabel] = useState(Object.keys(labelObject)[0])
      // console.log(data?.datasets[0].data[0])
  const setDefault = () => {
    setCurrentMonth(data?.labels[0])
    setCurrentEarning(data?.datasets[0].data[0])
    setCurrentLabel(Object.keys(labelObject)[0])
    chartRef.current.data.datasets[0].data = data.datasets[0].data
    const color = ["#F04D22", "black", "black", "black", "black", "black"]
    chartRef.current.config.data.datasets[0].backgroundColor = color;
  }
  const printElementAtEvent = (element) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    setCurrentEarning(data.datasets[datasetIndex].data[index])
    setCurrentLabel(Object.keys(labelObject)[index])
    setCurrentMonth(data.labels[index])
  };

  const changeBgElementAtEvent = (elements) => {
    if (elements.length) {
      // console.log(elements)
      const { datasetIndex, index } = elements[0];
      chartRef.current.data.datasets[datasetIndex].backgroundColor[index] = '#F04D22'
      // console.log(chartRef.current.data.datasets[datasetIndex].backgroundColor);
    } 
    chartRef.current.update()
  }
  
  const onClick = (event) => {
    printElementAtEvent(getElementAtEvent(chartRef.current, event));
    const color = ["black", "black", "black", "black", "black", "black"]
    chartRef.current.config.data.datasets[0].backgroundColor = color;
    changeBgElementAtEvent(getElementAtEvent(chartRef.current, event));
  }

    return (
      <div className="chart-container">
        <div>
          <Line ref={chartRef} options={options} data={data} onClick={onClick} />
        </div>
        <div>
          <div>
            <div onClick={() => { setPreviousData(); setDefault() }}>
              <img src={Leftbutton} alt="" />
            </div>
            <div onClick={() => { setNextData(); setDefault() }}>
              <img src={ RightButton } alt=""  />
            </div>
          </div>
        </div>
      </div>
    );
}

export default Chart;