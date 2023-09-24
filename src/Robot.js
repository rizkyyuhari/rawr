import cardinalDirection from './cardinalDirection';

export default class Robot {
  #coordinateX;

  #coordinateY;

  #currentCardinalPoint;

  constructor(coordinateX, coordinateY, currentCardinalPoint) {
    this.#coordinateX = coordinateX;
    this.#coordinateY = coordinateY;
    this.#currentCardinalPoint = currentCardinalPoint;
  }

  moveToRigth() {
    this.#updateCardinal(1);
  }

  moveToLeft() {
    this.#updateCardinal(3);
  }

  #updateCardinal(cardinalOffset) {
    const CARDINAL_POINT = Object.values(cardinalDirection);
    const newCardinalPoint =
      CARDINAL_POINT[
        (CARDINAL_POINT.indexOf(this.#currentCardinalPoint) + cardinalOffset) %
          CARDINAL_POINT.length
      ];
    this.#currentCardinalPoint = newCardinalPoint;
  }

  moveForward() {
    const COORDINATE_CHANGE = {
      [cardinalDirection.NORTH]: { coordinateX: 0, coordinateY: 1 },
      [cardinalDirection.EAST]: { coordinateX: 1, coordinateY: 0 },
      [cardinalDirection.SOUTH]: { coordinateX: 0, coordinateY: -1 },
      [cardinalDirection.WEST]: { coordinateX: -1, coordinateY: 0 }
    };

    const newCoordinate = COORDINATE_CHANGE[this.#currentCardinalPoint];
    this.#coordinateX += newCoordinate.coordinateX;
    this.#coordinateY += newCoordinate.coordinateY;
  }

  getPosition() {
    return `${this.#coordinateX} ${this.#coordinateY} ${this.#currentCardinalPoint}`;
  }
}
