'use strict';
import User from 'backend/models/User';

export default function(epilogue) {
    epilogue.resource({
        model: User,
        endpoints: ['/users', '/users/:id'],
    });
}