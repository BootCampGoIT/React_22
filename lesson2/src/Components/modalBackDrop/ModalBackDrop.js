

import React, { Component } from 'react';
import css from './ModalBackDrop.module.css';

const WrappedComponent = (MyComponent) => {
    return class ModalBackDrop extends Component {
        state = {
            isOpen: false,
            count: []
        }





        closeModal = () => {
            this.setState(prevState => ({
                isOpen: !prevState.isOpen
            }));
        }

        toggleModal = (e) => {
            ((e.key === "Escape") || !e.target.closest('[data-modal="modal"]')) && this.closeModal()
        }


        render() {
            const { isOpen } = this.state;
            return (
                <>
                    <button onClick={this.toggleModal}>Create new task</button>
                    {isOpen &&
                        <div className={css.parent} onClick={this.toggleModal} >
                            <div className={css.modal} data-modal="modal">
                                <MyComponent {...this.props} closeModal={this.closeModal} toggleModal={this.toggleModal} />
                            </div>
                        </div>}
                </>
            );
        }
    }

}


export default WrappedComponent;



// const HOC = ({Component}) => {
//     return class AsyncComponent extends Component {
//       state = {
//         component: null,
//       };


//       render() {
//         const { component: LoadedComponent } = this.state;

//         return LoadedComponent ? (

//       }
//     };
//   };