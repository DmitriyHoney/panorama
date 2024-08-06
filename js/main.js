
window.PhotoSphereViewer = PhotoSphereViewer;

const PATH = './img';

const viewer = new PhotoSphereViewer.Viewer({
    container: document.querySelector('#viewer'),
    panorama: `${PATH}/scene1/new1.jpg`,
    navbar: [
        'autorotate',
        'zoom',
        'fullscreen',
    ],
    plugins: [
        PhotoSphereViewer.MarkersPlugin,
        [PhotoSphereViewer.VirtualTourPlugin, { 
            positionMode: 'gps', 
            renderMode: 'markers', 
            markerStyle:{
                size     : { width: 0, height: 80 },
                scale    : [2, 2],
                anchor   : 'top center',
                className: 'custom-link-marker',
                style : {
                  color: 'rgba(255, 208, 255, 0.1)',
                },
                
            }
        }],
        [PhotoSphereViewer.AutorotatePlugin, {
            autostartDelay: null,
            autostartOnIdle: false,
            autorotatePitch: 0.05,
            autorotateSpeed: '0.2rpm'
        }],
    ],
});


const markersPlugin = viewer.getPlugin(PhotoSphereViewer.MarkersPlugin);
const virtualTour = viewer.getPlugin(PhotoSphereViewer.VirtualTourPlugin);
const autorotate = viewer.getPlugin(PhotoSphereViewer.AutorotatePlugin);


viewer.addEventListener('ready', () => init(), { once: true });
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
const createHouseTooltipInSale = (square1, square2, idMarker) =>  `
        <div class="house-tooltip house-tooltip_success">
            <pre>${idMarker}</pre> 
            <h3>В продаже</h3>
            <ul>
                <li><span>Площадь участка:</span> <span>${square1}м2</span>  </li>
                <li><span>Площадь дома:</span> <span>${square2}м2</span>  </li>
            </ul>
        </div>
    `;

    const createHouseTooltipUnsuccess = (square1, square2, idMarker) =>  `
        <div class="house-tooltip house-tooltip_unsuccess">
            <pre>${idMarker}</pre> 
            <h3>Продано</h3>
            <ul>
                <li><span>Площадь участка:</span> <span>${square1}м2</span>  </li>
                <li><span>Площадь дома:</span> <span>${square2}м2</span>  </li>
            </ul>
        </div>
    `;

