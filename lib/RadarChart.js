import React, { useRef, useEffect } from "react";
import propTypes from "prop-types";

/**
 * @typedef {Object} Point
 * @property {Number} x
 * @property {Number} y
 */

/**
 * @typedef {Object} PointRelativePosition
 * @property {Point} center
 * @property {Array<Point>} points
 */

const defaultColors = {
  lineColor: "rgb(255,255,255)",
  innerColor: "rgb(128, 191, 255)",
  outerColor: "rgb(12,142,175)",
  fontColor: "rgb(255,255,255)",
};

/**
 * 根据边数生成点
 * @param {Number} dimension
 * @returns {PointRelativePosition}
 */
const pointRelativePositionGenerator = (dimension) => {
  // 需要满足外角和定理
  if (dimension < 3) return;
  const center = { x: 1 / 2, y: 1 / 2 };
  const firstPoint = { x: 1 / 2, y: 1 / 6 };
  const exteriorAngle = (Math.PI * 2) / dimension;
  const SIDE_LENGTH = Math.sqrt(2 / 9 - (2 / 9) * Math.cos(exteriorAngle));
  const points = [firstPoint];

  let directionAngle = exteriorAngle / 2;
  while (directionAngle <= Math.PI * 2 - exteriorAngle) {
    const { x: oldX, y: oldY } = points[points.length - 1];
    const x = oldX + Math.cos(directionAngle) * SIDE_LENGTH;
    const y = oldY + Math.sin(directionAngle) * SIDE_LENGTH;
    points.push({ x, y });
    directionAngle += exteriorAngle;
  }
  return { center, points };
};

/**
 * 计算两点间的某点
 * @param {Point} origin
 * @param {Point} destination
 * @param {Number} ratio
 * @returns {Point}
 */
const ratioPoint = (origin, destination, ratio) => {
  const x = origin.x + (destination.x - origin.x) * ratio;
  const y = origin.y + (destination.y - origin.y) * ratio;
  return { x, y };
};

/**
 * 描绘/填充 多边形/线
 * @param {'fill'|'stroke'} type
 * @param {CanvasRenderingContext2D} context
 * @param {Array<Point>} points
 * @param {Number} size
 * @param {Boolean} closePath
 * @param {String} borderColor
 */
const drawPolygon = (
  type,
  context,
  points,
  size,
  closePath = false,
  borderColor
) => {
  if (!["fill", "stroke"].includes(type)) return;
  if (points.length < 2) return;

  const [firstPoint, ...restPoints] = points;
  context.beginPath();
  context.moveTo(firstPoint.x * size, firstPoint.y * size);
  restPoints.forEach((point) => context.lineTo(point.x * size, point.y * size));

  if (type === "fill") {
    context.fill();
    if (borderColor) {
      context.lineWidth = 1;
      context.strokeStyle = borderColor;
      drawPolygon("stroke", context, points, size, true);
    }
  } else {
    if (closePath) context.closePath();
    context.stroke();
  }
};

export default function RadarChart(props) {
  // const [hasShowData, setHasShowData] = useState(false);
  const {
    data = [],
    colors = defaultColors,
    size = 360,
    onClick,
    showData = false,
    stages = [],
    className,
    style,
  } = props;

  const canvasRef = useRef();

  /**
   * @type {PointRelativePosition}
   */
  const pointRelativePosition = pointRelativePositionGenerator(data.length);

  useEffect(() => {
    renderRoughSketch();
    if (showData) {
      clearCanvas();
      animate();
    }
  }, []);

  useEffect(() => {
    if (showData) {
      clearCanvas();
      animate();
    } else {
      clearCanvas();
      renderRoughSketch();
    }
  }, [showData]);

  const clearCanvas = () => {
    /**
     * @type {CanvasRenderingContext2D}
     */
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, size, size);
  };

  const renderRoughSketch = () => {
    clearCanvas();
    const { lineColor, outerColor, fontColor } = colors;
    const names = data.map((x) => x.name);

    const { current } = canvasRef;
    current.width = current.clientWidth * window.devicePixelRatio;
    current.height = current.clientHeight * window.devicePixelRatio;

    /**
     * @type {CanvasRenderingContext2D}
     */
    const context = current.getContext("2d");

    context.setTransform(
      window.devicePixelRatio,
      0,
      0,
      window.devicePixelRatio,
      0,
      0
    );
    context.strokeStyle = lineColor;
    context.fillStyle = outerColor;
    context.lineWidth = 1;
    context.lineCap = "round";
    context.lineJoin = "round";

    const { center, points } = pointRelativePosition;

    // 绘制内部背景和线条
    points.forEach((point) =>
      drawPolygon("stroke", context, [center, point], size, false)
    );
    if (stages.length && stages.length > 1) {
      const segementRatio = 1 / (stages.length - 1);
      stages.forEach((text, index) => {
        const currentPoints = points.map((point) =>
          ratioPoint(center, point, index * segementRatio)
        );
        drawPolygon("stroke", context, currentPoints, size, true);
        // const newHead = { x: currentPoints[0].x - 1 / 70, y: currentPoints[0].y };
        // drawPolygon('stroke', context, [newHead, currentPoints[0]], size, false);
        context.fillStyle = "#ffffff";
        context.textAlign = "right";
        context.fillText(
          text,
          (currentPoints[0].x - 1 / 28) * size,
          currentPoints[0].y * size
        );
      });
    } else {
      drawPolygon("stroke", context, points, size, true);
    }

    // 绘制文字
    points.forEach((step, index) => {
      const { x, y } = ratioPoint(center, step, 1.25);
      context.font = "13px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillStyle = fontColor;
      if (!names[index]) return;
      context.fillText(names[index], x * size, y * size);
    });
  };

  const renderData = (percentage = 1) => {
    const values = data.map((x) => x.value);
    const { innerColor, borderColor } = colors;
    const { center, points } = pointRelativePosition;
    /**
     * @type {CanvasRenderingContext2D}
     */
    const context = canvasRef.current.getContext("2d");

    const currentPoints = points.map((point, index) =>
      ratioPoint(center, point, percentage * values[index])
    );
    context.fillStyle = innerColor;
    context.lineWidth = 0.5;
    context.lineCap = "round";
    context.lineJoin = "round";
    drawPolygon("fill", context, currentPoints, size, true, borderColor);
  };

  const animate = () => {
    const percentageIncreasement = (current) => 1 * current - current * current;
    let percentage = 0.03;
    (function action() {
      renderRoughSketch();
      renderData(percentage);
      percentage += 0.1 * percentageIncreasement(percentage);
      if (percentage < 0.99) {
        requestAnimationFrame(() => action());
      }
    })();
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        margin: "0 auto",
        display: "block",
        ...style,
      }}
      onClick={onClick}
      className={className}
    >
      您的浏览器不支持canvas
    </canvas>
  );
}

RadarChart.propTypes = {
  data: propTypes.arrayOf(
    propTypes.exact({ name: propTypes.string, value: propTypes.number })
  ).isRequired,
  size: propTypes.number,
  colors: propTypes.shape({
    lineColor: propTypes.string,
    innerColor: propTypes.string,
    outerColor: propTypes.string,
    fontColor: propTypes.string,
    borderColor: propTypes.string,
  }),
  stages: propTypes.arrayOf(propTypes.string),
  showData: propTypes.bool,
  onClick: propTypes.func,
  className: propTypes.string,
  style: propTypes.any,
};
