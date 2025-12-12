import React from 'react';
import { useInView } from './useInView';

const InventoryRow = ({ items }) => { // Revert to original signature
    // This component renders a single row of inventory items. It uses the
    // useInView hook to detect when it enters the viewport and triggers a
    // fade-in animation for the items it contains.
    const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true }); // Use original ref

    return (
        <div ref={ref} className={`inventory-row ${isInView ? 'is-visible' : ''}`}>
            {items.map((item) => (
                <div key={item.name} className="inventory-item">
                    <img src="https://via.placeholder.com/150" alt="Item Picture" />
                    <div className="rarity-stars">{item.stars}</div>
                    <div className="item-name">{item.name}</div>
                </div>
            ))}
        </div>
    );
};

export default InventoryRow;