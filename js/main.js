window.PhotoSphereViewer = PhotoSphereViewer;
// TODO REMOVE
window.markers2 = [];
window.markers3 = [];
const PATH = "./img";
const DEV_MODE = true;
const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: `${PATH}/scene1/DJI_0514.JPG`,
  navbar: ["autorotate", "zoom", "fullscreen"],
  plugins: [
    PhotoSphereViewer.MarkersPlugin,
    [
      PhotoSphereViewer.VirtualTourPlugin,
      {
        positionMode: "gps",
        renderMode: "markers",
        markerStyle: {
          size: { width: 0, height: 80 },
          scale: [2, 2],
          anchor: "top center",
          className: "custom-link-marker",
          style: {
            color: "rgba(255, 208, 255, 0.1)",
          },
        },
      },
    ],
    [
      PhotoSphereViewer.AutorotatePlugin,
      {
        autostartDelay: null,
        autostartOnIdle: false,
        autorotatePitch: 0.05,
        autorotateSpeed: "0.2rpm",
      },
    ],
  ],
});

const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
markersPlugin.addEventListener("select-marker", ({ marker, doubleClick }) => {
  if (!doubleClick) return;
  if (!DEV_MODE) return;
  // установить режим, чтобы можно было кликать внутри маркера
  document.body.classList.add("hide-tooltip-mode");
  const changeMarker = (e) => {
    const coords = { yaw: e.data.yaw, pitch: e.data.pitch };
    // 22_7 22_8
    const nearestPoint = findNearestPointByYawPitch(
      coords,
      virtualTour.markers.markers[marker.id].config.polyline[0]
    );

    virtualTour.markers.markers[marker.id].config.polyline[0][
      nearestPoint.resIdx
    ] = [e.data.yaw, e.data.pitch];
    virtualTour.markers.markers[marker.id].update({
      ...virtualTour.markers.markers[marker.id].config,
    });
    virtualTour.markers.markers[marker.id].render({
      ...virtualTour.markers.markers[marker.id].config,
    });
    if (IS_CTRL_ENTER) {
      saveOnLocalStorage();
      viewer.removeEventListener("click", changeMarker);
    }
  };

  viewer.addEventListener("click", changeMarker);
});
const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
const autorotate = viewer.getPlugin(PhotoSphereViewer.AutorotatePlugin);

viewer.addEventListener("ready", () => init(), { once: false });
function init() {
  virtualTour.addEventListener("node-changed", ({ node, data }) => {
    if (node.overlay) viewer.setOverlay(node.overlay, node.opacity);
  });
  const markersFor1Node = DEV_MODE ? [] : markers1;
  const markersFor2Node = DEV_MODE ? [] : markers2;
  const markersFor3Node = DEV_MODE ? [] : markers3;
  virtualTour.setNodes([
    {
      id: "1",
      panorama: `${PATH}/scene1/DJI_0514.JPG`,
      name: "Перейти к локации №1",
      links: [
        {
          nodeId: "2",
          gps: [35, -235, -51],
        },
        {
          nodeId: "3",
          gps: [35, -185, -51],
        },
      ],
      markers: [...markersFor1Node],
      gps: [-30, 0, 3],
      panoData: { poseHeading: 327 },
    },
    {
      id: "2",
      panorama: `${PATH}/scene1/DJI_0515.JPG`,
      name: "Перейти к локации №2",
      links: [{ nodeId: "1", gps: [10, 95, 0] }],
      markers: [...markersFor2Node],
      gps: [-30, 0, 3],
      panoData: { poseHeading: 327 },
    },
    {
      id: "3",
      panorama: `${PATH}/scene1/DJI_0517.JPG`,
      name: "Перейти к локации №3",
      links: [{ nodeId: "1", gps: [10, 95, 0] }],
      markers: [...markersFor3Node],
      gps: [-30, 0, 3],
      panoData: { poseHeading: 327 },
    },
  ]);
}

