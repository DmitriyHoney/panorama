window.PhotoSphereViewer = PhotoSphereViewer;

const PATH = "./img";

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
const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
const autorotate = viewer.getPlugin(PhotoSphereViewer.AutorotatePlugin);

viewer.addEventListener("ready", () => init(), { once: true });
// window.viewer = viewer;
// window.rememberCoords = () => {
//     window.ress = [];
//     viewer.addEventListener('click', (e) => {
//         console.log(111, e);
//         window.e = e;
//         const data = e.data;
//         if (!data.rightclick) {
//             window.ress.push([data.yaw, data.pitch]);
//             console.log(JSON.stringify(window.ress));
//         }
//     });
// }

// window.addEventListener('keydown', (e) => {
//     isCtrl = e.ctrlKey;
// })
// window.addEventListener('keyup', (e) => {
//     isCtrl = e.ctrlKey;
// })
const createHouseTooltipInSale = (square1, square2, id) => `
  <div class="house-tooltip house-tooltip_success">
    <h3>В продаже</h3>
    <pre>${id}</pre>
    <ul>
      <li><span>Площадь участка:</span> <span>${square1}м2</span>  </li>
      <li><span>Площадь дома:</span> <span>${square2}м2</span>  </li>
    </ul>
  </div>
`;

const createHouseTooltipUnsuccess = (square1, square2, id) => `
  <div class="house-tooltip house-tooltip_unsuccess">
    <h3>Продано</h3>
    <pre>${id}</pre>
    <ul>
      <li><span>Площадь участка:</span> <span>${square1}м2</span>  </li>
      <li><span>Площадь дома:</span> <span>${square2}м2</span>  </li>
    </ul>
  </div>
`;

