function Stepper(props) {
    return (<button className="step"
        onClick={
            props.onClick
    }>Hint
    </button>)
}

function Solver(props) {
    return (<button className="solve"
        onClick={
            props.onClick
    }>Init
    </button>)
}


        step = () => {
            const old = this.state.squares;
            const improved = improveSolution(old);
            this.setState({squares: improved});

        };

        initialize = () => {
            this.setState({
                squares: this.state.squares.map(el => el ? el : [...Array(10).keys()].splice(1)),
                initialized: true
            });
        }