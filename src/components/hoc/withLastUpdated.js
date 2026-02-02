/*
        HOC - Higher order component
        - hoc takes the component and return the new component with additional props
 */

const withLastUpdated = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
        const lastUpdated = new Date().toLocaleDateString();

        return (
            <WrappedComponent
                {...props}
                lastUpdated={lastUpdated}
            />
        );
    };

    EnhancedComponent.displayName = `withLastUpdated(${
        WrappedComponent.displayName ||
        WrappedComponent.name ||
        'Component'
    })`;

    return EnhancedComponent;
};

export {withLastUpdated};