import React from 'react'
import { connect } from 'react-redux'
import authSelectores from '../../redux/auth/authSelectores'
import authAction  from '../../redux/auth/authAction'

const UserMenu = ({name, avatar, onLogOut }) => {
    
    return (
        <div className='userMenu'>
            <p>Welcome, {name}</p>
            <button type='button' onClick={onLogOut}>Log out</button>
            </div>
    )
}
const mapStateToProps = state => ({
name: authSelectores.getUserName(state),
//avatar: 'https://vasteras.sd.se/sd-styrelse-2019/no-photo/'
})

const mapDispatchToProps = {
    onLogOut: authAction.logoutSuccess,
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
