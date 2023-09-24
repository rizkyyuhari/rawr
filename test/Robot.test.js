import Robot from '../src/Robot';
import CARDINAL_DIRECTION from '../src/cardinalDirection';

describe('Robot', () => {
  describe('^moveToRigth', () => {
    it('should return SOUTH when the current position is EAST', () => {
      const coordinateX = 1;
      const coordinateY = 1;
      const expectedRobotPosition = `${coordinateX} ${coordinateY} ${CARDINAL_DIRECTION.SOUTH}`;
      const robotPositionInEast = new Robot(1, 1, CARDINAL_DIRECTION.EAST);
      robotPositionInEast.moveToRigth();

      const actualResult = robotPositionInEast.getPosition();

      expect(actualResult).toEqual(expectedRobotPosition);
    });
  });
  describe('^moveToLeft', () => {
    it('should return NORTH when the current position is EAST', () => {
      const coordinateX = 1;
      const coordinateY = 1;
      const expectedRobotPosition = `${coordinateX} ${coordinateY} ${CARDINAL_DIRECTION.NORTH}`;
      const robotPositionInEast = new Robot(1, 1, CARDINAL_DIRECTION.EAST);

      robotPositionInEast.moveToLeft();
      const actualResult = robotPositionInEast.getPosition();
      expect(actualResult).toEqual(expectedRobotPosition);
    });
  });
  describe('^moveForward', () => {
    it('should return coordinateX, coordinateY, & cardinalPoint equal 7 4 NORTH when Moving forward', () => {
      const coordinateX = 7;
      const coordinateY = 4;
      const expectedRobotPosition = `${coordinateX} ${coordinateY} ${CARDINAL_DIRECTION.NORTH}`;
      const robotPositionInNorth = new Robot(7, 3, CARDINAL_DIRECTION.NORTH);

      robotPositionInNorth.moveForward();
      const actualResult = robotPositionInNorth.getPosition();

      expect(actualResult).toEqual(expectedRobotPosition);
    });
  });
});
