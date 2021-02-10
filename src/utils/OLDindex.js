// const setUp = (props={}) => {
//     const component = shallow(<Header {... props} />);
//     return component;
// };

// //above setup and in Testing file. Import below findTest from this file.

// const findByTestAtrr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`);
//     return wrapper;
// };

// it('should render without errors', () => {
//     const component = findByTestAtrr(wrapper, 'SomeAttr');
//     expect(component.length).toBe(1);
// })


// describe("example with props", () => {

//     let wrapper;

//     beforeEach(() => {
//         const props = {
//             prop1: 'this is the first prop',
//             prop2: 'this is the second prop'
//         };
//         wrapper = setUp(props);
//     });
// });

// describe("example withOUT props", () => {

//     let wrapper;

//     beforeEach(() => {
//         wrapper = setUp();
//     });
// })