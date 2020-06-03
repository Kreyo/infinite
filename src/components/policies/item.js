import React from 'react';
import { chooseIconByType, getClassnameByStatus, getStatusLabel, isActionPrimary, generateLabel, generateActions } from "../../utils";
import SelectButton from "../select-button";

const PoliciesItem = ({ item, editDescription }) => {
    return (
        <div className="if row policies item u-padding-top--24 u-padding-bottom--24">
            <div className={`if col-1--xs u-hidden-down--md icon product brown ${chooseIconByType(item.type)}`}>
            </div>
            <div className="if col-5--md col-12--sm">
                <div className="if">
                    <span className="if text bold name">{item.name}</span>
                </div>
                <div className="if">
                    <span className="if text body description">{item.description} </span>
                    <a href='#/' className="if link edit-description" onClick={() => editDescription(item.id)}>Edit</a>
                </div>
            </div>
            <div className="if col-2--md col-12--sm field">
                <span className="if text meta date">{item.startDate} - {item.endDate}</span>
            </div>
            <div className="if col-2--md col-12--sm field status-field">
                <span className={`if text status bold ${getClassnameByStatus(item.status)}`}>{getStatusLabel(item.status)}</span>
            </div>
            <div className="if col-2--md col-12--sm field">
                <SelectButton
                    isPrimary={isActionPrimary(item.status)}
                    label={generateLabel(item.status)}
                    actions={generateActions(item.status)}
                />
            </div>
        </div>
    );
}

export default PoliciesItem;
