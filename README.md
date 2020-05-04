## React Radar Chart

![Build](https://github.com/ChenKS12138/react-radar-chart/workflows/Build/badge.svg)
[![npm version](https://badge.fury.io/js/react-animate-radar-chart.svg)](https://badge.fury.io/js/react-animate-radar-chart)

### How To Install

![preview](https://raw.githubusercontent.com/ChenKS12138/react-animate-radar-chart/master/assets/preview.png)

See [Preview](https://chenks12138.github.io/react-animate-radar-chart/)

```bash
npm install react-animate-radar-chart
```

### How To Use

```javascript
const data = [
  {
    name: "生活",
    value: 0.5,
  },
  {
    name: "娱乐",
    value: 0.4,
  },
  {
    name: "工作",
    value: 0.8,
  },
  {
    name: "学习",
    value: 0.7,
  },
  {
    name: "其他",
    value: 0.2,
  },
];

const colors = {
  lineColor: "rgb(255,255,255)",
  innerColor: "rgba(109,200,236,0.45)",
  outerColor: "transparent",
  fontColor: "rgb(255,255,255)",
  borderColor: "rgb(109,200,236)",
};

function App() {
  const [showData, setShowData] = useState(false);
  return (
    <div id="app">
      <div className="container">
        <RadarChart
          data={data}
          showData={showData}
          size={480}
          colors={colors}
        />
        <div>
          <button className="btn" onClick={() => setShowData(true)}>
            animate
          </button>
        </div>
      </div>
    </div>
  );
}
```