virtualTour.addEventListener("node-changed", () => {
  DEV_MODE ? RENDER_FROM_LOCAL_STORAGE() : null;
});

const CREATE_TOOLTIP = (PREFIX, ID_MARKER, SQUARE_1, SQUARE_2) => {
  const tooltip = {
    content: "",
    position: "top center",
    trigger: "click",
  };
  switch (PREFIX) {
    case PREFIXES.HIDE_AREA:
      tooltip.content = `
        <div class="house-tooltip house-tooltip_info area-tooltip-info">
          <pre>${ID_MARKER}</pre>
          <h3>Перейдите на другую локацию</h3>
        </div>
      `;
      return tooltip;

    case PREFIXES.HOUSE_SUCCESS:
      tooltip.content = `
        <div class="house-tooltip house-tooltip_success">
          <h3>В продаже</h3>
          <pre>${ID_MARKER}</pre>
          <ul>
            <li><span>Площадь участка:</span> <span>${SQUARE_1}м.кв</span></li>
            <li><span>Площадь дома:</span> <span>${SQUARE_2}м.кв</span>  </li>
          </ul>
        </div>
      `;
      return tooltip;

    case PREFIXES.HOUSE_UNSUCCESS:
      tooltip.content = `
        <div class="house-tooltip house-tooltip_unsuccess">
          <h3>Продано</h3>
          <pre>${ID_MARKER}</pre>
          <ul>
            <li><span>Площадь участка:</span> <span>${SQUARE_1}м.кв</span></li>
            <li><span>Площадь дома:</span> <span>${SQUARE_2}м.кв</span>  </li>
          </ul>
        </div>
      `;
      return tooltip;

    case PREFIXES.ROAD:
      tooltip.content = `
        <div class="house-tooltip house-tooltip_info area-tooltip-info road-tooltip-info">
          <pre>${ID_MARKER}</pre>
          <h3>Перейдите на другую локацию</h3>
        </div>
      `;
      return tooltip;

    default:
      return tooltip;
  }
};
const PREFIXES = {
  ROAD: "ROAD",
  HOUSE_SUCCESS: "HOUSE_SUCCESS",
  HOUSE_UNSUCCESS: "HOUSE_UNSUCCESS",
  HIDE_AREA: "HIDE_AREA",
};
const SVG_STYLE = {
  [PREFIXES.ROAD]: {
    fill: "rgba(125, 125, 125, 0.5)",
    stroke: "rgba(255, 255, 255, 0.3)",
    strokeWidth: "1px",
  },
  [PREFIXES.HOUSE_SUCCESS]: {
    fill: "rgba(0, 255, 0, 0.20)",
    stroke: "rgba(255, 255, 255, 0.5)",
    strokeWidth: "1px",
  },
  [PREFIXES.HOUSE_UNSUCCESS]: {
    fill: "rgba(255, 0, 0, 0.20)",
    stroke: "rgba(255, 255, 255, 0.5)",
    strokeWidth: "1px",
  },
  [PREFIXES.HIDE_AREA]: {
    fill: "rgba(255, 255, 255, 0.3)",
    stroke: "rgba(255, 255, 255, 0.3)",
    strokeWidth: "2px",
  },
};
const CLASS_NAME = {
  [PREFIXES.ROAD]: "svg-road",
  [PREFIXES.HOUSE_SUCCESS]: "svg-house-success",
  [PREFIXES.HOUSE_UNSUCCESS]: "svg-house-unsuccess",
  [PREFIXES.HIDE_AREA]: "svg-hide-zone",
};
const ID_MARKERS_COUNTER = {
  [PREFIXES.HIDE_AREA]: 1,
  [PREFIXES.HOUSE_SUCCESS]: 1,
  [PREFIXES.HOUSE_UNSUCCESS]: 1,
  [PREFIXES.ROAD]: 1,
};
let IS_CTRL_ENTER = false;
function RENDER_FROM_LOCAL_STORAGE() {
  markersPlugin.clearMarkers();
  const markers = getMarkersFromLocalStorage();
  if (markers?.length) {
    markers
      .map((i) => ({ ...i, tooltip: { ...i.tooltip, trigger: "click" } }))
      .forEach((json) => virtualTour.markers.addMarker(json));
  }
}
function deleteFigure(id) {
  const markers = getAllMarkers().filter((i) => i.id !== id);

  saveOnLocalStorage(markers);
  RENDER_FROM_LOCAL_STORAGE();
}

