import React, { Component } from 'react'

const withLog = WrappedComponent => {
    return class WithLog extends Component {
        componentDidMount() {
            console.group(`WithLog ouput ${WrappedComponent.name}`);
            console.log('props_____________', this.props)
            console.groupEnd();
        }

        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
};
export default withLog;



// function get(n) {
//     console.log(n)
//     return function (i) {
//         console.log(i)
//         return function () {
//             console.log(n)
//         }
//     }
// }
// const data = get(5)(10);
// data()