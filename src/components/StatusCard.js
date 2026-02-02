import { withLastUpdated } from "@/src/components/hoc/withLastUpdated";

const StatusCard = ({ name, lastUpdated }) => {
    return (
        <div style={{ border: '10px solid #ccc', padding: '1rem' }}>
            <h3>{name}</h3>
            <p>Last Updated: {lastUpdated}</p>
        </div>
    );
};

const EnhancedStatusCard = withLastUpdated(StatusCard);

export default EnhancedStatusCard;
