

import React, { Component } from 'react';
import css from './ModalBackDrop.module.css';




const WrappedComponent = (MyComponent) => {
    return class ModalBackDrop extends Component {
        state = {
            isOpen: false
        }
        componentDidMount() {
            window.addEventListener("keydown", this.closeModal)
        }
        componentWillUnmount() {
            window.removeEventListener("keydown", this.closeModal)
        }


        closeModal = (e) => {
            if (e.code === "Escape") {
                this.toggleModal();
            }
        }


        toggleModal = (e) => {
            if (!e.target.closest('[data-modal="modal"]')) {
                this.setState(prevState => ({
                    isOpen: !prevState.isOpen
                }))
            } else return
        }


        render() {
            const { isOpen } = this.state;
            return (
                <>
                    <button onClick={this.toggleModal}>Create new task</button>

                    {isOpen &&
                        <div className={css.parent} onClick={this.toggleModal} >
                            <div className={css.modal} data-modal="modal">
                                <MyComponent {...this.props} toggleModal={this.toggleModal} />
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