const Notification = ({notice}) => {
    if(notice === null){
        return null
    }

    const color = {
        change: 'orange',
        delete: 'red',
        add: 'green'
    }
    const style = {
        color: color[notice.type],
        background: 'lightgray',
        'fontSize': '20px',
        'borderStyle': 'solid',
        'borderRadius': '5px',
        'padding': '10px',
        'marginBottom': '10px' 
    }

    return (
        <div 
            className={`notice ${notice.type}`}
            style={style}>
            {notice.content}
        </div>
    )
}

export default Notification