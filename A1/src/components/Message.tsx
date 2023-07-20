import "../css/Message.css"

type MessageProps={
    name:string;
}
function Message(props:MessageProps){

    //let name="W";

    return <h1 className="s1">Hello from {props.name}</h1>;
}

export default Message;