function init() {
    virtualTour.addEventListener('node-changed', ({ node, data }) => {
        if (node.overlay) viewer.setOverlay(node.overlay, node.opacity);
    });

    const roadsStyle = {
        fill: 'rgba(125, 125, 125, 0.5)',
        stroke: 'rgba(255, 255, 255, 0.3)',
        strokeWidth: '1px'
    };

    const roadsPolygons = [
        {
            id: 'road_1',
            polyline: [
                [[5.6356622412085615,-0.6492554066175611],[0.6142694689764288,-0.2516763928696213],[0.5714327431336207,-0.24735321169740154],[5.925393263502549,-0.5603205652931882],[5.8562378187719615,-0.5576525273829738],[5.819520691693747,-0.546415729732729],[5.7872662917274065,-0.5312006080818872],[5.762247139827991,-0.5018133830738236],[5.751202036238036,-0.4729678733384475],[5.747746362623747,-0.45471175462973035],[5.705266646020139,-0.1593778003955968],[5.669827535718154,-0.15822669371545217],[5.643351855865599,-0.562898738324014]]
            ],
            svgStyle: roadsStyle,
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'road_2',
            polyline: [
                [[1.9163655212166424,-0.2166018478133691],[1.9355989367664395,-0.2109150279306924],[4.240434537328125,-0.06982469494038868],[4.243246214336776,-0.07107184366307706],[1.916960406137816,-0.2159202542732641]]
            ],
            svgStyle: roadsStyle,
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'road_3',
            polyline: [
                [[5.630286437890435,-0.6482394561410896],[5.53957033915848,-0.640689522731317],[5.35420083830622,-0.627940795810058],[5.129523166560988,-0.615838306912607],[4.961851984937667,-0.5985863057820384],[4.736012170299815,-0.5703937664758723],[4.5333291549527335,-0.5351833547192166],[4.323798931250259,-0.48739194809493913],[4.144185874774242,-0.4385502343173422],[4.002017413840678,-0.3968696884915264],[3.8798178458520916,-0.35838020200094123],[3.7972373736487444,-0.333394470480858],[3.736805545436831,-0.31562359418035735],[3.6897641441135547,-0.3004191070974582],[3.6477506535773734,-0.29083422819404303],[3.6007126770054634,-0.27777314376029416],[3.625493765886844,-0.27031900744283655],[3.6665490675321677,-0.27631111705959865],[3.743555026173911,-0.2942372978424048],[3.8308480092769175,-0.3137462846499979],[3.913171787819148,-0.33226426259872466],[4.032568325464954,-0.3634183604691348],[4.13227077823634,-0.38875553096224724],[4.3409280976485105,-0.436073647155105],[4.525902546872899,-0.47221933717823994],[4.66963584111274,-0.49643279541535046],[4.866701282139014,-0.522965039253815],[5.054921024634091,-0.543095632918102],[5.222527220291639,-0.5520630946502028],[5.377999490939259,-0.5614418551600373],[5.499820197140914,-0.5681634883342603],[5.637711314461155,-0.5765871001930685]]
            ],
            svgStyle: roadsStyle,
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'road_4',
            polyline: [
                [[5.661499562333731,-0.281304912786158],[5.662149314965898,-0.2651496623112979],[5.353651543478685,-0.24581112468092536],[5.345260263696546,-0.2509758061913532],[5.660918596177571,-0.2813027970162014]]
            ],
            svgStyle: roadsStyle,
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'road_5',
            polyline: [
                [[5.666417020061132,-0.18665969431298413],[5.420524305342391,-0.1786681706192197],[5.42658906464832,-0.17575119899137048],[5.667562968388062,-0.1784527270183771]]
            ],
            svgStyle: roadsStyle,
            position: { pitch: -0.1, yaw: -0.05 },
        },
    ];

    const housesStyleInSale = {
        fill: 'rgba(0, 255, 0, 0.20)',
        stroke: 'rgba(255, 255, 255, 0.3)',
        strokeWidth: '1px',
    };

    const housesStyleAlreadyBuy = {
        fill: 'rgba(255, 0, 0, 0.20)',
        stroke: 'rgba(255, 255, 255, 0.3)',
        strokeWidth: '1px',
    };

    

    const housesPolygons = [
        {
            id: 'house_1',
            polyline: [
                [[5.627199805819126,-0.5645950508132218],[5.643634725940569,-0.41558915961065157],[5.250377982022382,-0.3639660841170047],[5.13542654054067,-0.4794324906827083],[5.629266466721305,-0.56367868079613]]
            ],
            svgStyle: housesStyleAlreadyBuy,
            position: { pitch: -0.1, yaw: -0.05 },
            tooltip: {
                content: createHouseTooltipUnsuccess(580, 125),
                position: 'top center',
                trigger: 'click',
            },
        },
        {
            id: 'house_2',
            polyline: [
                [[5.641698345036356,-0.4156301514357923],[5.65022516141885,-0.34653776357256105],[5.301744462198121,-0.30718403950963813],[5.249267455199028,-0.3655347935600717],[5.642666589211247,-0.41560982769698396]]
            ],
            svgStyle: housesStyleAlreadyBuy,
            position: { pitch: -0.1, yaw: -0.05 },
            tooltip: {
                content: createHouseTooltipUnsuccess(580, 125),
                position: 'top center',
                trigger: 'click',
            },
        },
        {
            id: 'house_3',
            polyline: [
                [[5.649210856108074,-0.34392349379395437],[5.6529619044626545,-0.28458368425179836],[5.343062929545101,-0.25710671392449624],[5.2991792035800165,-0.30696752583306486],[5.65022516141885,-0.34653776357256105]]
            ],
            svgStyle: housesStyleInSale,
            tooltip: {
                content: createHouseTooltipInSale(580, 125),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'house_4',
            polyline: [
                [[5.720921666978269,-0.2663444308030323],[5.730177983702923,-0.31676292159683195],[6.080700348068873,-0.29453355290205674],[6.005981919033806,-0.2540693849136766]]
            ],
            svgStyle: housesStyleInSale,
            tooltip: {
                content: createHouseTooltipInSale(580, 125),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'house_5',
            polyline: [
                [[5.728417802544005,-0.3199811240803412],[5.737827678527463,-0.3800627453012615],[6.179162163728495,-0.33797518089408674],[6.083663321507753,-0.29271467531325923]]
            ],
            svgStyle: housesStyleAlreadyBuy,
            tooltip: {
                content: createHouseTooltipUnsuccess(580, 125),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'house_6',
            polyline: [
                [[5.737850722008934,-0.3784477553723078],[5.750981109915717,-0.4587901333663327],[6.246451568864582,-0.39669184330186025],[6.2293430204254525,-0.35938487501801575],[6.176394373223811,-0.3398612193605173]]
            ],
            svgStyle: housesStyleInSale,
            tooltip: {
                content: createHouseTooltipInSale(580, 125),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        },
        {
            id: 'house_7',
            polyline: [
                [[5.754561587244478,-0.4588308906411096],[5.763268858175447,-0.49834813112264387],[5.781430796656283,-0.5202546462282047],[5.825703211910212,-0.5429917932889783],[5.883117060105151,-0.5548854745581999],[6.030059860204748,-0.5402760893296294],[0.02443138350410833,-0.4785396397468298],[6.24830586262603,-0.39932005691757877]]
            ],
            svgStyle: housesStyleAlreadyBuy,
            tooltip: {
                content: createHouseTooltipUnsuccess(580, 125),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        },
    ];
    window.virtualTour = virtualTour;
    
    virtualTour.setNodes([
        {
            id: '1',
            panorama: `${PATH}/scene1/new1.jpg`,
            name: 'Зимняя локация',
            links: [{ nodeId: '2', gps: [-35, 35], }],
            markers: [
                // {
                //     id: 'custom-tooltip',
                //     tooltip: {
                //         content: document.querySelector('#tooltip-content').innerText,
                //         className: 'custom-tooltip',
                //         position: 'top',
                //         trigger: 'click',
                //     },
                //     position: { pitch: -0.561434532729538, yaw: 2.4375424904425316 },
                //     image: './img/common/pin-blue.png',
                //     opacity: 1,
                //     size: { width: 32, height: 32 },
                //     anchor: 'bottom center',
                // },
                
                // ...roadsPolygons,
                // ...housesPolygons,
                // housesPolygons[0]
                {
                    "id":"undefined_1",
                    "polyline":[
                        [[0.5693004833697356,-0.24566887342223254],[0.03544618861788095,-0.5383488540892007],[6.175554003068849,-0.5777848654529203],[5.965183588589822,-0.6036630250913162],[5.874118154285306,-0.5951538232539537],[5.816079634587382,-0.5732762084821816],[5.766963370289952,-0.5310395127209082],[5.751667050650225,-0.4885653907777181],[5.7294816804991315,-0.3599471063249067],[5.707676157019032,-0.1637912886871593],[5.676757377597285,-0.16698913627331025],[5.667665329552796,-0.44925479892533726],[5.658943371734264,-0.5428896284093803],[5.64698236089297,-0.5677047740738743],[5.4869016511563595,-0.5712153422049315],[5.328733734671676,-0.5636967205265933],[5.17307199365891,-0.5520843887433329],[5.035893694765462,-0.5388127458942895],[4.80833252208371,-0.5214298726837634],[4.536034189662918,-0.4870886373038519],[4.383583842936119,-0.4562238158728089],[3.667805095199958,-0.3099055693609578],[3.622705651986205,-0.3284763591611346],[4.085382933398718,-0.4592038753977272],[4.417476497372305,-0.5050030508287606],[4.791845089186099,-0.5507690750221621],[5.289254351657566,-0.5933038727222284],[5.682801102361743,-0.6173805133462951],[5.901406487211133,-0.6471230849405627],[6.082622591465003,-0.6471473665782583],[6.211831381031321,-0.6220132939395802],[0.23538614613513006,-0.48840574999539577],[0.5185781338984096,-0.333971081405656],[0.6293226182886856,-0.2532033832524294],[0.5632245419262807,-0.24462084473945045]]
                    ],
                    "svgStyle":{
                        "fill":"rgba(125, 125, 125, 0.5)",
                        "stroke":"rgba(255, 255, 255, 0.3)",
                        "strokeWidth":"1px"
                    },
                    "position":{
                        "pitch":-0.1,
                        "yaw":-0.05
                    }
                }
                
            ],
            gps: [-60, 0, 3],
            panoData: { poseHeading: 327 },
        },
        {
            id: '2',
            panorama: 'https://pannellum.org/images/alma.jpg',
            name: 'Локация с антенами',
            links: [{ nodeId: '1', gps: [-60, -45, -30], }],
            markers: [],
            gps: [-80, 25, 30],
            panoData: { poseHeading: 400 },
            markers: [
                {
                    id: 'polygon',
                    polyline: [[0.6983015954908844,-0.20434651697636674],[0.8191986477616461,-0.20955184308057961],[0.9502148399610264,-0.20322288629667185],[1.0787331707188352,-0.17829617463423308],[1.1244294577582732,-0.15016805764222063],[1.115530295061905,-0.1342779689629534],[1.0881630290678423,-0.1246210536756045],[1.036630394479384,-0.11330239793273567],[0.9477248817549074,-0.10446388920804206],[0.79571862936415,-0.0996366419904402],[0.6680294510701922,-0.09844629448002284],[0.5674514165681049,-0.1077730844919178],[0.4930857645512562,-0.12332990652962295],[0.46577497113289085,-0.14180423666098396],[0.4917739560488525,-0.170195683236543],[0.5997249876055631,-0.19457880948603368],[0.7126686838357489,-0.20676258085790566]],
                    svgStyle: {
                        fill: 'rgba(200, 0, 0, 0.5)',
                        stroke: 'rgba(200, 0, 0, 0.5)',
                        strokeWidth: '1px',
                    },
                    position: { pitch: -0.1, yaw: -0.05 },
                },
            ],
        },
    ], '1');
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
            polyline: [coords],
            svgStyle: {
                fill: 'rgba(255, 0, 0, 0.20)',
                stroke: 'rgba(255, 255, 255, 0.3)',
                strokeWidth: '1px',
            },
            tooltip: {
                content: isSale ? createHouseTooltipInSale(squareHouse, squareArea, id) : createHouseTooltipUnsuccess(squareHouse, squareArea, id),
                position: 'top center',
                trigger: 'click',
            },
            position: { pitch: -0.1, yaw: -0.05 },
        });
        idKeysCount[key]++;
        idAdded.push(id);
    }

    const getMarkersJson = () => {
        return JSON.stringify(Object.entries(virtualTour.markers.markers).filter(([key, value]) => idAdded.includes(key)).map(([_, { id, config }]) => {
            const { polyline, svgStyle, tooltip, position } = config;
            return {
                id, polyline, svgStyle, tooltip, position
            }
        }))
    }

    window.getMarkersJson = getMarkersJson;
    window.viewer = viewer;
    window.addEventListener('keydown', (e) => isAddFigure = e.ctrlKey);
    window.addEventListener('keyup', (e) => isAddFigure = e.ctrlKey);

    viewer.addEventListener('click', (e) => {
        figureCoords.push([e.data.yaw, e.data.pitch]);
        if (!isAddFigure) return;
        addMarker(figureCoords);
        figureCoords = [];
    });
}

window.initConstructorRoads = (
    idPrefixMarker, 
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
            polyline: [coords],
            svgStyle: {
                fill: 'rgba(125, 125, 125, 0.5)',
                stroke: 'rgba(255, 255, 255, 0.3)',
                strokeWidth: '1px'
            },
            position: { pitch: -0.1, yaw: -0.05 },
        });
        idKeysCount[key]++;
        idAdded.push(id);
    }

    const getMarkersJson = () => {
        return JSON.stringify(Object.entries(virtualTour.markers.markers).filter(([key, value]) => idAdded.includes(key)).map(([_, { id, config }]) => {
            const { polyline, svgStyle, tooltip, position } = config;
            return {
                id, polyline, svgStyle, tooltip, position
            }
        }))
    }

    window.getMarkersJson = getMarkersJson;
    window.viewer = viewer;
    window.addEventListener('keydown', (e) => isAddFigure = e.ctrlKey);
    window.addEventListener('keyup', (e) => isAddFigure = e.ctrlKey);

    viewer.addEventListener('click', (e) => {
        console.log(111);
        figureCoords.push([e.data.yaw, e.data.pitch]);
        if (!isAddFigure) return;
        addMarker(figureCoords);
        figureCoords = [];
    });
}