function init() {
  virtualTour.addEventListener("node-changed", ({ node, data }) => {
    if (node.overlay) viewer.setOverlay(node.overlay, node.opacity);
  });
  const roadsPolygons = [
    {
      id: "road_1",
      polyline: [
        [
          [0.46213710147696874, -0.39444284953182907],
          [6.027061936754616, -0.5546714654485383],
          [5.953661796895049, -0.25428231993289474],
          [5.933302620275227, -0.25526449542450047],
          [5.933161456591995, -0.27568972785534873],
          [5.592319750810346, -0.2810688241567574],
          [5.583867923711823, -0.29193612543829994],
          [5.934004939135775, -0.28699578677684556],
          [5.9655086677766835, -0.5579363972041556],
          [5.814186089363726, -0.5643718426512319],
          [5.696796799188224, -0.5715043465432923],
          [5.638178178549564, -0.5807153247699128],
          [5.583977312738382, -0.5913548506276101],
          [5.521790472434208, -0.6055556557311306],
          [5.423404748669212, -0.6298532616777228],
          [5.353863066012554, -0.6518439000689464],
          [4.651743052258807, -0.7466687520040072],
          [4.645100990632306, -0.7792479750097683],
          [5.491150954050995, -0.6378845729498943],
          [5.594166983759488, -0.6183346495039084],
          [5.751285989242733, -0.5889500761917215],
          [5.91863553124871, -0.5881208712078521],
          [6.071409868817984, -0.5896863424180472],
          [0.494703060144361, -0.40718028102012394],
        ],
      ],
      svgStyle: {
        fill: "rgba(125, 125, 125, 0.5)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "1px",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "road_2",
      polyline: [
        [
          [1.7037368711633707, -0.5869349603473539],
          [3.8943607306725845, -1.2482237830149363],
          [4.679190087649523, -0.1796614860375021],
          [4.668968987940749, -0.1786258830300964],
          [3.9649970706643924, -1.1485094010300987],
          [1.7662877358389126, -0.5831180704858925],
        ],
      ],
      svgStyle: {
        fill: "rgba(125, 125, 125, 0.5)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "1px",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "road_3",
      polyline: [
        [
          [4.561947747976492, -0.5782601710701538],
          [4.610559439767148, -0.5812026542662547],
          [4.628848370605109, -0.5817277128359479],
          [4.633892416974151, -0.5912205851107997],
          [4.595182570034626, -0.7750095193378392],
          [4.645021227880134, -0.7793924890389738],
          [4.69268873797981, -0.47219792812405803],
          [5.038029763244641, -0.4405168746008532],
          [5.241921904273687, -0.40963811050553667],
          [5.416351832985923, -0.3922802156823293],
          [5.573406262202673, -0.3880338025558583],
          [5.943987343817423, -0.3847995331207166],
          [5.941693081546117, -0.3645802996545344],
          [5.610936910610896, -0.36944482805137757],
          [5.458926896353019, -0.365080790148508],
          [5.299742584279651, -0.37292324237543073],
          [5.1957902397634586, -0.3838241268623508],
          [4.610477545571014, -0.43098747984479413],
        ],
      ],
      svgStyle: {
        fill: "rgba(125, 125, 125, 0.5)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "1px",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    // подробнее область слишком далеко для отрисовки
    {
      id: "hide_zone_1",
      className: "svg-hide-zone",
      polyline: [
        [
          [4.6791634342700705, -0.17907242060615625],
          [4.611709339751674, -0.4297194547018446],
          [5.130764164311646, -0.3893578709003056],
          [5.354245340785333, -0.3624226113402096],
          [5.512752157810543, -0.3636949760157271],
          [5.829308866475334, -0.36938979845300457],
          [5.850259731306687, -0.29184568335139427],
          [5.582490133398079, -0.2927446928024515],
          [5.593522590976001, -0.2795119910242079],
          [5.931673149877079, -0.2738434738873794],
          [5.932746142316443, -0.2429725837261092],
        ],
      ],
      svgStyle: {
        fill: "rgba(255, 255, 255, 0.3)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "2px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_info">
            <h3>Перейдите на другую локацию</h3>
          </div>
        `,
        position: "top center",
        trigger: "hover",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "hide_zone_2",
      className: "svg-hide-zone",
      polyline: [
        [
          [4.443779192755668, -0.7273828321399862],
          [4.040866111443883, -0.6396263427225857],
          [4.593472989982362, -0.1688765759229991],
          [4.668192191482377, -0.17722961211185972],
        ],
      ],
      position: { pitch: -0.1, yaw: -0.05 },
      svgStyle: {
        fill: "rgba(255, 255, 255, 0.3)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "2px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_info">
            <h3>Перейдите на другую локацию</h3>
          </div>
        `,
        position: "top center",
        trigger: "hover",
      },
    },
  ];
  const housesPolygons = [
    {
      id: "house_4",
      className: "svg-house-success",
      polyline: [
        [
          [6.030895583468048, -0.5494105636785491],
          [6.015427482922125, -0.4970632908260666],
          [6.275240182223556, -0.4631304691911202],
          [6.277563727614751, -0.52283768369574],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_5",
      className: "svg-house-success",
      polyline: [
        [
          [6.014831352140202, -0.4934674577722147],
          [6.0042405311607885, -0.45039473658461127],
          [6.247670261358487, -0.42037157067331377],
          [6.275196936542257, -0.4418590540342118],
          [6.275035308323843, -0.4594696914685805],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>793м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_6",
      className: "svg-house-success",
      polyline: [
        [
          [5.995208145417566, -0.4162841292973689],
          [6.215609093450767, -0.3922831474664834],
          [6.2446988129971635, -0.41856760830181994],
          [6.003864653440326, -0.447649387314208],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_6</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>628м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_7",
      className: "svg-house-success",
      polyline: [
        [
          [5.987613937651566, -0.3859053776312382],
          [5.99541949767683, -0.4134373298534424],
          [6.212725863770519, -0.39021644719391535],
          [6.18544977754584, -0.3664544598095072],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_7</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>778м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_8",
      className: "svg-house-success",
      polyline: [
        [
          [5.9814924683058805, -0.3563401958646186],
          [5.988475621640295, -0.3817246781507879],
          [6.180902339790318, -0.36386862499824457],
          [6.157607680763616, -0.3416141589254731],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_8</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>760м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_9",
      className: "svg-house-success",
      polyline: [
        [
          [5.9769984024037806, -0.33762544060284916],
          [5.981320342058148, -0.35343980958066634],
          [6.154791999326123, -0.3381353091343977],
          [6.139562019395181, -0.3240019964127401],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_9</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>772м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_10",
      className: "svg-house-success",
      polyline: [
        [
          [5.971037096485961, -0.31764373418685876],
          [5.976360364534643, -0.33499478775104174],
          [6.137763784956546, -0.3220388061057642],
          [6.122123228778192, -0.3072221240008628],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_10</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>763м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_11",
      className: "svg-house-success",
      polyline: [
        [
          [5.966717771897294, -0.30169938066281676],
          [5.970517256296692, -0.3151013710255064],
          [6.118972677908028, -0.3045466406972319],
          [6.107463465946773, -0.2930837342184587],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_11</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>705м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_12",
      className: "svg-house-success",
      polyline: [
        [
          [5.964071156161019, -0.2871024784116638],
          [5.966866704983303, -0.2989089245683212],
          [6.105064925211046, -0.2911830351934923],
          [6.093177847984769, -0.27972175488307194],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_12</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>975м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_13",
      className: "svg-house-success",
      polyline: [
        [
          [5.961059885080543, -0.2733630811352068],
          [5.963560463003982, -0.28405756386837844],
          [6.089484513080932, -0.27722696086848586],
          [6.077830749096131, -0.26596158387076985],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_13</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>669м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_14",
      className: "svg-house-success",
      polyline: [
        [
          [5.959222796388567, -0.2625718427088468],
          [5.960643242679477, -0.2703945634180722],
          [6.07541542653937, -0.2645288043791254],
          [6.0673980962298435, -0.2554562359854833],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_14</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>677м.кв</span></li>
              <li><span>Площадь дома:</span> <span>119,83м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house_15",
      className: "svg-house-success",
      polyline: [
        [
          [5.958303622438358, -0.2550664430454668],
          [5.959429736326153, -0.26068722117400367],
          [6.06497862382193, -0.2532980066537567],
          [6.060267737376569, -0.24778060750360642],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_15</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>714м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    // 3
    {
      id: "house22_1",
      className: "svg-house-success",
      polyline: [
        [
          [5.958652539071287, -0.5495198861841848],
          [5.950731066598042, -0.4745579189750737],
          [5.800508033343815, -0.4724885840121349],
          [5.777704713515571, -0.5528794641883161],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_1</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_2",
      className: "svg-house-success",
      polyline: [
        [
          [5.813857922591117, -0.4238570658212004],
          [5.8015120856202085, -0.46888901480484213],
          [5.950776041225948, -0.47115848854814235],
          [5.945479433548613, -0.4219222434219714],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_2</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_3",
      className: "svg-house-success",
      polyline: [
        [
          [5.822636354240302, -0.39128016289843903],
          [5.814681214537273, -0.41980816160198176],
          [5.944775270397734, -0.41851147796684307],
          [5.942017591984884, -0.3874498356588929],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_3</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_4",
      className: "svg-house-success",
      polyline: [
        [
          [5.833444131432026, -0.365754208525765],
          [5.840388022512024, -0.3334222041147532],
          [5.934832534455459, -0.3299247540027428],
          [5.936788513612841, -0.3619633916341667],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_5",
      className: "svg-house-success",
      polyline: [
        [
          [5.846053057787534, -0.3110832963821213],
          [5.932495400875991, -0.30569785595161036],
          [5.934125783431361, -0.3268952860655674],
          [5.841867088914381, -0.33011350710228893],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_6",
      className: "svg-house-success",
      polyline: [
        [
          [5.850684444931918, -0.2924574457329985],
          [5.929593300585268, -0.28948766348121735],
          [5.931044842773781, -0.3035799462683],
          [5.847032062565757, -0.306951950885888],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_6</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_7",
      className: "svg-house-success",
      polyline: [
        [
          [4.681730295761097, -0.5929304641817592],
          [4.7906170515014885, -0.5958469942876143],
          [4.796951166076965, -0.7332029069202717],
          [4.657057405397122, -0.7329853570980989],
          [4.678730344022129, -0.5927080746870499],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_7</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>719м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_8",
      className: "svg-house-success",
      polyline: [
        [
          [4.79612316196393, -0.5954043840179635],
          [4.948445281181247, -0.5879757725666339],
          [4.987828367635753, -0.7183577332247868],
          [4.801856916971853, -0.732652129919436],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_8</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>719м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_9",
      className: "svg-house-success",
      polyline: [
        [
          [4.952076594332022, -0.5868710241845179],
          [5.181209807791573, -0.5565493291912356],
          [5.249968279042005, -0.6674956525806968],
          [4.992098926387841, -0.7171601928861264],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_9</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>719м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_10",
      className: "svg-house-success",
      polyline: [
        [
          [5.185741175808128, -0.5561009142783142],
          [5.32343676065506, -0.5216545761029838],
          [5.3982917511635, -0.6207078959651531],
          [5.254452947402436, -0.6657995800036827],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_10</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>884м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_11",
      className: "svg-house-success",
      polyline: [
        [
          [5.326668875438583, -0.5205934270573054],
          [5.4372044482010065, -0.4906883175664105],
          [5.49711528682237, -0.5885228168162291],
          [5.404706272305171, -0.6178316632073124],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_11</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>890м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_12",
      className: "svg-house-success",
      polyline: [
        [
          [5.444402240008005, -0.49058428303466295],
          [5.60299497554185, -0.4663698300255592],
          [5.618637800509439, -0.5636021489851615],
          [5.501086991749159, -0.5871190539912652],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_12</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>890м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_13",
      className: "svg-house-success",
      polyline: [
        [
          [5.607924635409303, -0.4659379456314241],
          [5.798336644260221, -0.45712551380894206],
          [5.771923262826273, -0.5527215823406149],
          [5.623864229971058, -0.5622494792877153],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_13</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>1036м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_14",
      className: "svg-house-success",
      polyline: [
        [
          [4.6787154227555074, -0.5905367978562741],
          [4.695176247339058, -0.4767902589988955],
          [4.785052634092173, -0.4727890616384718],
          [4.789372225830551, -0.5904692839370553],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_14</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>693м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_15",
      className: "svg-house-success",
      polyline: [
        [
          [4.793970940438691, -0.5903243991040865],
          [4.788265978985104, -0.4728153225542755],
          [4.903553232854123, -0.463364317531727],
          [4.932442088186132, -0.5843656516176212],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_15</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>693м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_16",
      className: "svg-house-success",
      polyline: [
        [
          [4.9086200911471245, -0.4633983406788751],
          [5.092816550054778, -0.44138753713408585],
          [5.145496570342503, -0.5562692344324329],
          [4.936546727620469, -0.5832897929544449],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_16</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>693м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_17",
      className: "svg-house-success",
      polyline: [
        [
          [5.096446265104845, -0.44102286534021395],
          [5.178098748017726, -0.42828506677497447],
          [5.241406326964117, -0.5362017889962409],
          [5.14801315836039, -0.5548487268638818],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_17</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>732м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_18",
      className: "svg-house-success",
      polyline: [
        [
          [5.1827170242337015, -0.42793365432065844],
          [5.260378565631704, -0.41588658304241966],
          [5.322743140411854, -0.5152966920220878],
          [5.2450914570857785, -0.5346040786793784],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_18</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_19",
      className: "svg-house-success",
      polyline: [
        [
          [5.26643713960471, -0.4148032477279777],
          [5.341720411141681, -0.40360303502147876],
          [5.3922648536773945, -0.49648325644956426],
          [5.327346159461989, -0.5129014040449835],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_19</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_20",
      className: "svg-house-success",
      polyline: [
        [
          [5.347061679007518, -0.40350588972378776],
          [5.431996366008944, -0.39518113060166904],
          [5.46201915269149, -0.481129498107836],
          [5.396229305856901, -0.4945029492420332],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_20</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_21",
      className: "svg-house-success",
      polyline: [
        [
          [5.435547418752947, -0.39540086297737864],
          [5.553150717268638, -0.39159909990173647],
          [5.564019784667693, -0.46760745303369156],
          [5.465450477116663, -0.4809735082218096],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_21</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_22",
      className: "svg-house-success",
      polyline: [
        [
          [5.5562149463719495, -0.39132218795515206],
          [5.66348945272631, -0.3928273933289461],
          [5.665513786790784, -0.4590696590782799],
          [5.567681631607961, -0.4675017388855798],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_22</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_23",
      className: "svg-house-success",
      polyline: [
        [
          [5.666830467076073, -0.39302642319705616],
          [5.750554635096636, -0.3935826569511045],
          [5.745011218546815, -0.4549123292453321],
          [5.669077633149575, -0.45827415764174084],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_23</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    {
      id: "house22_24",
      className: "svg-house-success",
      polyline: [
        [
          [5.754331432294344, -0.3939143241583922],
          [5.815762421522634, -0.391962861333383],
          [5.8012809052366245, -0.45172689237024466],
          [5.747553701897189, -0.4549659283388152],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house22_24</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>626м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
    // sport
    {
      id: "sport_area",
      polyline: [
        [
          [6.280909207371037, -0.5641527164907769],
          [2.451227017074026, -1.4685500675914755],
          [4.634689257944485, -0.7812809056059677],
          [5.49634143415169, -0.6387305988052221],
          [5.6596801785517155, -0.6106513324410168],
          [5.731885307140056, -0.5945910988832539],
          [5.798428629630119, -0.5975423185098547],
        ],
      ],
      svgStyle: {
        fill: "rgba(0, 255, 255, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: `
          <div class="house-tooltip house-tooltip_info">
            <h3>Сервисная зона</h3>
            <pre>house222_1</pre>
            <ul>
              <li><span>№1</span> <span>КПП</span></li>
              <li><span>№2</span> <span>Сцена</span>  </li>
              <li><span>№3</span> <span>Клубный дом</span>  </li>
              <li><span>№4</span> <span>Сервисная компания</span>  </li>
              <li><span>№5</span> <span>Зона барбекю</span>  </li>
              <li><span>№6</span> <span>Воркаут площадка</span>  </li>
              <li><span>№7</span> <span>Теннисный корт</span>  </li>
              <li><span>№8</span> <span>Волейбольная площадка</span>  </li>
              <li><span>№9</span> <span>Детская площадка</span>  </li>
              <li><span>№10</span> <span>Поле для мини футбола</span>  </li>
            </ul>
          </div>
        `,
        position: "top center",
        trigger: "hover",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    },
  ];

  window.virtualTour = virtualTour;

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
      markers: [...roadsPolygons, ...housesPolygons],
      gps: [-60, 0, 3],
      panoData: { poseHeading: 327 },
    },
    {
      id: "2",
      panorama: `${PATH}/scene1/DJI_0515.JPG`,
      name: "Перейти к локации №2",
      links: [
        { nodeId: "1", gps: [10, 35, 0] },
        {
          nodeId: "3",
          gps: [10, -5, -51],
        },
      ],
      markers: [
        {
          id: "roads_1_1",
          polyline: [
            [
              [6.108499141152673, -0.36541323582346696],
              [0.5012083703828106, -0.5397644683145879],
              [0.7799600190511602, -0.5060704350491481],
              [0.8703335249030142, -0.4406804517928964],
              [0.9171821603848179, -0.3278960067763661],
              [0.9419972602319073, -0.3267037541619513],
              [0.9020640672772324, -0.45831266592156883],
              [0.8155102975378544, -0.5231118016519378],
              [0.48628044388744424, -0.5651677884824942],
              [6.075483066611816, -0.37904895102346936],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_1_2",
          polyline: [
            [
              [0.4253704544600789, -0.5593200003035301],
              [4.145396194138964, -0.7936805212715341],
              [4.057579310958114, -0.8175447583574593],
              [0.48454315252328856, -0.5672580351165721],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_1_3",
          polyline: [
            [
              [0.2980041660487614, -0.24589106772529812],
              [2.0384814640636635, -0.17087498469885642],
              [2.028599776362813, -0.1603908236477487],
              [0.32554897006378675, -0.24187593177981292],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_1_4_1",
          polyline: [
            [
              [1.5751843754173172, -0.27599970364048043],
              [1.7899865787355185, -0.36037575719914083],
              [1.8660065835777802, -0.40396168331287763],
              [2.011180800960842, -0.4884397233061457],
              [2.227135541314909, -0.6467701298408608],
              [2.433802145894998, -0.8106581966674198],
              [2.489733093529924, -0.8476834458926388],
              [2.7198614909018013, -0.9756924337301212],
              [3.286818786317912, -1.1409325192803568],
              [3.7388091625717497, -1.1697908154084953],
              [4.233345310224327, -1.136654355807047],
              [4.328017968383123, -1.1239021934600548],
              [4.218561997834169, -1.0388371783691643],
              [3.734206129931978, -1.102917043994902],
              [3.1514984430150466, -1.052283009534042],
              [2.7585752784346167, -0.9281718191965247],
              [2.554457624521043, -0.8221125611822999],
              [2.32058801884798, -0.6540076680901099],
              [2.1944973142358104, -0.5625199024357523],
              [2.0661530922486566, -0.47534609905050207],
              [1.9417811724154013, -0.4015575422489548],
              [1.8210729581910543, -0.34385776008280944],
              [1.5965938176748915, -0.27434059923278853],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_1_5",
          polyline: [
            [
              [0.24734420494252257, -1.0062500288745388],
              [0.8947728794273667, -1.046145051826016],
              [1.3015096070372312, -0.7528259405611957],
              [1.3909400042979703, -0.6018846877168968],
              [1.3989534680005906, -0.49229775068259896],
              [1.3535881120153415, -0.4041985795562604],
              [1.2662146304794115, -0.3165833907126647],
              [1.2977034680181645, -0.3152398967217154],
              [1.3974927505659487, -0.4030021771153649],
              [1.4471280347773157, -0.4967072562231163],
              [1.4515027987620144, -0.6168530236168497],
              [1.2193530454563999, -0.9673364948278591],
              [0.9079829366501666, -1.1107151402325792],
              [0.20318032785072496, -1.066674333215298],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_1_1",
          className: "svg-house-success",
          polyline: [
            [
              [4.200474329988538, -1.0306929161052438],
              [4.04137974365673, -0.8118088369718213],
              [3.729638950728784, -0.8384574021722542],
              [3.7482962971112594, -1.0954752452627736],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_1_1</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>628м.кв</span></li>
              <li><span>Площадь дома:</span> <span>66,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_1_2",
          className: "svg-house-success",
          polyline: [
            [
              [3.7304610544102714, -1.0950059638384952],
              [3.713824666946474, -0.8371102180939243],
              [3.491675280457304, -0.8305999289482675],
              [3.3756256857876537, -1.076528389744341],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_1_2</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>601м.кв</span></li>
              <li><span>Площадь дома:</span> <span>66,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_1_3",
          className: "svg-house-success",
          polyline: [
            [
              [3.3631703814847946, -1.072740685536612],
              [3.474659896293754, -0.8288269901895884],
              [3.252831166696894, -0.7961514804845828],
              [3.0594659867482124, -1.0186371673706223],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_1_3</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>603м.кв</span></li>
              <li><span>Площадь дома:</span> <span>66,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_1_4",
          className: "svg-house-success",
          polyline: [
            [
              [3.0433449285996, -1.0168073138214688],
              [3.2373823506091624, -0.7921977055144636],
              [3.0284568982127547, -0.7439991622750717],
              [2.805327441235873, -0.940691317309513],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_1_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>607м.кв</span></li>
              <li><span>Площадь дома:</span> <span>66,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_1_5",
          className: "svg-house-success",
          polyline: [
            [
              [2.798452108996347, -0.9336403221040497],
              [3.015545739191634, -0.7429562770753746],
              [2.7988369930520176, -0.6637324057417477],
              [2.565882206079413, -0.817760008952678],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_1_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>645м.кв</span></li>
              <li><span>Площадь дома:</span> <span>66,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_1",
          className: "svg-house-success",
          polyline: [
            [
              [4.461151817948576, -0.6803009004740739],
              [4.562634189299828, -0.7314348982032426],
              [4.230700287742333, -0.8750363592736883],
              [4.157356182013183, -0.7905474731325635],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_1</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>714м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_2",
          className: "svg-house-success",
          polyline: [
            [
              [4.5710679139327635, -0.7327234317992377],
              [4.6912447461127815, -0.7811946564542032],
              [4.332687179711657, -0.96715446601105],
              [4.234223634874964, -0.8765919983186277],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_2</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>677м.кв</span></li>
              <li><span>Площадь дома:</span> <span>119,83м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_3",
          className: "svg-house-success",
          polyline: [
            [
              [4.698009807633658, -0.782591572301949],
              [4.867740103516205, -0.8326341809746469],
              [4.515755231369043, -1.0767764901746877],
              [4.33987663482241, -0.9714931201554711],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_3</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>669м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_4",
          className: "svg-house-success",
          polyline: [
            [
              [4.876032247555859, -0.8335623752751982],
              [5.092856945470888, -0.8692097489681441],
              [4.848125538556377, -1.1814703341829293],
              [4.5274045802837435, -1.0811142600218528],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>975м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_5",
          className: "svg-house-success",
          polyline: [
            [
              [5.103547963411456, -0.8673699185184245],
              [5.373278093407874, -0.8723889971191543],
              [5.385238292869725, -1.2255418646518335],
              [4.857964547276702, -1.1793076838113499],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>705м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_6",
          className: "svg-house-success",
          polyline: [
            [
              [5.385932528641052, -0.8732320339902437],
              [5.649241530332647, -0.8426108245957984],
              [5.954490110827835, -1.159796174009771],
              [5.41069404440326, -1.2223724141299708],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_6</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>763м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_7",
          className: "svg-house-success",
          polyline: [
            [
              [5.658333166339524, -0.8419757470630165],
              [5.8676915858315635, -0.793433946574615],
              [6.265959941373554, -1.0380758247112158],
              [5.964437987082133, -1.153602662397244],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_7</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>772м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_8",
          className: "svg-house-success",
          polyline: [
            [
              [5.875603021028533, -0.7860256104765657],
              [6.056975290420553, -0.7185222686578849],
              [0.17227155409921782, -0.8988604633354886],
              [6.275257197527352, -1.0292001509205408],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_8</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>760м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_9",
          className: "svg-house-success",
          polyline: [
            [
              [6.066358980445841, -0.713764228459258],
              [6.174067912464403, -0.6563633410031819],
              [0.2788343149254503, -0.7881449255790027],
              [0.17531769700961145, -0.894163259354456],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_9</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>778м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_10",
          className: "svg-house-success",
          polyline: [
            [
              [6.189802685822078, -0.6559358221101643],
              [6.272523304052887, -0.6033848827418131],
              [0.3407564268768871, -0.7072438321680847],
              [0.2828769228076324, -0.7819954850754138],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_10</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>628м.кв</span></li>
              <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_11",
          className: "svg-house-success",
          polyline: [
            [
              [6.278524238477741, -0.5989416477354554],
              [0.018555346723551223, -0.5796487928540239],
              [0.09244775499800144, -0.5571492803732703],
              [0.37873341995074206, -0.6316163080036192],
              [0.3429461494932317, -0.7000224624358817],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_11</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>793м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_3_12",
          className: "svg-house-success",
          polyline: [
            [
              [0.10298656390456147, -0.5550097052613281],
              [0.17921109524222503, -0.5269238589129435],
              [0.4136338464312093, -0.5688920564435285],
              [0.37948811420759165, -0.6284794726427707],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_3_12</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>712м.кв</span></li>
              <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_2",
          className: "svg-house-success",
          polyline: [
            [
              [0.39032835677264427, -0.800336018541342],
              [0.4607053260252117, -0.6627483718873393],
              [0.7790590907020039, -0.6755417828153467],
              [0.8150003743198815, -0.826924650075139],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_2</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_3",
          className: "svg-house-success",
          polyline: [
            [
              [0.2595086467022178, -0.997689240271832],
              [0.38763941859452555, -0.8088351641861502],
              [0.8179407441833101, -0.8322387634054929],
              [0.8793762999626422, -1.037416099369585],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_3</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_4",
          className: "svg-house-success",
          polyline: [
            [
              [0.19858613444861192, -1.0712411287806063],
              [0.9157411480923796, -1.1161037601284636],
              [1.1822518336156769, -1.3189388087420721],
              [6.161714139845359, -1.2386431043928758],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_5",
          className: "svg-house-success",
          polyline: [
            [
              [6.133237701318044, -1.2462517718493147],
              [1.2003715530617622, -1.3305155604035956],
              [2.951143058925819, -1.3971423232164142],
              [5.028553446784988, -1.322384817193262],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_6",
          className: "svg-house-success",
          polyline: [
            [
              [4.982287611813473, -1.3192242850391214],
              [3.0110379881428373, -1.3885788311638092],
              [3.465661913742142, -1.1738704500165364],
              [4.347352621953425, -1.149423309952557],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_6</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_4_1",
          className: "svg-house-success",
          polyline: [
            [
              [0.46408490668959257, -0.6553884305859965],
              [0.4924610777868787, -0.5697041359053898],
              [0.7527976456040036, -0.535935730080566],
              [0.7739328272205949, -0.6681765599693872],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_4_1</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>600м.кв</span></li>
              <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "hide_zone_1_1",
          className: "svg-hide-zone",
          polyline: [
            [
              [0.756488797294551, -0.5365499678687833],
              [0.8164157501962941, -0.5246530385233239],
              [0.9047618861604622, -0.457062037333849],
              [0.9455501710691114, -0.32265163127256247],
              [1.2610386257000148, -0.313564334468895],
              [1.3523697018561673, -0.40580009692261854],
              [1.3972651496332513, -0.491876107650143],
              [1.3879755193970258, -0.6017728318137334],
              [0.8907202665431457, -1.0393155630128645],
            ],
          ],
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "hide_zone_1_2",
          className: "svg-hide-zone",
          polyline: [
            [0.9186148659801653, -0.32124560255218926],
            [0.6004605105081943, -0.2970369299808939],
            [0.25718076743841506, -0.4981593212585196],
            [0.49551395921955876, -0.5364374494638859],
            [0.7783031118132557, -0.5048183672594764],
            [0.8661926794810286, -0.4408193538079561],
          ],
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "hide_zone_1_3",
          className: "svg-hide-zone",
          polyline: [
            [
              [1.6025263381775623, -0.2728015628780487],
              [2.04339330942656, -0.1719656480527485],
              [2.794129946495398, -0.6616025211184811],
              [2.5567669099352566, -0.8202330786942569],
              [2.323472372096691, -0.6449675860651993],
              [2.089489208479606, -0.486014199405004],
              [1.9464017752185359, -0.4007416543956537],
              [1.824654687704302, -0.3398041481375267],
              [1.6093898191334879, -0.27652765368210286],
            ],
          ],
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "hide_zone_1_4",
          className: "svg-hide-zone",
          polyline: [
            [
              [1.4553113608852801, -0.54518577676853],
              [1.4500505026373323, -0.49469942698060887],
              [1.3991449205557727, -0.39831289552415217],
              [1.2967218063366643, -0.31134310348341643],
              [1.5714822955114773, -0.2765104403859402],
              [1.789733058070769, -0.3625047339738534],
              [2.0098994401998826, -0.48977561572327266],
              [2.0613158767202675, -0.5344985419250778],
            ],
          ],
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_1",
          className: "svg-hide-zone",
          polyline: [
            [
              [1.6797614991528511, -1.4095100011551094],
              [1.9215433159121191, -1.240013698704992],
              [1.1251753972138885, -1.0296462418529977],
              [0.9273922361836212, -1.1110487675284806],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_1</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>875м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_2",
          className: "svg-house-success",
          polyline: [
            [
              [1.9228210002072945, -1.2330841792176725],
              [1.9421178371451642, -1.1382240050181869],
              [1.9261523077988496, -1.047685566342437],
              [1.2714276961423674, -0.9375294610920157],
              [1.1343308610479033, -1.026613407742616],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_2</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>791м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_3",
          className: "svg-house-success",
          polyline: [
            [
              [1.9243050561480481, -1.0426417752375632],
              [1.889599396057479, -0.9005647966505057],
              [1.3589765373932963, -0.8189603407790251],
              [1.2763827141215935, -0.9342459324282508],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_3</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>791м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_4",
          className: "svg-house-success",
          polyline: [
            [
              [1.8874880535180287, -0.8946229475778069],
              [1.8567989037112955, -0.7741429447945674],
              [1.4122616885500825, -0.7238968499613154],
              [1.362112184024977, -0.8145076587430218],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_4</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>791м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_5",
          className: "svg-house-success",
          polyline: [
            [
              [1.8542983560356616, -0.7703880715304896],
              [1.8029354268928284, -0.6501642060884159],
              [1.4565642445248286, -0.628280970334119],
              [1.4126019654044368, -0.7216088326739722],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_5</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>791м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_6",
          className: "svg-house-success",
          polyline: [
            [
              [1.799766124851252, -0.6456782667583676],
              [1.769267585771638, -0.5623898526943059],
              [1.4630228369769402, -0.547165755979456],
              [1.4578827344176295, -0.6253918340782172],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_6</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>793м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_7",
          className: "svg-house-success",
          polyline: [
            [
              [1.7747476348991964, -0.5629535449241443],
              [2.0641767812735394, -0.5368611259777318],
              [2.13692543248387, -0.5946823165500725],
              [1.800801652611312, -0.6315955635150985],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_7</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>758м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_8",
          className: "svg-house-success",
          polyline: [
            [
              [1.8028229943147982, -0.6360599663969304],
              [1.831601555757843, -0.7010010420352821],
              [2.226182216895122, -0.6561070854772542],
              [2.1411117817619303, -0.5985775401989715],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_8</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>758м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_9",
          className: "svg-house-success",
          polyline: [
            [
              [1.8362708410956265, -0.7060304766375411],
              [1.8729210223679198, -0.7987865645923242],
              [2.3287088335513593, -0.7468703741596303],
              [2.2298250873877263, -0.6592169424615744],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_9</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>756м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_10",
          className: "svg-house-success",
          polyline: [
            [
              [1.8734812326527595, -0.8038958813430632],
              [1.902373750003691, -0.9104868509641455],
              [2.4561691198421336, -0.8365838997422363],
              [2.332651400819843, -0.7495874120033545],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_10</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>759м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_11",
          className: "svg-house-success",
          polyline: [
            [
              [1.9044254032287078, -0.9142372840907522],
              [1.9367699324673697, -1.0548172100841784],
              [2.617260915917756, -0.9359255664033173],
              [2.4590074555608457, -0.8395171866708395],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_11</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>758м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_12",
          className: "svg-house-success",
          polyline: [
            [
              [1.9382910132392168, -1.059479650174663],
              [1.9542605467829322, -1.1375995445255938],
              [1.9452563368353044, -1.1846022561091725],
              [2.853265305748325, -1.0497152918890604],
              [2.619915663967989, -0.939054390501151],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_12</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>758м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_13",
          className: "svg-house-success",
          polyline: [
            [
              [1.9531888106817075, -1.1882580878724105],
              [1.8825213620904964, -1.3201267280367857],
              [3.1549871131442053, -1.1389354711474509],
              [2.859064997441398, -1.0522575419882756],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_13</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>758м.кв</span></li>
              <li><span>Площадь дома:</span> <span>86,2м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_1_5_14",
          className: "svg-house-success",
          polyline: [
            [
              [1.8686198752681507, -1.3253848490866091],
              [1.7049266266770753, -1.4119575763490206],
              [3.4209601522143047, -1.1814851993478066],
              [3.1609571151501425, -1.1414447545175452],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content: `
          <div class="house-tooltip house-tooltip_success">
            <h3>В продаже</h3>
            <pre>house_1_5_14</pre>
            <ul>
              <li><span>Площадь участка:</span> <span>699м.кв</span></li>
              <li><span>Площадь дома:</span> <span>82,55м.кв</span>  </li>
            </ul>
          </div>
        `,
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
      ],
      gps: [-80, 25, 30],
      panoData: { poseHeading: 400 },
    },
    {
      id: "3",
      panorama: `${PATH}/scene1/DJI_0517.JPG`,
      name: "Перейти к локации №3",
      links: [
        { nodeId: "1", gps: [-60, 35, -30] },
        { nodeId: "2", gps: [-60, 65, -30] },
      ],
      markers: [
        {
          id: "roads_3_11_1",
          polyline: [
            [
              [5.967121179784465, -0.5460204242450111],
              [5.806842399335095, -0.6452012697998692],
              [5.677493388181039, -0.7449097690367257],
              [5.421286263639697, -0.9046112611108481],
              [5.199398735511106, -1.0078792510422425],
              [4.799662100327442, -1.1098043123264043],
              [3.735539706098565, -1.0865730594323075],
              [3.3401944505714045, -0.9417235983298973],
              [2.970165579466258, -0.6715294741118916],
              [2.9040605363975964, -0.5994179781682929],
              [2.978971145851593, -0.5838427242089921],
              [3.415373294106061, -0.8931596218424445],
              [4.005232754439858, -1.0575694142212253],
              [4.742721106909796, -1.0381095227993113],
              [5.508194586993865, -0.7871035322097515],
              [5.688204389706691, -0.6597199654817834],
              [5.768225619768774, -0.6134732530294991],
              [5.9171136625610306, -0.5265745067144705],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_3_12_1",
          polyline: [
            [
              [0.337210606009227, -0.4476507903790652],
              [0.2266756526016283, -0.6119401671423832],
              [0.20808525701992556, -0.679644879947416],
              [0.4362409412920173, -0.9202940157062769],
              [0.8410382523710505, -1.0613137307363214],
              [1.7248600492206578, -1.0539116654930507],
              [2.0523332863129458, -0.8260686382273015],
              [2.1173774290376652, -0.6051139747959837],
              [2.0488361076634605, -0.5937599102982154],
              [1.949499097221282, -0.7995718799660221],
              [1.6243996686681992, -0.9715106669342446],
              [0.8905294932140925, -1.0000284759445246],
              [0.5553762334956169, -0.8463843894495535],
              [0.33407592353455573, -0.6680653222557229],
              [0.32318309505367676, -0.5912023908942179],
              [0.3859906559208061, -0.45086032644932494],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_3_13_1",
          className: "svg-hide-zone",
          polyline: [
            [
              [2.0487106365416654, -0.595209035929674],
              [1.26202572288511, -0.24362699206095573],
              [0.0725968419700936, -0.2518234607204053],
              [5.794431739019597, -0.4578679552853857],
              [5.967695648343652, -0.5475300140792103],
              [6.261212260125571, -0.3999082235416025],
              [0.3859939831895642, -0.45792643490081497],
              [0.3242417850373942, -0.5910294730512953],
              [0.3367485363183368, -0.6671918500390976],
              [0.8943089326626593, -0.9966875721392552],
              [1.6147322093731165, -0.972781364065519],
              [1.944926229455145, -0.8037807355137998],
              [2.0307595209716105, -0.6363622189182148],
            ],
          ],
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_3_14_1",
          polyline: [
            [
              [1.26412748680466, -0.24512807490452282],
              [2.971066287489555, -0.5853248081116598],
              [3.780298810288894, -0.2342256106761731],
              [3.7668134150083636, -0.22880081493077986],
              [2.115212833825682, -0.5744154958815102],
              [1.3036882902121105, -0.2392717076013844],
            ],
          ],
          svgStyle: {
            fill: "rgba(125, 125, 125, 0.5)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "1px",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_1",
          className: "svg-house-success",
          polyline: [
            [
              [6.037130242827685, -1.0141102756330724],
              [6.038963115048186, -1.218683560522018],
              [0.7808166434075519, -1.0503880977398232],
              [0.48547770210333263, -0.9372766002664017],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_1</pre>   <ul>     <li><span>Площадь участка:</span> <span>832м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_2",
          className: "svg-house-success",
          polyline: [
            [
              [6.039115244562125, -1.2222355025531009],
              [6.141811991372241, -1.4521093204226792],
              [1.12764290230075, -1.0985960119968854],
              [0.7912367181197313, -1.0538620555711637],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>804м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_3",
          className: "svg-house-success",
          polyline: [
            [1.1351511604802675, -1.0994895739997466],
            [1.4648125766799325, -1.0928038862489649],
            [2.4735285647756844, -1.453126604544849],
            [6.160797077968896, -1.4546740486600487],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_3</pre>   <ul>     <li><span>Площадь участка:</span> <span>803м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_4",
          className: "svg-house-success",
          polyline: [
            [
              [2.4799218037920157, -1.4505059491004557],
              [2.6230986514451207, -1.2694043457527178],
              [1.7224530271251957, -1.0548247830023603],
              [1.472556846430559, -1.092754288244922],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_4</pre>   <ul>     <li><span>Площадь участка:</span> <span>775м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_5",
          className: "svg-house-success",
          polyline: [
            [
              [1.7290090754140741, -1.0516750366052428],
              [1.9270731540281518, -0.9385108553571766],
              [2.625410111929713, -1.0697492919212443],
              [2.6222268452277513, -1.2651363623079401],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_5</pre>   <ul>     <li><span>Площадь участка:</span> <span>723м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>101,63м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_6",
          className: "svg-house-success",
          polyline: [
            [
              [2.6253172697419496, -1.064886872936969],
              [2.5852591046085567, -0.7417343682463549],
              [2.1518628241152675, -0.7125584065578887],
              [1.932962243686679, -0.9352576316108667],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_6</pre>   <ul>     <li><span>Площадь участка:</span> <span>708м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_8",
          className: "svg-house-success",
          polyline: [
            [
              [2.0956198610520707, -0.6895045133199327],
              [2.115801690987827, -0.6100918753165923],
              [2.4206888181474233, -0.6419716274309941],
              [2.4014985549240664, -0.7350538815888759],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_8</pre>   <ul>     <li><span>Площадь участка:</span> <span>618м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123.62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_9",
          className: "svg-house-success",
          polyline: [
            [
              [2.4069375103779342, -0.73408356026051],
              [2.42487611524876, -0.6417288592116153],
              [2.6713035211060734, -0.6353050426371265],
              [2.6995821488460723, -0.733824913403625],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_9</pre>   <ul>     <li><span>Площадь участка:</span> <span>618м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121.5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_10",
          className: "svg-house-success",
          polyline: [
            [
              [2.702767499277309, -0.7321911269969656],
              [2.6739146195343935, -0.635964887041184],
              [2.9058116373909013, -0.6031141480253148],
              [2.9813714056897367, -0.6881451555649543],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_10</pre>   <ul>     <li><span>Площадь участка:</span> <span>618м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123.62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_11",
          className: "svg-house-success",
          polyline: [
            [
              [2.6174321888287206, -0.8919851886655175],
              [2.5876251623328503, -0.7429226787544447],
              [2.9852300635301234, -0.6919093917393697],
              [3.1209053738308947, -0.8149609605604131],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_11</pre>   <ul>     <li><span>Площадь участка:</span> <span>716м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104.5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_12",
          className: "svg-house-success",
          polyline: [
            [
              [2.6321166257685222, -1.0649861212822564],
              [2.6232849522525123, -0.8958231463091586],
              [3.1274791121673164, -0.8187924423487485],
              [3.3517393712189945, -0.950824183652557],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_12</pre>   <ul>     <li><span>Площадь участка:</span> <span>731м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>101.63м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_13",
          className: "svg-house-success",
          polyline: [
            [
              [3.357252224525288, -0.9550832873204191],
              [2.632639973690567, -1.0692023918089868],
              [2.6340842654438434, -1.26553174073211],
              [3.6760549856631655, -1.0737448573896455],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_13</pre>   <ul>     <li><span>Площадь участка:</span> <span>769м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104.5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_14",
          className: "svg-house-success",
          polyline: [
            [
              [3.6825799092207294, -1.0763584643549424],
              [2.632759159339131, -1.2693375731828374],
              [2.4989251329629436, -1.4528900566648688],
              [4.140858715825024, -1.1424295126975204],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_14</pre>   <ul>     <li><span>Площадь участка:</span> <span>787м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>101.63м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_15",
          className: "svg-house-success",
          polyline: [
            [
              [4.149224173324686, -1.1426884626385254],
              [2.492815328983585, -1.457442607652109],
              [6.096900966861127, -1.4424198131991468],
              [4.781879499201267, -1.1122890112655717],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_15</pre>   <ul>     <li><span>Площадь участка:</span> <span>787м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104.5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_16",
          className: "svg-house-success",
          polyline: [
            [
              [4.790601813068692, -1.1104525770457188],
              [6.095599153813092, -1.4385298927125274],
              [6.0295046717284215, -1.2010204988401103],
              [5.246429609073871, -0.9931434996710649],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_16</pre>   <ul>     <li><span>Площадь участка:</span> <span>787м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>101.63м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_2_1_17",
          className: "svg-house-success",
          polyline: [
            [5.251048341533908, -0.9903583679761865],
            [6.02744709685719, -1.1983527302446197],
            [6.030743650441349, -1.0130041957538567],
            [5.457711928515239, -0.8793246112447717],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_2_1_17</pre>   <ul>     <li><span>Площадь участка:</span> <span>766м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104.5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "roads_3_15_1",
          className: "svg-hide-zone",
          polyline: [
            [
              [6.269756588521753, -0.401252880835983],
              [0.33210234874638933, -0.4541432532348142],
              [0.22504588427654473, -0.6175266467522116],
              [0.20667737246283513, -0.6799955868099112],
              [0.2644225334261629, -0.7546842977399928],
              [0.4708797556869278, -0.9419211463662109],
              [5.470087626377931, -0.8797129207158312],
              [5.672501530714058, -0.7484897942294633],
              [5.801750141149192, -0.64992398332015],
              [5.965161606658844, -0.5501003667949993],
              [6.141493780646111, -0.464551649328969],
              [6.258326989675964, -0.3988262215606935],
            ],
          ],
          svgStyle: {
            fill: "rgba(255, 255, 255, 0.3)",
            stroke: "rgba(255, 255, 255, 0.3)",
            strokeWidth: "2px",
          },
          tooltip: {
            content: `
              <div class="house-tooltip house-tooltip_info">
                <h3>Перейдите на другую локацию</h3>
              </div>
            `,
            position: "top center",
            trigger: "hover",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_1",
          className: "svg-house-success",
          polyline: [
            [5.920643645190917, -0.5262681913873508],
            [5.7948506377187075, -0.45884864161233807],
            [5.7135413907856165, -0.4770477922363612],
            [5.856767816145998, -0.5592776249792983],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_1</pre>   <ul>     <li><span>Площадь участка:</span> <span>625м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_2",
          className: "svg-house-success",
          polyline: [
            [
              [5.801200783166218, -0.591485954163347],
              [5.855288983380431, -0.5611222750660829],
              [5.709854924694196, -0.4775460196221646],
              [5.641847235451636, -0.49390740240402264],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>942м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_3",
          className: "svg-house-success",
          polyline: [
            [
              [5.478771477954003, -0.5224077352397165],
              [5.638453693889038, -0.49451701313447316],
              [5.799126597096572, -0.5938806172935922],
              [5.689965766776326, -0.6595212444857328],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_3</pre>   <ul>     <li><span>Площадь участка:</span> <span>1398м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_4",
          className: "svg-house-success",
          polyline: [
            [
              [5.571619964936538, -0.7426837440996814],
              [5.686970571432507, -0.6610679718127965],
              [5.475871095819586, -0.5221017542457957],
              [5.235285013415665, -0.5499851459956959],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_4</pre>   <ul>     <li><span>Площадь участка:</span> <span>1571м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_5",
          className: "svg-house-success",
          polyline: [
            [
              [5.055088809384171, -0.5538964679088272],
              [5.226945119105557, -0.5496481177423389],
              [5.336724203706588, -0.6248782212692685],
              [5.194342251165589, -0.677803289056381],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_5</pre>   <ul>     <li><span>Площадь участка:</span> <span>978м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123,62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_3_1_6",
          className: "svg-house-success",
          polyline: [
            [
              [5.19907478877736, -0.680956524929754],
              [5.34088002118655, -0.6288599864410243],
              [5.568764982691627, -0.7440785619330175],
              [5.429827932331873, -0.8253686603350974],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_3_1_6</pre>   <ul>     <li><span>Площадь участка:</span> <span>1050м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123,62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_1",
          className: "svg-house-success",
          polyline: [
            [
              [4.98715294979633, -0.7470449830586459],
              [5.206576980747657, -0.9322929573786478],
              [5.426314610639284, -0.8272139963220777],
              [5.1938920417245695, -0.6848006545382725],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_1</pre>   <ul>     <li><span>Площадь участка:</span> <span>918м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_2",
          className: "svg-house-success",
          polyline: [
            [
              [4.9800281337650585, -0.749411408711449],
              [5.2016200882197685, -0.9366848946056736],
              [4.738082516432247, -1.037816221023597],
              [4.63102174160457, -0.8182127425842927],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>899м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_3",
          className: "svg-house-success",
          polyline: [
            [
              [4.619747931092817, -0.8171623094355054],
              [4.313999142199705, -0.8272080192545395],
              [4.268908710718192, -1.0724017677937385],
              [4.730911862405259, -1.0400116408564375],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_3</pre>   <ul>     <li><span>Площадь участка:</span> <span>899м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_4",
          className: "svg-house-success",
          polyline: [
            [
              [4.262031066076924, -1.072525014499568],
              [3.7689511581511486, -1.0090621090201046],
              [3.9815691236501083, -0.7963786700597408],
              [4.30805358957532, -0.8267665347848805],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_4</pre>   <ul>     <li><span>Площадь участка:</span> <span>900м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_5",
          className: "svg-house-success",
          polyline: [
            [
              [3.97847476625248, -0.7932480227349794],
              [3.6795621785977053, -0.7238096568507499],
              [3.4189568313031984, -0.8930207075216847],
              [3.766130073386736, -1.007932131335128],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_5</pre>   <ul>     <li><span>Площадь участка:</span> <span>899м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_6",
          className: "svg-house-success",
          polyline: [
            [
              [3.4145086350038607, -0.8919068801280154],
              [3.1795400317738594, -0.7596387781551157],
              [3.450926446443304, -0.6388435069437794],
              [3.6745815034057836, -0.7209603820981423],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_6</pre>   <ul>     <li><span>Площадь участка:</span> <span>841м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_7",
          className: "svg-house-success",
          polyline: [
            [
              [3.1743834927223773, -0.7556562165030907],
              [3.4451774339655574, -0.6368793410457205],
              [3.3203671527045957, -0.573167327675359],
              [3.0566271311356052, -0.6609180119976807],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_7</pre>   <ul>     <li><span>Площадь участка:</span> <span>844м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_8",
          className: "svg-house-success",
          polyline: [
            [
              [3.0554502539893593, -0.6573091619825302],
              [3.2056371598017916, -0.6128386090497164],
              [3.117600706783275, -0.55180017930831],
              [2.9824217736408425, -0.5853671972079755],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_8</pre>   <ul>     <li><span>Площадь участка:</span> <span>653м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123,62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_9",
          className: "svg-house-success",
          polyline: [
            [
              [3.121418472358835, -0.5504430908798255],
              [3.3169587337645976, -0.4828796150834025],
              [3.416318265140894, -0.5266527071321758],
              [3.210677147510416, -0.6114562716710852],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_9</pre>   <ul>     <li><span>Площадь участка:</span> <span>653м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_10",
          className: "svg-house-success",
          polyline: [
            [
              [3.419502240395577, -0.524068054993065],
              [3.5721368154214943, -0.4471449999735655],
              [3.4614077574886575, -0.4197347206278401],
              [3.321673926108341, -0.48193593788305655],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_10</pre>   <ul>     <li><span>Площадь участка:</span> <span>653м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>123,62м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_11",
          className: "svg-house-success",
          polyline: [
            [
              [3.3251300005134983, -0.5723979974406026],
              [3.5771562679495785, -0.4480004639616557],
              [3.696409869283182, -0.468600724119558],
              [3.449477672641487, -0.6344266905603999],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_11</pre>   <ul>     <li><span>Площадь участка:</span> <span>770м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_12",
          className: "svg-house-success",
          polyline: [
            [
              [3.45598980327254, -0.6371454679697601],
              [3.6994132699972955, -0.46958219389419886],
              [3.8899753349785846, -0.5028154268636342],
              [3.6773122748503324, -0.7173199592631168],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_12</pre>   <ul>     <li><span>Площадь участка:</span> <span>771м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_13",
          className: "svg-house-success",
          polyline: [
            [
              [3.6838727445215644, -0.7197145326726266],
              [3.8946312611947627, -0.5053709010425855],
              [4.070164748510191, -0.5363765657836344],
              [3.9553730833364966, -0.7876363495815442],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_13</pre>   <ul>     <li><span>Площадь участка:</span> <span>735м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_14",
          className: "svg-house-success",
          polyline: [
            [
              [3.9607038326913147, -0.7880545855350238],
              [4.0745125324064, -0.5378533275575119],
              [4.2595770864577664, -0.5579591800193815],
              [4.222595482955004, -0.8201508169559344],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_14</pre>   <ul>     <li><span>Площадь участка:</span> <span>801м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_15",
          className: "svg-house-success",
          polyline: [
            [
              [4.230756474470809, -0.8192433538559474],
              [4.264162000154992, -0.5575577258049429],
              [4.43366958604141, -0.563997316692435],
              [4.473050295026876, -0.8192309685234891],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_15</pre>   <ul>     <li><span>Площадь участка:</span> <span>801м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_16",
          className: "svg-house-success",
          polyline: [
            [
              [4.479908526061712, -0.8231051779609069],
              [4.440354601341755, -0.5671580667938585],
              [4.583492896859391, -0.5808557161463632],
              [4.6937484289480835, -0.8073143975907642],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_16</pre>   <ul>     <li><span>Площадь участка:</span> <span>804м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_17",
          className: "svg-house-success",
          polyline: [
            [
              [4.699003014074409, -0.8068444559997374],
              [4.5898418578742435, -0.5830317910924401],
              [4.75739414431067, -0.5851336495924326],
              [4.889414323934761, -0.7705142579726951],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_17</pre>   <ul>     <li><span>Площадь участка:</span> <span>736м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_18",
          className: "svg-house-success",
          polyline: [
            [
              [4.894538200087154, -0.7690978823636065],
              [4.764053988714085, -0.5858053715818556],
              [4.925855102474626, -0.5748231423722583],
              [5.053173385853601, -0.7269742427319823],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_18</pre>   <ul>     <li><span>Площадь участка:</span> <span>736м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_1_19",
          className: "svg-house-success",
          polyline: [
            [
              [5.0554565819024955, -0.7258217308240398],
              [4.932471422422518, -0.5765130350598091],
              [5.053291520626183, -0.5574323941131345],
              [5.190506257888322, -0.6824102243355168],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_1_18</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>104,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_1",
          className: "svg-house-success",
          polyline: [
            [
              [1.9550297590340038, -0.5335925188924437],
              [2.093881524412534, -0.43954714260138283],
              [2.171381470143351, -0.4514185911767066],
              [2.0530142402617058, -0.5572317015470687],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_1</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_2",
          className: "svg-house-success",
          polyline: [
            [
              [2.057341966817061, -0.5588926990426248],
              [2.176130035324182, -0.4515835864313673],
              [2.269104370319988, -0.46310292342118764],
              [2.163139876298713, -0.5800676382800676],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_3",
          className: "svg-house-success",
          polyline: [
            [
              [2.1693588911925965, -0.5806919282196854],
              [2.274034179047726, -0.4642224107114643],
              [2.393970999959534, -0.47250863639893703],
              [2.320243320459623, -0.6007112931313898],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_4",
          className: "svg-house-success",
          polyline: [
            [
              [2.3248152695634037, -0.6026056150384376],
              [2.3996065976344028, -0.47288212147241815],
              [2.525530224567488, -0.4755876902784615],
              [2.482758892190374, -0.6098130358040645],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>121,5м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_5",
          className: "svg-house-success",
          polyline: [
            [
              [2.485642617392384, -0.6114422893778881],
              [2.528583861618137, -0.4749864000962849],
              [2.6428310195777485, -0.47329644571805973],
              [2.6228637617909913, -0.6109996220523133],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>119,83м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_6",
          className: "svg-house-success",
          polyline: [
            [
              [2.6271524337230248, -0.6104631213801053],
              [2.6465682448658563, -0.4733270975601753],
              [2.748264113933402, -0.4675606717184322],
              [2.7492889702332435, -0.6017774672248124],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
        {
          id: "house_3_4_2_7",
          className: "svg-house-success",
          polyline: [
            [
              [2.751768487744358, -0.6016447652742483],
              [2.7528801155559433, -0.46743813016803815],
              [2.8655661317627827, -0.45593861161977367],
              [2.8961467074338993, -0.5826819331348871],
            ],
          ],
          svgStyle: {
            fill: "rgba(0, 255, 0, 0.20)",
            stroke: "rgba(255, 255, 255, 0.5)",
            strokeWidth: "1px",
          },
          tooltip: {
            content:
              ' <div class="house-tooltip house-tooltip_success">   <h3>В продаже</h3>   <pre>house_3_4_2_2</pre>   <ul>     <li><span>Площадь участка:</span> <span>720м.кв</span>  </li>     <li><span>Площадь дома:</span> <span>146,6м.кв</span>  </li>  </li>   </ul> </div>',
            position: "top center",
            trigger: "click",
          },
          position: { pitch: -0.1, yaw: -0.05 },
        },
      ],
      gps: [-80, 25, 30],
      panoData: { poseHeading: 400 },
    },
  ]);
  autorotate.start();
}

window.initConstructor = (
  idPrefixMarker,
  squareHouse = 0,
  squareArea = 0,
  isSale = false // в продаже?
) => {
  let isAddFigure = false;
  let figureCoords = [];
  let houseId = 2;
  const idKeysCount = {};
  const idAdded = [];
  /* создать фуникцию которая создаёт объект полигона и добавляет его */
  const addMarker = (coords) => {
    const key = `${idPrefixMarker}_${houseId}`;
    if (!idKeysCount[key]) idKeysCount[key] = 1;
    const id = `${idPrefixMarker}_${idKeysCount[key]}`;

    virtualTour.markers.addMarker({
      id: id,
      className: "svg-house-success",
      polyline: [coords],
      svgStyle: {
        fill: "rgba(0, 255, 0, 0.20)",
        stroke: "rgba(255, 255, 255, 0.5)",
        strokeWidth: "1px",
      },
      tooltip: {
        content: isSale
          ? createHouseTooltipInSale(squareHouse, squareArea, id)
          : createHouseTooltipUnsuccess(squareHouse, squareArea, id),
        position: "top center",
        trigger: "click",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    });
    idKeysCount[key]++;
    idAdded.push(id);
  };

  const getMarkersJson = () => {
    return JSON.stringify(
      Object.entries(virtualTour.markers.markers)
        .filter(([key, value]) => idAdded.includes(key))
        .map(([_, { id, config }]) => {
          const { polyline, svgStyle, tooltip, position } = config;
          return {
            id,
            polyline,
            svgStyle,
            tooltip,
            position,
          };
        })
    );
  };

  window.getMarkersJson = getMarkersJson;
  window.viewer = viewer;
  window.addEventListener("keydown", (e) => (isAddFigure = e.ctrlKey));
  window.addEventListener("keyup", (e) => (isAddFigure = e.ctrlKey));

  viewer.addEventListener("click", (e) => {
    figureCoords.push([e.data.yaw, e.data.pitch]);
    if (!isAddFigure) return;
    addMarker(figureCoords);
    figureCoords = [];
  });
};
// window.keyUpdated = "house_2_1_6";
// viewer.addEventListener("click", (e) => {
//   const coords = { yaw: e.data.yaw, pitch: e.data.pitch };
//   // 22_7 22_8
//   const nearestPoint = findNearestPointByYawPitch(
//     coords,
//     virtualTour.markers.markers[keyUpdated].config.polyline[0]
//   );
//   console.log("Ближайшая точка к клику:", nearestPoint);
//   console.log(virtualTour.markers.markers[keyUpdated].config.polyline[0]);

//   virtualTour.markers.markers[keyUpdated].config.polyline[0][
//     nearestPoint.resIdx
//   ] = [e.data.yaw, e.data.pitch];
//   virtualTour.markers.markers[keyUpdated].update({
//     ...virtualTour.markers.markers[keyUpdated].config,
//   });
//   virtualTour.markers.markers[keyUpdated].render({
//     ...virtualTour.markers.markers[keyUpdated].config,
//   });
// });

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

window.initConstructorRoads = (idPrefixMarker) => {
  let isAddFigure = false;
  let figureCoords = [];
  let houseId = 2;
  const idKeysCount = {};
  const idAdded = [];
  /* создать фуникцию которая создаёт объект полигона и добавляет его */
  const addMarker = (coords) => {
    const key = `${idPrefixMarker}_${houseId}`;
    if (!idKeysCount[key]) idKeysCount[key] = 1;
    const id = `${idPrefixMarker}_${idKeysCount[key]}`;

    virtualTour.markers.addMarker({
      id: id,
      polyline: [coords],
      svgStyle: {
        fill: "rgba(125, 125, 125, 0.5)",
        stroke: "rgba(255, 255, 255, 0.3)",
        strokeWidth: "1px",
      },
      position: { pitch: -0.1, yaw: -0.05 },
    });
    idKeysCount[key]++;
    idAdded.push(id);
  };

  const getMarkersJson = () => {
    return JSON.stringify(
      Object.entries(virtualTour.markers.markers)
        .filter(([key, value]) => idAdded.includes(key))
        .map(([_, { id, config }]) => {
          const { polyline, svgStyle, tooltip, position } = config;
          return {
            id,
            polyline,
            svgStyle,
            tooltip,
            position,
          };
        })
    );
  };

  window.getMarkersJson = getMarkersJson;
  window.viewer = viewer;
  window.addEventListener("keydown", (e) => (isAddFigure = e.ctrlKey));
  window.addEventListener("keyup", (e) => (isAddFigure = e.ctrlKey));

  viewer.addEventListener("click", (e) => {
    console.log(111);
    figureCoords.push([e.data.yaw, e.data.pitch]);
    if (!isAddFigure) return;
    addMarker(figureCoords);
    figureCoords = [];
  });
};
