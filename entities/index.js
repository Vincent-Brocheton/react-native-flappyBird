import Matter from 'matter-js';
import Bird from '../components/Bird'
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";
import {Dimensions} from "react-native";
import {getPipeSizePosPair} from "../utils/random";

const windowsHeight = Dimensions.get('window').height;
const windowsWidth = Dimensions.get('window').width;

export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false})

    let world = engine.world

    world.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair();
    const pipeSizePosB = getPipeSizePosPair(windowsWidth*0.9);

    return{
        physics: {engine, world},
        Bird: Bird(world, 'green', {x:50, y:300}, {height:40, width:40}),
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', pipeSizePosA.PipeTop.pos, pipeSizePosA.PipeTop.size),
        ObstacleBottom1: Obstacle(world, 'ObstacleBottom1', 'blue', pipeSizePosA.PipeBottom.pos, pipeSizePosA.PipeBottom.size),
        ObstacleTop2: Obstacle(world, 'ObstacleTop2', 'red', pipeSizePosB.PipeTop.pos, pipeSizePosB.PipeTop.size),
        ObstacleBottom2: Obstacle(world, 'ObstacleBottom2', 'blue', pipeSizePosB.PipeBottom.pos, pipeSizePosB.PipeBottom.size),
        Floor: Floor(world, 'green', {x:windowsWidth/2, y:windowsHeight}, {height:50, width:windowsWidth})
    }
}
