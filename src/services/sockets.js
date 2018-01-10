import config from '../config';
import io from 'socket.io-client';

const socket = io.connect(config.remote.host);

export default socket;
