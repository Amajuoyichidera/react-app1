import React from 'react';

const UpdatedComp = originalComp => {
    class NewComp extends React.Component {
        render() {
            returns <originalComp name="The user" />;
        }
    }
        return NewComp;
    };

export default UpdatedComp;