import cardinalDirection from '../src/cardinalDirection';
import Robot from '../src/Robot';
import RobotSimulator from '../src/RobotSimulator';

describe('RobotSimulator', () => {
  describe('^runInstructionSequence', () => {
    it('should return new postion coordinate 9 4 WEST when run set of instruction RAALAL', () => {
      const currentRobotPosition = new Robot(7, 3, cardinalDirection.NORTH);
      const setOfIstruction = 'RAALAL';
      RobotSimulator.runInstructionSequence(currentRobotPosition, setOfIstruction);
      const actualResult = new Robot(9, 4, 'W');
      expect(actualResult.getPosition()).toEqual(currentRobotPosition.getPosition());
    });
  });
});
