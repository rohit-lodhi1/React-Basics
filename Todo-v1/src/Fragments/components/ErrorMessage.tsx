
export const ErrorMessage = ({ show }: { show: any }) => {

    let emptyMessage = show ? <h3>No Content Available</h3> : null;
    return emptyMessage
}