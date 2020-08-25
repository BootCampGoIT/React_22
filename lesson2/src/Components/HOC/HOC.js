import React, { Component } from 'react'

const HOC = (MyComponent) => {
    return class NewTaskMaker extends Component {
        state = {
            isVisible: false
        }

        onHandleClick = () => {
            this.setState(prevState => ({
                isVisible: !prevState.isVisible
            }))

        }

        render() {
            const { isVisible } = this.state;
            return (
                <>
                    {isVisible && <MyComponent {...this.props} />}
                    <button type="button" onClick={this.onHandleClick}>Add new task</button>
                </>
            )
        }
    };
}

export default HOC;


// const HOC = ({ children }) => {
//     return (
//         <>
//             {console.log('children', children)}
//             {children}
//         </>
//     );
// }

// export default HOC;




