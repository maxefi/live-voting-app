export default socket => store => next => action => {
    console.log('in middleware', action, store.getState().toJS());
    if(action.meta && action.meta.remote) {
        socket.emit('action', action, store.getState().toJS());
    }
    return next(action);
}
