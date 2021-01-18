import React from "react";
import Enzyme, { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Calculator from "containers/Calculator/Calculator";

Enzyme.configure({ adapter: new Adapter() });

let mathOperations, memoryOperation, wrapper;

beforeEach(() => {
  mathOperations = {
    percentage: "%",
    division: "÷",
    times: "×",
    minus: "-",
    plus: "+",
    equals: "=",
  };

  memoryOperation = {
    memoryNumberClear: "mc",
    memoryNumberRecall: "mr",
    memoryNumberMinus: "m-",
    memoryNumberPlus: "m+",
  };

  wrapper = shallow(<Calculator />);
});

describe("Testing Calculator container", () => {
  describe("mathOperations() method", () => {
    it("Should sum 2 numbers", () => {
      expect(wrapper.instance().mathOperations(mathOperations.plus, 10, 2)).toBe(12);
    });
    it("Should subtract 2 numbers", () => {
      expect(wrapper.instance().mathOperations(mathOperations.minus, 10, 2)).toBe(8);
    });
    it("Should multiply 2 numbers", () => {
      expect(wrapper.instance().mathOperations(mathOperations.times, 10, 2)).toBe(20);
    });
    it("Should divide 2 numbers", () => {
      expect(wrapper.instance().mathOperations(mathOperations.division, 10, 2)).toBe(5);
    });
  });
  describe("handleSignChange() method", () => {
    it("Should change sign of a number", () => {
      wrapper.setState({ displayedValue: 10 });
      wrapper.instance().handleSignChange();
      expect(wrapper.state("displayedValue")).toBe("-10");
    });
  });
  describe("handleNumberPercentage() method", () => {
    it("Should get a percent of a number ", () => {
      wrapper.setState({ displayedValue: 10 });
      wrapper.instance().handleNumberPercentage();
      expect(wrapper.state("displayedValue")).toBe("0.1");
    });
  });
  describe("handleMemoryNumberOperations() method", () => {
    it("Should recall a number from memory", () => {
      expect(wrapper.instance()
      .handleMemoryNumberOperations(memoryOperation.memoryNumberRecall, 10, 2)).toBe(10);
    });
    it("Should clear a number from memory", () => {
        expect(wrapper.instance()
        .handleMemoryNumberOperations(memoryOperation.memoryNumberClear, 10, 2)).toBe("0");
    });
    it("Should subtract a number from memory", () => {
        expect(wrapper.instance()
        .handleMemoryNumberOperations(memoryOperation.memoryNumberMinus, 10, 2)).toBe(8);
    });
    it("Should add a number to memory", () => {
        expect(wrapper.instance()
        .handleMemoryNumberOperations(memoryOperation.memoryNumberPlus, 10, 2)).toBe(12);
    });
  });
});
