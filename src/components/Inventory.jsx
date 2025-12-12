import React from 'react'; // Only import React
import InventoryRow from './InventoryRow';

const Inventory = () => { // Removed props
    // This component displays the user's collected items. It chunks the
    // items into rows and uses the InventoryRow component to render
    // each row with a scroll-triggered animation.
    const items = [
        { name: 'Item 1', stars: '⭐⭐⭐⭐⭐' },
        { name: 'Item 8', stars: '⭐⭐⭐⭐⭐' },
        { name: 'Item 13', stars: '⭐⭐⭐⭐⭐' },
        { name: 'Item 2', stars: '⭐⭐⭐⭐' },
        { name: 'Item 7', stars: '⭐⭐⭐⭐' },
        { name: 'Item 12', stars: '⭐⭐⭐⭐' },
        { name: 'Item 3', stars: '⭐⭐⭐' },
        { name: 'Item 6', stars: '⭐⭐⭐' },
        { name: 'Item 9', stars: '⭐⭐⭐' },
        { name: 'Item 4', stars: '⭐⭐' },
        { name: 'Item 10', stars: '⭐⭐' },
        { name: 'Item 15', stars: '⭐⭐' },
        { name: 'Item 5', stars: '⭐' },
        { name: 'Item 11', stars: '⭐' },
        { name: 'Item 14', stars: '⭐' },
    ];

    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };
    
    const itemRows = chunkArray(items, 3);

    return (
        <div id="inventory-section" className="inventory-container"> 
            <div className="inventory-header">
                <h2 className="inventory-title-main">Inventory Section</h2>
                <div className="sort-by-rarity">Sort by: Rarity</div>
            </div>
            <div className="inventory-grid"> 
                {itemRows.map((row, index) => (
                    <InventoryRow 
                        key={index} 
                        items={row} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Inventory;