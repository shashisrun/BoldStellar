import store from './ReduxServices/ReduxStore';
class Permissions{
  hasPermission(checkWith){
    const state = store.getState();
    const permissions = state.user.user.permissions;
    permissions.forEach(permission => {
      if(permission.name == checkWith){
        console.log('You Passed');
        return true;
      }
    });
    return false;
    
  }
  
}
export default new Permissions;
  