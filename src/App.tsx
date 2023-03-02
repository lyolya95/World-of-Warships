import React, {FC} from 'react';
import {Ships} from "./pages/ships";
import {useGetShips} from "./hooks";
import {Loader} from "./components/loader";
import logo from "./assets/logo.svg"
import {Image} from "./components/image";

const App: FC = () => {
    const { ships, loading } = useGetShips();

    if (loading) return <Loader isLoading={loading} />

    return <div className="container">
        <div className="header">
            <Image src={logo} alt="logo"/>
            <h1>World of Warships</h1>
        </div>

        <Ships ships={ships} />
    </div>
};

export default App;



// import React from "react";
// import { shallow } from "enzyme";
// import ShipSlider from "./ShipSlider";
//
// describe("ShipSlider", () => {
//     const ships = [
//         {
//             name: "Ship 1",
//             image: "https://example.com/ship1.png",
//         },
//         {
//             name: "Ship 2",
//             image: "https://example.com/ship2.png",
//         },
//     ];
//
//     it("renders without crashing", () => {
//         shallow(<ShipSlider ships={ships} />);
//     });
//
//     it("renders correct number of slides", () => {
//         const wrapper = shallow(<ShipSlider ships={ships} />);
//         expect(wrapper.find(".slick-slide")).toHaveLength(2);
//     });
// });

//
// import React from "react";
// import { shallow } from "enzyme";
// import ShipPagination from "./ShipPagination";
//
// describe("ShipPagination", () => {
//     const pageCount = 5;
//
//     it("renders without crashing", () => {
//         shallow(<ShipPagination pageCount={pageCount} />);
//     });
//
//     it("renders correct number of page links", () => {
//         const wrapper = shallow(<ShipPagination pageCount={pageCount} />);
//         expect(wrapper.find(".pagination li")).toHaveLength(pageCount);
//     });
//
//     it("triggers onPageChange when a page link is clicked", () => {
//         const onPageChange = jest.fn();
//         const wrapper = shallow(<ShipPagination pageCount={pageCount} onPageChange={onPageChange} />);
//         wrapper.find(".pagination li").at(2).simulate("click");
//         expect(onPageChange).toHaveBeenCalledWith(2);
//     });
// });

//
// import React from "react";
// import { shallow } from "enzyme";
// import App from "./App";
// import ShipSlider from "./ShipSlider";
// import ShipPagination from "./ShipPagination";
//
// describe("App", () => {
//     it("renders without crashing", () => {
//         shallow(<App />);
//     });
//
//     it("renders ShipSlider component", () => {
//         const wrapper = shallow(<App />);
//         expect(wrapper.find(ShipSlider)).toHaveLength(1);
//     });
//
//     it("renders ShipPagination component", () => {
//         const wrapper = shallow(<App />);
//         expect(wrapper.find(ShipPagination)).toHaveLength(1);
//     });
//
//     it("sets the correct ships prop on ShipSlider component", () => {
//         const wrapper = shallow(<App />);
//         const expectedShips = [
//             {
//                 name: "Ship 1",
//                 image: "https://example.com/ship1.png",
//             },
//             {
//                 name: "Ship 2",
//                 image: "https://example.com/ship2.png",
//             },
//         ];
//         wrapper.setState({ ships: expectedShips });
//         expect(wrapper.find(ShipSlider).prop("ships")).toEqual(expectedShips);
//     });
//
//     it("sets the correct pageCount prop on ShipPagination component", () => {
//         const wrapper = shallow(<App />);
//         const expectedPageCount = 5;
//         wrapper.setState({ pageCount: expectedPageCount });
//         expect(wrapper.find(ShipPagination).prop("pageCount")).toEqual(expectedPageCount);
//     });
// });


