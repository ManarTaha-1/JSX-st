export default function TapButton({children, onSelect}){
    function handelClick () {
        console.log("Hello world");
    }
    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}