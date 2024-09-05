import DataService from "./index";

// https://branch3.nextbase.3df.work/basic/web/index.php?r=user/login

class AuthService extends DataService {
  BASE_URL = "https://branch3.nextbase.3df.work";

  private getUrl(path: string) {
    return `${this.BASE_URL}${path}`;
  }

  public async userLogin(data) {
    return await this.post(this.getUrl("/basic/web/index.php?r=user/login"), data);
  }

  // public async refreshToken(data) {
  //   return await this.post(this.getUrl("api/admin/token/refresh"), data);
  // }

  // public async revokeToken(data) {
  //   return await this.post(this.getUrl("api/admin/token/revoke"), data);
  // }
}

export default AuthService;
