function Mybtn () {
    return <button style={{'border': '3px solid black', 'border-radius': '5px', 'padding': '10px', 'background-color': 'lightgreen'}}>Click Me</button>
}

export default Mybtn;


function fullname () {
    return 'Uzair';
   }


export const Hello = () => {
    return <h1>my name is {fullname()} </h1>
};



export function Random() {
    let Rnd = Math.random() * 100;
    return <h1 style={{ backgroundColor: 'blue' }}>My Employee Code is {Math.round(Rnd)}</h1>
};




