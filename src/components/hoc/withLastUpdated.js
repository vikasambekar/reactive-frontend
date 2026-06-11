/*
        HOC - Higher order component
        - hoc takes the component and return the new component with additional props
 */

const withLastUpdated = (WrappedComponent) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const lastUpdated = new Date().toLocaleDateString("en-IN");

        return (
            <WrappedComponent
                {...props}
                lastUpdated={lastUpdated}
            />
        );
    };
};

export {withLastUpdated};