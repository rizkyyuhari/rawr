/* eslint-disable no-console */
import ReadlineSync from 'readline-sync';
import Robot from './Robot';
import RobotSimulator from './RobotSimulator';

const coordinateX = ReadlineSync.questionInt('Input Coordinate X:');
const coordinateY = ReadlineSync.questionInt('Input Coordinate Y:');
const cardinalPoint = ReadlineSync.question('Input Cardinal Point: ');
const instructions = ReadlineSync.question('Input Instructions ');

const currentRobotPosition = new Robot(coordinateX, coordinateY, cardinalPoint);
RobotSimulator.runInstructionSequence(currentRobotPosition, instructions);
console.log(currentRobotPosition.getPosition());
