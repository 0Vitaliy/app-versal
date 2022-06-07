const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const SERVER_TIME = 'server_time';

export function getTokenLocalStorage(): string {
  const token = localStorage.getItem(ACCESS_TOKEN) || '';

  return token;
}

export function setAccessTokenStorage(token: any): void {
  localStorage.setItem(ACCESS_TOKEN, token);
}

export function setServerTimeStorage(time: any): void {
  localStorage.setItem(SERVER_TIME, time);
}

export function setRefreshTokenStorage(token: string): void {
  localStorage.setItem(REFRESH_TOKEN, token);
}

export function removeAccessTokenFromLocalStorage(): void {
  localStorage.removeItem(ACCESS_TOKEN);
}

export function removeRefresTokenFromLocalStorage(): void {
  localStorage.removeItem(REFRESH_TOKEN);
}

export function clearLocalStorage(): void {
  localStorage.clear();
}
