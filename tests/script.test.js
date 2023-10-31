const { func2 } = require('../script');

describe('Tests for func2', () => {
  test('Check when window.jQuery is undefined', () => {
    const scriptElementMock = document.createElement('script');
    scriptElementMock.src = "../../assets/js/vendor/jquery.min.js";

    const createElementSpy = jest.spyOn(document, "createElement");
    const appendChildSpy = jest.spyOn(document.body, "appendChild");

    func2();

    expect(typeof window.jQuery).toBe("undefined");
    expect(createElementSpy).toHaveBeenCalledWith('script');
    expect(appendChildSpy).toHaveBeenCalledWith(scriptElementMock);

    createElementSpy.mockRestore();
    appendChildSpy.mockRestore();
  });
});