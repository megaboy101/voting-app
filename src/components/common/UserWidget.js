import React from 'react';
import { connect } from 'react-redux';


const UserWidget = ({ image }) => {
    return (
		<aside>
            <img src={image} alt="Failed to load profile image" />
		</aside>
    );
};

function mapStateToProps(state) {
    return {
        image: state.user.profilePic.replace('_normal', '')
    };
}

export default connect(mapStateToProps)(UserWidget);
