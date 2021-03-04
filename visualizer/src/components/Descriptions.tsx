const Descriptions = (props: any) => {
    switch(props.type) {
        case 'bubble': 
            return (
                <div>
                    bubble info
                </div>
            )
        case 'insertion': 
            return (
                <div>
                    insert info
                </div>
            )
        case 'merge': 
            return (
                <div>
                    merge info
                </div>
            )
        case 'quick': 
            return (
                <div>
                    quick info
                </div>
            )
        default:
            return (
                <div> suppper</div>
            )
    }
}

export default Descriptions