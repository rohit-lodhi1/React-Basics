function EmptyMessage({ show }: { show: any }) {

    return show && <>  <p>No Todo</p></>
}

export default EmptyMessage;