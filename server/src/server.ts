import { http } from './http';
import './websocket/client';

//app.listen(3333, () => console.log('Server running on port 3333'));
http.listen(3333, () => console.log('Server running on port 3333'));
