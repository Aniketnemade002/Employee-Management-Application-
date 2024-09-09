import { CanActivateFn, Router } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {

  const _JWT= localStorage.getItem('JWT');
  const router = new Router();

 
  if (!_JWT || _JWT === '') {
  
    router.navigate(['/login']);
    return false;
  }
  return true;
};
