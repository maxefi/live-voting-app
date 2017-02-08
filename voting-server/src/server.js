import Server from 'socket.io';

export default (store) => {
    const io = new Server().attach(8090);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );

    io.on('connection', (socket) => {
        socket.emit('state', state.getState().toJS())
    })
}