function updateFigure(id, content) {
  const findIdx = getAllMarkers().findIndex((i) => i.id === id);
  if (findIdx >= 0) {
    getAllMarkers()[findIdx].tooltip.content = content;
    saveOnLocalStorage(getAllMarkers());
    RENDER_FROM_LOCAL_STORAGE();
  }
}

function createFigure(FIGURE_TYPE = PREFIXES.ROAD, SQUARE_1 = 0, SQUARE_2 = 0) {
  let figureCoords = [];

  const addMarker = (coords) => {
    const existMarkersThisType = getAllMarkers().filter(
      (i) =>
        i.id.indexOf(
          `NODE_${virtualTour.state.currentNode.id}_${FIGURE_TYPE}`
        ) >= 0
    );
    if (existMarkersThisType?.length) {
      const numId = existMarkersThisType[existMarkersThisType.length - 1].id
        .split("_")
        .pop();
      ID_MARKERS_COUNTER[FIGURE_TYPE] = +numId + 1;
    }
    const ID_MARKER = `NODE_${virtualTour.state.currentNode.id}_${FIGURE_TYPE}_${ID_MARKERS_COUNTER[FIGURE_TYPE]}`;
    const payload = {
      id: ID_MARKER,
      className: CLASS_NAME[FIGURE_TYPE],
      polyline: [coords],
      svgStyle: SVG_STYLE[FIGURE_TYPE],
      position: { pitch: -0.1, yaw: -0.05 },
      tooltip: CREATE_TOOLTIP(FIGURE_TYPE, ID_MARKER, SQUARE_1, SQUARE_2),
    };
    virtualTour.markers.addMarker(payload);
    ID_MARKERS_COUNTER[FIGURE_TYPE]++;
    return payload;
  };

  function createMarker(e) {
    figureCoords.push([e.data.yaw, e.data.pitch]);
    if (!IS_CTRL_ENTER) return;
    const marker = addMarker(figureCoords);
    figureCoords = [];
    viewer.removeEventListener("click", createMarker);
    saveOnLocalStorage();
    return marker;
  }
  viewer.addEventListener("click", createMarker);
}

window.addEventListener("keydown", (e) => (IS_CTRL_ENTER = e.ctrlKey));
window.addEventListener("keyup", (e) => (IS_CTRL_ENTER = e.ctrlKey));
window.getAllMarkers = () => {
  return Object.entries(virtualTour.markers.markers).map(
    ([_, { id, config }]) => {
      const { polyline, svgStyle, tooltip, position } = config;
      return {
        id,
        polyline,
        svgStyle,
        tooltip,
        position,
      };
    }
  );
};
window.getRoads = (json = false) => {
  const res = window
    .getAllMarkers()
    .filter((i) => i.id.indexOf(PREFIXES.ROAD) >= 0);
  return json ? JSON.stringify(res) : res;
};
window.getHouses = (json = false) => {
  const res = window
    .getAllMarkers()
    .filter((i) => i.id.indexOf(PREFIXES.HOUSE) >= 0);
  return json ? JSON.stringify(res) : res;
};
window.getHideArea = (json = false) => {
  const res = window
    .getAllMarkers()
    .filter((i) => i.id.indexOf(PREFIXES.HIDE_AREA) >= 0);
  return json ? JSON.stringify(res) : res;
};

