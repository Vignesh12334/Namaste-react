
/*
1. create div and into another and its child 


*/




const divPractice = React.createElement('div', {id:'parent'}, [
    React.createElement('div', {id:'child'}, [
        React.createElement('h1', {}, "im h1"),
        React.createElement('h2', {}, "im h2")
    ]),
    React.createElement('div', {id:'child1'}, [
        React.createElement('h1', {}, "im h1"),
        React.createElement('h2', {}, "im h2")
    ])
 ])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(divPractice)