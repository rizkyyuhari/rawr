export default class RobotSimulator {
  static runInstructionSequence(robot, instructions) {
    for (let i = 0; i < instructions.length; i += 1) {
      const instruction = instructions[i];
      if (instruction === 'R') {
        robot.moveToRigth();
      }
      if (instruction === 'L') {
        robot.moveToLeft();
      }
      if (instruction === 'A') {
        robot.moveForward();
      }
    }
  }
}