function initDevTools() {
  const $btnCreateRoad = document.getElementById("btn-create-road");
  $btnCreateRoad.addEventListener("click", () => createFigure(PREFIXES.ROAD));

  const $btnCreateSuccessHouse = document.getElementById(
    "btn-create-success-house"
  );
  $btnCreateSuccessHouse.addEventListener("click", () => {
    const squaresText = prompt("Площадь участка, площадь дома (через пробел)");
    const [square1, square2] = squaresText.split(" ").map((i) => Number(i));
    createFigure(PREFIXES.HOUSE_SUCCESS, square1, square2);
  });

  const $btnCreateUnSuccessHouse = document.getElementById(
    "btn-create-unsuccess-house"
  );
  $btnCreateUnSuccessHouse.addEventListener("click", () => {
    const squaresText = prompt("Площадь участка, площадь дома (через пробел)");
    const [square1, square2] = squaresText.split(" ").map((i) => Number(i));
    createFigure(PREFIXES.HOUSE_UNSUCCESS, square1, square2);
  });

  const $btnCreateHideZone = document.getElementById("btn-create-hide-zone");
  $btnCreateHideZone.addEventListener("click", () => {
    createFigure(PREFIXES.HIDE_AREA);
  });

  const $btnToggleDevMode = document.getElementById("btn-toogle-dev-mode");
  $btnToggleDevMode.addEventListener("click", () => {
    document.body.classList.toggle("dev-mode");
  });

  const $btnToggleTooltipMode = document.getElementById(
    "btn-toogle-hidetooltips-mode"
  );
  $btnToggleTooltipMode.addEventListener("click", () => {
    document.body.classList.toggle("hide-tooltip-mode");
  });

  const $btnDeleteFigure = document.getElementById("btn-delete-figure");
  $btnDeleteFigure.addEventListener("click", () => {
    const deletedId = prompt("Введите id удаляемой фигуры");
    deleteFigure(deletedId);
  });

  const $btnUpdateFigure = document.getElementById("btn-update-figure");
  $btnUpdateFigure.addEventListener("click", () => {
    const updatedId = prompt("Введите id обновляемой фигуры");
    const content = prompt("Введите обновлённый контент");
    updateFigure(updatedId, content);
  });
}

DEV_MODE ? initDevTools() : null;
// syntax
// Функция для вычисления минимального углового расстояния между yaw и pitch
function normalizeAngle(angle) {
  while (angle < 0) angle += 360;
  while (angle >= 360) angle -= 360;
  return angle;
}

function getAngularDistance(angle1, angle2) {
  let distance = Math.abs(normalizeAngle(angle1 - angle2));
  return Math.min(distance, 360 - distance); // Возвращает кратчайшее расстояние
}

// Функция для нахождения ближайшей точки
function findNearestPointByYawPitch(clickedPoint, pointsArray) {
  let nearestPoint = null;
  let minDistance = Infinity;
  let resIdx = undefined;

  pointsArray.forEach((point, idx) => {
    const yawDistance = getAngularDistance(clickedPoint.yaw, point[0]);
    const pitchDistance = Math.abs(clickedPoint.pitch - point[1]);

    // Используем Pythagorean theorem для нахождения "евклидова" расстояния в углах
    const distance = Math.sqrt(
      yawDistance * yawDistance + pitchDistance * pitchDistance
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestPoint = point;
      resIdx = idx;
    }
  });

  return { resIdx };
}

function saveOnLocalStorage(newMarkers = null) {
  const markers = newMarkers
    ? JSON.stringify(newMarkers)
    : JSON.stringify(window.getAllMarkers());
  localStorage.setItem(`NODE_${virtualTour.state.currentNode.id}`, markers);
}

function getMarkersFromLocalStorage() {
  const res = localStorage.getItem(`NODE_${virtualTour.state.currentNode.id}`);
  return res ? JSON.parse(res) : null;
}

window.getMarkersFromLocalStorage = getMarkersFromLocalStorage;
