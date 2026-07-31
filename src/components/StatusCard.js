import React from 'react';
import PropTypes from 'prop-types';
import {withLastUpdated} from "@/src/components/hoc/withLastUpdated";

const StatusCard = ({name, lastUpdated}) => {
    return (
        <div style={{border: '10px solid #ccc', padding: '1rem'}}>
            <h3>{name}</h3>
            <p>Last Updated: {lastUpdated}</p>
        </div>
    );
};

StatusCard.propTypes = {
    name: PropTypes.string.isRequired,
    lastUpdated: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ]).isRequired,
};

const EnhancedStatusCard = withLastUpdated(StatusCard);

EnhancedStatusCard.propTypes = {
    name: PropTypes.string.isRequired
};

export default EnhancedStatusCard;
