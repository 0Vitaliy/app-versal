import WrapperRequest from './wrapper.api';

export type FederatedType = { provider: string; accessToken: string };

class UserApi extends WrapperRequest {
  loginUser = (data: { username: string; password: string }) => {
    return this.post('auth/login', {
      data,
    });
  };

  signUpUser = (data: { email: string; password: string; name: string }) => {
    return this.post('auth/sign-up', data);
  };
}

const UserApiProvider = new UserApi();
export default UserApiProvider;
