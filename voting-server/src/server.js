import Server from 'socket.io';

export default () => {
    const io = new Server().attach(8090);
}
