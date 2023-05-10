import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import ModalParagraph from './ModalParagraph';
import ModalEditParagraph from './ModalEditParagraph';
import { emitter } from '../../utils/emitter';
import { getAllParagraphs, createNewParagraphService, deleteParagraphService, editParagraphService} from '../../services/otherService';
import './ProductManage.scss'
class ProductManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          arrParagraphs: [],
          isOpenModalParagraph: false,
          isOpenModalEditParagraph: false,
          paragraphEdit: {}
        };
      }
    
      
    
      async componentDidMount() {
        console.log('xinchao')
        this.getAllParagraphsFromReact();
      }

      componentDidUpdate = () => {
        console.log('update')
      }
    
      getAllParagraphsFromReact = async () => {
        console.log('heelo')
        let response = await getAllParagraphs("ALL");
        console.log(response);
        if (response && response.errCode === 0) {
          this.setState({
            arrParagraphs: response.paragraphs,
          });
        }
      }
    
      handleAddNewParagraph = () => {
        this.setState({
          isOpenModalParagraph: true,
        });
      };
    
      toggleParagraphModal = () => {
        this.setState({
          isOpenModalParagraph: !this.state.isOpenModalParagraph,
        });
      };
    
      toggleEditParagraphModal = () => {
        this.setState({
          isOpenModalEditParagraph: !this.state.isOpenModalEditParagraph
        });
      };
    
      createNewParagraph = async (data) => {
        try{
          let response = await createNewParagraphService(data);
          if(response && response.errCode != 0) {
            alert(response.errMessage);
          } else {
            await this.getAllParagraphsFromReact();
            emitter.emit('EVENT_CLEAR_MODAL_DATA');
          }
        } catch(err) {
          console.log(err);
        }
      }
    
      handleDeleteParagraph = async (user) => {
        console.log('delete user', user);
        if(!window.confirm('Are you sure you want to delete this Paragraph?')) {
          return;
        }
        try {
          let response = await deleteParagraphService(user.id);
          if(response && response.errCode == 0) {
            await this.getAllParagraphsFromReact();
          } else {
            alert(response.errMessage);
          }
        } catch(err) {
          console.log(err);
        }
      }
    
      handleEditParagraph = async (paragraph) => {
        console.log('check edit paragraph', paragraph);
        this.setState({
          isOpenModalEditParagraph: true,
          paragraphEdit: paragraph
        })
      }
    
      doParagraphEdit = async (paragraph) => {
        try {
          console.log(paragraph)
          let res = await editParagraphService(paragraph);
          if(res && res.errCode == 0) {
            this.getAllParagraphsFromReact();
          } else {
            alert(res.errMessage);
          }
    
        } catch(err) {
          console.log(err);
        }
      }



    render() {

        let arrParagraphs = this.state.arrParagraphs;
        return (
          <div className="paragraphs-container">
            <ModalParagraph 
                isOpen={this.state.isOpenModalParagraph}
                toggleFromParent = {this.toggleParagraphModal}
                createNewParagraph ={this.createNewParagraph}
            ></ModalParagraph>
              { this.state.isOpenModalEditParagraph &&
              <ModalEditParagraph 
                isOpen={this.state.isOpenModalEditParagraph}
                toggleFromParent = {this.toggleEditParagraphModal}
                currentParagraph = {this.state.paragraphEdit}
                editParagraph ={this.doParagraphEdit}
            ></ModalEditParagraph> }
            <div className="title text-center">Manage paragraphs</div>
            <div className="mx-1">
              <button
                className="btn btn-primary px-3"
                onClick={this.handleAddNewParagraph}
              >
                <i className="fas fa-plus px-1"></i>Add new Paragraphs
              </button>
            </div>
            <div className="paragraphs-table mt-3 mx-1">
              <table id="paragraphs">
                <thead>
                <tr>
                  <th>STT</th>
                  <th>Content</th>
                  <th>Difficulty</th>
                  <th>Language</th>
                  <th>Is Test</th>
                  <th>Action</th>
                </tr>
                </thead>
    
                <tbody>
                  
                  
                  {arrParagraphs &&
                    arrParagraphs.map((paragraph, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>    
                          <td>{paragraph.content}</td>
                          <td>{paragraph.difficulty}</td>
                          <td>{paragraph.language}</td>
                          <td>{paragraph.is_test ? 'true' : 'false'}</td>
                          <td>
                            <button className="btn-edit" onClick ={() => this.handleEditParagraph(paragraph)}>
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button className="btn-delete" onClick = {() => {this.handleDeleteParagraph(paragraph)}}>
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

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductManage);
