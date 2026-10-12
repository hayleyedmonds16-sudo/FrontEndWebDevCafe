import {items} from "../data/data.js";
import DisplayFood from "./DisplayFood.jsx";

export default function FoodOrders() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <DisplayFood items={items} />
                </div>
                <div>
                    Show Selected Items
                </div>
            </div>
        </div>
    )
}
