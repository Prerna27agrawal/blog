import React from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
class UserHeader extends React.Component {
    // jab bhi render ho fetchuser action call ho aur phir usmein fetchuser waala user action run kre aur id apss krein

    componentDidMount (){
        this.props.fetchUser(this.props.userId);
    }
    render (){
        // we dont need to render the whole user list inside the component rather we can
        // just find the user  in maptostateprops and then can pass the user to this 
        // component
        // const user = this.props.users.find(user => user.id === this.props.userId)
       
        const {user} = this.props;

        if(!user){
           return null
        }
        return (
            <div className="header">{user.name}</div>
        )
    }
}
// ownProps are the props that are sent to the userHeader component from POstlist component
const mapStateToProps = (state,ownProps) =>{
    return {user:state.users.find(user => user.id == ownProps.userId)};
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);