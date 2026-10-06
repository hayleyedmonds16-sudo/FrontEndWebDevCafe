import FoodItem from "./FoodItem";
import MenuCategoryRow from "./MenuCategoryRow.jsx";
import Accordion from "react-bootstrap/Accordion";

const MenuTable = ({ items, filterText }) => {

    const rows = [];
    let lastCategory = null;

    let sortedItems = items.sort((a, b) => a.category.localeCompare(b.category));

    // const filtered = sortedItems.filter((menuItem) => {
    //     return menuItem.name.toLowerCase().includes(filterText.toLowerCase());
    // });

const filtered = sortedItems.filter((menuItem) => {
    const searchText = (filterText ?? '').toLowerCase();

    return (
        menuItem.name.toLowerCase().includes(searchText) ||
        (menuItem.description ?? '').toLowerCase().includes(searchText)
        );  
    });



    filtered.forEach((menuItem) => {
        if (menuItem.category !== lastCategory) {
            rows.push(
                <MenuCategoryRow   
                    category={menuItem.category}
                    key={menuItem.category} />
            );
        }
        rows.push(
            <Accordion.Item eventKey={menuItem.name} key={menuItem.name}>
                <Accordion.Header key={menuItem.name}>{menuItem.name}</Accordion.Header>
                <Accordion.Body>
                    <FoodItem
                        food={menuItem}
                        key={menuItem.name} />
                </Accordion.Body>
            </Accordion.Item>
        );
        lastCategory = menuItem.category;
    });

    return (
        <Accordion style={{ width: 100 + '%'}}>{rows}</Accordion>
    );
}


export default MenuTable;
