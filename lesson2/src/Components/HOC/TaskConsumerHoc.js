import React, { Component } from "react";
import { Consumer } from '../../';

const TaskConsumerHoc = (MyComponent) => {
    return class MyConsumer extends Component {
        state = {
  
        }
        render() {
           

            return (
                <Consumer>
                    {(store) => <>
                 {   console.log('strore', store)}
                        <MyComponent  {...store}  {...this.props} />
                    </>}
                </Consumer>
            );
        }
    }
}

export default TaskConsumerHoc;