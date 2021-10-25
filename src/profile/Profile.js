import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
    const{fullName,bio,profession}=props
    const style ={color:"red" , background:"grey", textAlign: "center"}
 
  return (
    <div>
      <h1 style={style}>my name is {fullName} i {bio} i am {profession} </h1>
    </div>
  )
}
Profile.defaultProps = {
    fullName: "maha"
}

Profile.propTypes = {
    fullName: PropTypes.string,
}

   

export default Profile;