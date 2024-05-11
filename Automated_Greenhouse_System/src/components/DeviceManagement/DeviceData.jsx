import LightBulb from '../../assets/icons/light_bulb.png';
import WaterPump from '../../assets/icons/WaterPump.png';

// let item_0 = {
//     id: "1001",
//     name: "Light 1",
//     location: "Garden 1",
//     img: LightBulb,
//     type: "Light",
//     status: false,
// };

let item_1 = {
    id: "1002",
    name: "Light 2",
    location: "Garden 1",
    img: LightBulb,
    type: "Light",
    feed_id: 'led1',
};

let item_2 = {
    id: "1003",
    name: "Light 3",
    location: "Garden 1",
    img: LightBulb,
    type: "Light",
    feed_id: 'led2',
};

let item_3 = {
    id: "1004",
    name: "Light 4",
    location: "Garden 1",
    img: LightBulb,
    type: "Light",
    feed_id: 'led3',
};

let item_4 = {
    id: "1005",
    name: "Light 5",
    location: "Garden 2",
    img: LightBulb,
    type: "Light",
    feed_id: 'led4',
};

let item_5 = {
    id: "1006",
    name: "Light 6",
    location: "Garden 2",
    img: LightBulb,
    type: "Light",
    feed_id: 'led5',
};

let item_6 = {
    id: "1007",
    name: "Light 7",
    location: "Garden 2",
    img: LightBulb,
    type: "Light",
    feed_id: 'led6',
};

let item_7 = {
    id: "1008",
    name: "Light 8",
    location: "Garden 2",
    img: LightBulb,
    type: "Light",
    feed_id: 'led7',
};

// let item_8 = {
//     id: "2001",
//     name: "Water Pump 1",
//     location: "Garden 1",
//     img: WaterPump,
//     type: "Water Pump",
//     status: false,
// };

let item_9 = {
    id: "2002",
    name: "Water Pump 2",
    location: "Garden 1",
    img: WaterPump,
    type: "Water Pump",
    feed_id: 'pumper1',
};

let item_10 = {
    id: "2003",
    name: "Water Pump 3",
    location: "Garden 1",
    img: WaterPump,
    type: "Water Pump",
    feed_id: 'pumper2',
};

let item_11 = {
    id: "2004",
    name: "Water Pump 4",
    location: "Garden 2",
    img: WaterPump,
    type: "Water Pump",
    feed_id: 'pumper3',
};

let item_12 = {
    id: "2005",
    name: "Water Pump 5",
    location: "Garden 2",
    img: WaterPump,
    type: "Water Pump",
    feed_id: 'pumper4',
};

let item_13 = {
    id: "2006",
    name: "Water Pump 6",
    location: "Garden 2",
    img: WaterPump,
    type: "Water Pump",
    feed_id: 'pumper5',
};

let dataArray = [
    //item_0,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
    item_6,
    item_7,
    //item_8,
    item_9,
    item_10,
    item_11,
    item_12,
    item_13,
];

export const get_array = () => {
    return dataArray;
};

export const onChangeItem = (item) => {
    let index = dataArray.findIndex((x) => x.id === item.id);
    if (dataArray[index].status === true) {
        dataArray[index].status = false;
    } else {
        dataArray[index].status = true;
    }
};

export const add_device = (item) => {
    let index = dataArray.findIndex((x) => x.id === item.id);
    if (index > 0) {
        alert("This printer is already exist");
        return;
    } else {
        dataArray.push(item);
    }
};


