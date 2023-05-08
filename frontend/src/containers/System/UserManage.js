import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createNewUserService, deleteUserService, editUserService} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser  from "./ModalEditUser";
import {emitter} from "../../utils/emitter";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
      isOpenModalEditUser: false,
      userEdit: {}
    };
  }

  state = {};

  async componentDidMount() {
    this.getAllUsersFromReact();
  }

  getAllUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    console.log(response);
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  toggleEditUserModal = () => {
    this.setState({
      isOpenModalEditUser: !this.state.isOpenModalEditUser
    });
  };

  createNewUser = async (data) => {
    try{
      let response = await createNewUserService(data);
      if(response && response.errCode != 0) {
        alert(response.errMessage);
      } else {
        await this.getAllUsersFromReact();
        emitter.emit('EVENT_CLEAR_MODAL_DATA');
      }
      console.log('response create user: ', response);
    } catch(err) {
      console.log(err);
    }
    console.log('check data from child: ', data )
  }

  handleDeleteUser = async (user) => {
    console.log('delete user', user);
    if(!window.confirm('Are you sure you want to delete this user?') ){
      return;
    }
    try {
      let response = await deleteUserService(user.id);
      if(response && response.errCode == 0) {
        await this.getAllUsersFromReact();
      } else {
        alert(response.errMessage);
      }
    } catch(err) {
      console.log(err);
    }
  }

  handleEditUser = async (user) => {
    console.log('check edit user', user);
    this.setState({
      isOpenModalEditUser: true,
      userEdit: user
    })
  }

  doEditUser = async (user) => {
    try {
      let res = await editUserService(user);
      if(res && res.errCode == 0) {
        this.getAllUsersFromReact();
      } else {
        alert(res.errMessage);
      }

    } catch(err) {
      console.log(err);
    }
  }

  /** Life cycle
   *  Run component
   * 1. Run construct -> init state
   * 2. Did mount
   * 3. Render
   * @returns
   */

  render() {
    console.log("check render", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser 
            isOpen={this.state.isOpenModalUser}
            toggleFromParent = {this.toggleUserModal}
            createNewUser ={this.createNewUser}
        ></ModalUser>
          { this.state.isOpenModalEditUser &&
          <ModalEditUser 
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent = {this.toggleEditUserModal}
            currentUser = {this.state.userEdit}
            editUser ={this.doEditUser}
        ></ModalEditUser> }
        <div className="title text-center">Manage users</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3"
            onClick={this.handleAddNewUser}
          >
            <i className="fas fa-plus px-1"></i>Add new users
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Address</th>
              <th>phoneNumber</th>
              <th>Action</th>
            </tr>
            </thead>

            <tbody>
              
              
              {arrUsers &&
                arrUsers.map((user, index) => {
                  return (
                    <tr>
                      <td>{user.email}</td>
                      <td>{user.name}</td>
                      <td>{user.address}</td>
                      <td>{user.phoneNumber}</td>
                      <td>
                        <button className="btn-edit" onClick ={() => this.handleEditUser(user)}>
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button className="btn-delete" onClick = {() => {this.handleDeleteUser(user)}}>
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
