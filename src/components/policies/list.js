import React, { useState } from 'react';
import policiesMock from '../../data.json';
import PoliciesItem from "./item";
import './policies.css';

function PoliciesList() {

    // Alternatively, we could use useEffect hook to load the items using a redux action
    // or we could pass them as a prop from upper component / store provider.
    const [items, setItems] = useState(policiesMock);
    const [newDescription, setNewDescription] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const editDescription = id => {
        const itemToEdit = items.find(item => item.id === id);
        setSelectedItem(itemToEdit);
        setModalOpened(true);
    };
    const handleEditDescription = () => {
        if (newDescription) {
            selectedItem.description = newDescription;
            const alteredItems = items.map(obj => [selectedItem].find(o => o.id === obj.id) || obj);
            setItems(alteredItems);
            setModalOpened(false);
        }
    }
    const renderItemsList = items.map(item => <PoliciesItem key={item.id} item={item} editDescription={editDescription} />);

    return (
        <div className="if grid wide policies list">
            <div className="if row">
                <h2 className="if u-margin-bottom--16">Insurance policies</h2>
            </div>
            {renderItemsList}
            <div className="if">
                <br/>
                {/* This link should either forward to another page or trigger loading action */}
                <a href="#/" className="if link">See 2 more</a>
            </div>

            {modalOpened && <div className={"if backdrop is-open"} role="dialog" aria-labelledby="modal-title"
                 aria-describedby="modal-description"/>}
            {modalOpened && <div data-speccer className="if modal">
                <div className="if title" id="modal-title">
                    Edit description for item {selectedItem.name}
                    <button type="button" className="if close" aria-label="Close modal" onClick={() => setModalOpened(false)}/>
                </div>
                <div className="if content">
                    <div className="if form-group">
                        <input
                            placeholder="New description"
                            name="input-field-with-icons-02"
                            id="input-field-with-icons-02"
                            type="text"
                            className="if input-field icon symbol bulb-on"
                            onKeyUp={e => setNewDescription(e.target.value)}
                        />
                    </div>
                    <button className="if button primary save" onClick={handleEditDescription}>Save</button>
                </div>
            </div>}
        </div>
    );
}

export default PoliciesList;
