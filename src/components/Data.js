function Data(props) {
    return (
        <tr>
            <td>{props.day}</td>
            <td>{props.data.c}</td>
            <td>{props.data.o}</td>
            <td>{props.data.h}</td>
            <td>{props.data.l}</td>
            <td>{props.data.v}</td>
        </tr>
    );
}

export default Data;