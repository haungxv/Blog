import Vuex from 'vuex';

import sign from './modules/sign'
import manager from './modules/manager'


export default () => {
    return new Vuex.Store({
        modules: {
            sign,
            manager,
        }
    })
};
